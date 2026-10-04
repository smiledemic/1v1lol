/*
 * signup.js - adds a "Sign up" entry next to the login that lives inside the Unity UI.
 * Accounts here are Google accounts (Firebase popup, then POST /api/auth/google), so "sign up" and "log in" run the same
 * flow and the backend creates the player on the first sign-in. This file only adds a way to start it from the page.
 * Open it any time with  window.showSignup()
 */
(function () {
  'use strict';
  function signedIn() {
    try {
      if (localStorage.getItem('1v1_session_token')) return true;
      var u = window.firebase && firebase.auth && firebase.auth().currentUser;
      return !!(u && !u.isAnonymous);
    } catch (e) { return false; }
  }
  var css = '#su-btn{position:fixed;left:12px;bottom:12px;z-index:99998;font:600 14px system-ui,sans-serif;padding:9px 16px;border:0;border-radius:20px;background:#1e88ff;color:#fff;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.4)}' +
    '#su-btn:hover{background:#3d9bff}#su-btn:focus-visible,#su-box button:focus-visible{outline:2px solid #fff;outline-offset:2px}' +
    '#su-ov{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.65);display:none;align-items:center;justify-content:center;font-family:system-ui,sans-serif}' +
    '#su-box{background:#141a2b;color:#fff;border-radius:12px;padding:24px;width:min(360px,90vw);box-shadow:0 8px 32px rgba(0,0,0,.6)}' +
    '#su-box h2{margin:0 0 8px;font-size:20px}#su-box p{margin:0 0 16px;color:#b8c1d6;font-size:14px;line-height:1.4}' +
    '#su-box button{display:block;width:100%;margin:8px 0 0;padding:11px;border-radius:8px;border:1px solid #3a4560;background:#222b44;color:#fff;font:600 14px system-ui,sans-serif;cursor:pointer}' +
    '#su-box button.p{background:#1e88ff;border-color:#1e88ff}#su-box button:disabled{opacity:.6;cursor:default}#su-st{min-height:18px;margin-top:10px;font-size:13px;color:#ffb4a8}#su-st.ok{color:#7be495}';
  function el(tag, props, kids) { var e = document.createElement(tag); for (var k in props) e[k] = props[k]; (kids || []).forEach(function (c) { e.appendChild(c); }); return e; }
  var st, ov, btn, buttons = [];
  function start() {
    if (typeof window.firebaseLogin !== 'function') { st.textContent = 'Sign-in is not ready yet, try again in a moment.'; return; }
    buttons.forEach(function (b) { b.disabled = true; });
    st.className = ''; st.textContent = 'Opening Google...';
    window.firebaseLogin('google', function (res) {
      st.className = 'ok'; st.textContent = 'Signed in as ' + (res && res.DisplayName || 'player') + '. Reloading...';
      setTimeout(function () { location.reload(); }, 900);   // Unity restarts and picks up the signed-in account
    }, function (err) {
      var msg = ''; try { msg = JSON.parse(err).code || ''; } catch (e) { msg = String(err || ''); }
      st.textContent = msg === 'auth/popup-closed-by-user' ? 'Sign-in cancelled.' : msg === 'auth/unauthorized-domain' ? 'This site\'s domain is not authorised in Firebase (Authentication > Settings > Authorized domains).' : 'Sign-in failed' + (msg ? ' (' + msg + ')' : '') + '.';
      buttons.forEach(function (b) { b.disabled = false; });
    });
  }
  function build() {
    document.head.appendChild(el('style', { textContent: css }));
    var up = el('button', { className: 'p', textContent: 'Sign up with Google', onclick: start });
    var inn = el('button', { textContent: 'I already have an account: log in', onclick: start });
    var close = el('button', { textContent: 'Close', onclick: function () { ov.style.display = 'none'; } });
    buttons = [up, inn];
    st = el('div', { id: 'su-st', role: 'status' });
    ov = el('div', { id: 'su-ov', role: 'dialog' }, [el('div', { id: 'su-box' }, [el('h2', { textContent: 'Create your account' }),
      el('p', { textContent: 'Sign up to save your skins, coins and progress. Your account is created the first time you sign in.' }), up, inn, close, st])]);
    ov.addEventListener('click', function (e) { if (e.target === ov) ov.style.display = 'none'; });
    btn = el('button', { id: 'su-btn', textContent: 'Sign up', onclick: window.showSignup });
    document.body.appendChild(ov); document.body.appendChild(btn);
    setInterval(function () { btn.style.display = signedIn() ? 'none' : ''; }, 2500);
    btn.style.display = signedIn() ? 'none' : '';
  }
  window.showSignup = function () { if (!ov) return; st.textContent = ''; buttons.forEach(function (b) { b.disabled = false; }); ov.style.display = 'flex'; };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
