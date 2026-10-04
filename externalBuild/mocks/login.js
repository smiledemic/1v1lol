// Readable version of the original obfuscated file: string table decoded, constants folded, dead decoder removed. Behaviour unchanged.
var tempErrorCreds,
  tempProviderName,
  _cachedTokenResult = null;
function retrieveIdToken(_0x1cebf7, _0x76cbca) {
  if (_cachedTokenResult) {
    console.log('%c[TOKEN] returning cached token for ' + _cachedTokenResult.DisplayName, 'color: #0f0');
    if (_0x1cebf7 !== undefined) _0x1cebf7(_cachedTokenResult);
    return;
  }
  var _0x635a5c = firebase.auth().currentUser;
  if (_0x635a5c === null) {
    var _0x1a0fc2 = {
      AccessToken: 'fake-local-token',
      Token: 'fake-local-token',
      DisplayName: localStorage.getItem('1v1_nickname') || 'Player'
    };
    _cachedTokenResult = _0x1a0fc2;
    if (_0x1cebf7 !== undefined) _0x1cebf7(_0x1a0fc2);
    return;
  }
  _0x635a5c.getIdToken().then(function (_0x5207a2) {
    var _0x3912f2 = {
      AccessToken: _0x5207a2,
      Token: _0x5207a2,
      DisplayName: _0x635a5c.displayName
    };
    _cachedTokenResult = _0x3912f2, console.log('%c[TOKEN] token cached for ' + _0x3912f2.DisplayName, 'color: #0f0');
    if (_0x1cebf7 !== undefined) _0x1cebf7(_0x3912f2);
  })['catch'](function (_0xc0462c) {
    console.log('%c[TOKEN] getIdToken failed, using fallback: ' + _0xc0462c.message, 'color: #f80');
    var _0x2539b7 = {
      AccessToken: 'fallback-token-' + _0x635a5c.uid,
      Token: 'fallback-token-' + _0x635a5c.uid,
      DisplayName: _0x635a5c.displayName || 'Player'
    };
    _cachedTokenResult = _0x2539b7;
    if (_0x1cebf7 !== undefined) _0x1cebf7(_0x2539b7);
  });
}
function anonymousLogin(_0xddef2, _0x16c0ff) {
  var _0x2a822f = null;
  try {
    var _0x5e69a0 = firebase.auth().currentUser.displayName;
    if (_0x5e69a0 && _0x5e69a0 !== 'Player') _0x2a822f = _0x5e69a0;
  } catch (_0x14958c) {}
  if (!_0x2a822f) {
    _0x2a822f = localStorage.getItem('1v1_nickname');
    if (_0x2a822f === 'null' || _0x2a822f === 'undefined') _0x2a822f = null;
  }
  console.log('%c[Login] nickname = "' + _0x2a822f + '"', 'color: #f0f; font-weight: bold');
  var _0x3bb731 = 'anon-' + (localStorage.getItem('1v1_anon_id') || function () {
      var _0x344864 = 'anon-' + Math.random().toString(36).slice(2, 10) + '-' + Date.now();
      return localStorage.setItem('1v1_anon_id', _0x344864), _0x344864;
    }()),
    _0x173d78 = {
      AccessToken: _0x3bb731,
      Token: _0x3bb731,
      DisplayName: _0x2a822f || 'guest',
      Email: '',
      PhotoUrl: '',
      Uid: _0x3bb731,
      ProviderId: 'anonymous',
      IsAnonymous: true
    };
  _cachedTokenResult = _0x173d78, console.log('Sending result to unity:'), console.log(_0x173d78), _0xddef2 !== undefined && _0xddef2(_0x173d78);
}
function firebaseLogin(_0x2ffd79, _0x2f5796, _0x160b7d) {
  if (_0x2ffd79 === 'anonymous') {
    anonymousLogin(_0x2f5796, _0x160b7d);
    return;
  }
  var _0x15b4ac = firebase.auth().currentUser;
  if (_0x15b4ac && !_0x15b4ac.isAnonymous) {
    console.log('%c[Auth] already signed in as ' + _0x15b4ac.displayName + ' (uid=' + _0x15b4ac.uid + ') — skipping popup', 'color: #0f0; font-weight: bold');
    var _0x1c9530 = _0x15b4ac.providerData && _0x15b4ac.providerData[0] || {},
      _0x21a9a3 = {
        AccessToken: '',
        Token: '',
        DisplayName: _0x15b4ac.displayName || 'Player',
        Email: _0x15b4ac.email || '',
        PhotoUrl: _0x15b4ac.photoURL || '',
        Uid: _0x15b4ac.uid || '',
        ProviderId: _0x1c9530.providerId || 'google.com',
        IsAnonymous: false
      },
      _0x493c58 = _0x15b4ac.getIdToken().then(function (_0x408c00) {
        if (!_0x408c00 || _0x408c00.split('.').length !== 3) return;
        return new Promise(function (_0x5b7e2a) {
          var _0x48fbf3 = new XMLHttpRequest();
          _0x48fbf3.open('POST', '/api/auth/google', true), _0x48fbf3.setRequestHeader('Content-Type', 'application/json'), _0x48fbf3.onload = function () {
            try {
              var _0x16ae40 = JSON.parse(_0x48fbf3.responseText);
              if (_0x16ae40.token) localStorage.setItem('1v1_session_token', _0x16ae40.token);
              if (_0x15b4ac.uid) localStorage.setItem('1v1_google_id', _0x15b4ac.uid);
              console.log('[Auth] Skip-popup: re-issued session token, player #' + (_0x16ae40.player ? _0x16ae40.player.id : '?') + ' nick="' + (_0x16ae40.player ? _0x16ae40.player.display_name : '?') + '"');
            } catch (_0x13861e) {}
            _0x5b7e2a();
          }, _0x48fbf3.onerror = function () {
            _0x5b7e2a();
          }, _0x48fbf3.send(JSON.stringify({
            id_token: _0x408c00,
            display_name: _0x15b4ac.displayName || 'Player'
          }));
        });
      })['catch'](function (_0x32ac8c) {
        console.log('[Auth] Skip-popup: getIdToken failed, cannot recreate session', _0x32ac8c);
      });
    _0x15b4ac.getIdToken().then(function (_0x5cdc7e) {
      _0x21a9a3.Token = _0x5cdc7e, _0x21a9a3.AccessToken = _0x5cdc7e, _cachedTokenResult = _0x21a9a3, localStorage.removeItem('1v1_anon_id');
      try {
        localStorage.setItem('1v1_auth_provider', 'google.com');
      } catch (_0x35d3f7) {}
      console.log('%c[TOKEN] Google token cached (skip-popup) for ' + _0x21a9a3.DisplayName, 'color: #0f0; font-weight: bold'), _0x493c58.then(function () {
        if (_0x2f5796) _0x2f5796(_0x21a9a3);
      });
    })['catch'](function () {
      _0x21a9a3.Token = 'cached-' + _0x15b4ac.uid, _0x21a9a3.AccessToken = _0x21a9a3.Token, _cachedTokenResult = _0x21a9a3, _0x493c58.then(function () {
        if (_0x2f5796) _0x2f5796(_0x21a9a3);
      });
    });
    return;
  }
  var _0x5abf06 = getProvider(_0x2ffd79),
    _0x4564a0 = firebase.auth().currentUser,
    _0x397cd4 = !!(_0x4564a0 && _0x4564a0.isAnonymous);
  try {
    if (localStorage.getItem('1v1_install_id')) _0x397cd4 = false;
  } catch (_0x4ff520) {}
  console.log('[Auth] Google sign-in: ' + (_0x397cd4 ? 'UPGRADE of the anonymous account (uid preserved)' : 'plain sign-in'));
  var _0xea29e7 = _0x397cd4 ? _0x4564a0.linkWithPopup(_0x5abf06)['catch'](function (_0x4c2dd5) {
    var _0x3c30d8 = _0x4c2dd5 && _0x4c2dd5.code || '';
    if (_0x3c30d8 === 'auth/credential-already-in-use' || _0x3c30d8 === 'auth/email-already-in-use' || _0x3c30d8 === 'auth/account-exists-with-different-credential') {
      console.log('[Auth] account already exists (' + _0x3c30d8 + ') -> signing into it');
      if (_0x4c2dd5 && _0x4c2dd5.credential) return firebase.auth().signInWithCredential(_0x4c2dd5.credential);
      return firebase.auth().signInWithPopup(_0x5abf06);
    }
    if (_0x3c30d8 === 'auth/provider-already-linked') return _0x4564a0.reload().then(function () {
      return {
        user: firebase.auth().currentUser
      };
    });
    throw _0x4c2dd5;
  }) : firebase.auth().signInWithPopup(_0x5abf06);
  _0xea29e7.then(function (_0x175b17) {
    console.log('%c[Auth] Google login SUCCESS: ' + _0x175b17.user.displayName + ' uid=' + _0x175b17.user.uid, 'color: #0f0; font-weight: bold');
    _0x175b17.user.displayName && localStorage.setItem('1v1_nickname', _0x175b17.user.displayName);
    localStorage.removeItem('1v1_anon_id');
    var _0x582953 = _0x175b17.user.providerData && _0x175b17.user.providerData[0] || {},
      _0x586cc5 = {
        AccessToken: '',
        Token: '',
        DisplayName: _0x175b17.user.displayName || 'Player',
        Email: _0x175b17.user.email || '',
        PhotoUrl: _0x175b17.user.photoURL || '',
        Uid: _0x175b17.user.uid || '',
        ProviderId: _0x582953.providerId || 'google.com',
        IsAnonymous: false
      },
      _0x2dcfe8 = _0x175b17.user.getIdToken()['catch'](function () {
        return 'cached-' + _0x175b17.user.uid;
      }),
      _0x27f45d = _0x2dcfe8.then(function (_0x28ac96) {
        if (!_0x28ac96 || _0x28ac96.split('.').length !== 3) return;
        return new Promise(function (_0x573fa8) {
          var _0x1a3771 = new XMLHttpRequest();
          _0x1a3771.open('POST', '/api/auth/google', true), _0x1a3771.setRequestHeader('Content-Type', 'application/json'), _0x1a3771.onload = function () {
            try {
              var _0x10f340 = JSON.parse(_0x1a3771.responseText);
              if (_0x10f340.token) localStorage.setItem('1v1_session_token', _0x10f340.token);
              if (_0x10f340.player && _0x10f340.player.google_id) localStorage.setItem('1v1_google_id', _0x10f340.player.google_id);
              console.log('[Auth] Logged in: player #' + (_0x10f340.player ? _0x10f340.player.id : '?') + ' nick="' + (_0x10f340.player ? _0x10f340.player.display_name : '?') + '" coins=' + (_0x10f340.player ? _0x10f340.player.coins : '?') + ' xp=' + (_0x10f340.player ? _0x10f340.player.xp : '?'));
            } catch (_0x5b1edc) {}
            _0x573fa8();
          }, _0x1a3771.onerror = function () {
            _0x573fa8();
          }, _0x1a3771.send(JSON.stringify({
            id_token: _0x28ac96,
            display_name: _0x175b17.user.displayName || 'Player'
          }));
        });
      });
    Promise.all([_0x27f45d, _0x2dcfe8]).then(function (_0x3c07a2) {
      var _0x4647f2 = _0x3c07a2[1];
      _0x586cc5.Token = _0x4647f2, _0x586cc5.AccessToken = _0x4647f2, _cachedTokenResult = _0x586cc5, console.log('%c[TOKEN] Google token cached for ' + _0x586cc5.DisplayName, 'color: #0f0; font-weight: bold'), _0x2f5796 ? _0x2f5796(_0x586cc5) : (console.log('%c[Auth] No callback from WASM — reloading page to apply Google login', 'color: #ff0; font-weight: bold'), location.reload());
    });
  })['catch'](function (_0x48cb80) {
    console.log('%c[Auth] Google login failed: ' + _0x48cb80.message, 'color: #f00');
    var _0x1c1219 = _0x48cb80.code || 'auth/popup-blocked',
      _0x173821 = JSON.stringify({
        code: _0x1c1219,
        message: _0x48cb80.message || ''
      });
    if (_0x160b7d) _0x160b7d(_0x173821);
  });
}
function firebaseLogout() {
  try {
    var _0x4435a6 = localStorage.getItem('1v1_session_token');
    _0x4435a6 && fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + _0x4435a6
      }
    });
  } catch (_0x226e03) {}
  try {
    localStorage.removeItem('1v1_session_token');
  } catch (_0x16320f) {}
  try {
    localStorage.removeItem('1v1_nickname');
  } catch (_0x5781fa) {}
  try {
    localStorage.removeItem('1v1_google_id');
  } catch (_0x5ac201) {}
  try {
    var _0x32238f = 'anon-' + Math.random().toString(36).slice(2, 10) + '-' + Date.now();
    localStorage.setItem('1v1_anon_id', _0x32238f);
  } catch (_0x431bd1) {}
  if (typeof window._clearAuthState === 'function') try {
    window._clearAuthState();
  } catch (_0x492c35) {}
  console.log('%c[Logout] state cleared (DB + localStorage + memory + anon-id seeded)', 'color: #f80; font-weight: bold'), firebase.auth().signOut()['catch'](function (_0x5e0ed1) {
    console.log(_0x5e0ed1);
  });
}
function getCurrentUserDisplayName() {
  var _0x493289 = firebase.auth().currentUser,
    _0x7ece15 = '';
  return _0x493289 && (_0x7ece15 = _0x493289.displayName), _0x7ece15;
}
function getProvider(_0x4fb939) {
  if (_0x4fb939 && _0x4fb939.indexOf('facebook') != -1) return new firebase.auth.FacebookAuthProvider();else return new firebase.auth.GoogleAuthProvider();
}
function setModalContent(_0x190747, _0x531b53) {
  content = document.getElementById(_0x190747), content && (content.innerHTML = _0x531b53);
}
function continueLogin() {
  hideModal('generalModal');
  var _0x37aebc = getProvider(tempProviderName);
  firebase.auth().signInWithPopup(_0x37aebc).then(function (_0x3b0d33) {
    if (!tempErrorCreds) return;
    _0x3b0d33.user.linkAndRetrieveDataWithCredential(tempErrorCreds).then(function (_0x10cb53) {});
  });
}
function showModal(_0x55c777) {
  modal = document.getElementById(_0x55c777);
  if (modal) modal.style.display = 'block';
}
function hideModal(_0x3a6c49) {
  modal = document.getElementById(_0x3a6c49);
  if (modal) modal.style.display = 'none';
}