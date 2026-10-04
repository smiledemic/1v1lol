#!/usr/bin/env node
/*
 * checkRefs.js - 1v1lol build reference checker
 * ---------------------------------------------------------------------------
 * Tries every file / API / websocket path the build references against BOTH
 * the main site and the CDN, then reports which base actually serves it.
 *
 * Needs Node 18+ (built-in fetch). Websocket test (--ws) needs Node 22+.
 * Runs in Node, not the browser, so CORS does not get in the way.
 *
 * Usage:
 *   node checkRefs.js                         check everything on both bases
 *   node checkRefs.js --only core,api         only these groups
 *   node checkRefs.js --ws                    also try the websocket endpoints
 *   node checkRefs.js --post                  also probe API routes that 404 on GET with an
 *                                             empty-body POST (no credentials, no uid). Many
 *                                             routes are POST-only and 404 on GET.
 *   node checkRefs.js --extra /a.png,/b.json  add your own paths
 *   node checkRefs.js https://x.com/file.bin  check full URLs too
 *   node checkRefs.js --main https://1v1lolreloaded.com --cdn https://cdn.1v1lolreloaded.com
 *   node checkRefs.js --out myreport          output prefix (default: referenceCheck)
 *   node checkRefs.js --timeout 20000 --concurrency 4 --no-color
 *
 * Writes: <out>.json (full results), <out>.txt (summary),
 *         referenceMap.json (path -> first base that served it, ready to use as a prefix map)
 *
 * Only sends GET / HEAD requests and never any credentials.
 */
'use strict';

const fs = require('fs');

// ------------------------------------------------------------------ options
const args = process.argv.slice(2);
const opt = (name, def) => {
  const i = args.indexOf('--' + name);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : def;
};
const flag = (n) => args.includes('--' + n);
const valueFlags = new Set(['main', 'cdn', 'only', 'extra', 'out', 'timeout', 'concurrency']);
const fullUrls = args.filter((a, i) => /^https?:\/\//i.test(a) && !(i > 0 && valueFlags.has(args[i - 1].replace(/^--/, ''))));

const MAIN = opt('main', 'https://1v1lolreloaded.com').replace(/\/+$/, '');
const CDN = opt('cdn', 'https://cdn.1v1lolreloaded.com').replace(/\/+$/, '');
const TIMEOUT = Number(opt('timeout', 15000));
const CONC = Math.max(1, Number(opt('concurrency', 6)));
const OUT = opt('out', 'referenceCheck');
const ONLY = opt('only', '') ? opt('only', '').split(',').map((s) => s.trim()) : null;
const EXTRA = opt('extra', '') ? opt('extra', '').split(',').map((s) => s.trim()).filter(Boolean) : [];
const COLOR = !flag('no-color') && process.stdout.isTTY;
const BASES = [['main', MAIN], ['cdn', CDN]];

// -------------------------------------------------------------- reference list
// g = group, p = path, e = expected kind (binary|font|image|json|any), m = request method
const REFS = [
  // Unity core (boot.js points these at the CDN)
  { g: 'core', p: '/Build/WebGL.data.c0de4610.unityweb', e: 'binary' },
  { g: 'core', p: '/Build/WebGL.framework.js.c0de4610.unityweb', e: 'binary' },
  { g: 'core', p: '/Build/WebGL.wasm.c0de4610.unityweb', e: 'binary' },
  { g: 'core', p: '/Build/WebGL.loader.js', e: 'binary' },

  // Static files referenced by index.html
  { g: 'static', p: '/fonts/dimbo.ttf', e: 'font' },
  { g: 'static', p: '/loader-ch2-bg.jpg', e: 'image' },
  { g: 'static', p: '/logo.png', e: 'image' },

  // Addressables / StreamingAssets (exact names unknown, these are guesses)
  { g: 'streaming', p: '/StreamingAssets/catalog.json', e: 'json' },
  { g: 'streaming', p: '/StreamingAssets/settings.json', e: 'json' },
  { g: 'streaming', p: '/StreamingAssets/aa/catalog.json', e: 'json' },
  { g: 'streaming', p: '/StreamingAssets/aa/settings.json', e: 'json' },
  { g: 'streaming', p: '/WebGL/', e: 'any' },

  // Image folders built from location.origin in firebase-config.js
  { g: 'assets', p: '/assets/bp/en/', e: 'any' },
  { g: 'assets', p: '/assets/weaponskins/en/', e: 'any' },
  { g: 'assets', p: '/assets/archive/', e: 'any' },
  { g: 'assets', p: '/assets/lootboxes/en/', e: 'any' },
  // real file names found in firebase-config.js (BP) and guesses from its offer banners (archive)
  { g: 'assets', p: '/assets/bp/en/Season9_Banner_01.png', e: 'image' },
  { g: 'assets', p: '/assets/bp/en/Season9_Web_ActivatePopup_01.png', e: 'image' },
  { g: 'assets', p: '/assets/archive/Offer_10.png', e: 'image' },
  { g: 'assets', p: '/assets/archive/Offer_12.png', e: 'image' },

  // HTTP game API (server-mock.js, query strings removed; GET only, so
  // 400/401/403/405 usually means "route exists but needs auth / POST")
  { g: 'api', p: '/api/v446/time', e: 'json' },
  { g: 'api', p: '/api/match-rules', e: 'json' },
  { g: 'api', p: '/api/v446/ch_defs', e: 'json' },
  { g: 'api', p: '/api/v446/guest_login', e: 'json' },
  { g: 'api', p: '/api/v446/login', e: 'json' },
  { g: 'api', p: '/api/v446/player', e: 'json' },
  { g: 'api', p: '/api/v446/migrate_guest', e: 'json' },
  { g: 'api', p: '/api/firebase/v446_player/login', e: 'json' },
  { g: 'api', p: '/api/auth/google', e: 'json' },
  { g: 'api', p: '/api/auth/logout', e: 'json' },
  { g: 'api', p: '/api/v446/nickname', e: 'json' },
  { g: 'api', p: '/api/v446/guest_mmr', e: 'json' },
  { g: 'api', p: '/api/v446/guest_nickname', e: 'json' },
  { g: 'api', p: '/api/v446/claim_spins_guest', e: 'json' },
  { g: 'api', p: '/api/v446/claim_spins', e: 'json' },
  { g: 'api', p: '/api/v446/settings', e: 'json' },
  { g: 'api', p: '/api/v446/settings_group', e: 'json' },
  { g: 'api', p: '/api/v446/report', e: 'json' },
  { g: 'api', p: '/api/v446/update_mmr', e: 'json' },
  { g: 'api', p: '/api/v446/account_deletion', e: 'json' },
  { g: 'api', p: '/api/v446/ads_pref', e: 'json' },
  { g: 'api', p: '/api/v446/agegate_guardian', e: 'json' },
  { g: 'api', p: '/api/v446/agegate_popup', e: 'json' },
  { g: 'api', p: '/api/v446/leaderboard_claims', e: 'json' },
  { g: 'api', p: '/api/v446/equip_skin', e: 'json' },
  { g: 'api', p: '/api/v446/equip_weapon_skins', e: 'json' },
  { g: 'api', p: '/api/v446/equip_emotes', e: 'json' },
  { g: 'api', p: '/api/v446/unlock_lootbox', e: 'json' },
  { g: 'api', p: '/api/v446/open_gacha', e: 'json' },
  { g: 'api', p: '/api/v446/coin_purchase', e: 'json' },
  { g: 'api', p: '/api/v446/multi_purchase', e: 'json' },
  { g: 'api', p: '/api/v446/daily_spin_data', e: 'json' },
  { g: 'api', p: '/api/v446/daily_spin_consume', e: 'json' },
  { g: 'api', p: '/api/v446/dailyreward_claim', e: 'json' },
  { g: 'api', p: '/api/v446/influencer_claimed', e: 'json' },
  { g: 'api', p: '/api/v446/bp_refresh', e: 'json' },
  { g: 'api', p: '/api/v446/bp_boost', e: 'json' },
  { g: 'api', p: '/api/v446/bp_buypremium', e: 'json' },
  { g: 'api', p: '/api/v446/bp_tierup', e: 'json' },
  { g: 'api', p: '/api/v446/bp_engage', e: 'json' },
  { g: 'api', p: '/api/v446/ch_user', e: 'json' },
  { g: 'api', p: '/api/v446/ch_update', e: 'json' },
  { g: 'api', p: '/api/v446/ch_claim', e: 'json' },
  { g: 'api', p: '/api/v446/ugs/auth', e: 'json' },
  { g: 'api', p: '/api/v446/ugs/tickets', e: 'json' },
  { g: 'api', p: '/api/v446/ugs/tickets/status', e: 'json' },
  { g: 'api', p: '/api/v446_friends', e: 'json' },
  { g: 'api', p: '/api/v446_recordmatch', e: 'json' },
  { g: 'api', p: '/api/v446_claimroadreward', e: 'json' },
  { g: 'api', p: '/api/v446_trophyclaim', e: 'json' },
  { g: 'api', p: '/api/v446_bp_claim', e: 'json' },
];

// Websocket targets (only used with --ws)
const SKIP_POST = /account_deletion/; // never poke destructive routes
const WS_PATHS = ['/ws/ns', '/ws/master', '/ws/game'];

// ------------------------------------------------------------------- helpers
const c = (code, s) => (COLOR ? `\x1b[${code}m${s}\x1b[0m` : s);
const green = (s) => c(32, s), red = (s) => c(31, s), yellow = (s) => c(33, s), dim = (s) => c(90, s), bold = (s) => c(1, s);

function classify(r, expect) {
  if (r.error) return 'ERROR';
  const html = /text\/html/i.test(r.ct || '');
  if (r.status >= 200 && r.status < 300) {
    if (html && ['binary', 'font', 'image', 'json'].includes(expect)) return 'HTML-FALLBACK';
    return 'OK';
  }
  if ([301, 302, 303, 307, 308].includes(r.status)) return 'REDIRECT';
  if ([400, 405, 415, 422].includes(r.status)) return 'EXISTS(route)';
  if ([401, 403].includes(r.status)) return 'EXISTS?(auth/blocked)';
  if ([404, 410].includes(r.status)) return 'MISSING';
  if (r.status >= 500) return 'SERVER-ERR';
  return 'OTHER';
}
const isUp = (v) => ['OK', 'REDIRECT', 'EXISTS(route)'].includes(v);
const maybe = (v) => /^EXISTS\?/.test(v);

async function request(url, method, readBody, body) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), TIMEOUT);
  const t0 = Date.now();
  try {
    const headers = { 'user-agent': 'Mozilla/5.0 (compatible; 1v1lol-refcheck)', accept: '*/*' };
    if (method === 'GET' && !readBody) headers.range = 'bytes=0-0';
    if (method === 'POST') headers['content-type'] = 'application/json';
    const res = await fetch(url, { method, headers, body, redirect: 'manual', signal: ctl.signal });
    let snippet = '';
    if (method === 'GET' || method === 'POST') {
      if (readBody) {
        try { snippet = (await res.text()).slice(0, 160).replace(/\s+/g, ' '); } catch (_) {}
      } else {
        try { await res.body?.cancel(); } catch (_) {}
      }
    }
    return {
      status: res.status,
      ct: res.headers.get('content-type') || '',
      len: res.headers.get('content-length') || (res.headers.get('content-range') || '').split('/')[1] || '',
      location: res.headers.get('location') || '',
      ms: Date.now() - t0,
      snippet,
    };
  } catch (e) {
    return { error: e.name === 'AbortError' ? 'timeout' : (e.cause && e.cause.code) || e.message, ms: Date.now() - t0 };
  } finally {
    clearTimeout(timer);
  }
}

async function probe(url, expect) {
  const api = expect === 'json';
  let r = await request(url, api ? 'GET' : 'HEAD', api);
  // some servers refuse HEAD, so retry with a 1-byte ranged GET
  if (!api && (r.error || [403, 405, 501].includes(r.status))) {
    const g = await request(url, 'GET', false);
    if (!g.error) r = g;
  }
  return r;
}

async function pool(items, worker, n) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) { const k = i++; out[k] = await worker(items[k], k); }
  }));
  return out;
}

function wsProbe(url, ms = 8000) {
  return new Promise((resolve) => {
    const WS = globalThis.WebSocket;
    if (!WS) return resolve({ verdict: 'SKIPPED', note: 'needs Node 22+ (global WebSocket)' });
    let done = false;
    const finish = (verdict, note) => { if (!done) { done = true; clearTimeout(t); try { ws.close(); } catch (_) {} resolve({ verdict, note }); } };
    let ws;
    const t = setTimeout(() => finish('TIMEOUT', `no response in ${ms}ms`), ms);
    try {
      ws = new WS(url);
      ws.onopen = () => finish('OPEN', 'handshake accepted');
      ws.onerror = () => finish('FAILED', 'handshake rejected / unreachable (may just need uid params)');
      ws.onclose = (e) => finish('CLOSED', `code ${e.code}`);
    } catch (e) { finish('ERROR', e.message); }
  });
}

const pad = (s, n) => (String(s).length >= n ? String(s) : String(s) + ' '.repeat(n - String(s).length));
const colorVerdict = (v) => (isUp(v) ? green(v) : maybe(v) ? yellow(v) : v === 'MISSING' || v === 'HTML-FALLBACK' || v === 'ERROR' ? red(v) : yellow(v));

// ----------------------------------------------------------------------- main
(async () => {
  let refs = REFS.filter((r) => !ONLY || ONLY.includes(r.g));
  for (const p of EXTRA) refs.push({ g: 'extra', p: p.startsWith('/') ? p : '/' + p, e: 'any' });

  console.log(bold('1v1lol reference check'));
  console.log(`  main : ${MAIN}\n  cdn  : ${CDN}\n  post : ${flag('post') ? 'ON (empty-body POST retry for API routes that 404 on GET)' : 'off'}\n  paths: ${refs.length}${fullUrls.length ? ` + ${fullUrls.length} full URL(s)` : ''}\n`);

  // control probe: how does each base answer a path that cannot exist?
  const control = {};
  for (const [name, base] of BASES) {
    const r = await probe(`${base}/__refcheck_nonexistent_${Date.now().toString(36)}__.bin`, 'binary');
    control[name] = r;
    const catchAll = !r.error && r.status >= 200 && r.status < 300;
    console.log(dim(`  control ${pad(name, 5)} -> ${r.error ? 'ERROR ' + r.error : r.status + ' ' + (r.ct || '-')}${catchAll ? '  (catch-all: 200s for unknown paths, so trust content-type)' : ''}`));
  }
  console.log('');

  const jobs = [];
  for (const ref of refs) for (const [name, base] of BASES) jobs.push({ ref, name, url: base + ref.p });
  for (const u of fullUrls) jobs.push({ ref: { g: 'url', p: u, e: 'any' }, name: 'direct', url: u });

  let done = 0;
  const results = await pool(jobs, async (job) => {
    let r = await probe(job.url, job.ref.e);
    let verdict = classify(r, job.ref.e);
    // many API routes are POST-only and 404 on GET, so optionally retry with an empty, credential-free POST
    if (flag('post') && job.ref.g === 'api' && job.name !== 'direct' && (verdict === 'MISSING' || verdict === 'HTML-FALLBACK') && !SKIP_POST.test(job.ref.p)) {
      const pr = await request(job.url, 'POST', true, '{}');
      const pv = classify(pr, 'json');
      if (!pr.error && pv !== 'MISSING' && pv !== 'HTML-FALLBACK') { r = { ...pr, method: 'POST' }; verdict = pv; }
      else if (!pr.error) { r.postTried = true; r.postStatus = pr.status; r.postSnippet = pr.snippet; if (pr.status === 404 && /json/i.test(pr.ct || '') && !/json/i.test((control[job.name] || {}).ct || '')) { r = { ...pr, method: 'POST' }; verdict = 'EXISTS?(json 404)'; } }
    }
    // an app-level JSON 404 (e.g. {"error":"player not found"}) differs from the server's own plain 404, so the route probably exists
    if (verdict === 'MISSING' && job.ref.g === 'api' && /json/i.test(r.ct || '') && !/json/i.test((control[job.name] || {}).ct || '')) verdict = 'EXISTS?(json 404)';
    process.stderr.write(COLOR ? `\r  checking ${++done}/${jobs.length}   ` : '');
    return { group: job.ref.g, path: job.ref.p, base: job.name, url: job.url, expect: job.ref.e, verdict, ...r };
  }, CONC);
  if (COLOR) process.stderr.write('\r' + ' '.repeat(40) + '\r');

  // ------------------------------------------------------------- table
  const lines = [];
  const byPath = new Map();
  for (const r of results) {
    const k = r.group === 'url' ? r.path : r.path;
    if (!byPath.has(k)) byPath.set(k, { group: r.group, expect: r.expect, per: {} });
    byPath.get(k).per[r.base] = r;
  }

  const W = Math.min(58, Math.max(...[...byPath.keys()].map((k) => k.length), 10) + 2);
  console.log(bold(pad('PATH', W) + pad('MAIN', 32) + pad('CDN', 32) + 'USE'));
  lines.push(pad('PATH', W) + pad('MAIN', 32) + pad('CDN', 32) + 'USE');
  let lastGroup = '';
  const map = {};
  for (const [p, info] of byPath) {
    if (info.group !== lastGroup) { console.log(dim(`-- ${info.group}`)); lines.push(`-- ${info.group}`); lastGroup = info.group; }
    const cell = (b) => {
      const r = info.per[b];
      if (!r) return { plain: '-', col: dim('-') };
      const tag = r.method === 'POST' ? ' [POST]' : r.postTried ? ' [GET+POST]' : '';
      const txt = `${r.verdict}${r.status ? ' ' + r.status : ''}${tag}`;
      return { plain: txt, col: colorVerdict(r.verdict) + (r.status ? ' ' + r.status : '') + tag };
    };
    const m = cell('main'), d = cell('cdn'), x = cell('direct');
    const first = ['main', 'cdn', 'direct'].find((b) => info.per[b] && isUp(info.per[b].verdict));
    const soft = ['main', 'cdn'].find((b) => info.per[b] && maybe(info.per[b].verdict));
    const use = first ? first : soft ? soft + '?' : 'none';
    if (first) map[p] = info.per[first].url;
    const shownP = p.length > W - 2 ? p.slice(0, W - 5) + '...' : p;
    const row1 = pad(shownP, W) + pad(info.per.direct ? x.col : m.col, 32 + (info.per.direct ? x.col.length - x.plain.length : m.col.length - m.plain.length)) + pad(d.col, 32 + d.col.length - d.plain.length) + (first ? green(use) : soft ? yellow(use) : red(use));
    console.log(row1);
    lines.push(pad(shownP, W) + pad(info.per.direct ? x.plain : m.plain, 32) + pad(d.plain, 32) + use);
  }

  // --------------------------------------------------------------- websockets
  const wsRes = [];
  if (flag('ws')) {
    console.log('\n' + bold('Websockets'));
    lines.push('', 'Websockets');
    const host = new URL(MAIN).host;
    const targets = [];
    for (const p of WS_PATHS) {
      targets.push(`wss://${host}${p}`);
      targets.push(`wss://eu.${host.replace(/^www\./, '')}${p}`);
    }
    for (const u of targets) {
      const r = await wsProbe(u);
      wsRes.push({ url: u, ...r });
      const line = `${pad(u, W + 12)}${r.verdict}  ${r.note || ''}`;
      console.log(r.verdict === 'OPEN' ? green(line) : yellow(line));
      lines.push(line);
    }
  }

  // ------------------------------------------------------------------ summary
  const tally = { main: 0, cdn: 0, both: 0, none: 0, soft: 0 };
  for (const [p, info] of byPath) {
    if (info.per.direct) { if (isUp(info.per.direct.verdict)) tally.both++; else if (maybe(info.per.direct.verdict)) tally.soft++; else tally.none++; continue; }
    const m = info.per.main && isUp(info.per.main.verdict), d = info.per.cdn && isUp(info.per.cdn.verdict);
    if (m && d) tally.both++; else if (m) tally.main++; else if (d) tally.cdn++;
    else if ((info.per.main && maybe(info.per.main.verdict)) || (info.per.cdn && maybe(info.per.cdn.verdict))) tally.soft++;
    else tally.none++;
  }
  const missing = [...byPath].filter(([, i]) => !Object.values(i.per).some((r) => isUp(r.verdict) || maybe(r.verdict))).map(([p]) => p);
  const summary = [
    '',
    `served by main only : ${tally.main}`,
    `served by cdn only  : ${tally.cdn}`,
    `served by both      : ${tally.both}`,
    `exists? (403/401)   : ${tally.soft}   (auth or bot protection, check in a real browser)`,
    `not found anywhere  : ${tally.none}`,
  ];
  console.log(summary.map((s, i) => (i === 5 && tally.none ? red(s) : s)).join('\n'));
  lines.push(...summary);
  if (missing.length) {
    console.log('\n' + red('Still missing on both bases:') + '\n  ' + missing.join('\n  '));
    lines.push('', 'Still missing on both bases:', ...missing.map((m) => '  ' + m));
  }

  fs.writeFileSync(`${OUT}.json`, JSON.stringify({ when: new Date().toISOString(), main: MAIN, cdn: CDN, control, results, websockets: wsRes }, null, 2));
  fs.writeFileSync(`${OUT}.txt`, lines.join('\n') + '\n');
  fs.writeFileSync('referenceMap.json', JSON.stringify(map, null, 2));
  console.log(dim(`\nwrote ${OUT}.json, ${OUT}.txt, referenceMap.json`));
  process.exit(missing.length ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
