/*
 * prefix.js - routes backend, asset and websocket traffic. Loaded BEFORE mocks/server-mock.js, which captures
 * fetch / XMLHttpRequest.open / WebSocket when it loads and wraps them, so this file sees the final URLs.
 *
 *   1. LOCAL files (list below; empty in externalBuild) are served from this build, next to index.html. This
 *      includes bundles the Addressables catalog requests from cdn.1v1lolreloaded.com/WebGL/.
 *   2. Everything else the live site owns goes to https://1v1lolreloaded.com:
 *        /api/*  /assets/*  /fonts/*  /StreamingAssets/*      (any page origin: localhost, GitHub Pages, ...)
 *        websockets  ->  wss://1v1lolreloaded.com/ws/{ns,master,game}   (eu.1v1lolreloaded.com for EU)
 *      Websockets are ALWAYS wss:// (never ws://), including when the page itself is https.
 *      server-mock builds these socket URLs three ways and all are handled:
 *        ws://localhost:19090/<photon host>/<path>   (page on localhost; the relay is not part of this build)
 *        wss://<this page's host>/ws/<kind>          (page on any other host, e.g. user.github.io)
 *        wss://eu.<domain>/ws/<kind>                 (EU region)
 *
 * Overrides: ?api=https://other.host in the page URL, or localStorage '1v1_api_origin', or window.__API_ORIGIN.
 *            Use the value 'off' to disable remote routing (local files still work).
 * Does nothing remote when the page is served from the API origin itself.
 */
(function () {
  'use strict';
  var LOCAL = [];
  var DEFAULT_API = 'https://1v1lolreloaded.com', CDN_HOST = 'cdn.1v1lolreloaded.com';
  var API = DEFAULT_API;
  try { var o = localStorage.getItem('1v1_api_origin'); if (o) API = o; } catch (e) {}
  try { var q = new URLSearchParams(location.search).get('api'); if (q) API = q; } catch (e) {}
  if (window.__API_ORIGIN) API = window.__API_ORIGIN;
  API = API.replace(/\/+$/, '');
  var remote = !(API === 'off' || API === location.origin);
  var APIHOST = API.replace(/^https?:\/\//, '').toLowerCase();
  if (remote) window.__API_ORIGIN = API;

  var PAGE = new URL('.', location.href), PAGEPATH = PAGE.pathname;
  var LOCALSET = {}; LOCAL.forEach(function (p) { LOCALSET[p] = 1; });
  var REMOTE_PATHS = /^\/(?:api|assets|fonts|ws)(?:\/|$)/;

  // path relative to the folder that holds index.html
  function rel(pathname) {
    try { pathname = decodeURIComponent(pathname); } catch (e) {}
    return pathname.indexOf(PAGEPATH) === 0 ? pathname.slice(PAGEPATH.length) : pathname.replace(/^\//, '');
  }

  function mapHttp(u) {
    try {
      var a = new URL(String(u), location.href);
      var sameOrigin = a.origin === location.origin;
      if (sameOrigin || a.hostname === CDN_HOST) {
        var r = rel(a.pathname);
        if (LOCALSET[r]) return PAGE.href + r.split('/').map(encodeURIComponent).join('/') + a.search;
      }
      if (!remote || !sameOrigin) return u;
      if (REMOTE_PATHS.test(a.pathname)) return API + a.pathname + a.search + a.hash;
      var i = a.pathname.indexOf('/StreamingAssets/');
      if (i !== -1) return API + a.pathname.slice(i) + a.search + a.hash;
    } catch (e) {}
    return u;
  }

  // ---- fetch (string, URL or Request)
  var nativeFetch = window.fetch;
  if (nativeFetch) {
    window.fetch = function (input, init) {
      try {
        if (typeof input === 'string' || input instanceof URL) {
          input = mapHttp(input);
        } else if (input && typeof input.url === 'string') {
          var m = mapHttp(input.url);
          if (m !== input.url) input = new Request(m, input);
        }
      } catch (e) {}
      return nativeFetch.call(this, input, init);
    };
  }

  // ---- XMLHttpRequest (UnityWebRequest and login.js)
  var nativeOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    var a = arguments;
    try { a[1] = mapHttp(url); } catch (e) {}
    return nativeOpen.apply(this, a);
  };

  // ---- WebSocket
  var LOCALHOST = /^(?:localhost|127\.0\.0\.1|0\.0\.0\.0)(?::\d+)?$/i;
  function mapWs(s) {
    var m = s.match(/^(wss?):\/\/([^\/?#]+)([^?#]*)(\?[^#]*)?/i);
    if (!m) return s;
    var host = m[2].toLowerCase(), path = m[3] || '/', query = m[4] || '', kind = null, eu = false;
    if (/:19090$/.test(host) && LOCALHOST.test(host)) {            // ws://localhost:19090/<photon host>/<path>
      var p = path.toLowerCase();
      kind = (p.indexOf('/ns') !== -1 || /^\/ns[.:]/.test(p) || /[.\/]ns\./.test(p)) ? 'ns' : p.indexOf('/game') !== -1 ? 'game' : 'master';
      eu = String(window.__photonRegion || '').toLowerCase() === 'eu';
    } else {
      var k = path.match(/^\/ws\/(ns|master|game)\/?$/i);          // wss://<any host>/ws/<kind>
      if (k && host !== APIHOST && host !== 'eu.' + APIHOST) {
        kind = k[1].toLowerCase();
        eu = host.indexOf('eu.') === 0 || String(window.__photonRegion || '').toLowerCase() === 'eu';
      }
    }
    if (kind) return 'wss://' + (eu ? 'eu.' + APIHOST : APIHOST) + '/ws/' + kind + query;
    // an https page can never open ws:// (mixed content), so upgrade any other plain ws:// URL
    if (location.protocol === 'https:' && m[1].toLowerCase() === 'ws' && !LOCALHOST.test(host)) return 'wss://' + s.slice(m[1].length + 3);
    return s;
  }
  var NativeWS = window.WebSocket;
  if (NativeWS && remote) {
    var PatchedWS = function (url, protocols) {
      try { url = mapWs(String(url)); } catch (e) {}
      return protocols === undefined ? new NativeWS(url) : new NativeWS(url, protocols);
    };
    PatchedWS.prototype = NativeWS.prototype;
    ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function (k) { PatchedWS[k] = NativeWS[k]; });
    window.WebSocket = PatchedWS;
  }
  // ---- ?selftest : on-page check of the live backend from THIS page's origin (CORS + websocket handshake)
  if (/[?&]selftest\b/.test(location.search)) window.addEventListener('load', function () {
    var box = document.createElement('pre');
    box.style.cssText = 'position:fixed;right:8px;top:8px;z-index:2147483647;max-width:min(560px,92vw);margin:0;padding:10px 12px;background:#0b1020;color:#e8eaee;font:12px/1.5 ui-monospace,Consolas,monospace;border:1px solid #3a4560;border-radius:8px;white-space:pre-wrap';
    document.body.appendChild(box);
    function line(s) { box.textContent += s + '\n'; }
    line('self-test  page ' + location.origin + '  api ' + (remote ? API : 'off / same origin') + '  protocol ' + location.protocol);
    window.fetch(location.origin + '/api/v446/time').then(function (r) { line('HTTP   ' + (r.ok ? 'OK    ' : 'FAIL  ') + r.status + '  /api/v446/time'); },
      function (e) { line('HTTP   FAIL  ' + e.message + '  (blocked by CORS, or offline)'); });
    ['ns', 'master', 'game'].forEach(function (k) {
      var done = false, ws;
      function end(msg) { if (!done) { done = true; line('WS     ' + msg + '  /ws/' + k); try { ws.close(); } catch (e) {} } }
      try {
        ws = new window.WebSocket('wss://' + location.host + '/ws/' + k + '?bv=4.46');
        line('       -> ' + ws.url);
        ws.onopen = function () { end('OPEN  '); };
        ws.onerror = function () { end('FAIL  (refused: Origin not allowed, or offline)'); };
        setTimeout(function () { end('TIMEOUT'); }, 8000);
      } catch (e) { end('FAIL  ' + e.message); }
    });
  });
})();
