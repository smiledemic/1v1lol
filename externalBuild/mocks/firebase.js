// Readable version of the original obfuscated file: string table decoded, constants folded, dead decoder removed. Behaviour unchanged.
function initializeFireBase() {
  if (firebase.apps && firebase.apps.length > 0) {
    console.log('[firebase] initializeFireBase: already initialized, skip');
    return;
  }
  var _0x4e3381 = {
    apiKey: 'AIzaSyCxePRI16HLC_ozp6l09Gp_Jx8ngLw05Rg',
    authDomain: 'test1v1lol-reloaded.firebaseapp.com',
    projectId: 'test1v1lol-reloaded',
    storageBucket: 'test1v1lol-reloaded.firebasestorage.app',
    messagingSenderId: '596126598431',
    appId: '1:596126598431:web:394c154d842b2d384d1c2a'
  };
  firebase.initializeApp(_0x4e3381);
  try {
    if (typeof firebase.remoteConfig === 'function') {
      var _0x5083c8 = firebase.remoteConfig();
      if (typeof window !== 'undefined' && typeof conf === 'object' && conf) try {
        _0x5083c8.defaultConfig = conf;
      } catch (_0x5794ac) {}
      var _0xdd35ca = function (_0x16692a) {
        try {
          console.log('%c[firebase/RC-call] ' + _0x16692a + ' @' + Math.round(window.performance && performance.now ? performance.now() : 0) + 'ms', 'color:#e91e63;font-weight:bold');
        } catch (_0x196e05) {}
      };
      _0x5083c8.fetch = function () {
        return _0xdd35ca('fetch()'), Promise.resolve();
      }, _0x5083c8.activate = function () {
        return _0xdd35ca('activate()'), Promise.resolve(true);
      }, _0x5083c8.fetchAndActivate = function () {
        return _0xdd35ca('fetchAndActivate()'), Promise.resolve(true);
      }, _0x5083c8.ensureInitialized = function () {
        return _0xdd35ca('ensureInitialized()'), Promise.resolve();
      }, _0x5083c8.getValue = function (_0x10af47) {
        var _0x491475 = typeof conf === 'object' && conf && conf[_0x10af47] != null ? String(conf[_0x10af47]) : '';
        return {
          asString: function () {
            return _0x491475;
          },
          asNumber: function () {
            return Number(_0x491475) || 0;
          },
          asBoolean: function () {
            return _0x491475 === 'true' || _0x491475 === '1';
          },
          getSource: function () {
            return _0x491475 ? 'remote' : 'default';
          }
        };
      }, _0x5083c8.getString = function (_0x1131b1) {
        return _0x5083c8.getValue(_0x1131b1).asString();
      }, _0x5083c8.getNumber = function (_0x396c49) {
        return _0x5083c8.getValue(_0x396c49).asNumber();
      }, _0x5083c8.getBoolean = function (_0x2ed7ef) {
        return _0x5083c8.getValue(_0x2ed7ef).asBoolean();
      }, _0x5083c8.getAll = function () {
        var _0x2888ae = {};
        return typeof conf === 'object' && conf && Object.keys(conf).forEach(function (_0x100128) {
          _0x2888ae[_0x100128] = _0x5083c8.getValue(_0x100128);
        }), _0x2888ae;
      }, _0x5083c8.setDefaults = function (_0x2ed7f7) {
        try {
          _0x5083c8.defaultConfig = _0x2ed7f7;
        } catch (_0x184e82) {}
        return Promise.resolve();
      }, console.log('[firebase] RemoteConfig SDK methods overridden — fetch/activate resolve sync from conf');
    }
  } catch (_0x12900e) {
    console.warn('[firebase] RC override failed:', _0x12900e);
  }
}