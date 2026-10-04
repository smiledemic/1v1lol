/*
 * prefix.js - sends the build's backend traffic to the live 1v1lolreloaded.com servers.
 *
 * MUST load before mocks/server-mock.js. server-mock captures fetch, XMLHttpRequest.open and
 * WebSocket when it loads, and wraps them. Installed first, this file sits under those wrappers,
 * so it sees the final URLs they produce (location.origin + "/api/...") and redirects them.
 *
 * Verified live (checkRefs-v2.js):
 *   https://1v1lolreloaded.com      /api/*  /assets/*  /StreamingAssets/aa/*  /fonts/*  wss /ws/{ns,master,game}
 *   https://eu.1v1lolreloaded.com   wss /ws/{ns,master,game}   (EU region)
 *   https://cdn.1v1lolreloaded.com  /Build/*.unityweb          (already absolute in js/boot.js)
 *
 * Override for testing:  localStorage.setItem('1v1_api_origin', 'https://other.host')
 * Turn off:              localStorage.setItem('1v1_api_origin', 'off')
 * Does nothing when the page itself is served from the API origin.
 */
(function () {
  'use strict';
  var DEFAULT_API = 'https://1v1lolreloaded.com';
  var API = DEFAULT_API;
  try { var o = localStorage.getItem('1v1_api_origin'); if (o) API = o; } catch (e) {}
  if (window.__API_ORIGIN) API = window.__API_ORIGIN;
  if (API === 'off' || API.replace(/\/+$/, '') === location.origin) return;
  API = API.replace(/\/+$/, '');
  var APIHOST = API.replace(/^https?:\/\//, '');
  window.__API_ORIGIN = API;

  // Same-origin (localhost) paths that live on the API server.
  var PATHS = /^\/(?:api|assets|fonts|ws)(?:\/|$)/;

  function mapHttp(u) {
    try {
      var a = new URL(String(u), location.href);
      if (a.origin !== location.origin) return u;                 // other hosts untouched
      if (PATHS.test(a.pathname)) return API + a.pathname + a.search + a.hash;
      var i = a.pathname.indexOf('/StreamingAssets/');            // page-relative StreamingAssets
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

  // ---- XMLHttpRequest (UnityWebRequest and login.js use this)
  var nativeOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    var a = arguments;
    try { a[1] = mapHttp(url); } catch (e) {}
    return nativeOpen.apply(this, a);
  };

  // ---- WebSocket. server-mock turns Photon sockets into ws://localhost:19090/<host>/<path>?...
  // (a relay that is not part of this build). Send them to wss://<api>/ws/<ns|master|game>?...
  var NativeWS = window.WebSocket;
  if (NativeWS) {
    var PatchedWS = function (url, protocols) {
      try {
        var s = String(url);
        if (/^wss?:\/\/(?:localhost|127\.0\.0\.1|0\.0\.0\.0):19090\//i.test(s)) {
          var rest = s.replace(/^wss?:\/\/[^/]+\//i, '');
          var q = rest.indexOf('?');
          var query = q === -1 ? '' : rest.slice(q);
          var path = (q === -1 ? rest : rest.slice(0, q)).toLowerCase();
          var kind = (path.indexOf('/ns') !== -1 || /(^|[/.])ns\./.test(path) || /^ns[.:]/.test(path)) ? 'ns'
                   : path.indexOf('/game') !== -1 ? 'game' : 'master';
          var region = String(window.__photonRegion || '').toLowerCase();
          var host = region === 'eu' ? 'eu.' + APIHOST : APIHOST;
          url = 'wss://' + host + '/ws/' + kind + query;
        }
      } catch (e) {}
      return protocols === undefined ? new NativeWS(url) : new NativeWS(url, protocols);
    };
    PatchedWS.prototype = NativeWS.prototype;
    ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function (k) { PatchedWS[k] = NativeWS[k]; });
    window.WebSocket = PatchedWS;
  }
})();
