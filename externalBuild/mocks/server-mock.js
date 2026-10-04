// Readable version of the original obfuscated file: string table decoded, constants folded, dead decoder removed. Behaviour unchanged except for the daily-spin / no-ad edits.
(function () {
  'use strict';

  console.log('[v446/mock] Initializing offline server emulator...');
  try {
    var _0x5ccb7a = navigator.getGamepads ? navigator.getGamepads.bind(navigator) : null;
    if (_0x5ccb7a) {
      var _0x1e0438 = false,
        _0xf05835 = function () {
          try {
            return localStorage.getItem('1v1_dualsense_fix') !== 'off';
          } catch (_0x56491a) {
            return true;
          }
        }(),
        _0x5ca9ac = 'Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 09cc)',
        _0x49f818 = /Vendor:\s*054c\s+Product:\s*0(?:ce6|df2)/i,
        _0x3a7247 = false,
        _0x5da95a = function (_0x10c8fc) {
          return _0xf05835 && _0x10c8fc && _0x10c8fc.mapping === 'standard' && _0x10c8fc.id && _0x49f818.test(_0x10c8fc.id);
        },
        _0x20b25f = function (_0x487fbc) {
          return new Proxy(_0x487fbc, {
            get: function (_0x1ac91b, _0xf5b8a5) {
              return _0xf5b8a5 === 'id' ? _0x5ca9ac : _0x1ac91b[_0xf5b8a5];
            }
          });
        };
      navigator.getGamepads = function () {
        var _0x275ee6 = _0x5ccb7a();
        if (!_0x275ee6) return _0x275ee6;
        var _0x203d19 = [];
        for (var _0x537329 = 0; _0x537329 < _0x275ee6.length; _0x537329++) {
          var _0x799858 = _0x275ee6[_0x537329];
          if (_0x799858 && _0x799858.axes && _0x799858.axes.length === 0) {
            if (!_0x1e0438) {
              _0x1e0438 = true;
              try {
                console.log('[gamepad-filter] phantom (0-axis HID — mic/headset) hidden from game: ' + (_0x799858.id || ''));
              } catch (_0x3c7e93) {}
            }
            _0x203d19.push(null);
            continue;
          }
          if (_0x799858 && _0x799858.id && !_0x799858.id.match(/Vendor: [0-9a-f]{4} Product: [0-9a-f]{4}/i)) {
            var _0x27597b = typeof _0x799858.vendor === 'number' ? _0x799858.vendor : typeof _0x799858.vendorId === 'number' ? _0x799858.vendorId : null,
              _0x1c9651 = typeof _0x799858.product === 'number' ? _0x799858.product : typeof _0x799858.productId === 'number' ? _0x799858.productId : null;
            _0x27597b != null && _0x1c9651 != null && Object.defineProperty(_0x799858, 'id', {
              value: _0x799858.id + ' (Vendor: ' + _0x27597b.toString(16).padStart(4, '0') + ' Product: ' + _0x1c9651.toString(16).padStart(4, '0') + ')',
              configurable: true
            });
          }
          if (_0x5da95a(_0x799858)) {
            if (!_0x3a7247) {
              _0x3a7247 = true;
              try {
                console.log('[dualsense-fix] DualSense (standard) → DS4 map: id rewritten');
              } catch (_0x16f093) {}
            }
            _0x203d19.push(_0x20b25f(_0x799858));
            continue;
          }
          _0x203d19.push(_0x799858);
        }
        return _0x203d19;
      };
    }
  } catch (_0xd912e) {
    console.warn('[v446/mock] gamepad shim failed:', _0xd912e);
  }
  try {
    document.addEventListener('pointerlockchange', function () {
      window._pointerLockActive = !!document.pointerLockElement;
    }), document.addEventListener('click', function (_0x1d4946) {
      if (!window._pointerLockActive && window._gameIsRunning) {
        var _0x497ada = document.getElementById('unity-canvas');
        if (_0x497ada && _0x497ada.requestPointerLock) try {
          _0x497ada.requestPointerLock();
        } catch (_0x307229) {}
      }
    });
  } catch (_0x19ab9a) {}
  if (typeof window.lockedOccured === 'undefined') window.lockedOccured = false;
  function _0x267036(_0x37fb87) {
    if (!_0x37fb87 || typeof _0x37fb87 !== 'string') return false;
    if (_0x37fb87.startsWith('blob:') || _0x37fb87.startsWith('data:')) return false;
    if (!/^https?:\/\//i.test(_0x37fb87)) return false;
    if (_0x37fb87.startsWith(location.origin)) return false;
    if (_0x37fb87.indexOf('cdn.1v1lolreloaded.com') !== -1) return false;
    if (/\.(unityweb|bundle)(\?|$)/i.test(_0x37fb87)) return false;
    if (_0x37fb87.indexOf('gstatic.com') !== -1) return false;
    if (_0x37fb87.indexOf('googleapis.com') !== -1) return false;
    if (_0x37fb87.indexOf('firebaseapp.com') !== -1) return false;
    if (_0x37fb87.indexOf('firebaseio.com') !== -1) return false;
    if (_0x37fb87.indexOf('firebase.com') !== -1) return false;
    if (_0x37fb87.indexOf('accounts.google.com') !== -1) return false;
    return true;
  }
  function _0x2d9e6b() {
    try {
      var _0x255d98 = window.firebase && firebase.auth && firebase.auth().currentUser || null;
      if (_0x255d98) return _0x255d98.isAnonymous ? 'anonymous' : 'google.com';
      return localStorage.getItem('1v1_auth_provider') || '';
    } catch (_0x58423c) {
      return '';
    }
  }
  function _0x5ed5cf() {
    return _0x2d9e6b() === 'anonymous';
  }
  (function _0x42d510() {
    var _0x46d9e4 = '';
    try {
      _0x46d9e4 = localStorage.getItem('1v1_session_token') || '';
    } catch (_0x2e8902) {
      return;
    }
    if (!_0x46d9e4) return;
    try {
      fetch('/api/player', {
        headers: {
          Authorization: 'Bearer ' + _0x46d9e4
        }
      }).then(function (_0x47218a) {
        if (!_0x47218a || _0x47218a.status !== 401) return;
        try {
          localStorage.removeItem('1v1_session_token'), localStorage.removeItem('1v1_google_id');
        } catch (_0x4efb25) {}
        console.log('%c[Auth] stale session dropped (server does not know this token) - playing as guest until sign-in', 'color:#fa0');
      })['catch'](function () {});
    } catch (_0x318aa0) {}
  })();
  function _0x4af88b() {
    try {
      if (window.firebase && firebase.auth && firebase.auth().currentUser && firebase.auth().currentUser.uid) return firebase.auth().currentUser.uid;
    } catch (_0x46834d) {}
    try {
      return localStorage.getItem('1v1_google_id') || '';
    } catch (_0x13049f) {
      return '';
    }
  }
  function _0x367a69() {
    var _0xe6d905 = _0x4af88b();
    if (_0xe6d905) return _0xe6d905;
    try {
      var _0x401768 = _0x5da4f0();
      return _0x401768 ? 'install:' + _0x401768 : '';
    } catch (_0x233f29) {
      return '';
    }
  }
  function _0x4fe840(_0x1f0f28) {
    if (!_0x1f0f28 || typeof _0x1f0f28 !== 'string') return null;
    if (_0x1f0f28.indexOf('/api/v446_friends') !== -1 || _0x1f0f28.startsWith(location.origin)) return null;
    var _0x576c04 = /\/v446_friends(\/[a-zA-Z]+)?(\?[^#]*)?$/.exec(_0x1f0f28);
    if (!_0x576c04) return null;
    var _0x3f02cd = _0x576c04[1] || '',
      _0x49e035 = _0x576c04[2] || '',
      _0x5ec0e8 = _0x49e035 ? '&' : '?',
      _0x21ae93 = 1;
    try {
      _0x21ae93 = window.__SKINS_RC_VER | 0 || 1;
    } catch (_0x14321a) {}
    return location.origin + '/api/v446_friends' + _0x3f02cd + _0x49e035 + _0x5ec0e8 + '_uid=' + encodeURIComponent(_0x367a69()) + '&_rcv=' + _0x21ae93;
  }
  function _0x22d253(_0x1bc963) {
    if (!_0x1bc963 || typeof _0x1bc963 !== 'string' || _0x1bc963.startsWith(location.origin)) return null;
    var _0x4fb810 = /matchmaker\.services\.api\.unity\.com\/v2\/tickets\/status(\?[^#]*)?$/.exec(_0x1bc963);
    if (_0x4fb810) return location.origin + '/api/v446/ugs/tickets/status' + (_0x4fb810[1] || '');
    var _0x526466 = /matchmaker\.services\.api\.unity\.com\/v2\/tickets(\?[^#]*)?$/.exec(_0x1bc963);
    if (_0x526466) return location.origin + '/api/v446/ugs/tickets' + (_0x526466[1] || '');
    if (/player-auth\.services\.api\.unity\.com\/v1\/authentication\//.test(_0x1bc963)) return location.origin + '/api/v446/ugs/auth';
    return null;
  }
  function _0x3cde3d(_0x3f43e8) {
    if (!_0x3f43e8 || typeof _0x3f43e8 !== 'string') return null;
    if (_0x3f43e8.indexOf('/api/v446_claimroadreward') !== -1 || _0x3f43e8.startsWith(location.origin)) return null;
    if (_0x3f43e8.indexOf('rankRoad/claimRoadReward') === -1) return null;
    return location.origin + '/api/v446_claimroadreward?_uid=' + encodeURIComponent(_0x367a69());
  }
  function _0x32c87d(_0x44bc4b) {
    if (!_0x44bc4b || typeof _0x44bc4b !== 'string') return null;
    if (_0x44bc4b.indexOf('/api/v446_trophyclaim') !== -1 || _0x44bc4b.startsWith(location.origin)) return null;
    if (_0x44bc4b.indexOf('trophyRoad/claimTierRewards') === -1) return null;
    return location.origin + '/api/v446_trophyclaim?_uid=' + encodeURIComponent(_0x367a69());
  }
  function _0x36dd60(_0x2e089a) {
    if (!_0x2e089a || typeof _0x2e089a !== 'string') return null;
    if (_0x2e089a.indexOf('/api/v446_bp_claim') !== -1 || _0x2e089a.startsWith(location.origin)) return null;
    if (!/battlePass\/claimReward(\?|$)/.test(_0x2e089a)) return null;
    return location.origin + '/api/v446_bp_claim?_uid=' + encodeURIComponent(_0x367a69());
  }
  function _0x2cc611() {
    return true;
  }
  function _0x52f4eb(_0xbb8797) {
    if (!_0xbb8797 || typeof _0xbb8797 !== 'string' || _0xbb8797.startsWith(location.origin)) return null;
    if (!_0x2cc611()) return null;
    var _0x38049b = _0x4af88b();
    if (_0xbb8797.indexOf('/v446_player/login') !== -1 && _0x5ed5cf()) {
      var _0x1316c0 = '';
      try {
        _0x1316c0 = localStorage.getItem('firebaseIdToken') || '';
      } catch (_0x3cbcff) {}
      if (_0x1316c0 && _0x1316c0.split('.').length === 3 && _0x1316c0.indexOf('guestmock') === -1) {
        var _0xd3e365 = _0xbb8797.indexOf('?') !== -1 ? _0xbb8797.slice(_0xbb8797.indexOf('?') + 1) : '';
        return location.origin + '/api/firebase/v446_player/login' + (_0xd3e365 ? '?' + _0xd3e365 : '');
      }
    }
    if (!_0x38049b || _0x38049b.indexOf('guest-') === 0) {
      var _0x168683 = '';
      try {
        _0x168683 = _0x5da4f0() || '';
      } catch (_0x42be9d) {}
      if (!_0x168683) {
        try {
          var _0x33b9c7 = _0xbb8797.match(/[?&]nickname=([^&]+)/);
          if (_0x33b9c7 && _0xbb8797.indexOf('/v446_player/login') !== -1) _0x1664a9 = _0x33b9c7[1];
        } catch (_0x57fe9f) {}
        return null;
      }
      _0x38049b = 'install:' + _0x168683;
    }
    var _0x35ebf1 = _0xbb8797.match(/[?&]nickname=([^&]+)/),
      _0x6ec8e0 = _0x35ebf1 ? '&nickname=' + _0x35ebf1[1] : '';
    if (/\/v446_player\/login(\?|$)/.test(_0xbb8797)) {
      var _0x32d20b = _0xbb8797.match(/[?&](limitedLockerSkins=[^&]+)/),
        _0x42b33f = _0xbb8797.match(/[?&](equippedSkin=[^&]+)/),
        _0x192b69 = '';
      try {
        _0x192b69 = localStorage.getItem('1v1_install_id') || '';
      } catch (_0xaa6210) {}
      return location.origin + '/api/v446/login?_uid=' + encodeURIComponent(_0x38049b) + _0x6ec8e0 + (_0x32d20b ? '&' + _0x32d20b[1] : '') + (_0x42b33f ? '&' + _0x42b33f[1] : '') + (_0x192b69 ? '&_aid=' + encodeURIComponent(_0x192b69) : '');
    }
    if (/\/v446_player(\?|$)/.test(_0xbb8797)) return location.origin + '/api/v446/player?_uid=' + encodeURIComponent(_0x38049b);
    if (/battlePass\/refreshBattlePass(\?|$)/.test(_0xbb8797)) return location.origin + '/api/v446/bp_refresh?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('player/updateProgressAndStats') !== -1) {
      var _0x5b7506 = _0xbb8797.indexOf('?') !== -1 ? _0xbb8797.slice(_0xbb8797.indexOf('?') + 1) : '';
      return location.origin + '/api/v446_recordmatch?su=1&_uid=' + encodeURIComponent(_0x38049b) + (_0x5b7506 ? '&' + _0x5b7506 : '');
    }
    if (_0xbb8797.indexOf('player/boostBattlePassRewards') !== -1) return location.origin + '/api/v446/bp_boost?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('ageGate/setAge') !== -1) return location.origin + '/api/v446/login?_uid=' + encodeURIComponent(_0x38049b);
    if (/player\/nickname(\?|$)/.test(_0xbb8797)) return location.origin + '/api/v446/nickname?_uid=' + encodeURIComponent(_0x38049b) + _0x6ec8e0;
    if (_0xbb8797.indexOf('lootBox/claimSpins') !== -1 && _0xbb8797.indexOf('AsGuest') === -1) return location.origin + '/api/v446/claim_spins?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('skins/character/equip/list') !== -1) return location.origin + '/api/v446/equip_skin?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('skins/character/equip/weapon') !== -1) return location.origin + '/api/v446/equip_weapon_skins?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('emotes/character/update') !== -1) return location.origin + '/api/v446/equip_emotes?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('product/coinPurchase') !== -1) return location.origin + '/api/v446/coin_purchase?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('product/rvCoinPurchase') !== -1) return location.origin + '/api/v446/coin_purchase?rv=1&_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('dailyReward/claimReward') !== -1) return location.origin + '/api/v446/dailyreward_claim?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('updateInfluencerSkinClaimed') !== -1) return location.origin + '/api/v446/influencer_claimed?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('battlePass/buyPremium') !== -1) return location.origin + '/api/v446/bp_buypremium?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('battlePass/buyTierUp') !== -1) return location.origin + '/api/v446/bp_tierup?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('engageFirstTimeWithBpSeason') !== -1) return location.origin + '/api/v446/bp_engage?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('lootBox/openGachaLootBoxWithGems') !== -1) return location.origin + '/api/v446/open_gacha?gems=1&_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('lootBox/openGachaLootBox') !== -1) return location.origin + '/api/v446/open_gacha?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('lootBox/unlockLootBox') !== -1) return location.origin + '/api/v446/unlock_lootbox?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('userSettings/group') !== -1) return location.origin + '/api/v446/settings_group?_uid=' + encodeURIComponent(_0x38049b);
    if (/\/v446_userSettings(\?|$)/.test(_0xbb8797)) return location.origin + '/api/v446/settings?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('rating/updateMMR') !== -1) return location.origin + '/api/v446/update_mmr?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('reports/reportUser') !== -1) return location.origin + '/api/v446/report?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('updateTailoredAdsPref') !== -1) return location.origin + '/api/v446/ads_pref?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('setAccountForDeletion') !== -1) return location.origin + '/api/v446/account_deletion?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('ageGate/setGuardianEmail') !== -1) return location.origin + '/api/v446/agegate_guardian?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('updateShownPermissionsChangedPopup') !== -1) return location.origin + '/api/v446/agegate_popup?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('checkForClaimableRewards') !== -1) return location.origin + '/api/v446/leaderboard_claims?_uid=' + encodeURIComponent(_0x38049b);
    if (_0xbb8797.indexOf('product/multiProductPurchase') !== -1) return location.origin + '/api/v446/multi_purchase?_uid=' + encodeURIComponent(_0x38049b);
    if (_0x523689()) {
      if (_0xbb8797.indexOf('challenges/getChallengesData') !== -1) return location.origin + '/api/v446/ch_defs';
      if (_0xbb8797.indexOf('challenges/getUserChallenges') !== -1) return location.origin + '/api/v446/ch_user?_uid=' + encodeURIComponent(_0x38049b);
      if (_0xbb8797.indexOf('updateChallengesProgress') !== -1) return location.origin + '/api/v446/ch_update?_uid=' + encodeURIComponent(_0x38049b);
      if (_0xbb8797.indexOf('challenges/claimChallenges') !== -1) return location.origin + '/api/v446/ch_claim?_uid=' + encodeURIComponent(_0x38049b);
    }
    if (_0x5003de()) {
      if (_0xbb8797.indexOf('dailySpins/getDailySpinData2') !== -1) return location.origin + '/api/v446/daily_spin_data?_uid=' + encodeURIComponent(_0x38049b);
      if (_0xbb8797.indexOf('dailySpins/consumeSpin2') !== -1) return location.origin + '/api/v446/daily_spin_consume?rv=0&_uid=' + encodeURIComponent(_0x38049b);
      if (_0xbb8797.indexOf('dailySpins/consumeRv2') !== -1) return location.origin + '/api/v446/daily_spin_consume?rv=0&_uid=' + encodeURIComponent(_0x38049b);
    }
    return null;
  }
  function _0x523689() {
    return true;
  }
  function _0x5003de() {
    // spins go to the live backend unless localStorage '1v1_local_spins' is '1' (then: unlimited free spins, no ads, kept locally)
    try {
      return localStorage.getItem('1v1_local_spins') !== '1';
    } catch (e) {
      return true;
    }
  }
  var _0x1664a9 = '';
  function _0x5da4f0() {
    try {
      return localStorage.getItem('1v1_install_id') || '';
    } catch (_0x43433e) {
      return '';
    }
  }
  function _0x3f23ec(_0xe02ce1) {
    if (!_0xe02ce1 || typeof _0xe02ce1 !== 'string' || _0xe02ce1.startsWith(location.origin)) return null;
    try {
      if (_0x5ed5cf() && _0xe02ce1.indexOf('player/guestLogin') !== -1) {
        var _0x4d013b = '';
        try {
          _0x4d013b = localStorage.getItem('firebaseIdToken') || '';
        } catch (_0x4afced) {}
        if (_0x4d013b && _0x4d013b.split('.').length === 3 && _0x4d013b.indexOf('guestmock') === -1) return null;
      }
    } catch (_0x57e024) {}
    var _0x3c861e = /player\/guestLogin(\?[^#]*)?$/.exec(_0xe02ce1);
    if (_0x3c861e) {
      var _0x2294d7 = /[?&]id=([^&]+)/.exec(_0x3c861e[1] || '');
      if (_0x2294d7) try {
        localStorage.setItem('1v1_install_id', decodeURIComponent(_0x2294d7[1]));
      } catch (_0x26bbe2) {}
      if (_0x2294d7 && _0x1664a9) try {
        var _0x5ddeb0 = decodeURIComponent(_0x2294d7[1]),
          _0x4092cf = location.origin + '/api/v446/login?_uid=' + encodeURIComponent('install:' + _0x5ddeb0) + '&nickname=' + _0x1664a9 + '&_aid=' + encodeURIComponent(_0x5ddeb0);
        _0x1664a9 = '';
        if (window.fetch) window.fetch(_0x4092cf, {
          credentials: 'same-origin'
        })['catch'](function () {});
      } catch (_0x195961) {}
      return location.origin + '/api/v446/guest_login' + (_0x3c861e[1] || '');
    }
    if (/lootBox\/claimSpinsAsGuest(\?|$)/.test(_0xe02ce1)) return location.origin + '/api/v446/claim_spins_guest?_aid=' + encodeURIComponent(_0x5da4f0());
    if (/player\/nickname(\?|$)/.test(_0xe02ce1) && _0x5ed5cf()) {
      var _0x25ae7d = _0xe02ce1.match(/[?&]nickname=([^&]+)/);
      return location.origin + '/api/v446/guest_nickname?_aid=' + encodeURIComponent(_0x5da4f0()) + (_0x25ae7d ? '&nickname=' + _0x25ae7d[1] : '');
    }
    if (_0xe02ce1.indexOf('rating/guestMMR') !== -1) {
      var _0x54f7e4 = _0xe02ce1.indexOf('?') !== -1 ? _0xe02ce1.slice(_0xe02ce1.indexOf('?') + 1) : '';
      return location.origin + '/api/v446/guest_mmr?_aid=' + encodeURIComponent(_0x5da4f0()) + (_0x54f7e4 ? '&' + _0x54f7e4 : '');
    }
    return null;
  }
  function _0x4a5be5(_0x45b9ed, _0x10e920) {
    try {
      if (!_0x10e920) {
        console.log('%c[DIAG/CRASH ' + _0x45b9ed + '] (empty)', 'color:#f55;font-weight:bold');
        return;
      }
      var _0x97e621 = function (_0x3fad2b) {
          if (_0x3fad2b.length > 8000) _0x3fad2b = _0x3fad2b.slice(0, 8000) + ' …(' + (_0x3fad2b.length - 8000) + ' bytes truncated)';
          console.log('%c[DIAG/CRASH ' + _0x45b9ed + ']', 'color:#f55;font-weight:bold', _0x3fad2b);
        },
        _0x3f5dc7 = function (_0x4eeac8) {
          try {
            var _0x54ab1c = new Uint8Array(_0x4eeac8),
              _0x203866 = null;
            if (_0x54ab1c.length >= 2 && _0x54ab1c[0] === 31 && _0x54ab1c[1] === 139) _0x203866 = 'gzip';else {
              if (_0x54ab1c.length >= 2 && _0x54ab1c[0] === 120 && (_0x54ab1c[1] === 1 || _0x54ab1c[1] === 156 || _0x54ab1c[1] === 218)) _0x203866 = 'deflate';
            }
            if (_0x203866 && typeof DecompressionStream !== 'undefined') {
              var _0x30d076 = new DecompressionStream(_0x203866);
              new Response(new Blob([_0x54ab1c]).stream().pipeThrough(_0x30d076)).text().then(function (_0x200bff) {
                _0x97e621('[' + _0x203866 + '] ' + _0x200bff);
              })['catch'](function (_0x576715) {
                _0x203866 === 'deflate' ? new Response(new Blob([_0x54ab1c]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).text().then(function (_0x1c3f01) {
                  _0x97e621('[deflate-raw] ' + _0x1c3f01);
                })['catch'](function (_0x346856) {
                  _0x97e621('[inflate-failed ' + _0x576715.message + ' / ' + _0x346856.message + ']');
                }) : _0x97e621('[inflate-failed ' + _0x576715.message + ']');
              });
              return;
            }
            _0x97e621(new TextDecoder('utf-8', {
              fatal: false
            }).decode(_0x54ab1c));
          } catch (_0x4265fc) {
            _0x97e621('[decode-failed] ' + _0x4265fc.message);
          }
        };
      if (typeof _0x10e920 === 'string') return _0x97e621(_0x10e920);
      if (_0x10e920 instanceof Blob) {
        _0x10e920.arrayBuffer().then(_0x3f5dc7);
        return;
      }
      if (_0x10e920 instanceof ArrayBuffer) return _0x3f5dc7(_0x10e920);
      if (ArrayBuffer.isView && ArrayBuffer.isView(_0x10e920)) return _0x3f5dc7(_0x10e920.buffer);
      if (typeof FormData !== 'undefined' && _0x10e920 instanceof FormData) {
        var _0x415043 = [];
        return _0x10e920.forEach(function (_0x52b5b8, _0x8137e4) {
          _0x415043.push(_0x8137e4 + '=' + (typeof _0x52b5b8 === 'string' ? _0x52b5b8 : '[file]'));
        }), _0x97e621('FormData: ' + _0x415043.join(' | '));
      }
      var _0x59ad5c = Object.prototype.toString.call(_0x10e920);
      _0x97e621('(type=' + _0x59ad5c + ') ' + function () {
        try {
          return JSON.stringify(_0x10e920);
        } catch (_0xdf65eb) {
          return '(unstringifiable)';
        }
      }());
    } catch (_0x8e9826) {
      console.log('%c[DIAG/CRASH ' + _0x45b9ed + ' dump-failed] ' + _0x8e9826.message, 'color:#f55');
    }
  }
  var _0x126faf = {
      '0': {
        ID: '0',
        Type: 'WinGame',
        ConditionType: 'Mode',
        ConditionObject: '1v1_Clash',
        PointsToComplete: 11,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 150
        }],
        IsPremium: false
      },
      '1': {
        ID: '1',
        Type: 'DealDamage',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 2000,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 150
        }],
        IsPremium: false
      },
      '2': {
        ID: '2',
        Type: 'PlayMatch',
        ConditionType: 'Mode',
        ConditionObject: 'BattleRoyale',
        PointsToComplete: 15,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 200
        }],
        IsPremium: false
      },
      '3': {
        ID: '3',
        Type: 'Login',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 10,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 300
        }],
        IsPremium: false
      },
      '4': {
        ID: '4',
        Type: 'MakeSpins',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 10,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 250
        }],
        IsPremium: false
      },
      '5': {
        ID: '5',
        Type: 'Build',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 150,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 150
        }],
        IsPremium: false
      },
      '6': {
        ID: '6',
        Type: 'Top5',
        ConditionType: 'Mode',
        ConditionObject: 'BattleRoyaleDuos',
        PointsToComplete: 9,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 200
        }],
        IsPremium: false
      },
      '7': {
        ID: '7',
        Type: 'DefeatEnemies',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 12,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 200
        }],
        IsPremium: false
      },
      '8': {
        ID: '8',
        Type: 'MakeSpins',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 12,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 250
        }],
        IsPremium: false
      },
      '9': {
        ID: '9',
        Type: 'DealDamage',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 4900,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 300
        }],
        IsPremium: false
      },
      '10': {
        ID: '10',
        Type: 'DefeatEnemies',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 6,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 150
        }],
        IsPremium: false
      },
      '11': {
        ID: '11',
        Type: 'PlayMatch',
        ConditionType: 'Mode',
        ConditionObject: 'BattleRoyaleSolo',
        PointsToComplete: 21,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 250
        }],
        IsPremium: false
      },
      '12': {
        ID: '12',
        Type: 'SpendSecondsInMatch',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 24,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 200
        }],
        IsPremium: false
      },
      '13': {
        ID: '13',
        Type: 'FinishDailyChallenges',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 12,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 300
        }],
        IsPremium: false
      },
      '14': {
        ID: '14',
        Type: 'PlayMatch',
        ConditionType: 'Mode',
        ConditionObject: 'BattleRoyale',
        PointsToComplete: 35,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 300
        }],
        IsPremium: false
      },
      '15': {
        ID: '15',
        Type: 'PlayMatch',
        ConditionType: 'Mode',
        ConditionObject: '1v1_Clash',
        PointsToComplete: 23,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 150
        }],
        IsPremium: false
      },
      '16': {
        ID: '16',
        Type: 'DefeatEnemies',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 12,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 200
        }],
        IsPremium: false
      },
      '17': {
        ID: '17',
        Type: 'DealDamage',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 4000,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 300
        }],
        IsPremium: false
      },
      '18': {
        ID: '18',
        Type: 'PlayMatch',
        ConditionType: 'InParty',
        ConditionObject: '',
        PointsToComplete: 9,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 200
        }],
        IsPremium: false
      },
      '19': {
        ID: '19',
        Type: 'Build',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 250,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 250
        }],
        IsPremium: false
      },
      '20': {
        ID: '20',
        Type: 'Top5',
        ConditionType: 'Mode',
        ConditionObject: 'BattleRoyaleSolo',
        PointsToComplete: 6,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 150
        }],
        IsPremium: false
      },
      '21': {
        ID: '21',
        Type: 'DealDamage',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 2400,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 250
        }],
        IsPremium: false
      },
      '22': {
        ID: '22',
        Type: 'PlayMatch',
        ConditionType: 'Mode',
        ConditionObject: 'BattleRoyale',
        PointsToComplete: 30,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 300
        }],
        IsPremium: false
      },
      '23': {
        ID: '23',
        Type: 'Login',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 5,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 250
        }],
        IsPremium: false
      },
      '24': {
        ID: '24',
        Type: 'DefeatEnemies',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 10,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 200
        }],
        IsPremium: false
      },
      '25': {
        ID: '25',
        Type: 'Top5',
        ConditionType: 'Mode',
        ConditionObject: 'BattleRoyaleDuos',
        PointsToComplete: 9,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 150
        }],
        IsPremium: false
      },
      '26': {
        ID: '26',
        Type: 'DefeatEnemies',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 12,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 200
        }],
        IsPremium: false
      },
      '27': {
        ID: '27',
        Type: 'DealDamage',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 3200,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 250
        }],
        IsPremium: false
      },
      '28': {
        ID: '28',
        Type: 'MakeSpins',
        ConditionType: 'None',
        ConditionObject: '',
        PointsToComplete: 10,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 300
        }],
        IsPremium: false
      },
      '29': {
        ID: '29',
        Type: 'Top5',
        ConditionType: 'Mode',
        ConditionObject: 'BattleRoyale',
        PointsToComplete: 7,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: 250
        }],
        IsPremium: false
      }
    },
    _0x1dc4a3 = [[{
      Type: 'DealDamage',
      ConditionType: 'None',
      ConditionObject: '',
      PointsToComplete: 80
    }, {
      Type: 'Build',
      ConditionType: 'None',
      ConditionObject: '',
      PointsToComplete: 10
    }, {
      Type: 'DefeatEnemies',
      ConditionType: 'None',
      ConditionObject: '',
      PointsToComplete: 1
    }, {
      Type: 'MakeSpins',
      ConditionType: 'None',
      ConditionObject: '',
      PointsToComplete: 2
    }], [{
      Type: 'DefeatEnemies',
      ConditionType: 'None',
      ConditionObject: '',
      PointsToComplete: 2
    }, {
      Type: 'MakeSpins',
      ConditionType: 'None',
      ConditionObject: '',
      PointsToComplete: 3
    }, {
      Type: 'DealDamage',
      ConditionType: 'None',
      ConditionObject: '',
      PointsToComplete: 475
    }, {
      Type: 'PlayMatch',
      ConditionType: 'Mode',
      ConditionObject: 'BattleRoyale',
      PointsToComplete: 3
    }, {
      Type: 'SpendMinutesInMatch',
      ConditionType: 'None',
      ConditionObject: '',
      PointsToComplete: 5
    }], [{
      Type: 'Top5',
      ConditionType: 'Mode',
      ConditionObject: 'BattleRoyale',
      PointsToComplete: 3
    }, {
      Type: 'DefeatEnemies',
      ConditionType: 'None',
      ConditionObject: '',
      PointsToComplete: 5
    }, {
      Type: 'MakeSpins',
      ConditionType: 'None',
      ConditionObject: '',
      PointsToComplete: 4
    }]],
    _0x28bda2 = [60, 80, 100];
  function _0x245e0a() {
    return Math.floor((Date.now() - 16 * 3600 * 1000) / 86400000);
  }
  function _0x5bcc60() {
    var _0x41ccef = _0x245e0a(),
      _0x26fa38 = {};
    for (var _0x11c101 = 0; _0x11c101 < 3; _0x11c101++) {
      var _0x1a5964 = _0x1dc4a3[_0x11c101],
        _0x3acf0c = _0x1a5964[(_0x41ccef % _0x1a5964.length + _0x1a5964.length) % _0x1a5964.length],
        _0x4e4a82 = String(1000 + _0x41ccef * 3 + _0x11c101);
      _0x26fa38[_0x4e4a82] = {
        ID: _0x4e4a82,
        Type: _0x3acf0c.Type,
        ConditionType: _0x3acf0c.ConditionType,
        ConditionObject: _0x3acf0c.ConditionObject,
        PointsToComplete: _0x3acf0c.PointsToComplete,
        Rewards: [{
          RewardType: 'BPExp',
          Amount: _0x28bda2[_0x11c101]
        }],
        IsPremium: false
      };
    }
    return _0x26fa38;
  }
  function _0x42d9a0() {
    var _0x6ba419 = new Date();
    return _0x6ba419.setUTCHours(16, 0, 0, 0), {
      ActiveDate: _0x6ba419.toISOString(),
      DailyChallenges: _0x5bcc60(),
      SeasonalChallenges: _0x126faf,
      SeasonalDropDays: []
    };
  }
  function _0x30048c(_0x42d5f2) {
    var _0x3af23c = {},
      _0x26d576 = {};
    for (var _0x32a13a in _0x42d5f2.DailyChallenges) _0x3af23c[_0x32a13a] = {
      Points: 0,
      DidClaim: false,
      IsNew: true
    };
    for (var _0x2e3b12 in _0x42d5f2.SeasonalChallenges) _0x26d576[_0x2e3b12] = {
      Points: 0,
      DidClaim: false,
      IsNew: false
    };
    return {
      DailyChallengesData: _0x3af23c,
      SeasonalChallengesData: _0x26d576
    };
  }
  function _0x16b36c() {
    try {
      return (window.localStorage && localStorage.getItem('CHALLENGES_LIVE')) !== '0';
    } catch (_0x588e19) {
      return true;
    }
  }
  function _0xf0ac0a(_0xf30a81, _0x586429) {
    if (_0xf30a81.indexOf('perf-events.cloud.unity3d.com') !== -1) return _0x4a5be5('unity-cloud', _0x586429), '';
    if (_0xf30a81.indexOf('notify.bugsnag.com') !== -1) return _0x4a5be5('bugsnag-notify', _0x586429), '{}';
    if (_0xf30a81.indexOf('bugsnag.com') !== -1) return '{}';
    if (_0xf30a81.indexOf('external-user-registration-service') !== -1 && (_0xf30a81.indexOf('/registration/external-token') !== -1 || _0xf30a81.indexOf('/public/connect') !== -1 || _0xf30a81.indexOf('/public/v2/connect') !== -1)) {
      if (window._KILL_PSF) return console.log('%c[v446/psf] _KILL_PSF=true → returning empty connectResult to fail Initialize', 'color: #f80'), JSON.stringify({
        connectResult: ''
      });
      return console.log('%c[v446/psf] external-user-registration → connectResult=Connect + registration tokens', 'color: #0f0'), JSON.stringify({
        connectResult: 'Connect',
        loginToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJndWVzdCIsInBzZiI6dHJ1ZX0.emulator_login_signature',
        installationToken: 'emulator-install-token-0000-4000-8000-000000000001',
        firstRegistration: true
      });
    }
    if (_0xf30a81.indexOf('/login-service/') !== -1) {
      var _0x4fe80b = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJndWVzdCIsImV4cCI6MjA1MTIyMjQwMH0.emulator_session_sig';
      if (_0xf30a81.indexOf('/login/mobile') !== -1 || _0xf30a81.indexOf('/refresh/mobile') !== -1) return console.log('%c[v446/psf] login-service → ResponseBody (session granted)', 'color: #0f0'), JSON.stringify({
        sessionToken: _0x4fe80b,
        refreshToken: _0x4fe80b,
        userReferenceId: 'emulator-guest-user'
      });
      if (_0xf30a81.indexOf('/login-service/me') !== -1) return JSON.stringify({
        UserReferenceId: 'emulator-guest-user'
      });
      return '{}';
    }
    if (_0xf30a81.indexOf('client-event-stream') !== -1) {
      _0x4a5be5('psf-event-stream', _0x586429);
      if (window._KILL_PSF) return null;
      return '{}';
    }
    if (_0xf30a81.indexOf('messaging-nucleus') !== -1 && _0xf30a81.indexOf('auth') !== -1) {
      if (window._KILL_PSF) return null;
      var _0x230f66 = 'mock-socket-session-' + Date.now();
      try {
        window.__mnsSocketSession = _0x230f66;
      } catch (_0x59d828) {}
      try {
        console.log('%c[mns] /stomp/auth REQUEST body: ' + (typeof _0x586429 === 'string' ? _0x586429 : JSON.stringify(_0x586429)), 'color:#88f');
      } catch (_0x25e24e) {}
      var _0x4aacfb = {
          socketSession: _0x230f66,
          tenantId: '',
          transports: [{
            type: 'websocket',
            subProtocols: [{
              type: 'stomp',
              version: '1.2',
              qualifiedName: 'v12.stomp'
            }]
          }]
        },
        _0x25d758 = JSON.stringify(_0x4aacfb);
      return console.log('%c[mns] /stomp/auth → AuthResponseDto v4 (tenantId="") ' + _0x25d758, 'color:#0cf'), _0x25d758;
    }
    if (_0xf30a81.indexOf('messaging-nucleus') !== -1 && _0xf30a81.indexOf('match') !== -1) {
      if (window._KILL_PSF) return null;
      return console.log('%c[mns] /match → STOMP handshake (token/address/destination)', 'color:#0cf'), JSON.stringify({
        token: 'mock-stomp-token-' + Date.now(),
        address: 'https://onevone.psf.playtika.com/messaging-nucleus/stomp',
        destination: '/user/queue/messages'
      });
    }
    if (_0xf30a81.indexOf('psf.playtika.com') !== -1) {
      if (window._KILL_PSF) return null;
      return '{}';
    }
    if (_0xf30a81.indexOf('cpmstar.com') !== -1) return '';
    if (_0xf30a81.indexOf('player/guestLogin') !== -1) {
      var _0x1fb63d = '';
      try {
        _0x1fb63d = (/[?&]id=([^&]+)/.exec(_0xf30a81) || [])[1] || localStorage.getItem('1v1_install_id') || '';
      } catch (_0x2ff6b3) {}
      var _0x28e1e7 = _0x1fb63d ? 'install:' + decodeURIComponent(_0x1fb63d) : '';
      return console.log('%c[v446/http] player/guestLogin → PsfToken for uid=' + _0x28e1e7, 'color: #0f0'), JSON.stringify({
        PsfToken: 'mock-psf-' + _0x28e1e7
      });
    }
    if (_0xf30a81.indexOf('player/getRegionInfo') !== -1) return console.log('%c[v446/http] player/getRegionInfo → US, unblocked, no age gate', 'color: #0f0'), JSON.stringify({
      Country: 'US',
      Region: 'us-east',
      IsBlocked: false,
      HasAgeGate: false,
      AgeGateLimit: 0
    });
    if (_0xf30a81.indexOf('dailySpins/getDailySpinData2') !== -1) return console.log('%c[v446/http] dailySpins/getDailySpinData2 → 1 free spin available', 'color: #0f0'), JSON.stringify({
      SpinsLeft: 1,
      RvsLeft: 0,
      MaxRvs: 0,
      MaxSpins: 1,
      LastTimeUsed: null,
      spinsLeft: 1,
      rvsLeft: 0,
      maxRvs: 0,
      maxSpins: 1,
      lastTimeUsed: null
    });
    if (_0xf30a81.indexOf('dailySpins/consumeSpin2') !== -1 || _0xf30a81.indexOf('dailySpins/consumeRv2') !== -1) {
      var _0x4ba539 = _0xf30a81.indexOf('consumeRv2') !== -1,
        _0x37df94 = [];
      try {
        var _0xc82a7c = JSON.parse(localStorage.getItem('1v1_db_player') || '{}');
        _0x37df94 = _0xc82a7c.owned_skins || [];
      } catch (_0x5d6eee) {}
      var _0xb7fbf3 = [1, 2, 3, 4, 5, 6, 7, 8].map(function (_0x5f254b) {
          return 'lol.1v1.playerskins.pack.' + _0x5f254b;
        }),
        _0x2741e3 = _0xb7fbf3.filter(function (_0x50e905) {
          return _0x37df94.indexOf(_0x50e905) === -1;
        }),
        _0x4dc22c = _0x2741e3.length ? _0x2741e3 : _0xb7fbf3,
        _0x2c882d = _0x4dc22c[Math.floor(Math.random() * _0x4dc22c.length)],
        _0xb506fe = _0x37df94.indexOf(_0x2c882d) !== -1;
      console.log('%c[v446/http] dailySpins/' + (_0x4ba539 ? 'consumeRv2' : 'consumeSpin2') + ' → won ' + _0x2c882d + (_0xb506fe ? ' (OWNED→refund)' : ' (NEW)'), 'color: #0f0');
      var _0x4ab1f8 = {};
      return _0x4ab1f8[_0x2c882d] = {
        count: 1,
        isOwned: _0xb506fe,
        refundId: null
      }, JSON.stringify({
        dailySpinData: {
          SpinsLeft: 1,
          RvsLeft: 0,
          MaxRvs: 0,
          MaxSpins: 1,
          LastTimeUsed: null
        },
        lootBoxContent: {
          upgradeCardsLoot: {},
          productsLoot: _0x4ab1f8,
          lolCredits: 0
        }
      });
    }
    function _0x2c1624() {
      return {
        IsUnderage: false,
        isUnderage: false,
        is_underage: false,
        GuardianEmail: null,
        guardianEmail: null,
        guardian_email: null,
        GuardianPermissionGranted: [0, 1, 2, 3, 4, 5, 6, 7],
        guardianPermissionGranted: [0, 1, 2, 3, 4, 5, 6, 7],
        guardian_permission_granted: [0, 1, 2, 3, 4, 5, 6, 7],
        ShouldShowUpdatedPermissionsPopup: false,
        shouldShowUpdatedPermissionsPopup: false,
        should_show_updated_permissions_popup: false
      };
    }
    function _0x3ac57d(_0x5931b1) {
      try {
        if (typeof _0x5931b1 === 'string') _0x5931b1 = JSON.parse(_0x5931b1);
      } catch (_0x19b753) {
        return null;
      }
      if (!_0x5931b1 || typeof _0x5931b1 !== 'object') return null;
      var _0x367f25 = _0x5931b1.IsUnderage === true,
        _0x13cf6e = Array.isArray(_0x5931b1.GuardianPermissionGranted) ? _0x5931b1.GuardianPermissionGranted : [0, 1, 2, 3, 4, 5],
        _0x252886 = _0x5931b1.GuardianEmail || null;
      return {
        IsUnderage: _0x367f25,
        isUnderage: _0x367f25,
        is_underage: _0x367f25,
        GuardianEmail: _0x252886,
        guardianEmail: _0x252886,
        guardian_email: _0x252886,
        GuardianPermissionGranted: _0x13cf6e,
        guardianPermissionGranted: _0x13cf6e,
        guardian_permission_granted: _0x13cf6e,
        ShouldShowUpdatedPermissionsPopup: false,
        shouldShowUpdatedPermissionsPopup: false,
        should_show_updated_permissions_popup: false
      };
    }
    function _0x10b584(_0x2b48cb, _0x4d3169) {
      var _0x5f4c95 = _0x2b48cb && _0x2b48cb.battlepass_xp || 0,
        _0x249ead = _0x2b48cb && _0x2b48cb.battlepass_claimed_446 || [];
      if (typeof _0x249ead === 'string') try {
        _0x249ead = JSON.parse(_0x249ead);
      } catch (_0x38be74) {
        _0x249ead = [];
      }
      var _0x45e65f = !!(_0x2b48cb && _0x2b48cb.battlepass_premium),
        _0x26c712 = [];
      try {
        var _0x4263b4 = function (_0x547af2, _0x657252, _0x3655fe) {
            for (var _0x4e80f2 = 0; _0x4e80f2 < _0x249ead.length; _0x4e80f2++) {
              if (_0x249ead[_0x4e80f2].Tier === _0x547af2 && _0x249ead[_0x4e80f2].IsRewardPremium === _0x657252 && _0x249ead[_0x4e80f2].ProductId === _0x3655fe) return true;
            }
            return false;
          },
          _0x54ff21 = typeof window !== 'undefined' && window.__BP_TIERS_446 || [];
        for (var _0xf2de59 = 0; _0xf2de59 < _0x54ff21.length; _0xf2de59++) {
          var _0x2890d1 = _0x54ff21[_0xf2de59];
          if (_0x2890d1.xp > _0x5f4c95) break;
          for (var _0x13679c = 0; _0x13679c < _0x2890d1.free_rewards.length; _0x13679c++) {
            if (!_0x4263b4(_0xf2de59, false, _0x2890d1.free_rewards[_0x13679c])) _0x26c712.push({
              Tier: _0xf2de59,
              IsRewardPremium: false,
              ProductId: _0x2890d1.free_rewards[_0x13679c]
            });
          }
          if (_0x45e65f) for (var _0x2f6bd9 = 0; _0x2f6bd9 < _0x2890d1.premium_rewards.length; _0x2f6bd9++) {
            if (!_0x4263b4(_0xf2de59, true, _0x2890d1.premium_rewards[_0x2f6bd9])) _0x26c712.push({
              Tier: _0xf2de59,
              IsRewardPremium: true,
              ProductId: _0x2890d1.premium_rewards[_0x2f6bd9]
            });
          }
        }
      } catch (_0x55b12b) {}
      var _0x207436 = null;
      try {
        _0x207436 = _0x2b48cb && _0x2b48cb.stats && JSON.parse(JSON.stringify(_0x2b48cb.stats)).bpXpBank || null;
      } catch (_0x257836) {}
      if (_0x207436 == null && _0x2b48cb && typeof _0x2b48cb.stats === 'string') try {
        _0x207436 = JSON.parse(_0x2b48cb.stats).bpXpBank || null;
      } catch (_0x4cbc41) {}
      var _0x458bf4 = 200,
        _0x340975 = 20,
        _0x308dea = 2.5 * 3600 * 1000,
        _0x22971e = Date.now(),
        _0x5ab96b,
        _0x39d6aa;
      if (_0x207436 && typeof _0x207436.left === 'number' && _0x207436.refillAt) {
        _0x5ab96b = _0x207436.left, _0x39d6aa = _0x207436.refillAt;
        for (var _0x381f6e = 0; _0x22971e >= _0x39d6aa && _0x5ab96b < _0x458bf4 && _0x381f6e < 4000; _0x381f6e++) {
          _0x5ab96b = Math.min(_0x458bf4, _0x5ab96b + _0x340975), _0x39d6aa += _0x308dea;
        }
        if (_0x5ab96b >= _0x458bf4) _0x39d6aa = _0x22971e + _0x308dea;
      } else _0x5ab96b = _0x458bf4, _0x39d6aa = _0x22971e + _0x308dea;
      var _0x5a0b02 = 0;
      try {
        if (localStorage.getItem('BANK_TZSHIFT') === '1') _0x5a0b02 = -new Date().getTimezoneOffset() * 60000;
      } catch (_0x3dc665) {}
      var _0x4ad2db = _0x39d6aa - _0x308dea + _0x5a0b02;
      try {
        console.log('%c[BANK src=' + (_0x4d3169 || '?') + '] left=' + _0x5ab96b + '/200 refillAt=' + _0x39d6aa + ' now=' + _0x22971e + ' tzMin=' + new Date().getTimezoneOffset() + ' shiftMs=' + _0x5a0b02 + ' → LastRefresh=' + _0x4ad2db + ' (server says next +20 in ~' + Math.round((_0x39d6aa - _0x22971e) / 60000) + 'm), XP=' + _0x5f4c95 + ' claimed=' + (_0x249ead && _0x249ead.length) + ' earned=' + _0x26c712.length, 'color:#0ff;font-weight:bold');
      } catch (_0x11a0e8) {}
      return {
        Seasons: {
          '1': {
            IsPremium: _0x45e65f,
            XP: _0x5f4c95,
            BoostEndTime: _0x2b48cb && _0x2b48cb.bp_boost_end || 0,
            IsFirstEngagement: false,
            ClaimedRewards: _0x249ead,
            EarnedRewards: _0x26c712
          }
        },
        XPBankData: {
          LastXPRefreshTimestamp: _0x4ad2db,
          XPLeft: _0x5ab96b
        }
      };
    }
    function _0x20ed14(_0x4f9eb7, _0x53ee70) {
      try {
        console.log('%c[TROPHY-DIAG] _buildServerUserStub CALLED (nick=' + _0x4f9eb7 + ') _db.rank=' + (_0x417031 && _0x417031.rank) + ' → TrophyRoad.Seasons[1].XP=' + (_0x417031 && _0x417031.rank || 0), 'color:#ff0;font-weight:bold;font-size:13px');
      } catch (_0x1436b8) {}
      var _0x20b0df = _0x2c1624(),
        _0x417031 = null;
      try {
        var _0x2a3256 = window.localStorage && localStorage.getItem('1v1_db_player');
        if (_0x2a3256) _0x417031 = JSON.parse(_0x2a3256);
      } catch (_0xae9987) {}
      var _0x13a800 = 0,
        _0x3ceba5 = 0;
      try {
        var _0x51d687 = window.localStorage && localStorage.getItem('TROPHY_XP');
        if (_0x51d687 != null && _0x51d687 !== '') _0x13a800 = parseInt(_0x51d687, 10) || 0, _0x3ceba5 = _0x13a800;else _0x417031 && (_0x13a800 = _0x417031.rating_custom != null ? _0x417031.rating_custom : _0x417031.rank != null ? _0x417031.rank : 0, _0x3ceba5 = _0x417031.rankroad_highest != null && _0x417031.rankroad_highest > _0x13a800 ? _0x417031.rankroad_highest : _0x13a800);
      } catch (_0x21f6f6) {}
      try {
        console.log('%c[TROPHY-DIAG2] _trophyXP=' + _0x13a800 + ' high=' + _0x3ceba5 + ' (rating_custom=' + (_0x417031 && _0x417031.rating_custom) + ' rankroad_highest=' + (_0x417031 && _0x417031.rankroad_highest) + ' override=' + (window.localStorage && localStorage.getItem('TROPHY_XP')) + ')', 'color:#0f0;font-weight:bold;font-size:13px');
      } catch (_0x578121) {}
      var _0x22f104 = [],
        _0x5bb0c1 = [],
        _0x328735 = true;
      try {
        _0x328735 = !(window.localStorage && localStorage.getItem('RANKROAD_CLAIM') === '0');
      } catch (_0x732088) {}
      try {
        if (_0x328735) {
          var _0x589210 = typeof window !== 'undefined' && window.__RANKROAD_TIERS || [],
            _0x455b07 = _0x417031 && _0x417031.rankroad_claimed || [],
            _0x72b0f2 = {};
          for (var _0x2fd790 = 0; _0x2fd790 < _0x455b07.length; _0x2fd790++) _0x72b0f2[String(_0x455b07[_0x2fd790])] = 1;
          for (var _0x1ff005 = 1; _0x1ff005 < _0x589210.length; _0x1ff005++) {
            var _0x178818 = _0x589210[_0x1ff005],
              _0x2b8fdf = _0x178818 && _0x178818.rewards && _0x178818.rewards[0];
            if (!_0x2b8fdf) continue;
            var _0x924282 = {
              RewardType: _0x2b8fdf.RewardType,
              Amount: _0x2b8fdf.Amount,
              ProductID: _0x2b8fdf.ProductID,
              TransactionID: _0x2b8fdf.TransactionID
            };
            if (_0x72b0f2[String(_0x1ff005)]) _0x5bb0c1.push(_0x924282);else {
              if ((_0x178818.xp || 0) <= _0x3ceba5) _0x22f104.push(_0x924282);
            }
          }
        }
      } catch (_0x1ca7d2) {}
      var _0x29b622 = _0x417031 && _0x417031.display_name || _0x4f9eb7 || 'Player',
        _0x28ee3b = _0x417031 && _0x417031.xp || 0,
        _0x68a8d6 = _0x417031 && _0x417031.coins || 0;
      if (_0x417031) console.log('%c[v446/http] ServerUser from DB: nick="' + _0x29b622 + '" xp=' + _0x28ee3b + ' coins=' + _0x68a8d6, 'color:#0fa;font-weight:bold');
      if (window.localStorage && localStorage.getItem('DIAG_MINIMAL_STUB') === '1') {
        var _0x61adf9 = '';
        try {
          _0x61adf9 = _0x5da4f0();
        } catch (_0x494b87) {}
        var _0x84f716 = _0x61adf9 ? 'install:' + _0x61adf9 : (localStorage.getItem('firebaseUid') || '').indexOf('guest-') === 0 ? '' : localStorage.getItem('firebaseUid') || '';
        return console.log('%c[v446/http] ★ MINIMAL ServerUser stub (DIAG_MINIMAL_STUB) — sub-objects default-constructed', 'color:#fc0;font-weight:bold'), {
          ID: _0x84f716,
          Nickname: _0x29b622,
          CreatedAt: new Date().toISOString(),
          PsfToken: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtb2NrLXVzZXIiLCJpc3MiOiJwc2YifQ.mocksignature',
          Rating: 1000,
          BoxRating: 1000,
          DuosRating: 1000,
          CustomRating: 0,
          Volatility: 0.06,
          Deviation: 350,
          Elo: 1000,
          SoftCurrency: _0x68a8d6,
          HardCurrency: 0,
          LoLTokens: _0x68a8d6,
          XP: _0x28ee3b,
          DevicePerformanceTier: 0,
          FriendInviteLink: null,
          AgeGate: _0x20b0df,
          ageGate: _0x20b0df,
          age_gate: _0x20b0df
        };
      }
      var _0x61adf9 = '';
      try {
        _0x61adf9 = _0x5da4f0();
      } catch (_0x5f39d9) {}
      var _0x2c7bd8 = _0x61adf9 ? 'install:' + _0x61adf9 : (localStorage.getItem('firebaseUid') || '').indexOf('guest-') === 0 ? '' : localStorage.getItem('firebaseUid') || '',
        _0x55e334 = {
          LoadoutName: 'Default',
          EquippedArmor: [],
          EquippedWeapons: [],
          EquippedBuildsMaterial: []
        };
      return {
        ID: _0x2c7bd8,
        Nickname: _0x29b622,
        CreatedAt: new Date().toISOString(),
        PsfToken: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtb2NrLXVzZXIiLCJpc3MiOiJwc2YifQ.mocksignature',
        Rating: 1000,
        BoxRating: 1000,
        DuosRating: 1000,
        CustomRating: 0,
        Volatility: 0.06,
        Deviation: 350,
        Elo: 1000,
        SoftCurrency: 0,
        HardCurrency: _0x68a8d6,
        LoLTokens: 0,
        XP: _0x28ee3b,
        DevicePerformanceTier: 0,
        FriendInviteLink: null,
        AgeGate: _0x20b0df,
        ageGate: _0x20b0df,
        age_gate: _0x20b0df,
        NonconsumablePacks: [],
        Settings: {
          Controls: {},
          SettingsVersion: 0
        },
        Skins: {
          CharacterSkins: _0x417031 && _0x417031.owned_skins || ['lol.1v1.playerskins.pack.63'],
          WeaponSkins: _0x417031 && _0x417031.owned_weapon_skins || [],
          EquippedCharacterSkin: _0x417031 && _0x417031.equipped_skin || 'lol.1v1.playerskins.pack.63',
          EquippedWeaponSkins: _0x417031 && _0x417031.equipped_weapon_skins || [],
          OwnedEmotes: _0x417031 && _0x417031.owned_emotes || [],
          EquippedEmotes: function (_0x5708fa) {
            _0x5708fa = Array.isArray(_0x5708fa) ? _0x5708fa.slice(0, 8) : [];
            while (_0x5708fa.length < 8) _0x5708fa.push('');
            return _0x5708fa;
          }(_0x417031 && _0x417031.equipped_emotes)
        },
        BattlePass: _0x10b584(_0x417031, _0x53ee70),
        PrivacySettings: {
          HasSeenTailoredAdsPopup: true,
          HasAcceptedTailoredAds: false
        },
        TrophyRoad: {
          Seasons: {
            '1': {
              XP: _0x13a800
            }
          }
        },
        RankRoad: {
          Seasons: {},
          AccountRoad: {
            XP: _0x13a800,
            HighestXP: _0x3ceba5,
            AvailableRewards: _0x22f104,
            ClaimedRewards: _0x5bb0c1
          }
        },
        DailyRewards: {
          Version: '1',
          Rewards: [],
          InfluencerCampaign: {
            LastSkinClaimTimestamp: 0
          }
        },
        EventsProgression: {
          Events: {}
        },
        Equipment: {
          PowerScore: 0,
          MaxHealth: 100,
          MaxArmor: 100,
          Equipment: {},
          UpgradeCards: {},
          EquippedLoadout: 0,
          AvailableLoadouts: 1,
          AvailableArmorSlots: 1,
          AvailableWeaponSlots: 2,
          Loadouts: [_0x55e334]
        },
        Inventory: {
          LootBoxes: function () {
            if (!(typeof localStorage !== 'undefined' && localStorage.getItem('FREE_PRIZES') === '1')) return [];
            var _0x30ba93 = {
                'lol.1v1.lootbox.RLB1': 1,
                'lol.1v1.lootbox.RLB2': 1,
                'lol.1v1.lootbox.RLB3': 1,
                'lol.1v1.lootbox.RLB4': 1,
                'lol.1v1.lootbox.GS1': 1,
                'lol.1v1.lootbox.GS2': 1,
                'lol.1v1.lootbox.GS3': 1,
                'lol.1v1.lootbox.GS5': 1,
                'lol.1v1.lootbox.DS': 1
              },
              _0x90cd35 = [],
              _0x2677bc = _0x417031 && _0x417031.lootbox_inventory || {};
            try {
              Object.keys(_0x2677bc).forEach(function (_0x2b7f6b) {
                if (_0x30ba93[_0x2b7f6b]) {
                  for (var _0x53eb06 = 0; _0x53eb06 < _0x2677bc[_0x2b7f6b]; _0x53eb06++) _0x90cd35.push({
                    LootboxId: _0x2b7f6b,
                    LootboxLevel: 0,
                    StartUnlockTimestamp: Date.now() - 1000
                  });
                }
              });
            } catch (_0x8c9ca0) {}
            while (_0x90cd35.length < 3) _0x90cd35.push({
              LootboxId: 'lol.1v1.lootbox.RLB2',
              LootboxLevel: 0,
              StartUnlockTimestamp: Date.now() - 1000
            });
            return _0x90cd35.slice(0, 3);
          }(),
          Spins: []
        },
        Challenges: function () {
          var _0x8d240 = _0x16b36c() ? _0x30048c(_0x42d9a0()) : {
            DailyChallengesData: {},
            SeasonalChallengesData: {}
          };
          return {
            CurrentFetchTime: 0,
            LastFetchTime: 0,
            LastDailyBonusClaimTime: 0,
            CurrentStreak: 0,
            DidClaimStreakBonus: false,
            DidClaimDailyBonus: false,
            DailyChallengesData: _0x8d240.DailyChallengesData,
            SeasonalChallengesData: _0x8d240.SeasonalChallengesData,
            ClaimReceipts: []
          };
        }(),
        Leaderboards: {
          Nickname: _0x29b622,
          Leaderboards: {}
        },
        Friends: {
          Friends: [],
          SentInvites: [],
          PendingInvites: [],
          RecentlyPlayed: []
        },
        Premium: {
          AdsDisabled: false,
          LTV: 0
        },
        Stats: function () {
          var _0xc250fd = _0x417031 && _0x417031.stats || {},
            _0x4cef49 = {},
            _0x400418 = {},
            _0x46757d = 0,
            _0x1cc7f9 = 0,
            _0x489d3a = 0;
          try {
            (_0x417031 && _0x417031.mode_stats || []).forEach(function (_0x5ce528) {
              if (_0x5ce528.wins) _0x4cef49[_0x5ce528.mode_key] = _0x5ce528.wins;
              if (_0x5ce528.losses) _0x400418[_0x5ce528.mode_key] = _0x5ce528.losses;
              _0x46757d += _0x5ce528.kills || 0, _0x1cc7f9 += _0x5ce528.deaths || 0, _0x489d3a += _0x5ce528.games_played || 0;
            });
          } catch (_0x294f0d) {}
          return {
            TotalKills: _0x46757d || _0xc250fd.kills || 0,
            TotalDeaths: _0x1cc7f9,
            Victories: _0x4cef49,
            Defeats: _0x400418,
            TotalGamesPlayed: _0x489d3a || _0xc250fd.gamesPlayed || 0,
            ConsecutiveWins: 0
          };
        }(),
        Logins: {
          LastLoginTime: Date.now(),
          CurrentLoginTime: Date.now(),
          TotalLogins: 1,
          DailyConsecutiveLogins: 1
        },
        AccountDeletion: {
          ID: _0x2c7bd8,
          AccountDeleteTimestamp: 0,
          YoungUserDeleteTimestamp: 0
        },
        OpenSkillModel: {
          PMLNOCDJMFM: 0,
          BDFIGHFICJL: null
        },
        Offers: {
          Offers: function () {
            var _0x2ff033 = typeof window !== 'undefined' && window.__OFFERS_446 || {
                keys: [],
                ts: '2026-06-14T00:00:00Z'
              },
              _0x584f1e = {};
            return (_0x2ff033.keys || []).forEach(function (_0x14de86) {
              _0x584f1e[_0x14de86] = {
                Timestamp: _0x2ff033.ts,
                Tier: 0
              };
            }), _0x584f1e;
          }()
        },
        SubscriptionsData: {
          Subscriptions: {}
        }
      };
    }
    var _0x24b2b1 = true;
    try {
      var _0xfc8bcc = window.localStorage && localStorage.getItem('firebaseUid') || '',
        _0x317761 = window.localStorage && localStorage.getItem('firebaseIdToken') || '',
        _0x249084 = !!_0x317761 && _0x2d9e6b() === 'google.com',
        _0xfdbd88 = window.localStorage && localStorage.getItem('GUEST_SPARSE'),
        _0x1cb0be = !!(window.localStorage && localStorage.getItem('LEGACY_GUEST_NOTCONN') === '1');
      _0x24b2b1 = _0xfdbd88 === '0' ? false : _0xfdbd88 === '1' || _0x1cb0be ? true : false;
    } catch (_0x98dd91) {}
    if (_0xf30a81.indexOf('player/login') !== -1) {
      var _0x16952b = '',
        _0x4d0298 = _0xf30a81.match(/nickname=([^&]+)/);
      if (_0x4d0298 && _0x4d0298[1] && _0x4d0298[1] !== 'Player') try {
        _0x16952b = decodeURIComponent(_0x4d0298[1].replace(/\+/g, '%20'));
      } catch (_0x782426) {}
      if (_0x16952b && window.localStorage) localStorage.setItem('1v1_nickname', _0x16952b);
      if (_0x24b2b1) return console.log('%c[v446/http] player/login → null (GUEST_SPARSE: no server ServerUser)', 'color:#fa0'), 'null';
      return console.log('%c[v446/http] player/login nick="' + _0x16952b + '" + AgeGate.IsUnderage=false', 'color: #0f0'), JSON.stringify(_0x20ed14(_0x16952b, 'player/login'));
    }
    if (/\/v446_player(\?|$)/.test(_0xf30a81) || /\/player(\?|$)/.test(_0xf30a81)) {
      var _0x4802a1 = window.localStorage && localStorage.getItem('1v1_nickname') || '';
      if (_0x24b2b1) return console.log('%c[v446/http] player(GetPlayerFullData) → null (GUEST_SPARSE: tests if FinishedDataFetch still fires + coins hide)', 'color:#fa0'), 'null';
      console.log('%c[v446/http] player (GetPlayerFullData) → ServerUser stub (fires FinishedDataFetch)', 'color: #0f0');
      var _0x3f5b6b = _0x20ed14(_0x4802a1, 'GetPlayerFullData');
      try {
        console.log('%c[TROPHY-DIAG] ServerUser.TrophyRoad = ' + JSON.stringify(_0x3f5b6b.TrophyRoad) + ' | RankRoad.AccountRoad.XP = ' + (_0x3f5b6b.RankRoad && _0x3f5b6b.RankRoad.AccountRoad && _0x3f5b6b.RankRoad.AccountRoad.XP) + ' | _db.rank = ' + (_db && _db.rank), 'color:#ff0;font-weight:bold;font-size:13px');
      } catch (_0x27b1dc) {}
      return JSON.stringify(_0x3f5b6b);
    }
    if (_0xf30a81.indexOf('challenges/getChallengesData') !== -1) {
      if (_0x16b36c()) {
        var _0x58b0bf = _0x42d9a0();
        return console.log('%c[v446/http] challenges/getChallengesData → CANONICAL rotation (daily×' + Object.keys(_0x58b0bf.DailyChallenges).length + ' + seasonal×' + Object.keys(_0x58b0bf.SeasonalChallenges).length + ')', 'color: #0f0'), JSON.stringify(_0x58b0bf);
      }
      return console.log('%c[v446/http] challenges/getChallengesData → empty (CHALLENGES_LIVE=0)', 'color: #fa0'), JSON.stringify({
        DailyChallenges: {},
        SeasonalChallenges: {},
        SeasonalDropDays: []
      });
    }
    if (_0xf30a81.indexOf('challenges/getUserChallenges') !== -1 || /challenges\/get(?!ChallengesData)/.test(_0xf30a81)) {
      if (_0x16b36c()) return console.log('%c[v446/http] challenges/getUserChallenges → zero-progress for current rotation', 'color: #0f0'), JSON.stringify(_0x30048c(_0x42d9a0()));
      return console.log('%c[v446/http] challenges/getUserChallenges → empty UserChallenges', 'color: #0f0'), JSON.stringify({
        DailyChallengesData: {},
        SeasonalChallengesData: {}
      });
    }
    if (_0xf30a81.indexOf('ageGate/setAge') !== -1) {
      var _0x37827f = (_0x586429 || '').match(/age=(\d+)/) || _0xf30a81.match(/age=(\d+)/);
      if (_0x24b2b1) return console.log('%c[v446/http] ageGate/setAge → null (guest: no server ServerUser)', 'color:#fa0'), 'null';
      return console.log('%c[v446/http] ageGate/setAge age=' + (_0x37827f ? _0x37827f[1] : '?') + ' → ServerUser stub', 'color: #0f0'), JSON.stringify(_0x20ed14('', 'other'));
    }
    if (_0xf30a81.indexOf('userSettings/time') !== -1) {
      if (typeof window._v446SrvTimeOff !== 'number' && !window._v446SrvTimeSyncing) {
        window._v446SrvTimeSyncing = true;
        try {
          fetch(location.origin + '/api/v446/time', {
            credentials: 'omit',
            cache: 'no-store'
          }).then(function (_0x5d8687) {
            return _0x5d8687.json();
          }).then(function (_0x5ca95c) {
            if (_0x5ca95c && typeof _0x5ca95c.now === 'number' && isFinite(_0x5ca95c.now)) window._v446SrvTimeOff = _0x5ca95c.now - Date.now();
          })['catch'](function () {}).then(function () {
            window._v446SrvTimeSyncing = false;
          });
        } catch (_0x5f7385) {
          window._v446SrvTimeSyncing = false;
        }
      }
      var _0x1a8d67 = typeof window._v446SrvTimeOff === 'number' && isFinite(window._v446SrvTimeOff) ? window._v446SrvTimeOff : 0,
        _0xf2a498 = new Date(Date.now() + _0x1a8d67).toUTCString();
      return console.log('%c[v446/http] userSettings/time → ' + _0xf2a498 + ' (RFC1123 canon, srvOff=' + _0x1a8d67 + 'ms)', 'color: #0f0'), JSON.stringify(_0xf2a498);
    }
    if (_0xf30a81.indexOf('updateProgressAndStats') !== -1) {
      if (_0x24b2b1) return console.log('%c[v446/http] updateProgressAndStats → null (guest)', 'color:#fa0'), 'null';
      var _0x533616 = {},
        _0x294573 = _0x586429 && _0x586429.length ? _0x586429 : _0xf30a81.split('?')[1] || '';
      try {
        new URLSearchParams(_0x294573).forEach(function (_0x4b4de6, _0x2ce8c9) {
          _0x533616[_0x2ce8c9] = _0x4b4de6;
        });
      } catch (_0x51c64a) {}
      var _0x190958 = _0x533616.gameMode || '1v1',
        _0x3f17d2 = (_0x533616.matchResult || 'none').toLowerCase(),
        _0xdd1a0a = parseInt(_0x533616.killsCount || '0', 10) || 0,
        _0x3036d1 = parseInt(_0x533616.deathsCount || '0', 10) || 0,
        _0x543f2c = _0x533616.isCompetitive === 'true',
        _0x2448bd = _0x3f17d2 === 'win',
        _0x114506 = _0x3f17d2 === 'loss',
        _0x9fc513 = (_0x2448bd ? 100 : _0x114506 ? 30 : 50) + _0xdd1a0a * 10,
        _0xf88742 = function (_0x22eccf) {
          var _0xe9566 = Math.floor(_0x22eccf),
            _0x34fe02 = _0x22eccf - _0xe9566;
          if (_0x34fe02 > 0.5) return _0xe9566 + 1;
          if (_0x34fe02 < 0.5) return _0xe9566;
          return _0xe9566 % 2 === 0 ? _0xe9566 : _0xe9566 + 1;
        },
        _0x1553ea = function (_0x26fdd8, _0x193e58, _0x41abde) {
          var _0x62df01 = Math.max(1, parseInt(_0x26fdd8, 10) || 1),
            _0x5e6125 = Math.max(1, parseInt(_0x193e58, 10) || 1),
            _0x44696c = Math.max(1, parseInt(_0x41abde, 10) || _0x5e6125);
          return Math.max(1, Math.min(_0x44696c, _0xf88742(_0x62df01 / _0x5e6125 * _0x44696c)));
        },
        _0x299ab2 = [_0x533616.placement || (_0x2448bd ? 1 : 2), _0x533616.playersCount, _0x533616.gameModeMaxPlayers],
        _0x3dabeb = _0x1553ea(_0x299ab2[0], _0x299ab2[1], _0x299ab2[2]),
        _0x531462 = [0, 12, 10, 8, 6, 5, 4, 3, 2, 1, 1],
        _0x59818d = [0, 8, 6, 5, 3, 2, 1],
        _0x269d7e = 0;
      if (_0x190958 === '1v1_Clash') _0x269d7e = _0x2448bd ? 5 : 0;else {
        if (_0x190958.indexOf('GrandBattleRoyale') === 0) {
          var _0x22b226 = _0x190958.indexOf('_Duos') !== -1 ? _0x59818d : _0x531462;
          _0x269d7e = _0x3dabeb >= 1 && _0x3dabeb < _0x22b226.length ? _0x22b226[_0x3dabeb] : 0;
        }
      }
      var _0x2ae7f1 = [10, 3],
        _0x5d01c9 = {
          GrandBattleRoyale: [32, 28, 26, 24, 22, 20, 20, 18, 18, 16, 16, 14, 14, 12, 12, 10],
          GrandBattleRoyale_Duos: [30, 25, 21, 19, 17, 15, 13, 11]
        },
        _0x15d041 = {
          '1v1_Clash': 1,
          GrandBattleRoyale: 1,
          GrandBattleRoyale_Duos: 1
        },
        _0x20fa42 = parseInt(_0x533616.placement) || (_0x2448bd ? 1 : 2),
        _0x162f2f = parseInt(_0x533616.playersCount) || 2,
        _0x3165e3 = parseInt(_0x533616.gameModeMaxPlayers) || _0x162f2f || 2,
        _0x4423d1 = 0;
      if (_0x15d041[_0x190958]) {
        var _0x1f34ac = _0x5d01c9[_0x190958] || _0x2ae7f1,
          _0x28a8c3 = _0xf88742(_0x20fa42 / Math.max(1, _0x162f2f) * (_0x3165e3 || _0x162f2f || 2));
        _0x2448bd && _0x28a8c3 <= 1 ? _0x4423d1 = _0x1f34ac[0] || 0 : (_0x28a8c3 = Math.min(_0x28a8c3, _0x1f34ac.length), _0x28a8c3 = Math.max(_0x28a8c3, 2), _0x28a8c3 -= 1, _0x4423d1 = _0x1f34ac[_0x28a8c3] != null ? _0x1f34ac[_0x28a8c3] : _0x1f34ac[_0x1f34ac.length - 1]);
      }
      try {
        var _0x11c2f5 = JSON.parse(localStorage.getItem('1v1_db_player') || 'null') || {};
        _0x11c2f5.xp = (_0x11c2f5.xp || 0) + _0x9fc513, _0x11c2f5.coins = (_0x11c2f5.coins || 0) + _0x269d7e;
        var _0x593f30 = _0x11c2f5.stats || {},
          _0x5e0e5c = 200,
          _0x162fdb = 20,
          _0x32e8df = 2.5 * 3600 * 1000,
          _0x40c3f1 = Date.now(),
          _0x22e857 = _0x593f30.bpXpBank && typeof _0x593f30.bpXpBank.left === 'number' ? _0x593f30.bpXpBank : {
            left: _0x5e0e5c,
            refillAt: _0x40c3f1 + _0x32e8df
          };
        for (var _0x4015ac = 0; _0x40c3f1 >= _0x22e857.refillAt && _0x22e857.left < _0x5e0e5c && _0x4015ac < 4000; _0x4015ac++) {
          _0x22e857.left = Math.min(_0x5e0e5c, _0x22e857.left + _0x162fdb), _0x22e857.refillAt += _0x32e8df;
        }
        if (_0x22e857.left >= _0x5e0e5c) _0x22e857.refillAt = _0x40c3f1 + _0x32e8df;
        var _0x24e996 = Math.max(0, Math.min(_0x22e857.left, _0x4423d1));
        _0x22e857.left -= _0x24e996, _0x593f30.bpXpBank = _0x22e857, _0x11c2f5.battlepass_xp = (_0x11c2f5.battlepass_xp || 0) + _0x24e996, _0x593f30.wins = (_0x593f30.wins || 0) + (_0x2448bd ? 1 : 0), _0x593f30.kills = (_0x593f30.kills || 0) + _0xdd1a0a, _0x593f30.gamesPlayed = (_0x593f30.gamesPlayed || 0) + 1, _0x11c2f5.stats = _0x593f30;
        var _0x19dda3 = _0x11c2f5.mode_stats || [],
          _0x44a3a4 = null;
        for (var _0x2e64c5 = 0; _0x2e64c5 < _0x19dda3.length; _0x2e64c5++) {
          if (_0x19dda3[_0x2e64c5].mode_key === _0x190958) {
            _0x44a3a4 = _0x19dda3[_0x2e64c5];
            break;
          }
        }
        !_0x44a3a4 && (_0x44a3a4 = {
          mode_key: _0x190958,
          wins: 0,
          losses: 0,
          kills: 0,
          deaths: 0,
          games_played: 0
        }, _0x19dda3.push(_0x44a3a4));
        _0x44a3a4.wins += _0x2448bd ? 1 : 0, _0x44a3a4.losses += _0x114506 ? 1 : 0, _0x44a3a4.kills += _0xdd1a0a, _0x44a3a4.deaths += _0x3036d1, _0x44a3a4.games_played += 1, _0x11c2f5.mode_stats = _0x19dda3;
        if (_0x543f2c) {
          var _0x1558ce = _0x2448bd ? 25 : _0x114506 ? -18 : 0;
          _0x11c2f5.rating_custom = Math.max(0, (_0x11c2f5.rating_custom || 0) + _0x1558ce);
        }
        localStorage.setItem('1v1_db_player', JSON.stringify(_0x11c2f5));
      } catch (_0x103624) {}
      try {
        var _0xe6704c = _0x4af88b();
        _0xe6704c && fetch(location.origin + '/api/v446_recordmatch?_uid=' + encodeURIComponent(_0xe6704c), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: _0x294573 || ''
        }).then(function (_0x446c5a) {
          return _0x446c5a.json();
        }).then(function (_0x2a505c) {
          if (_0x2a505c && _0x2a505c.player) try {
            localStorage.setItem('1v1_db_player', JSON.stringify(_0x2a505c.player));
          } catch (_0x40f677) {}
        })['catch'](function () {});
      } catch (_0x8032b) {}
      var _0x753d2a = _0x20ed14('', 'updateProgressAndStats');
      return console.log('%c[v446/http] updateProgressAndStats mode=' + _0x190958 + ' ' + _0x3f17d2 + ' k' + _0xdd1a0a + '/d' + _0x3036d1 + ' → +' + _0x9fc513 + 'xp +' + _0x269d7e + 'c (cache+DB)', 'color:#0f0'), JSON.stringify(_0x753d2a);
    }
    if (_0xf30a81.indexOf('refreshBattlePass') !== -1) {
      if (_0x24b2b1) return 'null';
      var _0x40128d = null;
      try {
        var _0x2aad6b = window.localStorage && localStorage.getItem('1v1_db_player');
        if (_0x2aad6b) _0x40128d = JSON.parse(_0x2aad6b);
      } catch (_0x3992e6) {}
      var _0x495c8f = _0x10b584(_0x40128d, 'refreshBattlePass');
      return console.log('%c[v446/http] refreshBattlePass → UserBattlePass (XP=' + _0x495c8f.Seasons['1'].XP + ', bank=' + _0x495c8f.XPBankData.XPLeft + '/200)', 'color:#0f0'), JSON.stringify(_0x495c8f);
    }
    if (_0xf30a81.indexOf('challenges/claimChallenges') !== -1) {
      if (_0x24b2b1) return 'null';
      var _0x19cdf6 = [],
        _0x2c028b = [];
      try {
        var _0x97175b = new URLSearchParams(_0x586429 || '');
        _0x19cdf6 = JSON.parse(_0x97175b.get('dailyChallengesClaimed') || '[]') || [], _0x2c028b = JSON.parse(_0x97175b.get('seasonalChallengesClaimed') || '[]') || [];
      } catch (_0x1fd3ca) {}
      var _0x591c1c = _0x42d9a0(),
        _0x247106 = _0x16b36c() ? _0x30048c(_0x591c1c) : {
          DailyChallengesData: {},
          SeasonalChallengesData: {}
        };
      for (var _0x257959 = 0; _0x257959 < _0x19cdf6.length; _0x257959++) {
        var _0x42324a = String(_0x19cdf6[_0x257959]);
        if (_0x247106.DailyChallengesData[_0x42324a]) {
          _0x247106.DailyChallengesData[_0x42324a].DidClaim = true;
          if (_0x591c1c.DailyChallenges[_0x42324a]) _0x247106.DailyChallengesData[_0x42324a].Points = _0x591c1c.DailyChallenges[_0x42324a].PointsToComplete;
        }
      }
      for (var _0x509105 = 0; _0x509105 < _0x2c028b.length; _0x509105++) {
        var _0x5bffb8 = String(_0x2c028b[_0x509105]);
        if (_0x247106.SeasonalChallengesData[_0x5bffb8]) {
          _0x247106.SeasonalChallengesData[_0x5bffb8].DidClaim = true;
          if (_0x591c1c.SeasonalChallenges[_0x5bffb8]) _0x247106.SeasonalChallengesData[_0x5bffb8].Points = _0x591c1c.SeasonalChallenges[_0x5bffb8].PointsToComplete;
        }
      }
      var _0x42e28a = null;
      try {
        _0x42e28a = JSON.parse(localStorage.getItem('1v1_db_player') || 'null');
      } catch (_0x23ed7a) {}
      return console.log('%c[v446/http] challenges/claimChallenges → anti-wipe response (' + _0x19cdf6.length + ' daily, ' + _0x2c028b.length + ' seasonal)', 'color:#0f0;font-weight:bold'), JSON.stringify({
        UserBattlePass: _0x10b584(_0x42e28a, 'claimChallenges'),
        UserChallenges: {
          CurrentFetchTime: 0,
          LastFetchTime: 0,
          LastDailyBonusClaimTime: 0,
          CurrentStreak: 0,
          DidClaimStreakBonus: false,
          DidClaimDailyBonus: false,
          DailyChallengesData: _0x247106.DailyChallengesData,
          SeasonalChallengesData: _0x247106.SeasonalChallengesData,
          ClaimReceipts: []
        }
      });
    }
    if (_0xf30a81.indexOf('updateChallengesProgress') !== -1 || _0xf30a81.indexOf('challenges/update') !== -1) {
      if (_0x24b2b1) return 'null';
      console.log('%c[v446/http] challenges/update → UserChallenges', 'color:#0f0');
      var _0x5adf76 = _0x16b36c() ? _0x30048c(_0x42d9a0()) : {
        DailyChallengesData: {},
        SeasonalChallengesData: {}
      };
      return JSON.stringify({
        CurrentFetchTime: 0,
        LastFetchTime: 0,
        LastDailyBonusClaimTime: 0,
        CurrentStreak: 0,
        DidClaimStreakBonus: false,
        DidClaimDailyBonus: false,
        DailyChallengesData: _0x5adf76.DailyChallengesData,
        SeasonalChallengesData: _0x5adf76.SeasonalChallengesData,
        ClaimReceipts: []
      });
    }
    if (_0xf30a81.indexOf('cloudfunctions.net') !== -1 || _0xf30a81.indexOf('rc.1v1.lol') !== -1) {
      console.log('%c[v446/http] cloudfunctions/rc → empty 200: ' + _0xf30a81.slice(0, 80), 'color: #888');
      if (_0xf30a81.indexOf('analytics') !== -1) _0x4a5be5('v446-analytics', _0x586429);
      return '{}';
    }
    return '{}';
  }
  var _0x4b1014 = 0,
    _0x3d5e62 = performance.now();
  function _0x1a617c() {
    return typeof window !== 'undefined' && window._MOCK_DIAG === true;
  }
  function _0x6334a2(_0x2e4826) {
    var _0x4927a8 = (_0x2e4826 || '').toLowerCase();
    if (_0x4927a8.indexOf('catalog.json') !== -1) return '%c[DIAG/CATALOG]';
    if (_0x4927a8.indexOf('settings.json') !== -1) return '%c[DIAG/SETTINGS]';
    if (_0x4927a8.indexOf('.bundle') !== -1) return '%c[DIAG/BUNDLE]';
    if (_0x4927a8.indexOf('locale') !== -1 || _0x4927a8.indexOf('/aa/') !== -1) return '%c[DIAG/LOCALE]';
    if (_0x4927a8.indexOf('streamingassets') !== -1) return '%c[DIAG/SA]';
    if (_0x4927a8.indexOf('webgl.') !== -1) return '%c[DIAG/CORE]';
    return '%c[DIAG/HTTP]';
  }
  function _0x201fac(_0x4b786a) {
    if (_0x4b786a.indexOf('CATALOG') !== -1) return 'color: #ff0; font-weight: bold';
    if (_0x4b786a.indexOf('SETTINGS') !== -1) return 'color: #fa0; font-weight: bold';
    if (_0x4b786a.indexOf('BUNDLE') !== -1) return 'color: #f0f';
    if (_0x4b786a.indexOf('LOCALE') !== -1) return 'color: #0ff; font-weight: bold';
    if (_0x4b786a.indexOf('SA') !== -1) return 'color: #aaf';
    if (_0x4b786a.indexOf('CORE') !== -1) return 'color: #aaa';
    return 'color: #888';
  }
  function _0x279efe() {
    if (!_0x1a617c()) return '';
    try {
      var _0x33dbc0 = new Error().stack || '',
        _0x41a53a = _0x33dbc0.split('\n').slice(2, 6);
      return _0x41a53a.map(function (_0x1aa2b4) {
        return _0x1aa2b4.trim();
      }).join(' | ');
    } catch (_0x208b76) {
      return '(no stack)';
    }
  }
  function _0xf0b540(_0x9d7be5) {
    try {
      return new URL(_0x9d7be5, location.href).href;
    } catch (_0x2e7b2d) {
      return _0x9d7be5;
    }
  }
  function _0x1d7a5a(_0xea0789) {
    try {
      var _0x423a24 = new URL(_0xea0789, location.href);
      if (_0x423a24.origin !== location.origin || _0x423a24.pathname.indexOf('/api/v446') !== 0) return '';
      return localStorage.getItem('1v1_session_token') || '';
    } catch (_0x559abd) {
      return '';
    }
  }
  var _0x299b80 = XMLHttpRequest.prototype.open,
    _0xc5b225 = XMLHttpRequest.prototype.send,
    _0x5eacda = XMLHttpRequest.prototype.setRequestHeader;
  XMLHttpRequest.prototype.setRequestHeader = function (_0x536adc) {
    if (String(_0x536adc).toLowerCase() === 'authorization') this._mockHasAuth = true;
    return _0x5eacda.apply(this, arguments);
  }, XMLHttpRequest.prototype.open = function (_0x31751b, _0x287dde) {
    var _0x4651c3 = _0x4fe840(_0x287dde) || _0x3cde3d(_0x287dde) || _0x32c87d(_0x287dde) || _0x36dd60(_0x287dde) || _0x52f4eb(_0x287dde) || _0x3f23ec(_0x287dde) || _0x22d253(_0x287dde);
    return _0x4651c3 && (_0x287dde = _0x4651c3, arguments[1] = _0x4651c3), this._mockUrl = _0x287dde, this._mockMethod = _0x31751b, this._mockSeq = ++_0x4b1014, this._mockT0 = performance.now(), _0x299b80.apply(this, arguments);
  }, XMLHttpRequest.prototype.send = function (_0x35eeca) {
    var _0x4394a2 = this,
      _0x389769 = this._mockSeq,
      _0xe17685 = _0xf0b540(this._mockUrl),
      _0x383eab = _0x6334a2(_0xe17685),
      _0x312b13 = _0x279efe(),
      _0x5480c0 = (performance.now() - _0x3d5e62).toFixed(0);
    if (_0x267036(this._mockUrl)) {
      console.log(_0x383eab + ' XHR#%d MOCK %s %s @%sms', _0x201fac(_0x383eab), _0x389769, this._mockMethod, _0xe17685, _0x5480c0), console.log('  ↳ stack: ' + _0x312b13), setTimeout(function () {
        var _0x1d1ea9 = _0xf0ac0a(_0x4394a2._mockUrl, _0x35eeca) || '{}';
        Object.defineProperty(_0x4394a2, 'readyState', {
          value: 4,
          configurable: true
        }), Object.defineProperty(_0x4394a2, 'status', {
          value: 200,
          configurable: true
        }), Object.defineProperty(_0x4394a2, 'responseText', {
          value: _0x1d1ea9,
          configurable: true
        }), Object.defineProperty(_0x4394a2, 'response', {
          value: _0x1d1ea9,
          configurable: true
        });
        if (typeof _0x4394a2.onreadystatechange === 'function') _0x4394a2.onreadystatechange();
        if (typeof _0x4394a2.onload === 'function') _0x4394a2.onload();
      }, 1);
      return;
    }
    console.log(_0x383eab + ' XHR#%d → %s %s @%sms', _0x201fac(_0x383eab), _0x389769, this._mockMethod, _0xe17685, _0x5480c0), console.log('  ↳ stack: ' + _0x312b13);
    var _0xc0b8dc = function () {
      if (_0x4394a2.readyState !== 4) return;
      var _0x260e10 = (performance.now() - _0x4394a2._mockT0).toFixed(0),
        _0x1ddf27 = 0;
      try {
        if (_0x4394a2.response instanceof ArrayBuffer) _0x1ddf27 = _0x4394a2.response.byteLength;else {
          if (typeof _0x4394a2.responseText === 'string') _0x1ddf27 = _0x4394a2.responseText.length;
        }
      } catch (_0x589d98) {}
      var _0x4c416c = _0x4394a2.status >= 200 && _0x4394a2.status < 400,
        _0x1c167d = _0x4c416c ? 'color: #6f6' : 'color: #f44; font-weight: bold';
      console.log(_0x383eab + ' XHR#%d ← %d (%d bytes, %sms) %s', _0x201fac(_0x383eab) + ';' + _0x1c167d, _0x389769, _0x4394a2.status, _0x1ddf27, _0x260e10, _0xe17685);
    };
    this.addEventListener('loadend', _0xc0b8dc);
    if (!this._mockHasAuth) {
      var _0x30e8ed = _0x1d7a5a(this._mockUrl);
      if (_0x30e8ed) try {
        _0x5eacda.call(this, 'Authorization', 'Bearer ' + _0x30e8ed);
      } catch (_0x13539f) {}
    }
    return _0xc5b225.apply(this, arguments);
  };
  var _0x334480 = window.fetch ? window.fetch.bind(window) : null;
  _0x334480 && (window.fetch = function (_0x48b709, _0x166083) {
    var _0x1d2c0d = typeof _0x48b709 === 'string' ? _0x48b709 : _0x48b709 && _0x48b709.url || '',
      _0x442158 = _0x4fe840(_0x1d2c0d) || _0x3cde3d(_0x1d2c0d) || _0x32c87d(_0x1d2c0d) || _0x36dd60(_0x1d2c0d) || _0x52f4eb(_0x1d2c0d) || _0x3f23ec(_0x1d2c0d) || _0x22d253(_0x1d2c0d);
    _0x442158 && (_0x48b709 = typeof _0x48b709 === 'string' ? _0x442158 : new Request(_0x442158, _0x48b709), _0x1d2c0d = _0x442158);
    var _0x551707 = _0x166083 && _0x166083.method || _0x48b709 && _0x48b709.method || 'GET',
      _0xce07be = ++_0x4b1014,
      _0x4e0ca7 = _0xf0b540(_0x1d2c0d),
      _0x151979 = _0x6334a2(_0x4e0ca7),
      _0x251576 = _0x279efe(),
      _0x8b8c78 = (performance.now() - _0x3d5e62).toFixed(0),
      _0x492817 = performance.now();
    if (_0x267036(_0x1d2c0d)) {
      console.log(_0x151979 + ' FETCH#%d MOCK %s %s @%sms', _0x201fac(_0x151979), _0xce07be, _0x551707, _0x4e0ca7, _0x8b8c78), console.log('  ↳ stack: ' + _0x251576);
      var _0x41dd10 = _0xf0ac0a(_0x1d2c0d, _0x166083 && _0x166083.body);
      return Promise.resolve(new Response(_0x41dd10, {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }));
    }
    console.log(_0x151979 + ' FETCH#%d → %s %s @%sms', _0x201fac(_0x151979), _0xce07be, _0x551707, _0x4e0ca7, _0x8b8c78), console.log('  ↳ stack: ' + _0x251576);
    var _0x2420b6 = _0x1d7a5a(_0x1d2c0d);
    if (_0x2420b6) try {
      var _0x525c30 = new Headers(_0x166083 && _0x166083.headers || _0x48b709 && typeof _0x48b709 !== 'string' && _0x48b709.headers || undefined);
      !_0x525c30.has('Authorization') && (_0x525c30.set('Authorization', 'Bearer ' + _0x2420b6), _0x166083 = Object.assign({}, _0x166083 || {}, {
        headers: _0x525c30
      }));
    } catch (_0x262604) {}
    return _0x334480(_0x48b709, _0x166083).then(function (_0x35dbdc) {
      var _0x287d63 = (performance.now() - _0x492817).toFixed(0),
        _0x210a71 = _0x35dbdc.ok,
        _0x21270c = _0x210a71 ? 'color: #6f6' : 'color: #f44; font-weight: bold',
        _0x45e13f = _0x35dbdc.headers.get('content-length') || '?';
      return console.log(_0x151979 + ' FETCH#%d ← %d (%s bytes, %sms) %s', _0x201fac(_0x151979) + ';' + _0x21270c, _0xce07be, _0x35dbdc.status, _0x45e13f, _0x287d63, _0x4e0ca7), _0x35dbdc;
    })['catch'](function (_0x409c1a) {
      var _0x4045d8 = (performance.now() - _0x492817).toFixed(0);
      console.log(_0x151979 + ' FETCH#%d ✗ ERR (%sms) %s — %s', _0x201fac(_0x151979) + ';color:#f44;font-weight:bold', _0xce07be, _0x4045d8, _0x4e0ca7, _0x409c1a && _0x409c1a.message || _0x409c1a);
      throw _0x409c1a;
    });
  });
  function _0x1a48ac(_0x39aad3, _0x3f41c2) {
    this.url = _0x39aad3, this.readyState = 0, this.binaryType = 'blob', this.protocol = Array.isArray(_0x3f41c2) ? _0x3f41c2[0] || '' : _0x3f41c2 || '', this.extensions = '', this.bufferedAmount = 0, this.onopen = this.onmessage = this.onclose = this.onerror = null, this._lis = {};
    var _0x27f3f5 = this;
    setTimeout(function () {
      if (_0x27f3f5.readyState !== 0) return;
      _0x27f3f5.readyState = 1, console.log('%c[mns/stomp] WS open ' + _0x39aad3, 'color:#0cf'), _0x27f3f5._fire('open', {
        type: 'open'
      });
    }, 0);
  }
  _0x1a48ac.prototype.addEventListener = function (_0x3b5aa, _0x2673bb) {
    (this._lis[_0x3b5aa] = this._lis[_0x3b5aa] || []).push(_0x2673bb);
  }, _0x1a48ac.prototype.removeEventListener = function (_0x2a42ec, _0x23e05f) {
    var _0x2608a6 = this._lis[_0x2a42ec];
    if (!_0x2608a6) return;
    var _0x2f7fab = _0x2608a6.indexOf(_0x23e05f);
    if (_0x2f7fab >= 0) _0x2608a6.splice(_0x2f7fab, 1);
  }, _0x1a48ac.prototype._fire = function (_0x5ba659, _0x4459dd) {
    var _0x1d1488 = this['on' + _0x5ba659];
    if (typeof _0x1d1488 === 'function') try {
      _0x1d1488.call(this, _0x4459dd);
    } catch (_0x5e511f) {
      console.warn('[mns] on' + _0x5ba659 + ' err', _0x5e511f);
    }
    var _0x56570d = this._lis[_0x5ba659];
    if (_0x56570d) _0x56570d.slice().forEach(function (_0x3322c4) {
      try {
        _0x3322c4.call(this, _0x4459dd);
      } catch (_0x549f0b) {
        console.warn('[mns] ' + _0x5ba659 + ' listener err', _0x549f0b);
      }
    }, this);
  }, _0x1a48ac.prototype._deliver = function (_0x425f44, _0x32002f) {
    var _0x50d39b;
    if (_0x32002f) {
      var _0x3058ab = new TextEncoder().encode(_0x425f44);
      _0x50d39b = this.binaryType === 'arraybuffer' ? _0x3058ab.buffer : new Blob([_0x3058ab]);
    } else _0x50d39b = _0x425f44;
    this._fire('message', {
      type: 'message',
      data: _0x50d39b
    });
  }, _0x1a48ac.prototype.send = function (_0x141ef0) {
    var _0x1c1555 = this;
    if (_0x1c1555.readyState !== 1) return;
    var _0x55dedf = typeof _0x141ef0 !== 'string';
    try {
      if (typeof _0x141ef0 === 'string') _0x1c1555._handleFrame(_0x141ef0, _0x55dedf);else {
        if (_0x141ef0 instanceof ArrayBuffer) _0x1c1555._handleFrame(new TextDecoder().decode(new Uint8Array(_0x141ef0)), _0x55dedf);else {
          if (_0x141ef0 && _0x141ef0.buffer) _0x1c1555._handleFrame(new TextDecoder().decode(new Uint8Array(_0x141ef0.buffer, _0x141ef0.byteOffset || 0, _0x141ef0.byteLength)), _0x55dedf);else {
            if (typeof Blob !== 'undefined' && _0x141ef0 instanceof Blob) _0x141ef0.text().then(function (_0x492cb9) {
              _0x1c1555._handleFrame(_0x492cb9, _0x55dedf);
            });else _0x1c1555._handleFrame(String(_0x141ef0), _0x55dedf);
          }
        }
      }
    } catch (_0x568ad1) {}
  }, _0x1a48ac.prototype._handleFrame = function (_0xab122c, _0x402db2) {
    var _0x458e7d = this,
      _0x1b3178 = (_0xab122c || '').replace(/\0+$/, '');
    if (_0x1b3178 === '' || _0x1b3178 === '\n' || _0x1b3178 === '\r\n') return;
    var _0xa770f9 = _0x1b3178.split('\n')[0].replace(/\r$/, '').trim().toUpperCase(),
      _0x250338 = /(^|\n)receipt:([^\n\r]+)/.exec(_0x1b3178);
    if (_0xa770f9 === 'CONNECT' || _0xa770f9 === 'STOMP') {
      var _0x45f1e1 = 'CONNECTED\nversion:1.2\nheart-beat:0,0\nserver:mns-mock/1.0\nsession:' + (window.__mnsSocketSession || 'mns-' + Date.now()) + '\n\n\0';
      console.log('%c[mns/stomp] CONNECT → CONNECTED', 'color:#0cf'), setTimeout(function () {
        _0x458e7d._deliver(_0x45f1e1, _0x402db2);
      }, 0);
    } else {
      if (_0xa770f9 === 'SUBSCRIBE') {
        console.log('%c[mns/stomp] SUBSCRIBE acked', 'color:#0cf');
        if (_0x250338) {
          var _0x310a13 = 'RECEIPT\nreceipt-id:' + _0x250338[2].trim() + '\n\n\0';
          setTimeout(function () {
            _0x458e7d._deliver(_0x310a13, _0x402db2);
          }, 0);
        }
      } else {
        if (_0xa770f9 === 'DISCONNECT') {
          if (_0x250338) _0x458e7d._deliver('RECEIPT\nreceipt-id:' + _0x250338[2].trim() + '\n\n\0', _0x402db2);
          _0x458e7d.close(1000, 'client disconnect');
        }
      }
    }
  }, _0x1a48ac.prototype.close = function (_0x38af12, _0x4f2425) {
    if (this.readyState >= 2) return;
    this.readyState = 2;
    var _0x2bffb6 = this;
    setTimeout(function () {
      _0x2bffb6.readyState = 3, _0x2bffb6._fire('close', {
        type: 'close',
        code: _0x38af12 || 1000,
        reason: _0x4f2425 || '',
        wasClean: true
      });
    }, 0);
  };
  var _0xb86251 = false;
  try {
    _0xb86251 = location.search.indexOf('capture=1') !== -1 || localStorage.getItem('1v1_capture') === '1';
  } catch (_0x400446) {}
  var _0x1d2bd3 = false;
  try {
    _0x1d2bd3 = location.search.indexOf('real=1') !== -1 || localStorage.getItem('1v1_capture_real') === '1';
  } catch (_0x17bc77) {}
  var _0x49fa5f = 0,
    _0x36a3eb = 64,
    _0x1631d1 = ['748df142-c087-424c-b6ca-b57f4b0db24d', 'a91bc262-1acd-4909-9b09-03afb98ee202'],
    _0x23322a = '191ddbec-da46-47f9-a25d-dd711c5dd86d',
    _0x386b80 = 'x';
  try {
    _0x386b80 = (location.search.match(/[?&]capid=([^&]+)/) || [])[1] || Math.random().toString(36).slice(2, 8);
  } catch (_0x506946) {}
  if (_0xb86251) console.log('%c[CAPTURE] ON — Photon → REAL cloud, frames logged. Do the custom-from-party start now.', 'color:#f00;font-weight:bold;font-size:14px');
  function _0x4555d6(_0x35030b) {
    var _0x39216d = new Uint8Array(_0x35030b),
      _0x354499 = [];
    for (var _0x4bf0e1 = 0; _0x4bf0e1 < _0x39216d.length; _0x4bf0e1++) _0x354499.push(('0' + _0x39216d[_0x4bf0e1].toString(16)).slice(-2));
    return _0x354499.join(' ');
  }
  function _0x2168f1(_0x13dbb6) {
    try {
      _0x13dbb6.cid = _0x386b80, _0x13dbb6.ct = window.performance ? Math.round(performance.now()) : 0, (_0x334480 || fetch)('http://localhost:19099/cap', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify(_0x13dbb6),
        keepalive: true
      })['catch'](function () {});
    } catch (_0x26be9f) {}
  }
  if (_0xb86251) try {
    _0x2168f1({
      ev: 'page-loaded',
      real: _0x1d2bd3,
      href: location.href,
      ua: navigator.userAgent.slice(0, 60)
    });
  } catch (_0x2d84eb) {}
  function _0x52410d(_0x544f5d, _0x7798b1) {
    var _0x8d4737 = 0;
    _0x544f5d.addEventListener('message', function (_0x2c9ee7) {
      _0x8d4737++;
      if (_0x2c9ee7.data instanceof ArrayBuffer) {
        var _0x549bb6 = new Uint8Array(_0x2c9ee7.data),
          _0x239799 = _0x549bb6.length >= 2 ? _0x549bb6[1] : -1,
          _0x2c30b4 = {
            1: 'Init',
            3: 'OpResp',
            4: 'Event',
            7: 'IntOpResp'
          }[_0x239799] || 't' + _0x239799,
          _0x270428 = _0x4555d6(_0x2c9ee7.data);
        console.log('%c[CAP ' + _0x7798b1 + ' #' + _0x8d4737 + '] RECV ' + _0x549bb6.length + 'B ' + _0x2c30b4 + ': ' + _0x270428, 'color:#f0f;font-size:11px'), _0x2168f1({
          dir: 'RECV',
          label: _0x7798b1,
          n: _0x8d4737,
          len: _0x549bb6.length,
          type: _0x2c30b4,
          hex: _0x270428
        });
      } else console.log('%c[CAP ' + _0x7798b1 + ' #' + _0x8d4737 + '] RECV text: ' + _0x2c9ee7.data, 'color:#f0f');
    });
    var _0x3d7fd3 = _0x544f5d.send.bind(_0x544f5d),
      _0xc9d911 = new TextEncoder().encode(_0x23322a),
      _0x49134e = _0x1631d1.map(function (_0x558fa7) {
        return new TextEncoder().encode(_0x558fa7);
      });
    return _0x544f5d.send = function (_0x19a03d) {
      var _0x2a75f9 = _0x19a03d instanceof Uint8Array ? _0x19a03d : new Uint8Array(_0x19a03d),
        _0x4a7da9 = new Uint8Array(_0x2a75f9);
      for (var _0x456bac = 0; _0x456bac < _0x49134e.length; _0x456bac++) {
        var _0xaa5304 = _0x49134e[_0x456bac];
        if (_0x4a7da9.length < _0xaa5304.length) continue;
        for (var _0x2fba81 = 0; _0x2fba81 <= _0x4a7da9.length - _0xaa5304.length; _0x2fba81++) {
          var _0x513138 = true;
          for (var _0x2f4ee9 = 0; _0x2f4ee9 < _0xaa5304.length; _0x2f4ee9++) {
            if (_0x4a7da9[_0x2fba81 + _0x2f4ee9] !== _0xaa5304[_0x2f4ee9]) {
              _0x513138 = false;
              break;
            }
          }
          if (_0x513138) {
            for (var _0x505b5d = 0; _0x505b5d < _0xc9d911.length; _0x505b5d++) _0x4a7da9[_0x2fba81 + _0x505b5d] = _0xc9d911[_0x505b5d];
            _0x2fba81 += _0xaa5304.length - 1, console.log('%c[CAP ' + _0x7798b1 + '] AppId rewritten → ours (' + _0x1631d1[_0x456bac].slice(0, 8) + '…)', 'color:#0f0;font-weight:bold');
          }
        }
      }
      var _0x8861a8 = _0x4a7da9.length >= 2 ? _0x4a7da9[1] : -1,
        _0x341c0f = {
          1: 'Init',
          2: 'OpReq',
          6: 'IntOpReq'
        }[_0x8861a8] || 't' + _0x8861a8,
        _0x595fa4 = _0x4555d6(_0x4a7da9);
      return console.log('%c[CAP ' + _0x7798b1 + '] SEND ' + _0x4a7da9.length + 'B ' + _0x341c0f + ': ' + _0x595fa4, 'color:#0ff;font-size:11px'), _0x2168f1({
        dir: 'SEND',
        label: _0x7798b1,
        len: _0x4a7da9.length,
        type: _0x341c0f,
        hex: _0x595fa4
      }), _0x3d7fd3(_0x4a7da9.buffer);
    }, _0x544f5d;
  }
  var _0x24d215 = window.WebSocket;
  window.WebSocket = function (_0x519f23, _0x5e985f) {
    if (_0xb86251) try {
      _0x2168f1({
        ev: 'ws-open',
        url: String(_0x519f23),
        proto: String(_0x5e985f || '')
      });
    } catch (_0x4e3876) {}
    if (typeof _0x519f23 === 'string' && _0x519f23.indexOf('messaging-nucleus') !== -1) return console.log('%c[mns/stomp] intercept → FakeStompWS: ' + _0x519f23, 'color:#0cf'), new _0x1a48ac(_0x519f23, _0x5e985f);
    if (_0xb86251 && _0x1d2bd3 && typeof _0x519f23 === 'string') {
      var _0x3f9f70 = _0x519f23.indexOf('exitgames') !== -1 || _0x519f23.indexOf('photonengine') !== -1 || (_0x519f23.indexOf('ws://') === 0 || _0x519f23.indexOf('wss://') === 0) && (_0x519f23.indexOf('/ns') !== -1 || _0x519f23.indexOf('/master') !== -1 || _0x519f23.indexOf('/game') !== -1);
      if (_0x3f9f70 && _0x49fa5f < _0x36a3eb) {
        _0x49fa5f++;
        var _0x4eb1ec = _0x519f23;
        try {
          var _0x206db2 = new URL(_0x519f23);
          /photonengine|exitgames/.test(_0x206db2.hostname) && (_0x206db2.protocol = 'wss:', _0x206db2.port = '443', _0x4eb1ec = _0x206db2.toString());
        } catch (_0x46e89d) {}
        console.log('%c[CAPTURE] conn #' + _0x49fa5f + ' → REAL Photon: ' + _0x519f23 + (_0x4eb1ec !== _0x519f23 ? '  (routed → ' + _0x4eb1ec + ')' : ''), 'color:#f00;font-weight:bold;font-size:13px');
        var _0x1fde8b = new _0x24d215(_0x4eb1ec, _0x5e985f);
        return _0x1fde8b.binaryType = 'arraybuffer', _0x52410d(_0x1fde8b, 'REAL-' + _0x49fa5f);
      }
    }
    var _0x5d95a0 = _0x519f23,
      _0x37189a = /^wss?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:|\/)/.test(_0x519f23),
      _0x36bbfa = /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/.test(location.hostname);
    if (!_0x36bbfa && /^wss?:\/\//.test(_0x519f23)) {
      var _0x1edcfb = null;
      if (_0x519f23.indexOf('/ns') !== -1 || _0x519f23.indexOf('ns.exitgames') !== -1 || _0x519f23.indexOf('ns.photonengine') !== -1) _0x1edcfb = '/ns';else {
        if (_0x519f23.indexOf('/game') !== -1) _0x1edcfb = '/game';else {
          if (_0x519f23.indexOf('/master') !== -1 || _0x519f23.indexOf('exitgames') !== -1 || _0x519f23.indexOf('photonengine') !== -1) _0x1edcfb = '/master';
        }
      }
      if (_0x1edcfb) {
        var _0x259adc = _0x519f23.indexOf('?'),
          _0xfe7cfa = _0x259adc !== -1 && _0x519f23.indexOf('app=chat') !== -1 ? _0x519f23.slice(_0x259adc) : '',
          _0x1ca22c = (location.host || '').toLowerCase().replace(/:.*$/, '').replace(/^(?:beta|old|www)\./, ''),
          _0x23c2c0 = ['onecloudcdn.site', '1v1lolreloaded.com'].indexOf(_0x1ca22c) !== -1 ? _0x1ca22c : '1v1lolreloaded.com',
          _0x4c67cd = {
            eu: 'eu.' + _0x23c2c0
          },
          _0x24dc2a = (typeof window !== 'undefined' && window.__photonRegion || '').toLowerCase(),
          _0x4fc406 = _0x4c67cd[_0x24dc2a] || '';
        if (_0x4fc406) _0x5d95a0 = 'wss://' + _0x4fc406 + '/ws' + _0x1edcfb + _0xfe7cfa;else {
          var _0x2f2059 = _0x519f23.match(/^wss?:\/\/([^/:?#]+)/),
            _0x43e9ad = _0x2f2059 ? _0x2f2059[1].toLowerCase() : '';
          _0x43e9ad && /(^|\.)1v1lolreloaded\.com$/.test(_0x43e9ad) && _0x43e9ad !== location.host.toLowerCase() ? _0x5d95a0 = 'wss://' + _0x43e9ad + '/ws' + _0x1edcfb + _0xfe7cfa : _0x5d95a0 = 'wss://' + location.host + '/ws' + _0x1edcfb + _0xfe7cfa;
        }
        console.log('%c[v446/ws] PROD redirect: ' + _0x519f23 + ' → ' + _0x5d95a0 + ' (region=' + (_0x24dc2a || 'us') + ')', 'color: #0ff');
      }
    } else {
      if (/^wss?:\/\//.test(_0x519f23) && !_0x37189a) _0x5d95a0 = (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.hostname + ':19090/' + _0x519f23.replace(/^wss?:\/\//, ''), console.log('%c[v446/ws] Redirect: ' + _0x519f23 + ' → ' + _0x5d95a0, 'color: #0ff');else _0x37189a && console.log('%c[v446/ws] Passthrough (already local): ' + _0x519f23, 'color: #0ff');
    }
    if (typeof _0x5d95a0 === 'string' && !/[?&]uid=/.test(_0x5d95a0)) {
      var _0x1d1701 = _0x5ed5cf() ? '' : _0x4af88b();
      if (_0x1d1701) {
        _0x5d95a0 += (_0x5d95a0.indexOf('?') !== -1 ? '&' : '?') + 'uid=' + encodeURIComponent(_0x1d1701);
        try {
          var _0x34e0a9 = localStorage.getItem('1v1_session_token') || '';
          if (_0x34e0a9) _0x5d95a0 += '&st=' + encodeURIComponent(_0x34e0a9);
        } catch (_0x99b28f) {}
        console.log('%c[v446/ws] uid/st injected: ' + _0x1d1701, 'color:#0ff');
      }
    }
    typeof _0x5d95a0 === 'string' && (_0x5d95a0.indexOf(':19090') !== -1 || _0x5d95a0.indexOf('/ws/') !== -1) && !/[?&]bv=/.test(_0x5d95a0) && (_0x5d95a0 += (_0x5d95a0.indexOf('?') !== -1 ? '&' : '?') + 'bv=4.46');
    if (typeof _0x5d95a0 === 'string' && (_0x5d95a0.indexOf(':19090') !== -1 || _0x5d95a0.indexOf('/ws/') !== -1) && !/[?&]gaid=/.test(_0x5d95a0) && _0x5ed5cf()) try {
      var _0x392771 = _0x5da4f0(),
        _0x35c814 = _0x392771 ? 'install:' + _0x392771 : '';
      if (!_0x35c814) {
        var _0x41f009 = _0x4af88b();
        if (_0x41f009) _0x35c814 = 'fbanon:' + _0x41f009;
      }
      if (_0x35c814) _0x5d95a0 += (_0x5d95a0.indexOf('?') !== -1 ? '&' : '?') + 'gaid=' + encodeURIComponent(_0x35c814);
    } catch (_0x3dbd30) {}
    if (typeof _0x5d95a0 === 'string' && (_0x5d95a0.indexOf(':19090') !== -1 || _0x5d95a0.indexOf('/ws/') !== -1) && !/[?&]gnick=/.test(_0x5d95a0) && _0x5ed5cf()) try {
      var _0x5aaa86 = window.localStorage && localStorage.getItem('1v1_nickname') || '';
      if (_0x5aaa86) _0x5d95a0 += (_0x5d95a0.indexOf('?') !== -1 ? '&' : '?') + 'gnick=' + encodeURIComponent(_0x5aaa86.slice(0, 20));
    } catch (_0x4b8c3b) {}
    if (typeof _0x5d95a0 === 'string' && (_0x5d95a0.indexOf(':19090') !== -1 || _0x5d95a0.indexOf('/ws/') !== -1) && !/[?&]uid=/.test(_0x5d95a0)) try {
      var _0x206db2 = _0x5ed5cf() ? '' : _0x4af88b();
      if (_0x206db2) {
        _0x5d95a0 += (_0x5d95a0.indexOf('?') !== -1 ? '&' : '?') + 'uid=' + encodeURIComponent(_0x206db2);
        var _0xc94120 = localStorage.getItem('1v1_session_token') || '';
        if (_0xc94120) _0x5d95a0 += '&st=' + encodeURIComponent(_0xc94120);
      }
    } catch (_0x3a328b) {}
    var _0x5cf706 = _0x5e985f ? new _0x24d215(_0x5d95a0, _0x5e985f) : new _0x24d215(_0x5d95a0);
    if (typeof _0x5d95a0 === 'string' && (_0x5d95a0.indexOf('/ws/') !== -1 || _0x5d95a0.indexOf(':19090') !== -1) && _0x5cf706 && typeof _0x5cf706.send === 'function') try {
      var _0x277da4 = _0x5cf706.send.bind(_0x5cf706);
      _0x5cf706.send = function (_0x4cb5af) {
        try {
          var _0x5c8df4 = _0x4cb5af instanceof ArrayBuffer ? _0x4cb5af : _0x4cb5af && _0x4cb5af.buffer instanceof ArrayBuffer ? _0x4cb5af.buffer : null;
          if (_0x5c8df4 && _0x5c8df4.byteLength < 1024) {
            var _0x23611e = new Uint8Array(_0x5c8df4);
            for (var _0x3dce59 = 0; _0x3dce59 + 4 < _0x23611e.length; _0x3dce59++) {
              if (_0x23611e[_0x3dce59] === 210 && _0x23611e[_0x3dce59 + 1] === 7) {
                var _0x49b970 = _0x23611e[_0x3dce59 + 2];
                if (_0x49b970 >= 2 && _0x49b970 <= 8 && _0x3dce59 + 3 + _0x49b970 <= _0x23611e.length) {
                  var _0x387cd2 = '';
                  for (var _0x2f04c0 = 0; _0x2f04c0 < _0x49b970; _0x2f04c0++) _0x387cd2 += String.fromCharCode(_0x23611e[_0x3dce59 + 3 + _0x2f04c0]);
                  window.__cdnMirror === '1v1lol.ru' && _0x49b970 === 2 && _0x387cd2.toLowerCase() === 'eu' && (_0x23611e[_0x3dce59 + 3] = 117, _0x23611e[_0x3dce59 + 4] = 115, _0x387cd2 = 'us', console.log('%c[v446/ws] region eu → us (framed by ' + window.__cdnMirror + ')', 'color:#0ff')), /^[a-z]{2,8}$/i.test(_0x387cd2) && _0x387cd2.toLowerCase() !== window.__photonRegion && (window.__photonRegion = _0x387cd2.toLowerCase(), console.log('%c[v446/ws] region captured from Auth: ' + window.__photonRegion, 'color:#0ff'));
                }
                break;
              }
            }
          }
        } catch (_0xdda8ec) {}
        return _0x277da4(_0x4cb5af);
      };
    } catch (_0x475ac1) {}
    if (_0xb86251 && !_0x1d2bd3 && typeof _0x5d95a0 === 'string' && (_0x5d95a0.indexOf(':19090') !== -1 || _0x5d95a0.indexOf('/ws/') !== -1)) try {
      _0x5cf706.binaryType = 'arraybuffer', _0x49fa5f++, _0x52410d(_0x5cf706, 'OURS-' + _0x49fa5f);
    } catch (_0x2a671c) {}
    return _0x5cf706;
  }, window.WebSocket.prototype = _0x24d215.prototype, window.WebSocket.CONNECTING = _0x24d215.CONNECTING, window.WebSocket.OPEN = _0x24d215.OPEN, window.WebSocket.CLOSING = _0x24d215.CLOSING, window.WebSocket.CLOSED = _0x24d215.CLOSED, function () {
    try {
      var _0x285b13 = false,
        _0x17c8bb = 0;
      function _0x16ce7b() {
        try {
          var _0x135b2b = ['monospace', 'sans-serif', 'serif'],
            _0x30088b = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia', 'Garamond', 'Comic Sans MS', 'Trebuchet MS', 'Impact', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'Calibri', 'Cambria', 'Consolas', 'Tahoma', 'Lucida Console', 'Menlo'],
            _0x5a0554 = document.createElement('canvas').getContext('2d'),
            _0x1e4214 = 'mmmmmmmmmmlli__WWW',
            _0x20cbbb = '72px',
            _0x18b085 = {};
          _0x135b2b.forEach(function (_0x180f1a) {
            _0x5a0554.font = _0x20cbbb + ' ' + _0x180f1a, _0x18b085[_0x180f1a] = _0x5a0554.measureText(_0x1e4214).width;
          });
          var _0xe0d8f1 = [];
          return _0x30088b.forEach(function (_0x3d2b01) {
            for (var _0xbc0120 = 0; _0xbc0120 < _0x135b2b.length; _0xbc0120++) {
              _0x5a0554.font = _0x20cbbb + ' "' + _0x3d2b01 + '",' + _0x135b2b[_0xbc0120];
              if (_0x5a0554.measureText(_0x1e4214).width !== _0x18b085[_0x135b2b[_0xbc0120]]) {
                _0xe0d8f1.push(_0x3d2b01);
                break;
              }
            }
          }), _0xe0d8f1.join(',');
        } catch (_0x395cfd) {
          return '';
        }
      }
      function _0x18a4ab() {
        try {
          var _0xa99d38 = document.createElement('canvas');
          _0xa99d38.width = 240, _0xa99d38.height = 60;
          var _0x550d78 = _0xa99d38.getContext('2d');
          return _0x550d78.textBaseline = 'top', _0x550d78.font = '14px "Arial"', _0x550d78.fillStyle = '#f60', _0x550d78.fillRect(125, 1, 62, 20), _0x550d78.fillStyle = '#069', _0x550d78.fillText('1v1.LOL fp ♥', 2, 15), _0x550d78.fillStyle = 'rgba(102,204,0,0.7)', _0x550d78.fillText('1v1.LOL fp ♥', 4, 17), _0xa99d38.toDataURL();
        } catch (_0x480fe0) {
          return '';
        }
      }
      function _0x45ccbe() {
        try {
          var _0x2346a9 = document.createElement('canvas').getContext('webgl') || document.createElement('canvas').getContext('experimental-webgl');
          if (!_0x2346a9) return '';
          var _0x5371ee = _0x2346a9.getExtension('WEBGL_debug_renderer_info'),
            _0x543118 = _0x5371ee ? _0x2346a9.getParameter(_0x5371ee.UNMASKED_VENDOR_WEBGL) : '',
            _0x59ac6c = _0x5371ee ? _0x2346a9.getParameter(_0x5371ee.UNMASKED_RENDERER_WEBGL) : '';
          return (_0x543118 || '') + '~' + (_0x59ac6c || '') + '~' + (_0x2346a9.getParameter(_0x2346a9.VERSION) || '');
        } catch (_0x42c9ae) {
          return '';
        }
      }
      function _0x3ed64c() {
        var _0x1a2dbd = navigator,
          _0x70cbff = screen;
        return [_0x16ce7b(), _0x70cbff.width + 'x' + _0x70cbff.height + 'x' + (_0x70cbff.colorDepth || ''), _0x1a2dbd.hardwareConcurrency || '', _0x1a2dbd.deviceMemory || '', _0x1a2dbd.platform || '', new Date().getTimezoneOffset(), (_0x1a2dbd.languages || [_0x1a2dbd.language || '']).join(',')].join('|');
      }
      function _0x1c295a() {
        var _0x7b5e1e = navigator,
          _0x5e558f = screen;
        return [_0x7b5e1e.userAgent || '', _0x18a4ab(), _0x45ccbe(), _0x7b5e1e.deviceMemory || '', window.devicePixelRatio || '', _0x5e558f.width + 'x' + _0x5e558f.height, new Date().getTimezoneOffset()].join('|');
      }
      function _0x113b3c(_0x2964ae) {
        try {
          if (!(window.crypto && crypto.subtle && crypto.subtle.digest)) return Promise.resolve('');
          return crypto.subtle.digest('SHA-256', new TextEncoder().encode(_0x2964ae)).then(function (_0x2b579d) {
            return Array.prototype.map.call(new Uint8Array(_0x2b579d), function (_0x3d6f08) {
              return ('0' + _0x3d6f08.toString(16)).slice(-2);
            }).join('');
          })['catch'](function () {
            return '';
          });
        } catch (_0x14fb64) {
          return Promise.resolve('');
        }
      }
      function _0x51229d() {
        _0x17c8bb++;
        var _0x580766 = '';
        try {
          _0x580766 = localStorage.getItem('1v1_session_token') || '';
        } catch (_0x5efa55) {}
        if (!_0x580766 || _0x285b13) return;
        _0x285b13 = true, Promise.all([_0x113b3c(_0x1c295a()), _0x113b3c(_0x3ed64c())]).then(function (_0x26fde7) {
          if (!_0x26fde7[0]) {
            _0x285b13 = false;
            return;
          }
          fetch(location.origin + '/api/fp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            cache: 'no-store',
            body: JSON.stringify({
              fp: _0x26fde7[0],
              hwfp: _0x26fde7[1],
              token: _0x580766
            })
          })['catch'](function () {});
        })['catch'](function () {
          _0x285b13 = false;
        });
      }
      var _0x4b05ef = setInterval(function () {
        _0x51229d();
        if (_0x285b13 || _0x17c8bb >= 12) clearInterval(_0x4b05ef);
      }, 4000);
    } catch (_0x7cbb9f) {}
  }(), console.log('[v446/mock] Ready. HTTP + fetch + WebSocket intercepts installed.');
})();