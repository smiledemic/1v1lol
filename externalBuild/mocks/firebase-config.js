// Readable version of the original obfuscated file: string table decoded, constants folded, dead decoder removed. Behaviour unchanged.
let conf;
const _DAILY_SKINS = function () {
    try {
      return !(typeof window !== 'undefined' && window.localStorage && localStorage.getItem('DAILY_SKINS') === '0');
    } catch (_0x3a20c4) {
      return true;
    }
  }(),
  OFFER_TS = '2026-06-14T00:00:00Z',
  OFFER_DEFS = [{
    key: 'offer_x4_common',
    name: 'x4 Spins',
    box: 'lol.1v1.lootbox.GS1',
    amount: 4,
    rarity: 0,
    currency: 'LC',
    regular: 220,
    sale: 180,
    banner: 'Offer_12.png'
  }, {
    key: 'offer_x3_rare',
    name: 'x3 Spins',
    box: 'lol.1v1.lootbox.GS2',
    amount: 3,
    rarity: 2,
    currency: 'LC',
    regular: 270,
    sale: 215,
    banner: 'Offer_13.png'
  }, {
    key: 'offer_legendary',
    name: 'Legendary Spin',
    box: 'lol.1v1.lootbox.GSL',
    amount: 1,
    rarity: 4,
    currency: 'LC',
    regular: 3200,
    sale: 1600,
    banner: 'Offer_10.png'
  }],
  OFFER_BUNDLE_ID = _0x2e0a1f => 'lol.1v1.bundlepacks.' + _0x2e0a1f;
try {
  if (typeof window !== 'undefined') window.__OFFERS_446 = {
    keys: OFFER_DEFS.map(function (_0x409281) {
      return _0x409281.key;
    }),
    ts: OFFER_TS
  };
} catch (_0x3e405f) {}
const _BR_MIN_SOLO = 1,
  _BR_MIN_DUOS = 2;
function _applyBrRule() {
  try {
    var _0x239ad6 = typeof window !== 'undefined' && window.__brRule;
    if (!_0x239ad6 || typeof conf !== 'object' || !conf || typeof conf.GameModesV4 !== 'string') return;
    var _0x448588 = JSON.parse(conf.GameModesV4),
      _0x3d494c = {
        GrandBattleRoyale: _0x239ad6.brMinSolo,
        GrandBattleRoyale_Duos: _0x239ad6.brMinDuos
      },
      _0x328197 = 0;
    Object.keys(_0x448588 && _0x448588.Configs || {}).forEach(function (_0x55ce41) {
      var _0x30c2da = _0x448588.Configs[_0x55ce41] && _0x448588.Configs[_0x55ce41].modes_info;
      if (!_0x30c2da) return;
      Object.keys(_0x3d494c).forEach(function (_0x52f633) {
        _0x30c2da[_0x52f633] && _0x3d494c[_0x52f633] > 0 && (_0x30c2da[_0x52f633].MinPlayers = _0x3d494c[_0x52f633], _0x328197++);
      });
    });
    if (!_0x328197) return;
    conf.GameModesV4 = JSON.stringify(_0x448588), console.log('%c[BR] start from the server: MinPlayers solo ' + _0x239ad6.brMinSolo + ' / duos ' + _0x239ad6.brMinDuos + (window._rcDispatched ? ' — ⚠️ AFTER the RC went to Unity (this session keeps the previous values)' : ''), 'color:#fa0;font-weight:bold');
  } catch (_0x3aee65) {}
}
(function () {
  try {
    if (typeof window === 'undefined' || typeof fetch !== 'function' || typeof location === 'undefined' || !/^https?:$/.test(location.protocol || '')) return;
    if (window.localStorage && localStorage.getItem('BR_CANON_START') === '0') return;
    fetch(location.origin + '/api/match-rules', {
      cache: 'no-store'
    }).then(function (_0x3b241b) {
      return _0x3b241b.ok ? _0x3b241b.json() : null;
    }).then(function (_0x149c7d) {
      _0x149c7d && _0x149c7d.brMinSolo > 0 && _0x149c7d.brMinDuos > 0 && (window.__brRule = _0x149c7d, _applyBrRule());
    })['catch'](function () {});
  } catch (_0x510d36) {}
})();
const _LOC_TEST = function () {
  try {
    return typeof window !== 'undefined' && window.localStorage && localStorage.getItem('LOC_TEST') === '1';
  } catch (_0x43173e) {
    return false;
  }
}();
try {
  console.log('%c[LOC] is_localization_enabled=' + _LOC_TEST, 'color:#fa0;font-weight:bold');
} catch (_0x52053b) {}
try {
  console.log('%c[DAILY_SKINS] flag=' + _DAILY_SKINS + ' (localStorage.DAILY_SKINS=' + (window.localStorage ? localStorage.getItem('DAILY_SKINS') : '?') + ') → limited_locker IsLimitedLockerEnabled=' + _DAILY_SKINS + ', LimitedLockerSpinsConfig.is_enabled=' + _DAILY_SKINS, 'color:#0fa;font-weight:bold');
} catch (_0x50eaec) {}
function initRemoteConfig() {
  conf = {}, setDefaultValuesDirect(conf), console.log('[Config v446] built RC dict, keys:', Object.keys(conf).sort());
  if (conf.ProductsV7) console.log('[Config v446] ProductsV7 size=' + conf.ProductsV7.length + ' starts=' + conf.ProductsV7.slice(0, 150));
  if (conf.StoreSettingsV9) console.log('[Config v446] StoreSettingsV9 = ' + conf.StoreSettingsV9);
  _applyBrRule();
  if (conf.GameModesV4) console.log('[Config v446] GameModesV4 = ' + conf.GameModesV4);
}
const _BP_TIERS = !(typeof localStorage !== 'undefined' && localStorage.getItem('BP_TIERS') === '0'),
  _BP_IMG_BASE = (typeof location !== 'undefined' ? location.origin : 'http://localhost:3000') + '/assets/bp/en',
  _RENDER_BISECT = typeof localStorage !== 'undefined' && typeof location !== 'undefined' && /[?&]rcbisect=1/.test(location.search) && localStorage.getItem('RENDER_BISECT') === '1',
  _urlImg = _0xe5f4db => ({
    image_data_type: 0,
    image_data: _RENDER_BISECT ? {} : {
      url: _0xe5f4db
    }
  }),
  _YELLOW_TILE_BG = !(typeof localStorage !== 'undefined' && localStorage.getItem('NO_YELLOW_TILE') === '1'),
  battlePassV3_S9 = {
    Configs: {
      'default': {
        current_season: 1,
        banner_image: _urlImg(_BP_IMG_BASE + '/Season9_Banner_01.png'),
        BackgroundImage: {
          image_data_type: 0,
          image_data: {}
        },
        LobbyButtonImage: {
          image_data_type: 0,
          image_data: {}
        },
        premium_popup_config: {
          background_image: _urlImg(_BP_IMG_BASE + '/Season9_Web_ActivatePopup_01.png')
        },
        is_timer_visible: true,
        display_new_bp_popup: false,
        start_date: '2024-01-01T00:00:00.000+00:00',
        end_date: '2026-10-06T00:00:00.000+00:00',
        activate_button_action: null,
        battle_pass: {
          placement_xp: [10, 3],
          tiers: [{
            xp: 0,
            tier_up_price: 10,
            free_rewards: ['lol.1v1.lootbox.GS1'],
            premium_rewards: ['lol.1v1.weaponskins.melee.pickaxe.scifihammer']
          }, {
            xp: 100,
            tier_up_price: 10,
            free_rewards: ['lol.1v1.coins.bp.30'],
            premium_rewards: ['lol.1v1.coins.bp.50']
          }, {
            xp: 200,
            tier_up_price: 10,
            free_rewards: ['lol.1v1.lootbox.GS2'],
            premium_rewards: ['lol.1v1.lootbox.GS3']
          }, {
            xp: 300,
            tier_up_price: 10,
            free_rewards: ['lol.1v1.tokens.bp.5'],
            premium_rewards: ['lol.1v1.tokens.bp.10']
          }, {
            xp: 410,
            tier_up_price: 15,
            free_rewards: ['lol.1v1.playerstickers.pack.71'],
            premium_rewards: ['lol.1v1.coins.bp.50']
          }, {
            xp: 530,
            tier_up_price: 15,
            free_rewards: ['lol.1v1.coins.bp.15'],
            premium_rewards: ['lol.1v1.playeremotes.pack.18']
          }, {
            xp: 660,
            tier_up_price: 20,
            free_rewards: ['lol.1v1.tokens.bp.5'],
            premium_rewards: ['lol.1v1.coins.bp.50']
          }, {
            xp: 800,
            tier_up_price: 25,
            free_rewards: ['lol.1v1.lootbox.GS1'],
            premium_rewards: ['lol.1v1.lootbox.GS2']
          }, {
            xp: 950,
            tier_up_price: 25,
            free_rewards: ['lol.1v1.coins.bp.15'],
            premium_rewards: ['lol.1v1.tokens.bp.10']
          }, {
            xp: 1110,
            tier_up_price: 30,
            free_rewards: ['lol.1v1.lootbox.GS1'],
            premium_rewards: ['lol.1v1.coins.bp.50']
          }, {
            xp: 1280,
            tier_up_price: 35,
            free_rewards: ['lol.1v1.coins.bp.15'],
            premium_rewards: ['lol.1v1.playerskins.pack.283']
          }, {
            xp: 1460,
            tier_up_price: 40,
            free_rewards: ['lol.1v1.tokens.bp.5'],
            premium_rewards: ['lol.1v1.playerstickers.pack.70']
          }, {
            xp: 1650,
            tier_up_price: 50,
            free_rewards: ['lol.1v1.lootbox.GS1'],
            premium_rewards: ['lol.1v1.coins.bp.50']
          }, {
            xp: 1850,
            tier_up_price: 55,
            free_rewards: ['lol.1v1.coins.bp.15'],
            premium_rewards: ['lol.1v1.tokens.bp.10']
          }, {
            xp: 2060,
            tier_up_price: 60,
            free_rewards: ['lol.1v1.lootbox.GS1'],
            premium_rewards: ['lol.1v1.lootbox.GS2']
          }, {
            xp: 2280,
            tier_up_price: 65,
            free_rewards: ['lol.1v1.playerstickers.pack.73'],
            premium_rewards: ['lol.1v1.playerskins.pack.284']
          }, {
            xp: 2510,
            tier_up_price: 75,
            free_rewards: ['lol.1v1.coins.bp.15'],
            premium_rewards: ['lol.1v1.tokens.bp.10']
          }, {
            xp: 2750,
            tier_up_price: 80,
            free_rewards: ['lol.1v1.lootbox.GS1'],
            premium_rewards: ['lol.1v1.coins.bp.50']
          }, {
            xp: 3000,
            tier_up_price: 85,
            free_rewards: ['lol.1v1.tokens.bp.5'],
            premium_rewards: ['lol.1v1.lootbox.GS2']
          }, {
            xp: 3260,
            tier_up_price: 85,
            free_rewards: ['lol.1v1.coins.bp.15'],
            premium_rewards: ['lol.1v1.coins.bp.50']
          }, {
            xp: 3530,
            tier_up_price: 90,
            free_rewards: ['lol.1v1.lootbox.GS1'],
            premium_rewards: ['lol.1v1.tokens.bp.10']
          }, {
            xp: 3810,
            tier_up_price: 95,
            free_rewards: ['lol.1v1.coins.bp.15'],
            premium_rewards: ['lol.1v1.playeremotes.pack.16']
          }, {
            xp: 4100,
            tier_up_price: 95,
            free_rewards: ['lol.1v1.tokens.bp.5'],
            premium_rewards: ['lol.1v1.tokens.bp.10']
          }, {
            xp: 4400,
            tier_up_price: 100,
            free_rewards: ['lol.1v1.lootbox.GS1'],
            premium_rewards: ['lol.1v1.coins.bp.50']
          }, {
            xp: 4710,
            tier_up_price: 100,
            free_rewards: ['lol.1v1.coins.bp.15'],
            premium_rewards: ['lol.1v1.lootbox.GS2']
          }, {
            xp: 5020,
            tier_up_price: 100,
            free_rewards: ['lol.1v1.lootbox.GS1'],
            premium_rewards: ['lol.1v1.playerskins.pack.286']
          }, {
            xp: 5340,
            tier_up_price: 100,
            free_rewards: ['lol.1v1.coins.bp.30'],
            premium_rewards: ['lol.1v1.lootbox.GS2']
          }, {
            xp: 5660,
            tier_up_price: 100,
            free_rewards: ['lol.1v1.lootbox.GS1'],
            premium_rewards: ['lol.1v1.playerstickers.pack.75']
          }, {
            xp: 5980,
            tier_up_price: 105,
            free_rewards: ['lol.1v1.tokens.bp.5'],
            premium_rewards: ['lol.1v1.lootbox.GS3']
          }, {
            xp: 6280,
            tier_up_price: 105,
            free_rewards: ['lol.1v1.lootbox.GS2'],
            premium_rewards: ['lol.1v1.playeremotes.pack.1']
          }, {
            xp: 6570,
            tier_up_price: 105,
            free_rewards: ['lol.1v1.playerskins.pack.285'],
            premium_rewards: ['lol.1v1.lootbox.RLB1']
          }]
        }
      }
    }
  },
  battlePassV3 = _BP_TIERS ? battlePassV3_S9 : {
    Configs: {}
  };
try {
  window.__BP_TIERS_446 = battlePassV3_S9.Configs['default'].battle_pass.tiers || [];
} catch (_0x551775) {}
const gameModesV4 = {
    Configs: {
      'default': {
        default_mode: 'GrandBattleRoyale',
        competitive_modes: [['GrandBattleRoyale', '1v1_Clash']],
        casual_modes: [[]],
        practice_modes: ['Practice', 'BotsPracticeMatch', 'AimTrainer', 'Zombies'],
        custom_modes: [['GrandBattleRoyale_Custom', '1v1_Clash_Custom', '1v1_Custom', 'Zombies_Custom', 'City_ZoneWars_Custom', 'Zone_Custom', 'BoxFight_Big_Custom', 'Deathmatch_Custom']],
        featured_modes: [],
        modes_rotation_hour: 18,
        max_wait_time_for_players: 60,
        min_wait_time_for_players: 5,
        late_join_kick_delay: 30,
        modes_info: {
          '1v1': {
            OverridenRangeIncreaseFactor: 12000
          },
          '1v1_Competitive': {
            MatchmakingType: 'UnityMatchmaker',
            OverridenRangeIncreaseFactor: 12000
          },
          '1v1_Custom': {
            OverridenRangeIncreaseFactor: 12000
          },
          '1v1_Clash': {
            MatchmakingType: 'UnityMatchmaker',
            OverridenRangeIncreaseFactor: 12000
          },
          '1v1_Clash_Custom': {
            OverridenRangeIncreaseFactor: 12000
          },
          BoxFight_1v1: {
            OverridenRangeIncreaseFactor: 12000
          },
          BoxFight_1v1_Competitive: {
            OverridenRangeIncreaseFactor: 12000
          },
          BoxFight_Teams: {
            OverridenRangeIncreaseFactor: 24000
          },
          BoxFight_Teams_2v2: {
            OverridenRangeIncreaseFactor: 24000
          },
          BoxFight_Big: {
            OverridenRangeIncreaseFactor: 60000
          },
          BoxFight_Custom: {
            OverridenRangeIncreaseFactor: 24000
          },
          BoxFight_Big_Custom: {
            OverridenRangeIncreaseFactor: 60000
          },
          MiniBoxFight_Custom: {
            OverridenRangeIncreaseFactor: 24000
          },
          Teams_2v2: {
            OverridenRangeIncreaseFactor: 24000
          },
          Teams_2v2_Competitive: {
            OverridenRangeIncreaseFactor: 24000
          },
          Teams_3v3: {
            OverridenRangeIncreaseFactor: 36000
          },
          Vikings_Teams_3v3: {
            OverridenRangeIncreaseFactor: 36000
          },
          Teams_City_ZoneWars: {
            OverridenRangeIncreaseFactor: 60000
          },
          PipeRun: {
            OverridenRangeIncreaseFactor: 12000
          },
          PipeRun_Race: {
            OverridenRangeIncreaseFactor: 12000
          },
          PipeRun_Custom: {
            OverridenRangeIncreaseFactor: 12000
          },
          FFA_Normal: {
            OverridenRangeIncreaseFactor: 60000
          },
          FFA_Winter: {
            OverridenRangeIncreaseFactor: 60000
          },
          FreeForAll: {
            OverridenRangeIncreaseFactor: 60000
          },
          GrandBattleRoyale: {
            MatchmakingType: 'PhotonRanked',
            MinPlayers: _BR_MIN_SOLO,
            MaxPlayers: 16,
            OverridenRangeIncreaseFactor: 100000,
            OverridenScenePool: {
              WesternUFO_BR: 50,
              GrandBattleRoyale: 50
            },
            OverridenBattlePassPlacementXP: [32, 28, 26, 24, 22, 20, 20, 18, 18, 16, 16, 14, 14, 12, 12, 10]
          },
          GrandBattleRoyale_Duos: {
            MatchmakingType: 'PhotonRanked',
            MinPlayers: _BR_MIN_DUOS,
            MaxPlayers: 16,
            OverridenScenePool: {
              WesternUFO_BR: 50,
              GrandBattleRoyale: 50
            },
            OverridenBattlePassPlacementXP: [30, 25, 21, 19, 17, 15, 13, 11]
          },
          GrandBattleRoyale_Custom: {
            OverridenScenePool: {
              WesternUFO_BR: 50,
              GrandBattleRoyale: 50
            }
          },
          BattleRoyale_ZoneWars: {
            OverridenRangeIncreaseFactor: 60000
          },
          BattleRoyale_Teams_2v2: {
            OverridenRangeIncreaseFactor: 60000
          },
          BattleRoyale_Custom: {
            OverridenRangeIncreaseFactor: 60000
          },
          Arena: {
            OverridenRangeIncreaseFactor: 24000
          },
          Gulag: {
            OverridenRangeIncreaseFactor: 12000
          },
          Gulag_2v2: {
            OverridenRangeIncreaseFactor: 24000
          },
          Gulag_Custom: {
            OverridenRangeIncreaseFactor: 12000
          },
          Farm: {
            OverridenRangeIncreaseFactor: 24000
          },
          Farm_2v2: {
            OverridenRangeIncreaseFactor: 24000
          },
          Farm_Custom: {
            OverridenRangeIncreaseFactor: 24000
          },
          Deathmatch: {
            OverridenRangeIncreaseFactor: 24000
          },
          Deathmatch_Custom: {
            OverridenRangeIncreaseFactor: 24000
          },
          Zone_Custom: {
            OverridenRangeIncreaseFactor: 24000
          },
          City_ZoneWars_Custom: {
            OverridenRangeIncreaseFactor: 60000
          },
          Vikings_Custom: {
            OverridenRangeIncreaseFactor: 36000
          },
          Pumpkin_Ball: {
            OverridenRangeIncreaseFactor: 24000
          },
          Snow_Zone: {
            OverridenRangeIncreaseFactor: 24000
          },
          Practice: {
            OverridenRangeIncreaseFactor: 12000
          },
          AimTrainer: {
            OverridenRangeIncreaseFactor: 12000
          },
          BotsPracticeMatch: {
            OverridenRangeIncreaseFactor: 12000
          },
          Zombies: {
            OverridenRangeIncreaseFactor: 24000
          }
        }
      }
    }
  },
  _SKU_DEFAULT_PRODUCT = _0xc400a1 => ({
    Name: _0xc400a1.replace(/^lol\.1v1\./, '').replace(/\./g, ' '),
    NameLocalizationKey: '',
    product_image: {
      image_data_type: 0,
      image_data: null
    },
    product_background_image: {
      image_data_type: 0,
      image_data: null
    },
    DisplaySize: 0,
    Currency: 0,
    sale_start_date: '2024-01-01T00:00:00.000Z',
    Rarity: 0,
    sale_end_date: '2030-01-01T00:00:00.000Z',
    DiscountPercentage: 0,
    IsLimitedEdition: false
  }),
  _REAL_SKIN_DATA_ON = !(typeof localStorage !== 'undefined' && localStorage.getItem('REAL_SKIN_DATA') === '0'),
  _SKIN_DATA = {
    '1': ['Agent Olivia', 1],
    '2': ['SWAT', 2],
    '3': ['X-bot', 4],
    '4': ['Skater Boy', 2],
    '5': ['Lola', 2],
    '6': ['Ninja Oni', 3],
    '7': ['Caty', 1],
    '8': ['Beach Girl', 1],
    '9': ['LOL Pump', 3],
    '10': ['Rey', 0],
    '11': ['Justin', 2],
    '12': ['Hot Dog', 4],
    '13': ['Zombie Girl', 3],
    '14': ['Zombie Woman', 3],
    '15': ['Zombie Guy', 3],
    '16': ['Zombie Man', 3],
    '17': ['John', 0],
    '18': ['Hilda', 0],
    '19': ['Jester', 3],
    '20': ['Executioner', 3],
    '21': ['Astrid', 1],
    '22': ['Olaf', 2],
    '23': ['Dre', 1],
    '24': ['Sonya', 1],
    '25': ['Jessica', 1],
    '26': ['Scarecrow', 4],
    '27': ['Brandy', 1],
    '28': ['Takashi', 4],
    '29': ['Letty', 1],
    '30': ['Gisele', 1],
    '31': ['Nitro', 1],
    '32': ['Rock', 2],
    '33': ['Mia', 2],
    '34': ['Clay', 1],
    '35': ['Motor Helmet', 1],
    '36': ['Traffic Cone', 1],
    '37': ['Welder\'s Mask', 1],
    '38': ['Witch Doctor', 4],
    '39': ['Barbarossa', 3],
    '40': ['Minerva', 3],
    '42': ['Klaus', 3],
    '43': ['Cosmo', 1],
    '44': ['Wanda', 2],
    '45': ['Santa Hat', 1],
    '46': ['Horseman', 4],
    '47': ['Rooster', 4],
    '48': ['Isaac', 4],
    '49': ['Mal', 2],
    '50': ['Red', 2],
    '51': ['Reptile', 3],
    '52': ['Nebula', 2],
    '53': ['Bumblebee', 4],
    '54': ['Rebecca', 1],
    '55': ['Cayde', 3],
    '56': ['VR', 1],
    '57': ['Transmission', 1],
    '58': ['Stereo', 1],
    '59': ['X-Droid', 3],
    '60': ['Octavia', 2],
    '61': ['Annie', 0],
    '62': ['Jane', 0],
    '63': ['James', 0],
    '64': ['Liam', 0],
    '65': ['Midas', 5],
    '66': ['Electro', 5],
    '67': ['Pyro', 5],
    '68': ['Ryujin', 5],
    '69': ['Shadow', 5],
    '70': ['Tourist Tanner', 0],
    '71': ['Tourist Henry', 0],
    '72': ['Tourist Ellie', 0],
    '73': ['Tourist Lily', 0],
    '74': ['Ava', 0],
    '75': ['Harper', 0],
    '76': ['Emily', 0],
    '77': ['Jenna', 0],
    '78': ['Erin', 0],
    '79': ['Mason', 0],
    '80': ['William', 0],
    '81': ['Daniel', 0],
    '82': ['Chloe', 0],
    '83': ['Ana', 0],
    '84': ['Charlotte', 0],
    '85': ['Maya', 0],
    '86': ['Todd', 0],
    '87': ['Blake', 0],
    '88': ['Cooper', 0],
    '89': ['Officer Bob', 0],
    '90': ['Officer Hopper', 0],
    '91': ['Officer Mike', 0],
    '92': ['Officer Reese', 0],
    '93': ['Officer Sarah', 0],
    '94': ['Officer Forbes', 0],
    '95': ['Constructor Jackson', 0],
    '96': ['Constructor Jason', 0],
    '97': ['Constructor Alexis', 0],
    '98': ['Constructor Molly', 0],
    '99': ['Grace', 0],
    '100': ['Trainer Samantha', 0],
    '101': ['Trainer Samantha', 0],
    '102': ['Trainer Taylor', 0],
    '103': ['Trainer Ethan', 0],
    '104': ['Trainer Caleb', 0],
    '105': ['Maria', 0],
    '106': ['Amber', 0],
    '107': ['Fireman Cayden', 0],
    '108': ['Fireman Jack', 0],
    '109': ['Tyler', 0],
    '110': ['Eric', 0],
    '111': ['Cole', 0],
    '112': ['Carlos', 0],
    '113': ['Yue', 0],
    '114': ['Kayla', 1],
    '115': ['Li', 1],
    '116': ['Wong', 0],
    '117': ['Agent Maggie', 0],
    '118': ['Agent Louis', 0],
    '119': ['Agent Sean', 1],
    '120': ['Stephanie', 1],
    '121': ['Caroline', 1],
    '122': ['Amy', 1],
    '123': ['Fiona', 1],
    '124': ['Nova', 1],
    '125': ['Skating Boy', 1],
    '126': ['Parkour Boy', 1],
    '127': ['Jenny', 0],
    '128': ['Aubrey', 1],
    '129': ['Michelle', 1],
    '130': ['Robin', 1],
    '131': ['Sofia', 1],
    '132': ['Gianna', 1],
    '133': ['Avery', 1],
    '134': ['Punk Parker', 1],
    '135': ['Punk Connor', 0],
    '136': ['Adam', 0],
    '137': ['Jose', 1],
    '138': ['Michael', 0],
    '139': ['Owen', 1],
    '140': ['Luca', 1],
    '141': ['Skater Girl', 1],
    '142': ['Amelia', 1],
    '143': ['Raelynn', 1],
    '144': ['Bill Bone', 1],
    '145': ['Pete Blackbeard', 1],
    '146': ['Max', 1],
    '147': ['Victor', 1],
    '148': ['Carrie', 1],
    '149': ['Miley', 1],
    '150': ['Bernard', 1],
    '151': ['Teddy', 1],
    '152': ['Tourist Lucas', 1],
    '153': ['Tourist Julie', 1],
    '154': ['Angela', 1],
    '155': ['Sakura', 1],
    '156': ['Mary', 1],
    '157': ['Trainer Madison', 0],
    '158': ['Trainer Thomas', 0],
    '159': ['Fireman Johnson', 1],
    '160': ['Elijah', 1],
    '161': ['Master Jeong', 2],
    '162': ['Ayaka', 2],
    '163': ['Desert Soldier', 2],
    '164': ['Jung', 2],
    '165': ['Tao', 2],
    '166': ['Alice', 2],
    '167': ['Ola', 2],
    '168': ['Nathan', 1],
    '169': ['Naor', 2],
    '170': ['Gnul', 2],
    '171': ['Crog', 2],
    '172': ['Alana', 2],
    '173': ['Mr Arthur', 2],
    '174': ['Jill', 2],
    '175': ['Viper', 2],
    '176': ['Emilia', 2],
    '177': ['Meera', 2],
    '178': ['Ashe', 2],
    '179': ['Iris', 2],
    '180': ['Athena', 2],
    '181': ['Lucy', 2],
    '182': ['Cpt. Luna', 2],
    '183': ['Cpt. Aria', 2],
    '184': ['Cpt. Mars', 2],
    '185': ['Cpt. Saturn', 1],
    '186': ['Zoe', 2],
    '187': ['DEA Sienna', 2],
    '188': ['DEA Julia', 2],
    '189': ['DEA Jacob', 2],
    '190': ['DEA Diego', 2],
    '191': ['Agent Violet', 2],
    '192': ['Agent Oliver', 2],
    '193': ['Shay', 2],
    '194': ['Camilla', 2],
    '195': ['Ella', 2],
    '196': ['Drift', 2],
    '197': ['Sophia', 2],
    '198': ['Nash', 2],
    '199': ['Sparkles', 2],
    '200': ['Lava Man', 3],
    '201': ['Rock Man', 2],
    '202': ['Laz', 2],
    '203': ['Vasse', 3],
    '204': ['Sir Romeo', 3],
    '205': ['Sir Robert', 3],
    '206': ['Chemical Sonny', 3],
    '207': ['Chemical Colton', 3],
    '208': ['Tactical Soldier', 3],
    '209': ['Bard', 3],
    '210': ['Wizard Adamant', 3],
    '211': ['Wizard Silas', 3],
    '212': ['Princess Ariela', 3],
    '213': ['Princess Eliana', 3],
    '214': ['Prince Henry', 3],
    '215': ['Prince Edward', 3],
    '216': ['Blair', 3],
    '217': ['Da Bomb', 2],
    '218': ['Shani', 3],
    '219': ['Akodia', 3],
    '220': ['Aegnor', 3],
    '221': ['Callon', 3],
    '222': ['Ninja Hanzo', 3],
    '223': ['Ben', 3],
    '224': ['Achilles', 3],
    '225': ['Beatrix', 3],
    '226': ['Alessia', 3],
    '227': ['Dana', 3],
    '228': ['Sage', 3],
    '229': ['Master Fu', 3],
    '230': ['Mr. Jones', 3],
    '231': ['Madeline', 3],
    '232': ['Lulu', 3],
    '233': ['Samurai Toyotomi', 3],
    '234': ['Samurai Miyamoto', 3],
    '235': ['Hujuk', 3],
    '236': ['Haru', 3],
    '237': ['Kaito', 3],
    '238': ['Hazmat Blue', 3],
    '239': ['Oswald', 3],
    '240': ['Salvatore', 3],
    '241': ['Samurai Tokugawa', 4],
    '242': ['Ninja Reo', 4],
    '243': ['Nitro Bot', 4],
    '244': ['Wizard Vasilis', 4],
    '245': ['Cpt. Bonnet', 4],
    '246': ['LOL King', 4],
    '247': ['LOL Queen', 4],
    '248': ['Skyler', 4],
    '249': ['Lior', 4],
    '250': ['Hazmat Gold', 4],
    '251': ['Cicero', 4],
    '252': ['Astro', 4],
    '253': ['Gemini', 3],
    '254': ['Rainbow', 4],
    '255': ['Storm', 4],
    '256': ['Eliminator', 3],
    '257': ['Thumper', 4],
    '258': ['Bun Bun', 3],
    '259': ['Cyber Bunny', 4],
    '260': ['Disco Boy', 4],
    '261': ['Rocker', 4],
    '262': ['Lady Pop', 3],
    '263': ['Zeus', 4],
    '264': ['Hel', 3],
    '265': ['Anubis', 4],
    '266': ['BEN KEYSAR', 3],
    '267': ['Inde Game', 3],
    '268': ['MasterOhad', 3],
    '269': ['Rainbow Queen', 3],
    '270': ['Cycnic', 3],
    '271': ['RonenGG', 3],
    '272': ['Golden BEN KEYSAR', 4],
    '273': ['Golden Inde Game', 4],
    '274': ['Golden MasterOhad', 4],
    '275': ['Golden Rainbow Queen', 4],
    '276': ['Golden Cycnic', 4],
    '277': ['Golden RonenGG', 4],
    '278': ['Scooba', 4],
    '279': ['Sunny', 3],
    '280': ['Margarita', 3],
    '281': ['Captain LOL', 4],
    '282': ['Bandit', 3],
    '283': ['Vásquez', 3],
    '284': ['Clyde', 3],
    '285': ['Jolene', 3],
    '286': ['Ravager', 4]
  },
  _SKUS_SKINS = [],
  _TEST_EMPTY_PRODUCTS = false,
  productsV6 = _TEST_EMPTY_PRODUCTS ? {
    Configs: {
      'default': {}
    }
  } : function () {
    const _0x24df46 = {
        41: 1
      },
      _0x2104f6 = {};
    for (let _0x3c34f5 = 1; _0x3c34f5 <= 286; _0x3c34f5++) {
      if (_0x24df46[_0x3c34f5]) continue;
      var _0x1412bf = _REAL_SKIN_DATA_ON && _SKIN_DATA[_0x3c34f5] || null,
        _0xcd89c6 = _0x1412bf ? _0x1412bf[0] : 'skin' + _0x3c34f5;
      _0x2104f6['lol.1v1.playerskins.pack.' + _0x3c34f5] = Object.assign(_SKU_DEFAULT_PRODUCT('skin' + _0x3c34f5), {
        IsLegacy: false,
        Name: _0xcd89c6,
        Rarity: _0x1412bf ? _0x1412bf[1] : 0,
        BattlePassData: {
          CustomDescription: _0xcd89c6
        }
      });
    }
    const _0x242c7c = ['Paper Bag Mask', 'Hockey Mask', 'Mysterio', 'Cube Face', 'Uncle Sam', 'Alien', 'Stranger', 'Football', 'Party Hat', 'Pot', 'Skull Mask', 'Karate', 'Ice Cream', '#1 Hat', 'Fish Bait', 'Spartan', 'Safety First!', 'Squid Kid', 'Cupcake', 'Gas Mask', 'Disco Star', 'Goth Girl', 'Ser 1v1alot', 'Fiesta Time'];
    for (let _0x1dd526 = 0; _0x1dd526 < _0x242c7c.length; _0x1dd526++) {
      const _0x132029 = _0x242c7c[_0x1dd526];
      _0x2104f6['lol.1v1.playerskins.pack.tier.RV' + _0x1dd526] = Object.assign(_SKU_DEFAULT_PRODUCT('tier.RV' + _0x1dd526), {
        IsLegacy: false,
        Name: _0x132029,
        Rarity: 1,
        BattlePassData: {
          CustomDescription: _0x132029
        }
      });
    }
    try {
      window.__SKINS_RC_VER = 2;
    } catch (_0x471887) {}
    const _0x45261d = {
        1: ['Breakdance', 4],
        2: ['Angry Chick', 0],
        3: ['Silly Dancing', 1],
        4: ['Hip Hop Dance Wave', 1],
        5: ['Creepy Waving', 0],
        6: ['Pointing Forward', 0],
        7: ['Clapping', 0],
        8: ['Salute', 0],
        9: ['Victory', 2],
        10: ['Defeated', 2],
        11: ['Robot Hip Hop Dance', 2],
        12: ['Victory', 2],
        13: ['Hip Hop Dancing', 2],
        14: ['Victory Idle', 2],
        15: ['Kicking', 2],
        16: ['Win Victory', 3],
        18: ['Twist Dance', 2],
        19: ['Shooting Arrow', 3],
        20: ['Flying Kick', 3],
        172: ['Breakdance Freeze', 3]
      },
      _0x26aaa7 = {};
    for (const _0x31b40b of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 172]) {
      const _0x52a80e = _0x45261d[_0x31b40b];
      _0x26aaa7['lol.1v1.playeremotes.pack.' + _0x31b40b] = Object.assign(_SKU_DEFAULT_PRODUCT('emote' + _0x31b40b), {
        IsLegacy: false,
        Name: _0x52a80e ? _0x52a80e[0] : 'emote' + _0x31b40b,
        Rarity: _0x52a80e ? _0x52a80e[1] : 0
      });
    }
    const _0x1c0f58 = {
      1: ['Race Wheel', 0],
      2: ['Speedometer', 0],
      3: ['Race Car', 0],
      4: ['Race Flag', 0],
      5: ['Glove', 0],
      6: ['Heart', 0],
      7: ['Race Cup', 0],
      8: ['Nitro 05', 0],
      9: ['Takashi 02', 0],
      10: ['Takashi 06', 0],
      11: ['Skater 04', 0],
      12: ['Skater 05', 0],
      13: ['Skater 06', 0],
      14: ['Broken Heart', 0],
      15: ['Cute Reptile', 0],
      16: ['GG', 0],
      17: ['Like', 0],
      18: ['LOL', 0],
      19: ['Oops', 0],
      20: ['Space Flag', 0],
      21: ['Surprised Mal', 0],
      22: ['Unlike', 0],
      23: ['Zany Red', 0],
      24: ['200 IQ Brain', 0],
      25: ['Arrow', 0],
      26: ['Burger', 0],
      27: ['GG', 0],
      28: ['Hand Muscles', 0],
      29: ['Handcuffs', 0],
      30: ['Love Hand Gesture', 0],
      31: ['Alien Head', 0],
      32: ['Flying UFO', 0],
      33: ['Helmet Astronaut', 0],
      34: ['Planet', 0],
      35: ['Rocket', 0],
      36: ['Stars', 0],
      37: ['Gears Explosion', 0],
      38: ['Laughing Unicorn', 0],
      39: ['Mad Robot', 0],
      40: ['Sad Robot', 0],
      41: ['Unicorn Rainbow', 0],
      42: ['Vomiting Unicorn', 0],
      43: ['Bunny Girl', 0],
      44: ['Bunny Onesie', 0],
      45: ['Space Bunny', 0],
      46: ['Carrot', 0],
      47: ['Easter Egg', 0],
      48: ['Disco Ball', 0],
      49: ['Fire Skull', 0],
      50: ['Loser Hand', 0],
      51: ['POP', 0],
      52: ['Smallest Violin', 0],
      53: ['U Rock', 0],
      54: ['Anubis', 0],
      55: ['Hel', 0],
      56: ['Lightning Cloud', 0],
      57: ['Thank You Hand', 0],
      58: ['Zeus', 0],
      59: ['Keysar', 0],
      60: ['Inde', 0],
      61: ['MasterOhad', 0],
      62: ['Rainbow Queen', 0],
      63: ['Cycnic', 0],
      64: ['RonenGG', 0],
      65: ['Diver Cry', 0],
      66: ['Sun Angry', 0],
      67: ['Sun Sweat', 0],
      68: ['Sun Tongue', 0],
      69: ['Surfer Hand', 0],
      70: ['Prickly Cactus', 2],
      71: ['Smiley Cactus', 0],
      72: ['Happy Cowboy', 0],
      73: ['Sad Vásquez', 1],
      74: ['Howdy Partner', 0],
      75: ['Yee-Haw!', 3]
    };
    for (let _0x3f62a4 = 1; _0x3f62a4 <= 75; _0x3f62a4++) {
      const _0x189813 = _0x1c0f58[_0x3f62a4];
      _0x26aaa7['lol.1v1.playerstickers.pack.' + _0x3f62a4] = Object.assign(_SKU_DEFAULT_PRODUCT('sticker' + _0x3f62a4), {
        IsLegacy: false,
        Name: _0x189813 ? _0x189813[0] : 'sticker' + _0x3f62a4,
        Rarity: _0x189813 ? _0x189813[1] : 0
      });
    }
    const _0x51982e = {},
      _0x193513 = {
        'lol.1v1.weaponskins.melee.pickaxe.default': {
          Name: 'Pickaxe',
          Rarity: 0
        },
        'lol.1v1.weaponskins.melee.pickaxe.scifihammer': {
          Name: 'Galactic Smasher',
          Rarity: 4,
          BattlePassData: {
            CustomDescription: 'Galactic Smasher'
          }
        }
      };
    for (const _0x5c068d of Object.keys(_0x193513)) {
      _0x51982e[_0x5c068d] = Object.assign(_SKU_DEFAULT_PRODUCT(_0x5c068d.split('.').pop()), _0x193513[_0x5c068d], {
        IsLegacy: false,
        WeaponType: 1,
        WeaponTypeName: ''
      });
    }
    const _0x37cf09 = (typeof location !== 'undefined' ? location.origin : 'http://localhost:3000') + '/assets/weaponskins/en',
      _0x3cf4d6 = [{
        id: 'lol.1v1.coins.pack.1',
        amount: 1000,
        tier: 1
      }, {
        id: 'lol.1v1.coins.pack.2',
        amount: 5000,
        tier: 2
      }, {
        id: 'lol.1v1.coins.pack.3',
        amount: 12000,
        tier: 3
      }, {
        id: 'lol.1v1.coins.pack.4',
        amount: 30000,
        tier: 4,
        best: true
      }, {
        id: 'lol.1v1.coins.pack.5',
        amount: 75000,
        tier: 5
      }, {
        id: 'lol.1v1.coins.pack.6',
        amount: 200000,
        tier: 6
      }, {
        id: 'lol.1v1.coins.pack.newcomer',
        amount: 5000,
        tier: 1
      }, {
        id: 'lol.1v1.coins.bp.5',
        amount: 5,
        tier: 1
      }, {
        id: 'lol.1v1.coins.bp.10',
        amount: 10,
        tier: 1
      }, {
        id: 'lol.1v1.coins.bp.15',
        amount: 15,
        tier: 1
      }, {
        id: 'lol.1v1.coins.bp.30',
        amount: 30,
        tier: 1
      }, {
        id: 'lol.1v1.coins.bp.50',
        amount: 50,
        tier: 1
      }, {
        id: 'lol.1v1.coins.bp.25',
        amount: 25,
        tier: 1
      }, {
        id: 'lol.1v1.coins.bp.90',
        amount: 90,
        tier: 1
      }, {
        id: 'lol.1v1.coins.bp.150',
        amount: 150,
        tier: 2
      }, {
        id: 'lol.1v1.coins.bp.55',
        amount: 55,
        tier: 1
      }, {
        id: 'lol.1v1.coins.bp.60',
        amount: 60,
        tier: 1
      }, {
        id: 'lol.1v1.coins.bp.330',
        amount: 330,
        tier: 2
      }],
      _0x2d203d = {};
    for (const _0x949d26 of _0x3cf4d6) {
      _0x2d203d[_0x949d26.id] = Object.assign(_SKU_DEFAULT_PRODUCT(_0x949d26.id), {
        Tier: _0x949d26.tier,
        Amount: _0x949d26.amount,
        IsBestOffer: !!_0x949d26.best,
        IsNonconsumable: false
      });
    }
    const _0x55ea3e = ['lol.1v1.bundlepacks.1', 'lol.1v1.bundlepacks.epicoffer', 'lol.1v1.bundlepacks.megaoffer', 'lol.1v1.bundlepacks.megaoffer.sale', 'lol.1v1.bundlepacks.rareoffer', 'lol.1v1.bundlepacks.starterpack', 'lol.1v1.bundlepacks.starterpack.sale', 'lol.1v1.bundlepacks.valuepack', 'lol.1v1.bundlepacks.valuepack.sale'],
      _0x4f8889 = {};
    for (const _0x2f9627 of _0x55ea3e) {
      _0x4f8889[_0x2f9627] = Object.assign(_SKU_DEFAULT_PRODUCT(_0x2f9627), {
        IsNonconsumable: false
      });
    }
    const _0x15a77a = (_0x1893d1, _0x3ea2f6, _0xb4e17b, _0x538e61, _0x264806) => {
      _0x4f8889[_0x1893d1] = Object.assign(_SKU_DEFAULT_PRODUCT(_0x1893d1), {
        Name: _0x3ea2f6,
        IsNonconsumable: false,
        Currency: _0x538e61,
        Prices: {
          [_0x538e61]: _0x264806
        },
        BundlePackRewards: [{
          RewardType: 'Spin',
          ProductID: _0xb4e17b,
          Amount: 1
        }],
        sale_end_date: '2024-01-02T00:00:00.000Z'
      });
    };
    _0x15a77a('lol.1v1.bundlepacks.GS1_Spin', 'Common Skin', 'lol.1v1.lootbox.GS1', 'LC', 55), _0x15a77a('lol.1v1.bundlepacks.GS2_Spin', 'Rare Skin', 'lol.1v1.lootbox.GS2', 'LC', 90), _0x15a77a('lol.1v1.bundlepacks.GS3_Spin', 'Epic Skin', 'lol.1v1.lootbox.GS3', 'LT', 35);
    const _0x25373c = (typeof location !== 'undefined' ? location.origin : 'http://localhost:3000') + '/assets/archive',
      _0x366335 = (_0x152063, _0xa9a400, _0x3a69ea, _0x1624f9, _0x205f9d, _0x315f3b, _0xc9d003, _0xa69ac4, _0x1bff0a) => {
        _0x4f8889[_0x152063] = Object.assign(_SKU_DEFAULT_PRODUCT(_0x152063), {
          Name: _0xa9a400,
          IsNonconsumable: false,
          Currency: _0x205f9d,
          Rarity: _0x1bff0a,
          Prices: {
            [_0x205f9d]: _0x315f3b
          },
          SalePrices: {
            [_0x205f9d]: _0xc9d003
          },
          DiscountPercentage: Math.round((1 - _0xc9d003 / _0x315f3b) * 100),
          BundlePackRewards: [{
            RewardType: 'Spin',
            ProductID: _0x3a69ea,
            Amount: _0x1624f9
          }],
          product_image: _urlImg(_0x25373c + '/' + _0xa69ac4),
          product_background_image: _urlImg(_0x25373c + '/' + _0xa69ac4),
          sale_start_date: '2024-01-01T00:00:00.000Z',
          sale_end_date: '2027-01-01T00:00:00.000Z'
        });
      };
    OFFER_DEFS.forEach(function (_0x3ded5b) {
      _0x366335(OFFER_BUNDLE_ID(_0x3ded5b.key), _0x3ded5b.name, _0x3ded5b.box, _0x3ded5b.amount, _0x3ded5b.currency, _0x3ded5b.regular, _0x3ded5b.sale, _0x3ded5b.banner, _0x3ded5b.rarity);
    });
    const _0x470f12 = ['lol.1v1.lootbox.DS', 'lol.1v1.lootbox.GS1', 'lol.1v1.lootbox.GS2', 'lol.1v1.lootbox.GS3', 'lol.1v1.lootbox.GS5', 'lol.1v1.lootbox.RLB1', 'lol.1v1.lootbox.RLB2', 'lol.1v1.lootbox.RLB3', 'lol.1v1.lootbox.RLB4', 'lol.1v1.lootbox.StreakBonusCoins', 'lol.1v1.lootbox.GSL'],
      _0x23f355 = {
        'lol.1v1.lootbox.RLB4': 0,
        'lol.1v1.lootbox.RLB2': 2,
        'lol.1v1.lootbox.RLB3': 2,
        'lol.1v1.lootbox.RLB1': 5,
        'lol.1v1.lootbox.GS1': 0,
        'lol.1v1.lootbox.GS2': 2,
        'lol.1v1.lootbox.GS3': 3,
        'lol.1v1.lootbox.GS5': 4,
        'lol.1v1.lootbox.DS': 5,
        'lol.1v1.lootbox.StreakBonusCoins': 4,
        'lol.1v1.lootbox.GSL': 4
      },
      _0x404be1 = {};
    for (const _0x2887e5 of _0x470f12) {
      _0x404be1[_0x2887e5] = Object.assign(_SKU_DEFAULT_PRODUCT(_0x2887e5), {
        LootBoxType: 0,
        LootBoxTier: 0,
        Rarity: _0x23f355[_0x2887e5] != null ? _0x23f355[_0x2887e5] : 0
      });
    }
    const _0x2b922d = (_0x3a5a31, _0x2673db, _0x71062e, _0x15021a, _0x33898a, _0x9658d) => Object.assign(_0x404be1[_0x3a5a31], {
      Name: _0x2673db,
      NameLocalizationKey: _0x71062e,
      LootBoxType: 'GachaSkin',
      LootBoxTier: 'Gold',
      ItemsRarity: _0x15021a,
      Currency: _0x33898a,
      Prices: {
        [_0x33898a]: _0x9658d
      },
      DiscountPercentage: 0,
      sale_start_date: '2024-01-01T00:00:00.000Z',
      sale_end_date: '2024-01-02T00:00:00.000Z'
    });
    _0x2b922d('lol.1v1.lootbox.GS1', 'Common Skin', 'spin_title_common', 0, 'LC', 55), _0x2b922d('lol.1v1.lootbox.GS2', 'Rare Skin', 'spin_title_rare', 2, 'LC', 90), _0x2b922d('lol.1v1.lootbox.GS3', 'Epic Skin', 'spin_title_epic', 3, 'LT', 35), _0x404be1.v441_mock_empty_lootbox = Object.assign(_SKU_DEFAULT_PRODUCT('Free Prizes'), {
      LootBoxType: 0,
      LootBoxTier: 0,
      Rarity: 0,
      Name: 'Free Prizes'
    }), _0x404be1['lol.1v1.lootbox.StreakBonusCoins'].Name = 'Streak Bonus', _0x404be1['lol.1v1.lootbox.GSL'].Name = 'Legendary Skin';
    const _0x417e00 = (typeof location !== 'undefined' ? location.origin : 'http://localhost:3000') + '/assets/lootboxes/en',
      _0x1462f5 = {
        'lol.1v1.bp.xp': {
          Duration: 3600
        }
      },
      _0x1fad3a = ['basic', 'buckshot', 'construction', 'duelist', 'energy', 'marksman', 'medic', 'mercenary', 'raider', 'recovery'],
      _0x50015e = {};
    for (const _0x24f53e of _0x1fad3a) {
      _0x50015e['lol.1v1.armors.body.' + _0x24f53e] = Object.assign(_SKU_DEFAULT_PRODUCT('armor.' + _0x24f53e), {
        BaseLevel: 1
      });
    }
    const _0x1df687 = {
        'lol.1v1.equipment.slot.default': _SKU_DEFAULT_PRODUCT('slot.default')
      },
      _0x372057 = {};
    for (let _0x22dd63 = 1; _0x22dd63 <= 4; _0x22dd63++) {
      _0x372057['lol.1v1.tokens.pack.' + _0x22dd63] = Object.assign(_SKU_DEFAULT_PRODUCT('token' + _0x22dd63), {
        Tier: _0x22dd63,
        DisplayText: _0x22dd63 * 100 + ' Tokens',
        Amount: _0x22dd63 * 100,
        IsBestOffer: _0x22dd63 === 3
      });
    }
    _0x372057['lol.1v1.tokens.bp.1'] = Object.assign(_SKU_DEFAULT_PRODUCT('tokens.bp.1'), {
      Tier: 1,
      DisplayText: '1 Gem',
      Amount: 1,
      IsBestOffer: false
    }), _0x372057['lol.1v1.tokens.bp.3'] = Object.assign(_SKU_DEFAULT_PRODUCT('tokens.bp.3'), {
      Tier: 1,
      DisplayText: '3 Gems',
      Amount: 3,
      IsBestOffer: false
    }), _0x372057['lol.1v1.tokens.bp.5'] = Object.assign(_SKU_DEFAULT_PRODUCT('tokens.bp.5'), {
      Tier: 1,
      DisplayText: '5 Gems',
      Amount: 5,
      IsBestOffer: false
    }), _0x372057['lol.1v1.tokens.bp.10'] = Object.assign(_SKU_DEFAULT_PRODUCT('tokens.bp.10'), {
      Tier: 1,
      DisplayText: '10 Gems',
      Amount: 10,
      IsBestOffer: false
    }), _0x372057['lol.1v1.tokens.bp.25'] = Object.assign(_SKU_DEFAULT_PRODUCT('tokens.bp.25'), {
      Tier: 1,
      DisplayText: '25 Gems',
      Amount: 25,
      IsBestOffer: false
    }), _0x372057['lol.1v1.tokens.bp.55'] = Object.assign(_SKU_DEFAULT_PRODUCT('tokens.bp.55'), {
      Tier: 1,
      DisplayText: '55 Gems',
      Amount: 55,
      IsBestOffer: false
    });
    const _0x369f06 = {
        'lol.1v1.battle.pass.premium': Object.assign(_SKU_DEFAULT_PRODUCT('bp.premium'), {
          Name: 'LOL Pass Premium',
          Currency: 'LT',
          Prices: {
            LT: 130
          }
        })
      },
      _0x2f298d = {
        'lol.1v1.battle.pass.tier.1': Object.assign(_SKU_DEFAULT_PRODUCT('battle.pass.tier.1'), {
          Amount: 1,
          Currency: 'LT',
          Prices: {
            LT: 10
          }
        })
      },
      _0x5777f1 = {
        'lol.1v1.subscription.dummy': _SKU_DEFAULT_PRODUCT('sub.dummy')
      };
    return {
      Configs: {
        'default': {
          skins_data: _0x2104f6,
          emotes_data: _0x26aaa7,
          weaponskins_data: _0x51982e,
          coins_data: _0x2d203d,
          bundle_packs_data: _0x4f8889,
          lootbox_data: _0x404be1,
          bp_boost_data: _0x1462f5,
          equipment_data: _0x50015e,
          equipment_slot_data: _0x1df687,
          lol_tokens_data: _0x372057,
          battle_pass_premium_data: _0x369f06,
          battle_pass_tier_data: _0x2f298d,
          subscriptions_data: _0x5777f1,
          default_products: []
        }
      }
    };
  }(),
  generalConfigV4 = {
    Configs: {
      'default': {
        links_data: {
          Discord: {
            link: 'https://discord.gg/EyhwTSZbHk',
            android_link: '',
            ios_link: '',
            web_link: '',
            steam_link: ''
          },
          Instagram: {
            link: 'https://www.instagram.com/1v1.lol',
            android_link: '',
            ios_link: '',
            web_link: '',
            steam_link: ''
          },
          TikTok: {
            link: 'https://www.tiktok.com/@1v1.lol',
            android_link: '',
            ios_link: '',
            web_link: '',
            steam_link: ''
          },
          TermsOfService: {
            link: 'https://justplaylol.webflow.io/terms-of-service'
          },
          PrivacyPolicy: {
            link: 'https://justplaylol.webflow.io/privacy-policy'
          },
          PrivacyNotice: {
            link: 'https://justplaylol.webflow.io/privacy-notice'
          },
          PrivacyForKids: {
            link: 'https://justplaylol.webflow.io/privacy-for-kids'
          },
          Feedback: {
            link: 'https://playtikaprod.service-now.com/1v1lol'
          },
          Support: {
            link: 'https://playtikaprod.service-now.com/1v1lol'
          },
          XboxControllerConnect: {
            link: 'https://youtu.be/K_jplcQx0O0',
            android_link: 'https://www.youtube.com/watch?v=K_jplcQx0O0&t=47s',
            ios_link: 'https://www.youtube.com/watch?v=K_jplcQx0O0&t=80s'
          }
        },
        rv_settings: {
          PriceLC: 20,
          IsRandom: false,
          ZombiesMaxRvRevives: 1
        },
        main_menu_settings: {
          ShowBanner: false,
          ModeButtonLayout: 'SelectedMode',
          Banners: [],
          ShowVibrate: true,
          AnnouncementBannerSettings: {
            IsVisible: false,
            Link: '',
            SmallImage: {
              image_data_type: 0,
              image_data: {}
            },
            LargeImage: {
              image_data_type: 0,
              image_data: {}
            }
          },
          ConnectControllerButtonSettings: {
            IsVisible: true,
            AnimationDelay: 5
          }
        },
        mobile_settings: {
          ShowPushNotifications: false,
          InputSmoothness: 0,
          LookAcceleration: {
            LookAccelerationType: 0,
            DeltaFactor: 1,
            AccelerationFactor: 1
          },
          YSensitivityFactor: 1,
          PushNotificationTitleLocalizationKey: '',
          PushNotificationLocalizationDescriptionKey: '',
          DefaultFPS: 60
        },
        ads_settings: {
          ShowAdChance: 1,
          MinAdIntervalInSeconds: 60,
          RvAdIntervalInMinutes: 1440,
          RvAdsNeededToUnlock: 4,
          ShowAdsInParty: false,
          ShowTailoredAds: false,
          SkipGames: 2,
          SkipSessions: 2
        },
        news_settings: {
          News: [{
            Title: 'Welcome to Chapter 2!',
            Date: '2026-06-27T12:00:00',
            Content: 'Chapter 2 of 1v1.LOL Reloaded is here! Drop into the all-new Battle Royale, test your skills in 1v1 Clash, and climb the new Trophy Road for exclusive rewards — with fresh skins to unlock along the way. Good luck out there!'
          }],
          DaysTillOutdated: 30
        },
        version_settings: {
          AndroidLink: '',
          IOSLink: '',
          ForceUpdateVersion: 0,
          LatestServerVersion: 0,
          PhotonVersion: '',
          PCVersionExpirationDate: '2030-01-01T00:00:00.000+00:00'
        },
        rate_us_settings: {
          ShowRateUs: true,
          WinsToRate: 2,
          MaxTimesToShowRateUs: 2
        },
        tutorial_settings: {
          TutorialType: 0,
          ShowPracticeMatch: false,
          WeakDeviceThreshold: 0,
          WeakDeviceDefaultMode: '1v1',
          WeakDeviceTutorialType: 0,
          ShowSetNameScreen: false
        },
        friends_settings: {
          InviteTokenLifetime: 86400,
          MaxFriends: 100
        },
        locker_settings: {
          EmotesNumber: 8
        },
        network_settings: {
          PhotonBackgroundKeepAliveTime: 60
        },
        language_settings: {
          is_localization_enabled: _LOC_TEST,
          use_localized_legal_links: false
        },
        log_level: 0,
        override_crossplay: false,
        limited_locker_settings: {
          IsLimitedLockerEnabled: _DAILY_SKINS,
          IsSpinRouletteEnabled: true
        },
        age_gate_settings: {
          logins_to_start_showing_deletion_popups: 7
        },
        matchmaker_settings: {
          unity_matchmaker_enabled: false,
          is_region_limited: false,
          matchmaking_regions: []
        },
        monetization_settings: {
          monetization_blocked_countries: []
        },
        lobby_banner_settings: {
          is_enabled: false,
          banner_items: []
        }
      }
    }
  },
  OFFERS_LIVE = true,
  _liveOffers = {},
  _liveOfferKeys = [];
OFFERS_LIVE && OFFER_DEFS.forEach(function (_0x2da692) {
  _liveOffers[_0x2da692.key] = [{
    tiers_products_infos: [{
      product: OFFER_BUNDLE_ID(_0x2da692.key),
      duration: 24,
      advance_tier: false
    }]
  }], _liveOfferKeys.push(_0x2da692.key);
});
const storeSettingsV8 = {
    Configs: {
      'default': {
        is_disabled: false,
        store_settings: {
          TabToFocusOnOpen: '',
          NewItemsShine: false,
          SkinsRotationHour: 14,
          ShowNewPreviewItem: false,
          ShowTrySkinButton: false,
          ShowFreePrizeInMainMenu: true,
          ButtonLayout: '',
          SupportGachaSkins: true
        },
        use_padding: false,
        offers: _liveOffers,
        store_products: [{
          LayoutGroupType: 'Horizontal',
          GroupType: 2,
          GroupNameLocalizationKey: 'tab_skins',
          DailyProducts: [[{
            product_id: 'lol.1v1.lootbox.GS1',
            prefab_type: 1,
            item_type: 0
          }, {
            product_id: 'lol.1v1.lootbox.GS2',
            prefab_type: 1,
            item_type: 0
          }, {
            product_id: 'lol.1v1.lootbox.GS3',
            prefab_type: 1,
            item_type: 0
          }]]
        }, ...(_liveOfferKeys.length ? [{
          LayoutGroupType: 'HorizontalLarge',
          GroupType: 3,
          GroupNameLocalizationKey: 'tab_offers',
          DailyProducts: [[]]
        }] : [])],
        equipment_slot_store: {
          active_loadout_slot_product: '',
          active_weapon_slot_product: '',
          active_armor_slot_product: ''
        }
      }
    }
  },
  gameEventsV4 = {
    Configs: {
      'default': {
        game_events: {}
      }
    }
  },
  dailyRewardsV2 = {
    Configs: {
      'default': {
        daily_rewards: {
          Version: '1',
          Rewards: []
        }
      }
    }
  },
  xpBank = {
    Configs: {
      'default': {
        is_active: true,
        max_xp: 200,
        low_threshold: 20,
        refresh_interval_hours: 2.5,
        bonus_xp_per_refresh: 20,
        refill_bank_price: 0,
        refill_bank_currency: 0,
        refill_product_id: 'lol.1v1.battlepass_xp_bank_refill',
        notifications_enabled: false,
        notification_cooldown_hours: 48,
        schedule_notification_threshold_xp: 170,
        push_notification_title: '',
        push_notification_text: ''
      }
    }
  },
  challengesV2 = {
    Configs: {
      'default': {
        are_challenges_enabled: true,
        daily_rotation_hour: 16,
        daily_reroll_data: {
          cost: 5,
          currency_type: 'LT'
        },
        seasonal_reroll_data: {
          cost: 5,
          currency_type: 'LT'
        },
        daily_bonus_rewards: [{
          RewardType: 'BPExp',
          Amount: 150
        }],
        streak_bonus_days_count: 3,
        is_streak_bonus_enabled: true,
        streak_bonus_rewards: [{
          RewardType: 'Spin',
          ProductID: 'lol.1v1.lootbox.StreakBonusCoins'
        }],
        challenges_notification_data: {
          are_notifications_enabled: false,
          daily_challenges_reset_title_key: '',
          daily_challenges_reset_description_key: '',
          seasonal_challenges_reset_title_key: '',
          seasonal_challenges_reset_description_key: ''
        }
      }
    }
  },
  _FREE_SPIN_ON = typeof localStorage === 'undefined' ? true : localStorage.getItem('FREE_SPIN') !== '0',
  dailySpinsConfig = {
    Configs: {
      'default': {
        is_enabled: _FREE_SPIN_ON,
        product: 'v441_mock_empty_lootbox',
        hours_to_refresh: 24
      }
    }
  },
  ftueConfigV1 = {
    Configs: {
      'default': {
        FirstTimeNotifications: []
      }
    }
  },
  gameplaySettings = {
    Configs: {
      'default': {
        fps_settings: {
          android_fps_monitor_settings: {},
          ios_fps_monitor_settings: {},
          web_fps_monitor_settings: {}
        },
        hud_settings: {
          default_hud_mode: 'LOLStyle'
        },
        player_settings: {
          HitBoxSizeMultiplier: 3,
          StartingPlayerState: 'Combat',
          DefaultSelectedWeapon: 1
        },
        building_settings: {
          DefaultSelectedBuilding: 'Wall'
        },
        touch_aim_assist: {
          IsEnabled: false
        },
        controller_aim_assist: {
          UseLegacyAimAssist: false,
          FollowerAimAssist: {
            FollowForceX: 22,
            FollowForceY: 22,
            MaxFollow: 1,
            DragForceX: 0.1,
            DragForceY: 0.1,
            MagnetForce: 1.7,
            MaxEnemyDistance: 100,
            MaxAimAssistRadius: 1
          }
        },
        matchmaking_settings: {
          trophy_count_weight: 1,
          power_score_weight: 0
        }
      }
    }
  },
  leaderboards = {
    Configs: {
      'default': {
        are_events_enabled: true,
        events: {},
        leaderboards: {}
      }
    }
  },
  limitedLockerSpinsConfig = {
    Configs: {
      'default': {
        is_enabled: _DAILY_SKINS,
        product: _DAILY_SKINS ? 'lol.1v1.lootbox.GS1' : '',
        hours_to_refresh: 24
      }
    }
  },
  _spinPool = ['lol.1v1.playerskins.pack.1', 'lol.1v1.playerskins.pack.2', 'lol.1v1.playerskins.pack.3', 'lol.1v1.playerskins.pack.4', 'lol.1v1.playerskins.pack.5', 'lol.1v1.playerskins.pack.6', 'lol.1v1.playerskins.pack.7', 'lol.1v1.playerskins.pack.8'],
  _CommonSkins = ['lol.1v1.playerskins.pack.10', 'lol.1v1.playerskins.pack.17', 'lol.1v1.playerskins.pack.18', 'lol.1v1.playerskins.pack.70', 'lol.1v1.playerskins.pack.71', 'lol.1v1.playerskins.pack.72', 'lol.1v1.playerskins.pack.73', 'lol.1v1.playerskins.pack.74', 'lol.1v1.playerskins.pack.75', 'lol.1v1.playerskins.pack.76', 'lol.1v1.playerskins.pack.77', 'lol.1v1.playerskins.pack.78', 'lol.1v1.playerskins.pack.79', 'lol.1v1.playerskins.pack.80', 'lol.1v1.playerskins.pack.81', 'lol.1v1.playerskins.pack.82', 'lol.1v1.playerskins.pack.83', 'lol.1v1.playerskins.pack.84', 'lol.1v1.playerskins.pack.85', 'lol.1v1.playerskins.pack.86', 'lol.1v1.playerskins.pack.87', 'lol.1v1.playerskins.pack.88', 'lol.1v1.playerskins.pack.89', 'lol.1v1.playerskins.pack.90', 'lol.1v1.playerskins.pack.91', 'lol.1v1.playerskins.pack.92', 'lol.1v1.playerskins.pack.93', 'lol.1v1.playerskins.pack.94', 'lol.1v1.playerskins.pack.95', 'lol.1v1.playerskins.pack.96', 'lol.1v1.playerskins.pack.97', 'lol.1v1.playerskins.pack.98', 'lol.1v1.playerskins.pack.99', 'lol.1v1.playerskins.pack.100', 'lol.1v1.playerskins.pack.101', 'lol.1v1.playerskins.pack.102', 'lol.1v1.playerskins.pack.103', 'lol.1v1.playerskins.pack.104', 'lol.1v1.playerskins.pack.105', 'lol.1v1.playerskins.pack.106', 'lol.1v1.playerskins.pack.107', 'lol.1v1.playerskins.pack.108', 'lol.1v1.playerskins.pack.109', 'lol.1v1.playerskins.pack.110', 'lol.1v1.playerskins.pack.111', 'lol.1v1.playerskins.pack.112', 'lol.1v1.playerskins.pack.113', 'lol.1v1.playerskins.pack.116', 'lol.1v1.playerskins.pack.117', 'lol.1v1.playerskins.pack.118', 'lol.1v1.playerskins.pack.127', 'lol.1v1.playerskins.pack.134', 'lol.1v1.playerskins.pack.136', 'lol.1v1.playerskins.pack.138', 'lol.1v1.playerskins.pack.157', 'lol.1v1.playerskins.pack.158', 'lol.1v1.playerskins.pack.61', 'lol.1v1.playerskins.pack.62', 'lol.1v1.playerskins.pack.63', 'lol.1v1.playerskins.pack.64'],
  _UncommonSkins = ['lol.1v1.playerskins.pack.1', 'lol.1v1.playerskins.pack.7', 'lol.1v1.playerskins.pack.8', 'lol.1v1.playerskins.pack.21', 'lol.1v1.playerskins.pack.23', 'lol.1v1.playerskins.pack.24', 'lol.1v1.playerskins.pack.25', 'lol.1v1.playerskins.pack.27', 'lol.1v1.playerskins.pack.29', 'lol.1v1.playerskins.pack.30', 'lol.1v1.playerskins.pack.31', 'lol.1v1.playerskins.pack.34', 'lol.1v1.playerskins.pack.43', 'lol.1v1.playerskins.pack.54', 'lol.1v1.playerskins.pack.114', 'lol.1v1.playerskins.pack.115', 'lol.1v1.playerskins.pack.119', 'lol.1v1.playerskins.pack.120', 'lol.1v1.playerskins.pack.121', 'lol.1v1.playerskins.pack.122', 'lol.1v1.playerskins.pack.123', 'lol.1v1.playerskins.pack.124', 'lol.1v1.playerskins.pack.125', 'lol.1v1.playerskins.pack.126', 'lol.1v1.playerskins.pack.128', 'lol.1v1.playerskins.pack.129', 'lol.1v1.playerskins.pack.130', 'lol.1v1.playerskins.pack.131', 'lol.1v1.playerskins.pack.132', 'lol.1v1.playerskins.pack.133', 'lol.1v1.playerskins.pack.135', 'lol.1v1.playerskins.pack.137', 'lol.1v1.playerskins.pack.139', 'lol.1v1.playerskins.pack.140', 'lol.1v1.playerskins.pack.141', 'lol.1v1.playerskins.pack.142', 'lol.1v1.playerskins.pack.143', 'lol.1v1.playerskins.pack.144', 'lol.1v1.playerskins.pack.145', 'lol.1v1.playerskins.pack.146', 'lol.1v1.playerskins.pack.147', 'lol.1v1.playerskins.pack.148', 'lol.1v1.playerskins.pack.149', 'lol.1v1.playerskins.pack.150', 'lol.1v1.playerskins.pack.151', 'lol.1v1.playerskins.pack.152', 'lol.1v1.playerskins.pack.153', 'lol.1v1.playerskins.pack.154', 'lol.1v1.playerskins.pack.155', 'lol.1v1.playerskins.pack.156', 'lol.1v1.playerskins.pack.159', 'lol.1v1.playerskins.pack.160', 'lol.1v1.playerskins.pack.168', 'lol.1v1.playerskins.pack.185'],
  _RareSkins = ['lol.1v1.playerskins.pack.2', 'lol.1v1.playerskins.pack.4', 'lol.1v1.playerskins.pack.5', 'lol.1v1.playerskins.pack.11', 'lol.1v1.playerskins.pack.22', 'lol.1v1.playerskins.pack.32', 'lol.1v1.playerskins.pack.33', 'lol.1v1.playerskins.pack.44', 'lol.1v1.playerskins.pack.49', 'lol.1v1.playerskins.pack.50', 'lol.1v1.playerskins.pack.52', 'lol.1v1.playerskins.pack.60', 'lol.1v1.playerskins.pack.161', 'lol.1v1.playerskins.pack.162', 'lol.1v1.playerskins.pack.163', 'lol.1v1.playerskins.pack.164', 'lol.1v1.playerskins.pack.165', 'lol.1v1.playerskins.pack.166', 'lol.1v1.playerskins.pack.167', 'lol.1v1.playerskins.pack.169', 'lol.1v1.playerskins.pack.170', 'lol.1v1.playerskins.pack.171', 'lol.1v1.playerskins.pack.172', 'lol.1v1.playerskins.pack.173', 'lol.1v1.playerskins.pack.174', 'lol.1v1.playerskins.pack.175', 'lol.1v1.playerskins.pack.176', 'lol.1v1.playerskins.pack.177', 'lol.1v1.playerskins.pack.178', 'lol.1v1.playerskins.pack.179', 'lol.1v1.playerskins.pack.180', 'lol.1v1.playerskins.pack.181', 'lol.1v1.playerskins.pack.182', 'lol.1v1.playerskins.pack.183', 'lol.1v1.playerskins.pack.184', 'lol.1v1.playerskins.pack.186', 'lol.1v1.playerskins.pack.187', 'lol.1v1.playerskins.pack.188', 'lol.1v1.playerskins.pack.189', 'lol.1v1.playerskins.pack.190', 'lol.1v1.playerskins.pack.191', 'lol.1v1.playerskins.pack.192', 'lol.1v1.playerskins.pack.193', 'lol.1v1.playerskins.pack.194', 'lol.1v1.playerskins.pack.195', 'lol.1v1.playerskins.pack.196', 'lol.1v1.playerskins.pack.197', 'lol.1v1.playerskins.pack.198', 'lol.1v1.playerskins.pack.199', 'lol.1v1.playerskins.pack.201', 'lol.1v1.playerskins.pack.202', 'lol.1v1.playerskins.pack.217'],
  _EpicSkins = ['lol.1v1.playerskins.pack.6', 'lol.1v1.playerskins.pack.9', 'lol.1v1.playerskins.pack.19', 'lol.1v1.playerskins.pack.20', 'lol.1v1.playerskins.pack.39', 'lol.1v1.playerskins.pack.40', 'lol.1v1.playerskins.pack.42', 'lol.1v1.playerskins.pack.51', 'lol.1v1.playerskins.pack.55', 'lol.1v1.playerskins.pack.59', 'lol.1v1.playerskins.pack.200', 'lol.1v1.playerskins.pack.203', 'lol.1v1.playerskins.pack.204', 'lol.1v1.playerskins.pack.205', 'lol.1v1.playerskins.pack.206', 'lol.1v1.playerskins.pack.207', 'lol.1v1.playerskins.pack.208', 'lol.1v1.playerskins.pack.209', 'lol.1v1.playerskins.pack.210', 'lol.1v1.playerskins.pack.211', 'lol.1v1.playerskins.pack.212', 'lol.1v1.playerskins.pack.213', 'lol.1v1.playerskins.pack.214', 'lol.1v1.playerskins.pack.215', 'lol.1v1.playerskins.pack.216', 'lol.1v1.playerskins.pack.218', 'lol.1v1.playerskins.pack.219', 'lol.1v1.playerskins.pack.220', 'lol.1v1.playerskins.pack.221', 'lol.1v1.playerskins.pack.222', 'lol.1v1.playerskins.pack.223', 'lol.1v1.playerskins.pack.224', 'lol.1v1.playerskins.pack.225', 'lol.1v1.playerskins.pack.226', 'lol.1v1.playerskins.pack.227', 'lol.1v1.playerskins.pack.228', 'lol.1v1.playerskins.pack.229', 'lol.1v1.playerskins.pack.230', 'lol.1v1.playerskins.pack.231', 'lol.1v1.playerskins.pack.232', 'lol.1v1.playerskins.pack.233', 'lol.1v1.playerskins.pack.234', 'lol.1v1.playerskins.pack.235', 'lol.1v1.playerskins.pack.236', 'lol.1v1.playerskins.pack.237', 'lol.1v1.playerskins.pack.238', 'lol.1v1.playerskins.pack.239', 'lol.1v1.playerskins.pack.240'],
  _LegendarySkins = ['lol.1v1.playerskins.pack.3', 'lol.1v1.playerskins.pack.12', 'lol.1v1.playerskins.pack.26', 'lol.1v1.playerskins.pack.28', 'lol.1v1.playerskins.pack.38', 'lol.1v1.playerskins.pack.46', 'lol.1v1.playerskins.pack.47', 'lol.1v1.playerskins.pack.48', 'lol.1v1.playerskins.pack.53', 'lol.1v1.playerskins.pack.241', 'lol.1v1.playerskins.pack.242', 'lol.1v1.playerskins.pack.243', 'lol.1v1.playerskins.pack.244', 'lol.1v1.playerskins.pack.245', 'lol.1v1.playerskins.pack.247', 'lol.1v1.playerskins.pack.248', 'lol.1v1.playerskins.pack.249', 'lol.1v1.playerskins.pack.250', 'lol.1v1.playerskins.pack.251'],
  _MythicSkins = ['lol.1v1.playerskins.pack.65', 'lol.1v1.playerskins.pack.66', 'lol.1v1.playerskins.pack.67', 'lol.1v1.playerskins.pack.68', 'lol.1v1.playerskins.pack.69'],
  _bpBoxPools = {};
_bpBoxPools['lol.1v1.lootbox.GS1'] = {
  LootBoxProductsPools: [{
    Weight: 61,
    Pool: 'CommonSkins',
    PoolName: 'Common',
    RarityType: 0
  }, {
    Weight: 29,
    Pool: 'UncommonSkins',
    PoolName: 'Uncommon',
    RarityType: 1
  }, {
    Weight: 10,
    Pool: 'RareSkins',
    PoolName: 'Rare',
    RarityType: 2
  }]
}, _bpBoxPools['lol.1v1.lootbox.GS2'] = {
  LootBoxProductsPools: [{
    Weight: 81,
    Pool: 'RareSkins',
    PoolName: 'Rare',
    RarityType: 2
  }, {
    Weight: 15,
    Pool: 'EpicSkins',
    PoolName: 'Epic',
    RarityType: 3
  }, {
    Weight: 4,
    Pool: 'LegendarySkins',
    PoolName: 'Legendary',
    RarityType: 4
  }]
}, _bpBoxPools['lol.1v1.lootbox.GS3'] = {
  LootBoxProductsPools: [{
    Weight: 88,
    Pool: 'EpicSkins',
    PoolName: 'Epic',
    RarityType: 3
  }, {
    Weight: 11,
    Pool: 'LegendarySkins',
    PoolName: 'Legendary',
    RarityType: 4
  }, {
    Weight: 1,
    Pool: 'MythicSkins',
    PoolName: 'Mythic',
    RarityType: 5
  }]
}, _bpBoxPools['lol.1v1.lootbox.GS5'] = {
  LootBoxProductsPools: [{
    Weight: 70,
    Pool: 'LegendarySkins',
    PoolName: 'Legendary',
    RarityType: 4
  }, {
    Weight: 30,
    Pool: 'MythicSkins',
    PoolName: 'Mythic',
    RarityType: 5
  }]
}, _bpBoxPools['lol.1v1.lootbox.DS'] = {
  LootBoxProductsPools: [{
    Weight: 1,
    Pool: 'MythicSkins',
    PoolName: 'Mythic',
    RarityType: 5
  }]
}, _bpBoxPools['lol.1v1.lootbox.RLB1'] = {
  LootBoxProductsPools: [{
    Weight: 1,
    Pool: 'MythicSkins',
    PoolName: 'Mythic',
    RarityType: 5
  }]
}, ['RLB2', 'RLB3'].forEach(function (_0x22a683) {
  _bpBoxPools['lol.1v1.lootbox.' + _0x22a683] = {
    LootBoxProductsPools: [{
      Weight: 70,
      Pool: 'RareSkins',
      PoolName: 'Rare',
      RarityType: 2
    }, {
      Weight: 30,
      Pool: 'EpicSkins',
      PoolName: 'Epic',
      RarityType: 3
    }]
  };
}), _bpBoxPools['lol.1v1.lootbox.RLB4'] = {
  LootBoxProductsPools: [{
    Weight: 60,
    Pool: 'CommonSkins',
    PoolName: 'Common',
    RarityType: 0
  }, {
    Weight: 30,
    Pool: 'UncommonSkins',
    PoolName: 'Uncommon',
    RarityType: 1
  }, {
    Weight: 10,
    Pool: 'RareSkins',
    PoolName: 'Rare',
    RarityType: 2
  }]
};
const _StreakCoinsWheel = ['lol.1v1.coins.bp.25', 'lol.1v1.coins.bp.50', 'lol.1v1.coins.bp.25', 'lol.1v1.coins.bp.90', 'lol.1v1.coins.bp.25', 'lol.1v1.coins.bp.50', 'lol.1v1.coins.bp.25', 'lol.1v1.coins.bp.150', 'lol.1v1.coins.bp.25', 'lol.1v1.coins.bp.50', 'lol.1v1.coins.bp.25', 'lol.1v1.coins.bp.90', 'lol.1v1.coins.bp.25', 'lol.1v1.coins.bp.50', 'lol.1v1.coins.bp.25', 'lol.1v1.coins.bp.90', 'lol.1v1.coins.bp.25', 'lol.1v1.coins.bp.50', 'lol.1v1.coins.bp.25', 'lol.1v1.coins.bp.50'];
_bpBoxPools['lol.1v1.lootbox.StreakBonusCoins'] = {
  LootBoxProductsPools: [{
    Weight: 100,
    Pool: 'StreakCoinsWheel',
    PoolName: 'Rare',
    RarityType: 2
  }]
}, _bpBoxPools['lol.1v1.lootbox.GSL'] = {
  LootBoxProductsPools: [{
    Weight: 100,
    Pool: 'LegendarySkins',
    PoolName: 'Legendary',
    RarityType: 4
  }]
};
const _FpCoin5 = ['lol.1v1.coins.bp.5'],
  _FpCoin10 = ['lol.1v1.coins.bp.10'],
  _FpCoin15 = ['lol.1v1.coins.bp.15'],
  _FpCoin25 = ['lol.1v1.coins.bp.25'],
  _FpCoin150 = ['lol.1v1.coins.bp.150'],
  _FpGem1 = ['lol.1v1.tokens.bp.1'],
  _FpGem3 = ['lol.1v1.tokens.bp.3'],
  _FpGem5 = ['lol.1v1.tokens.bp.5'],
  _freePrizeBands = [{
    Weight: 1800,
    Pool: 'FpCoin5',
    PoolName: 'Coins',
    RarityType: 2
  }, {
    Weight: 1350,
    Pool: 'FpCoin10',
    PoolName: 'Coins',
    RarityType: 2
  }, {
    Weight: 900,
    Pool: 'FpCoin15',
    PoolName: 'Coins',
    RarityType: 2
  }, {
    Weight: 405,
    Pool: 'FpCoin25',
    PoolName: 'Coins',
    RarityType: 2
  }, {
    Weight: 45,
    Pool: 'FpCoin150',
    PoolName: 'Coins',
    RarityType: 2
  }, {
    Weight: 1860,
    Pool: 'FpGem1',
    PoolName: 'Gems',
    RarityType: 2
  }, {
    Weight: 930,
    Pool: 'FpGem3',
    PoolName: 'Gems',
    RarityType: 2
  }, {
    Weight: 310,
    Pool: 'FpGem5',
    PoolName: 'Gems',
    RarityType: 2
  }, {
    Weight: 1296,
    Pool: 'CommonSkins',
    PoolName: 'Common',
    RarityType: 0
  }, {
    Weight: 864,
    Pool: 'UncommonSkins',
    PoolName: 'Uncommon',
    RarityType: 1
  }, {
    Weight: 216,
    Pool: 'RareSkins',
    PoolName: 'Rare',
    RarityType: 2
  }, {
    Weight: 24,
    Pool: 'EpicSkins',
    PoolName: 'Epic',
    RarityType: 3
  }],
  lootBoxesDataV2 = {
    Configs: {
      'default': {
        LootBoxes: Object.assign({
          v441_mock_empty_lootbox: {
            LootBoxProductsPools: _freePrizeBands
          }
        }, _bpBoxPools),
        Pools: {
          spin_common: _spinPool,
          CommonSkins: _CommonSkins,
          UncommonSkins: _UncommonSkins,
          RareSkins: _RareSkins,
          EpicSkins: _EpicSkins,
          LegendarySkins: _LegendarySkins,
          MythicSkins: _MythicSkins,
          StreakCoinsWheel: _StreakCoinsWheel,
          FpCoin5: _FpCoin5,
          FpCoin10: _FpCoin10,
          FpCoin15: _FpCoin15,
          FpCoin25: _FpCoin25,
          FpCoin150: _FpCoin150,
          FpGem1: _FpGem1,
          FpGem3: _FpGem3,
          FpGem5: _FpGem5
        }
      }
    }
  },
  _FREE_PRIZES_ON = typeof localStorage !== 'undefined' && localStorage.getItem('FREE_PRIZES') === '1',
  lootBoxesGacha = _FREE_PRIZES_ON ? {
    Configs: {
      'default': {
        LobbyLootBoxesEnabled: true,
        NumberOfLootboxSlots: 3,
        LootBoxes: {
          'lol.1v1.lootbox.RLB1': {
            Name: 'RLB1',
            UnlockTimeHours: 4,
            GemsToOpen: 50,
            Contents: []
          },
          'lol.1v1.lootbox.RLB2': {
            Name: 'RLB2',
            UnlockTimeHours: 4,
            GemsToOpen: 50,
            Contents: []
          },
          'lol.1v1.lootbox.RLB3': {
            Name: 'RLB3',
            UnlockTimeHours: 4,
            GemsToOpen: 50,
            Contents: []
          },
          'lol.1v1.lootbox.RLB4': {
            Name: 'RLB4',
            UnlockTimeHours: 4,
            GemsToOpen: 50,
            Contents: []
          },
          'lol.1v1.lootbox.GS1': {
            Name: 'GS1',
            UnlockTimeHours: 8,
            GemsToOpen: 100,
            Contents: []
          },
          'lol.1v1.lootbox.GS2': {
            Name: 'GS2',
            UnlockTimeHours: 8,
            GemsToOpen: 100,
            Contents: []
          },
          'lol.1v1.lootbox.GS3': {
            Name: 'GS3',
            UnlockTimeHours: 8,
            GemsToOpen: 100,
            Contents: []
          },
          'lol.1v1.lootbox.GS5': {
            Name: 'GS5',
            UnlockTimeHours: 8,
            GemsToOpen: 100,
            Contents: []
          },
          'lol.1v1.lootbox.DS': {
            Name: 'DS',
            UnlockTimeHours: 24,
            GemsToOpen: 150,
            Contents: []
          }
        },
        ConfigurationsByRank: {},
        Pools: {}
      }
    }
  } : {
    Configs: {
      'default': {
        LobbyLootBoxesEnabled: false,
        NumberOfLootboxSlots: 0,
        LootBoxes: {},
        ConfigurationsByRank: {},
        Pools: {}
      }
    }
  },
  _RANK_ROAD_ON = !(typeof localStorage !== 'undefined' && localStorage.getItem('RANK_ROAD') === '0'),
  rankRoad = _RANK_ROAD_ON ? {
    Configs: {
      'default': {
        is_account_road_active: true,
        is_timer_visible: false,
        seasons: {},
        account_road_data: {
          season_number: 1,
          start_date: '2020-01-01T00:00:00.000+00:00',
          end_date: '2099-01-01T00:00:00.000+00:00',
          tiers: [{
            xp: 0,
            rank_id: 'rank_unranked',
            rank_name: 'Bronze',
            rank_division: 'BRONZE',
            rewards: [{
              RewardType: 1,
              Amount: 20,
              ProductID: 'rankroad.t0',
              TransactionID: '0'
            }]
          }, {
            xp: 60,
            rank_id: 'rank_bronze_1',
            rank_name: 'Bronze',
            rank_division: 'BRONZE',
            rewards: [{
              RewardType: 1,
              Amount: 35,
              ProductID: 'rankroad.t1',
              TransactionID: '1'
            }]
          }, {
            xp: 140,
            rank_id: 'rank_bronze_2',
            rank_name: 'Bronze',
            rank_division: 'BRONZE',
            rewards: [{
              RewardType: 3,
              Amount: 8,
              ProductID: 'rankroad.t2',
              TransactionID: '2'
            }]
          }, {
            xp: 240,
            rank_id: 'rank_bronze_3',
            rank_name: 'Bronze',
            rank_division: 'BRONZE',
            rewards: [{
              RewardType: 1,
              Amount: 50,
              ProductID: 'rankroad.t3',
              TransactionID: '3'
            }]
          }, {
            xp: 360,
            rank_id: 'rank_silver_1',
            rank_name: 'Silver',
            rank_division: 'SILVER',
            rewards: [{
              RewardType: 1,
              Amount: 55,
              ProductID: 'rankroad.t4',
              TransactionID: '4'
            }]
          }, {
            xp: 500,
            rank_id: 'rank_silver_2',
            rank_name: 'Silver',
            rank_division: 'SILVER',
            rewards: [{
              RewardType: 1,
              Amount: 60,
              ProductID: 'rankroad.t5',
              TransactionID: '5'
            }]
          }, {
            xp: 660,
            rank_id: 'rank_silver_3',
            rank_name: 'Silver',
            rank_division: 'SILVER',
            rewards: [{
              RewardType: 3,
              Amount: 16,
              ProductID: 'rankroad.t6',
              TransactionID: '6'
            }]
          }, {
            xp: 840,
            rank_id: 'rank_gold_1',
            rank_name: 'Gold',
            rank_division: 'GOLD',
            rewards: [{
              RewardType: 1,
              Amount: 65,
              ProductID: 'rankroad.t7',
              TransactionID: '7'
            }]
          }, {
            xp: 1040,
            rank_id: 'rank_gold_2',
            rank_name: 'Gold',
            rank_division: 'GOLD',
            rewards: [{
              RewardType: 3,
              Amount: 22,
              ProductID: 'rankroad.t8',
              TransactionID: '8'
            }]
          }, {
            xp: 1260,
            rank_id: 'rank_gold_3',
            rank_name: 'Gold',
            rank_division: 'GOLD',
            rewards: [{
              RewardType: 1,
              Amount: 70,
              ProductID: 'rankroad.t9',
              TransactionID: '9'
            }]
          }, {
            xp: 1500,
            rank_id: 'rank_platinum_1',
            rank_name: 'Platinum',
            rank_division: 'PLATINUM',
            rewards: [{
              RewardType: 3,
              Amount: 28,
              ProductID: 'rankroad.t10',
              TransactionID: '10'
            }]
          }, {
            xp: 1760,
            rank_id: 'rank_platinum_2',
            rank_name: 'Platinum',
            rank_division: 'PLATINUM',
            rewards: [{
              RewardType: 1,
              Amount: 60,
              ProductID: 'rankroad.t11',
              TransactionID: '11'
            }]
          }, {
            xp: 2040,
            rank_id: 'rank_platinum_3',
            rank_name: 'Platinum',
            rank_division: 'PLATINUM',
            rewards: [{
              RewardType: 1,
              Amount: 50,
              ProductID: 'rankroad.t12',
              TransactionID: '12'
            }]
          }, {
            xp: 2340,
            rank_id: 'rank_champion_1',
            rank_name: 'Champion',
            rank_division: 'CHAMPION',
            rewards: [{
              RewardType: 3,
              Amount: 4,
              ProductID: 'rankroad.t13',
              TransactionID: '13'
            }]
          }, {
            xp: 2660,
            rank_id: 'rank_champion_2',
            rank_name: 'Champion',
            rank_division: 'CHAMPION',
            rewards: [{
              RewardType: 1,
              Amount: 55,
              ProductID: 'rankroad.t14',
              TransactionID: '14'
            }]
          }, {
            xp: 3000,
            rank_id: 'rank_champion_3',
            rank_name: 'Champion',
            rank_division: 'CHAMPION',
            rewards: [{
              RewardType: 3,
              Amount: 4,
              ProductID: 'rankroad.t15',
              TransactionID: '15'
            }]
          }, {
            xp: 3260,
            rank_id: 'rank_elite_1',
            rank_name: 'Elite',
            rank_division: 'ELITE',
            rewards: [{
              RewardType: 1,
              Amount: 60,
              ProductID: 'rankroad.t16',
              TransactionID: '16'
            }]
          }, {
            xp: 3520,
            rank_id: 'rank_elite_2',
            rank_name: 'Elite',
            rank_division: 'ELITE',
            rewards: [{
              RewardType: 3,
              Amount: 5,
              ProductID: 'rankroad.t17',
              TransactionID: '17'
            }]
          }, {
            xp: 3800,
            rank_id: 'rank_elite_3',
            rank_name: 'Elite',
            rank_division: 'ELITE',
            rewards: [{
              RewardType: 3,
              Amount: 18,
              ProductID: 'rankroad.t18',
              TransactionID: '18'
            }]
          }]
        }
      }
    }
  } : {
    Configs: {
      'default': {
        is_account_road_active: false,
        account_road_data: {
          tiers: []
        },
        is_timer_visible: false,
        seasons: {}
      }
    }
  };
if (typeof window !== 'undefined') try {
  window.__RANKROAD_TIERS = rankRoad.Configs && rankRoad.Configs['default'] && rankRoad.Configs['default'].account_road_data && rankRoad.Configs['default'].account_road_data.tiers || [];
} catch (_0x8e0259) {}
const rankXPGainPerGameMode = {
    Configs: {
      'default': {
        default_xp_per_rank: {
          rank_unranked: [20, 0],
          rank_bronze_1: [20, -2],
          rank_bronze_2: [10, -2],
          rank_bronze_3: [20, -4],
          rank_silver_1: [18, -4],
          rank_silver_2: [18, -6],
          rank_silver_3: [18, -8],
          rank_gold_1: [18, -10],
          rank_gold_2: [18, -12],
          rank_gold_3: [16, -16],
          rank_platinum_1: [16, -18],
          rank_platinum_2: [14, -18],
          rank_platinum_3: [14, -20],
          rank_champion_1: [14, -20],
          rank_champion_2: [12, -20],
          rank_champion_3: [12, -20],
          rank_elite_1: [12, -22],
          rank_elite_2: [10, -22],
          rank_elite_3: [10, -24]
        },
        gamemode_xp_per_rank_overrides: {
          GrandBattleRoyale: {
            rank_unranked: [16, 14, 12, 10, 9, 8, 7, 6, 6, 5, 5, 4, 3, 2, 2, 0],
            rank_bronze_1: [14, 12, 10, 9, 8, 8, 7, 6, 5, 4, 4, 3, 3, 2, 2, 0],
            rank_bronze_2: [14, 12, 10, 9, 8, 8, 7, 6, 5, 4, 3, 3, 2, 1, 1, 0],
            rank_bronze_3: [14, 12, 10, 8, 8, 7, 7, 5, 5, 4, 3, 2, 2, 1, 0, -1],
            rank_silver_1: [14, 12, 9, 8, 7, 7, 6, 5, 5, 4, 3, 2, 1, 0, -1, -2],
            rank_silver_2: [12, 10, 9, 8, 7, 6, 6, 5, 5, 3, 2, 1, 0, -2, -2, -3],
            rank_silver_3: [12, 10, 8, 8, 7, 6, 6, 5, 5, 2, 2, 0, -1, -2, -3, -3],
            rank_gold_1: [12, 9, 8, 7, 6, 5, 4, 3, 3, 2, 0, -1, -1, -2, -3, -4],
            rank_gold_2: [12, 9, 7, 6, 5, 4, 3, 2, 1, 0, -1, -1, -2, -3, -4, -5],
            rank_gold_3: [10, 8, 7, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -8],
            rank_platinum_1: [8, 6, 5, 4, 3, 2, 1, 0, -1, -2, -4, -4, -5, -6, -8, -10],
            rank_platinum_2: [8, 6, 5, 4, 3, 2, 1, 0, -2, -3, -4, -5, -6, -6, -8, -10],
            rank_platinum_3: [8, 6, 5, 4, 3, 2, 1, 0, -2, -3, -4, -5, -6, -6, -8, -10],
            rank_champion_1: [8, 6, 5, 4, 3, 2, 0, -1, -2, -3, -4, -5, -6, -6, -8, -12],
            rank_champion_2: [8, 6, 5, 4, 3, 2, 0, -1, -2, -3, -4, -5, -6, -6, -9, -12],
            rank_champion_3: [8, 6, 5, 4, 3, 2, 0, -1, -2, -3, -4, -5, -6, -6, -9, -12],
            rank_elite_1: [7, 6, 5, 4, 3, 0, -1, -1, -2, -3, -4, -5, -6, -7, -9, -14],
            rank_elite_2: [7, 6, 5, 4, 3, 0, -1, -2, -2, -3, -4, -5, -6, -8, -10, -14],
            rank_elite_3: [7, 6, 5, 4, 3, 0, -1, -2, -3, -4, -5, -6, -7, -8, -10, -14]
          },
          BattleRoyaleFirstMatch: {
            rank_unranked: [16, 14, 12, 10, 9, 8, 7, 6, 6, 5, 5, 4, 3, 2, 2, 0],
            rank_bronze_1: [14, 12, 10, 9, 8, 8, 7, 6, 5, 4, 4, 3, 3, 2, 2, 0],
            rank_bronze_2: [14, 12, 10, 9, 8, 8, 7, 6, 5, 4, 3, 3, 2, 1, 1, 0],
            rank_bronze_3: [14, 12, 10, 8, 8, 7, 7, 5, 5, 4, 3, 2, 2, 1, 0, -1],
            rank_silver_1: [14, 12, 9, 8, 7, 7, 6, 5, 5, 4, 3, 2, 1, 0, -1, -2],
            rank_silver_2: [12, 10, 9, 8, 7, 6, 6, 5, 5, 3, 2, 1, 0, -2, -2, -3],
            rank_silver_3: [12, 10, 8, 8, 7, 6, 6, 5, 5, 2, 2, 0, -1, -2, -3, -3],
            rank_gold_1: [12, 9, 8, 7, 6, 5, 4, 3, 3, 2, 0, -1, -1, -2, -3, -4],
            rank_gold_2: [12, 9, 7, 6, 5, 4, 3, 2, 1, 0, -1, -1, -2, -3, -4, -5],
            rank_gold_3: [10, 8, 7, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -8],
            rank_platinum_1: [8, 6, 5, 4, 3, 2, 1, 0, -1, -2, -4, -4, -5, -6, -8, -10],
            rank_platinum_2: [8, 6, 5, 4, 3, 2, 1, 0, -2, -3, -4, -5, -6, -6, -8, -10],
            rank_platinum_3: [8, 6, 5, 4, 3, 2, 1, 0, -2, -3, -4, -5, -6, -6, -8, -10],
            rank_champion_1: [8, 6, 5, 4, 3, 2, 0, -1, -2, -3, -4, -5, -6, -6, -8, -12],
            rank_champion_2: [8, 6, 5, 4, 3, 2, 0, -1, -2, -3, -4, -5, -6, -6, -9, -12],
            rank_champion_3: [8, 6, 5, 4, 3, 2, 0, -1, -2, -3, -4, -5, -6, -6, -9, -12],
            rank_elite_1: [7, 6, 5, 4, 3, 0, -1, -1, -2, -3, -4, -5, -6, -7, -9, -14],
            rank_elite_2: [7, 6, 5, 4, 3, 0, -1, -2, -2, -3, -4, -5, -6, -8, -10, -14],
            rank_elite_3: [7, 6, 5, 4, 3, 0, -1, -2, -3, -4, -5, -6, -7, -8, -10, -14]
          },
          GrandBattleRoyaleZeroBuilds: {
            rank_unranked: [16, 14, 12, 10, 9, 8, 7, 6, 6, 5, 5, 4, 3, 2, 2, 0],
            rank_bronze_1: [14, 12, 10, 9, 8, 8, 7, 6, 5, 4, 4, 3, 3, 2, 2, 0],
            rank_bronze_2: [14, 12, 10, 9, 8, 8, 7, 6, 5, 4, 3, 3, 2, 1, 1, 0],
            rank_bronze_3: [14, 12, 10, 8, 8, 7, 7, 5, 5, 4, 3, 2, 2, 1, 0, -1],
            rank_silver_1: [14, 12, 9, 8, 7, 7, 6, 5, 5, 4, 3, 2, 1, 0, -1, -2],
            rank_silver_2: [12, 10, 9, 8, 7, 6, 6, 5, 5, 3, 2, 1, 0, -2, -2, -3],
            rank_silver_3: [12, 10, 8, 8, 7, 6, 6, 5, 5, 2, 2, 0, -1, -2, -3, -3],
            rank_gold_1: [12, 9, 8, 7, 6, 5, 4, 3, 3, 2, 0, -1, -1, -2, -3, -4],
            rank_gold_2: [12, 9, 7, 6, 5, 4, 3, 2, 1, 0, -1, -1, -2, -3, -4, -5],
            rank_gold_3: [10, 8, 7, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -8],
            rank_platinum_1: [8, 6, 5, 4, 3, 2, 1, 0, -1, -2, -4, -4, -5, -6, -8, -10],
            rank_platinum_2: [8, 6, 5, 4, 3, 2, 1, 0, -2, -3, -4, -5, -6, -6, -8, -10],
            rank_platinum_3: [8, 6, 5, 4, 3, 2, 1, 0, -2, -3, -4, -5, -6, -6, -8, -10],
            rank_champion_1: [8, 6, 5, 4, 3, 2, 0, -1, -2, -3, -4, -5, -6, -6, -8, -12],
            rank_champion_2: [8, 6, 5, 4, 3, 2, 0, -1, -2, -3, -4, -5, -6, -6, -9, -12],
            rank_champion_3: [8, 6, 5, 4, 3, 2, 0, -1, -2, -3, -4, -5, -6, -6, -9, -12],
            rank_elite_1: [7, 6, 5, 4, 3, 0, -1, -1, -2, -3, -4, -5, -6, -7, -9, -14],
            rank_elite_2: [7, 6, 5, 4, 3, 0, -1, -2, -2, -3, -4, -5, -6, -8, -10, -14],
            rank_elite_3: [7, 6, 5, 4, 3, 0, -1, -2, -3, -4, -5, -6, -7, -8, -10, -14]
          },
          MiniBattleRoyale: {
            rank_unranked: [15, 12, 10, 8, 6, 5, 4, 3, 2, 1],
            rank_bronze_1: [14, 12, 10, 8, 6, 4, 3, 2, 1, 1],
            rank_bronze_2: [14, 11, 10, 8, 5, 4, 3, 2, 1, 0],
            rank_bronze_3: [14, 12, 9, 7, 5, 3, 2, 1, 0, -1],
            rank_silver_1: [13, 10, 9, 7, 4, 2, 2, 1, 0, -1],
            rank_silver_2: [13, 10, 9, 7, 4, 2, 0, -1, -2, -3],
            rank_silver_3: [12, 9, 9, 7, 4, 2, 0, -1, -2, -3],
            rank_gold_1: [11, 8, 7, 6, 3, 2, 0, -2, -3, -4],
            rank_gold_2: [10, 7, 6, 3, 2, 0, -1, -2, -3, -4],
            rank_gold_3: [8, 6, 5, 3, 0, -1, -2, -3, -4, -5],
            rank_platinum_1: [7, 5, 3, 2, -1, -2, -3, -4, -6, -8],
            rank_platinum_2: [7, 5, 3, 2, -2, -3, -4, -5, -6, -8],
            rank_platinum_3: [7, 5, 3, 2, -2, -3, -4, -5, -6, -8],
            rank_champion_1: [7, 5, 3, 0, -2, -3, -4, -5, -7, -8],
            rank_champion_2: [7, 5, 3, 0, -2, -3, -4, -5, -7, -9],
            rank_champion_3: [7, 5, 3, -1, -2, -3, -4, -5, -7, -9],
            rank_elite_1: [6, 4, 2, -1, -2, -3, -4, -5, -8, -10],
            rank_elite_2: [6, 4, 2, -1, -2, -3, -4, -5, -8, -12],
            rank_elite_3: [6, 4, 2, -1, -2, -3, -4, -5, -10, -12]
          },
          GrandBattleRoyale_Duos: {
            rank_unranked: [15, 11, 9, 7, 5, 4, 2, 1],
            rank_bronze_1: [13, 10, 8, 7, 5, 3, 2, 1],
            rank_bronze_2: [13, 10, 8, 6, 4, 3, 2, 1],
            rank_bronze_3: [13, 9, 7, 6, 5, 3, 1, -1],
            rank_silver_1: [13, 9, 7, 6, 4, 2, 1, -2],
            rank_silver_2: [11, 8, 7, 6, 4, 2, -1, -3],
            rank_silver_3: [11, 8, 7, 6, 3, 1, -2, -3],
            rank_gold_1: [11, 8, 6, 4, 2, -1, -2, -4],
            rank_gold_2: [10, 7, 5, 3, 1, -1, -3, -5],
            rank_gold_3: [9, 6, 4, 2, 0, -3, -5, -7],
            rank_platinum_1: [7, 5, 3, 1, -2, -4, -6, -9],
            rank_platinum_2: [7, 5, 3, 1, -3, -5, -6, -9],
            rank_platinum_3: [7, 5, 3, 1, -3, -5, -6, -9],
            rank_champion_1: [7, 5, 3, 0, -3, -5, -6, -10],
            rank_champion_2: [7, 5, 3, 0, -3, -5, -6, -11],
            rank_champion_3: [7, 5, 3, -1, -3, -5, -6, -11],
            rank_elite_1: [6, 4, 2, -1, -3, -5, -6, -12],
            rank_elite_2: [6, 4, 2, -2, -3, -5, -7, -12],
            rank_elite_3: [6, 4, 2, -2, -4, -6, -7, -12]
          },
          MiniBattleRoyale_Duos: {
            rank_unranked: [13, 9, 6, 4, 1],
            rank_bronze_1: [13, 9, 5, 3, 1],
            rank_bronze_2: [12, 9, 4, 2, 0],
            rank_bronze_3: [12, 8, 4, 2, -1],
            rank_silver_1: [11, 8, 3, 1, -1],
            rank_silver_2: [11, 8, 3, 0, -2],
            rank_silver_3: [10, 8, 3, 0, -2],
            rank_gold_1: [9, 6, 3, -1, -3],
            rank_gold_2: [8, 4, 1, -2, -4],
            rank_gold_3: [7, 4, 0, -3, -5],
            rank_platinum_1: [6, 3, -1, -4, -7],
            rank_platinum_2: [6, 3, -2, -4, -7],
            rank_platinum_3: [6, 2, -2, -5, -7],
            rank_champion_1: [6, 2, -2, -5, -8],
            rank_champion_2: [6, 2, -2, -5, -8],
            rank_champion_3: [6, 2, -3, -5, -8],
            rank_elite_1: [5, 1, -3, -5, -9],
            rank_elite_2: [5, 1, -3, -5, -10],
            rank_elite_3: [5, 1, -3, -5, -11]
          },
          Showdown: {
            rank_unranked: [20, 18, 18, 16, 16, 14, 12, 12, 12, 10, 10, 8, 6, 4, 4, 0],
            rank_bronze_1: [24, 20, 18, 16, 14, 14, 12, 12, 10, 8, 8, 6, 6, 4, 4, 0],
            rank_bronze_2: [22, 20, 18, 16, 14, 14, 12, 12, 10, 8, 6, 6, 4, 2, 2, 0],
            rank_bronze_3: [22, 20, 18, 14, 14, 12, 12, 10, 10, 8, 6, 4, 4, 2, 0, -2],
            rank_silver_1: [22, 20, 16, 14, 12, 12, 10, 10, 10, 8, 6, 4, 2, 0, -2, -4],
            rank_silver_2: [18, 16, 16, 14, 12, 10, 10, 10, 10, 6, 4, 2, 0, -4, -4, -6],
            rank_silver_3: [18, 16, 14, 14, 12, 10, 10, 10, 8, 4, 4, 0, -2, -4, -6, -6],
            rank_gold_1: [18, 14, 14, 12, 10, 8, 6, 6, 6, 4, 0, -2, -2, -4, -6, -8],
            rank_gold_2: [18, 14, 12, 10, 8, 6, 4, 4, 2, 0, -2, -2, -4, -6, -8, -10],
            rank_gold_3: [14, 12, 12, 8, 6, 4, 2, 2, 0, -2, -4, -6, -8, -10, -12, -16],
            rank_platinum_1: [10, 8, 8, 6, 4, 2, 0, 0, -2, -4, -8, -8, -10, -12, -16, -20],
            rank_platinum_2: [10, 8, 8, 6, 4, 2, 0, 0, -4, -6, -8, -10, -12, -12, -16, -20],
            rank_platinum_3: [10, 8, 8, 6, 4, 2, 0, -2, -4, -6, -8, -10, -12, -12, -16, -20],
            rank_champion_1: [10, 8, 8, 6, 4, 2, -2, -2, -4, -6, -8, -10, -12, -12, -16, -24],
            rank_champion_2: [10, 8, 8, 6, 4, 2, -2, -2, -4, -6, -8, -10, -12, -12, -18, -24],
            rank_champion_3: [10, 8, 8, 6, 4, 2, -2, -2, -4, -6, -8, -10, -12, -12, -18, -24],
            rank_elite_1: [10, 8, 6, 4, 2, -2, -4, -4, -4, -6, -8, -10, -12, -14, -18, -28],
            rank_elite_2: [10, 8, 6, 4, 2, -2, -4, -4, -6, -6, -8, -10, -12, -16, -20, -28],
            rank_elite_3: [10, 8, 6, 4, 0, -2, -4, -6, -6, -8, -10, -12, -14, -20, -24, -28]
          },
          Showdown_Duos: {
            rank_unranked: [26, 20, 16, 12, 10, 8, 4, 2],
            rank_bronze_1: [22, 18, 14, 12, 10, 6, 4, 2],
            rank_bronze_2: [22, 18, 14, 10, 8, 6, 4, 2],
            rank_bronze_3: [22, 16, 12, 10, 10, 6, 2, -2],
            rank_silver_1: [22, 16, 12, 10, 8, 4, 2, -4],
            rank_silver_2: [18, 14, 12, 10, 8, 4, -2, -6],
            rank_silver_3: [18, 14, 12, 10, 6, 2, -4, -6],
            rank_gold_1: [18, 14, 10, 6, 4, -2, -4, -8],
            rank_gold_2: [16, 12, 8, 4, 2, -2, -6, -10],
            rank_gold_3: [14, 10, 6, 2, 0, -6, -10, -14],
            rank_platinum_1: [10, 8, 4, 0, -4, -8, -12, -18],
            rank_platinum_2: [10, 8, 4, 0, -6, -10, -12, -18],
            rank_platinum_3: [10, 8, 4, 0, -6, -10, -12, -18],
            rank_champion_1: [10, 8, 4, -2, -6, -10, -12, -20],
            rank_champion_2: [10, 8, 4, -2, -6, -10, -12, -22],
            rank_champion_3: [10, 8, 4, -4, -6, -10, -12, -22],
            rank_elite_1: [8, 6, 2, -4, -6, -10, -12, -24],
            rank_elite_2: [8, 6, 2, -6, -6, -10, -14, -24],
            rank_elite_3: [8, 6, 2, -6, -8, -12, -14, -24]
          },
          ShowdownZeroBuilds: {
            rank_unranked: [20, 18, 18, 16, 16, 14, 12, 12, 12, 10, 10, 8, 6, 4, 4, 0],
            rank_bronze_1: [24, 20, 18, 16, 14, 14, 12, 12, 10, 8, 8, 6, 6, 4, 4, 0],
            rank_bronze_2: [22, 20, 18, 16, 14, 14, 12, 12, 10, 8, 6, 6, 4, 2, 2, 0],
            rank_bronze_3: [22, 20, 18, 14, 14, 12, 12, 10, 10, 8, 6, 4, 4, 2, 0, -2],
            rank_silver_1: [22, 20, 16, 14, 12, 12, 10, 10, 10, 8, 6, 4, 2, 0, -2, -4],
            rank_silver_2: [18, 16, 16, 14, 12, 10, 10, 10, 10, 6, 4, 2, 0, -4, -4, -6],
            rank_silver_3: [18, 16, 14, 14, 12, 10, 10, 10, 8, 4, 4, 0, -2, -4, -6, -6],
            rank_gold_1: [18, 14, 14, 12, 10, 8, 6, 6, 6, 4, 0, -2, -2, -4, -6, -8],
            rank_gold_2: [18, 14, 12, 10, 8, 6, 4, 4, 2, 0, -2, -2, -4, -6, -8, -10],
            rank_gold_3: [14, 12, 12, 8, 6, 4, 2, 2, 0, -2, -4, -6, -8, -10, -12, -16],
            rank_platinum_1: [10, 8, 8, 6, 4, 2, 0, 0, -2, -4, -8, -8, -10, -12, -16, -20],
            rank_platinum_2: [10, 8, 8, 6, 4, 2, 0, 0, -4, -6, -8, -10, -12, -12, -16, -20],
            rank_platinum_3: [10, 8, 8, 6, 4, 2, 0, -2, -4, -6, -8, -10, -12, -12, -16, -20],
            rank_champion_1: [10, 8, 8, 6, 4, 2, -2, -2, -4, -6, -8, -10, -12, -12, -16, -24],
            rank_champion_2: [10, 8, 8, 6, 4, 2, -2, -2, -4, -6, -8, -10, -12, -12, -18, -24],
            rank_champion_3: [10, 8, 8, 6, 4, 2, -2, -2, -4, -6, -8, -10, -12, -12, -18, -24],
            rank_elite_1: [10, 8, 6, 4, 2, -2, -4, -4, -4, -6, -8, -10, -12, -14, -18, -28],
            rank_elite_2: [10, 8, 6, 4, 2, -2, -4, -4, -6, -6, -8, -10, -12, -16, -20, -28],
            rank_elite_3: [10, 8, 6, 4, 0, -2, -4, -6, -6, -8, -10, -12, -14, -20, -24, -28]
          },
          ShowdownZeroBuilds_Duos: {
            rank_unranked: [26, 20, 16, 12, 10, 8, 4, 2],
            rank_bronze_1: [22, 18, 14, 12, 10, 6, 4, 2],
            rank_bronze_2: [22, 18, 14, 10, 8, 6, 4, 2],
            rank_bronze_3: [22, 16, 12, 10, 10, 6, 2, -2],
            rank_silver_1: [22, 16, 12, 10, 8, 4, 2, -4],
            rank_silver_2: [18, 14, 12, 10, 8, 4, -2, -6],
            rank_silver_3: [18, 14, 12, 10, 6, 2, -4, -6],
            rank_gold_1: [18, 14, 10, 6, 4, -2, -4, -8],
            rank_gold_2: [16, 12, 8, 4, 2, -2, -6, -10],
            rank_gold_3: [14, 10, 6, 2, 0, -6, -10, -14],
            rank_platinum_1: [10, 8, 4, 0, -4, -8, -12, -18],
            rank_platinum_2: [10, 8, 4, 0, -6, -10, -12, -18],
            rank_platinum_3: [10, 8, 4, 0, -6, -10, -12, -18],
            rank_champion_1: [10, 8, 4, -2, -6, -10, -12, -20],
            rank_champion_2: [10, 8, 4, -2, -6, -10, -12, -22],
            rank_champion_3: [10, 8, 4, -4, -6, -10, -12, -22],
            rank_elite_1: [8, 6, 2, -4, -6, -10, -12, -24],
            rank_elite_2: [8, 6, 2, -6, -6, -10, -14, -24],
            rank_elite_3: [8, 6, 2, -6, -8, -12, -14, -24]
          }
        }
      }
    }
  },
  _TROPHY_LIVE = !(typeof localStorage !== 'undefined' && localStorage.getItem('TROPHY_LIVE') === '0'),
  _TROPHY_DIAG = typeof localStorage !== 'undefined' && localStorage.getItem('TROPHY_DIAG') || '',
  _TROPHY_DIAG_SEASON = _TROPHY_DIAG === 'notiers' ? {
    is_timer_visible: true,
    seasons: {
      '1': {
        start_date: '2020-01-01T00:00:00.000Z',
        end_date: '2030-01-01T00:00:00.000Z',
        tiers: []
      }
    }
  } : _TROPHY_DIAG === 'xponly' ? {
    is_timer_visible: true,
    seasons: {
      '1': {
        start_date: '2020-01-01T00:00:00.000Z',
        end_date: '2030-01-01T00:00:00.000Z',
        tiers: [{
          xp: 0
        }, {
          xp: 100
        }, {
          xp: 200
        }, {
          xp: 300
        }, {
          xp: 400
        }]
      }
    }
  } : {
    is_timer_visible: true,
    seasons: {
      '1': {
        start_date: '2020-01-01T00:00:00.000Z',
        end_date: '2030-01-01T00:00:00.000Z',
        tiers: [{
          xp: 0,
          free_rewards: []
        }, {
          xp: 100,
          free_rewards: []
        }, {
          xp: 200,
          free_rewards: []
        }, {
          xp: 300,
          free_rewards: []
        }, {
          xp: 400,
          free_rewards: []
        }]
      }
    }
  },
  trophyRoadV2 = _TROPHY_DIAG === 'empty' || _TROPHY_DIAG === 'notiers' || _TROPHY_DIAG === 'xponly' ? {
    Configs: {
      'default': _TROPHY_DIAG_SEASON
    }
  } : _TROPHY_LIVE ? {
    Configs: {
      'default': {
        is_timer_visible: true,
        seasons: {
          '1': {
            start_date: '2020-01-01T00:00:00.000Z',
            end_date: '2030-01-01T00:00:00.000Z',
            tiers: [{
              xp: 0,
              free_rewards: []
            }, {
              xp: 5,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 20,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 50,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB2'
              }]
            }, {
              xp: 80,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 140,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 200,
              free_rewards: [{
                RewardType: 'LOLCoins',
                Amount: 50
              }]
            }, {
              xp: 290,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 380,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB2'
              }]
            }, {
              xp: 500,
              free_rewards: [{
                RewardType: 'LOLCoins',
                Amount: 10
              }]
            }, {
              xp: 620,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 860,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 1100,
              free_rewards: [{
                RewardType: 'LOLCoins',
                Amount: 10
              }]
            }, {
              xp: 1340,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB2'
              }]
            }, {
              xp: 1580,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 1740,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 2060,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 2300,
              free_rewards: [{
                RewardType: 'LOLCoins',
                Amount: 30
              }]
            }, {
              xp: 2540,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB2'
              }]
            }, {
              xp: 2780,
              free_rewards: [{
                RewardType: 'LOLCoins',
                Amount: 90
              }]
            }, {
              xp: 3020,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 3260,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 3500,
              free_rewards: [{
                RewardType: 'LOLCoins',
                Amount: 100
              }]
            }, {
              xp: 3740,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 3980,
              free_rewards: [{
                RewardType: 'LOLCoins',
                Amount: 100
              }]
            }, {
              xp: 4220,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB2'
              }]
            }, {
              xp: 4460,
              free_rewards: [{
                RewardType: 'LOLCoins',
                Amount: 150
              }]
            }, {
              xp: 4700,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 4940,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 5180,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB1'
              }]
            }, {
              xp: 5420,
              free_rewards: [{
                RewardType: 'Product',
                ProductID: 'lol.1v1.lootbox.RLB2'
              }]
            }]
          }
        }
      }
    }
  } : {
    Configs: {
      'default': {
        is_timer_visible: false,
        seasons: {}
      }
    }
  };
try {
  var _trd = trophyRoadV2 && trophyRoadV2.Configs && trophyRoadV2.Configs['default'] || {},
    _s1 = _trd.seasons && _trd.seasons['1'];
  console.log('%c[TROPHY-RC] diag=' + (_TROPHY_DIAG || '(off)') + ' live=' + _TROPHY_LIVE + ' → season1.tiers served = ' + (_s1 && _s1.tiers ? _s1.tiers.length : 'NO SEASON-1'), 'color:#0ff;font-weight:bold;font-size:13px');
} catch (_0xca7581) {}
const _BISECT = function () {
  try {
    return /[?&]rcbisect=1/.test(location.search) && window.localStorage && localStorage.getItem('RC_BISECT') || '';
  } catch (_0xd6553e) {
    return '';
  }
}();
if (_BISECT) try {
  console.warn('[RC_BISECT ACTIVE] ' + _BISECT + ' — RC payloads are being MUTATED (debug mode)');
} catch (_0x130e60) {}
const equipmentV1 = {
    Configs: {
      'default': {
        are_loadouts_enabled: false
      }
    }
  },
  subscriptions = {
    Configs: {
      'default': {
        subscriptions: {}
      }
    }
  };
function setDefaultValuesDirect(_0xa1fb4e) {
  const _0x529505 = 'default';
  try {
    const _0x1a592d = gameModesV4.Configs['default'].modes_info;
    for (const _0x1e97df in _0x1a592d) {
      if (_0x1a592d[_0x1e97df].OverridenBattlePassPlacementXP != null) continue;
      _0x1a592d[_0x1e97df].OverridenBattlePassPlacementXP = _0x1e97df === '1v1_Clash' ? [10, 3] : [0, 0];
    }
  } catch (_0x1a7ffa) {}
  const _0x2fe77d = [['BattlePassV3', 'BattlePassID', battlePassV3], ['GameModesV4', 'GameModesID', gameModesV4], ['ProductsV7', 'ProductsID', productsV6], ['GeneralConfigV4', 'GeneralConfigID', generalConfigV4], ['StoreSettingsV9', 'StoreSettingsID', storeSettingsV8], ['GameEventsV4', 'GameEventsID', gameEventsV4], ['DailyRewardsV2', 'DailyRewardsID', dailyRewardsV2], ['XPBank', 'XPBankID', xpBank], ['ChallengesV2', 'ChallengesID', challengesV2], ['DailySpinsConfig', 'DailySpinsId', dailySpinsConfig], ['FTUEConfigV1', 'FTUEConfigID', ftueConfigV1], ['GameplaySettings', 'GameplaySettingsID', gameplaySettings], ['Leaderboards', 'LeaderboardsID', leaderboards], ['LimitedLockerSpinsConfig', 'LimitedLockerSpinID', limitedLockerSpinsConfig], ['LootBoxesDataV2', 'LootBoxesId', lootBoxesDataV2], ['LootBoxesGacha', 'LootBoxesId', lootBoxesGacha], ['RankRoad', 'RankRoadID', rankRoad], ['RankXPGainPerGameMode', 'RankXPGainPerGameModeId', rankXPGainPerGameMode], ['TrophyRoadV2', 'TrophyRoadID', trophyRoadV2], ['EquipmentV1', 'EquipmentID', equipmentV1], ['Subscriptions', 'SubscriptionsId', subscriptions]],
    _0xe6d47e = {
      Configs: {}
    };
  console.log('[Bisect] mode=' + _BISECT), _0x2fe77d.forEach(([_0x664ac9, _0xcda8d1, _0x4d990d], _0x12543a) => {
    let _0x1c26d8 = _0x4d990d;
    if (_BISECT === 'ALL-EMPTY') _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'EMPTY-EXCEPT-MODES' && _0x12543a !== 1) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'EMPTY-EXCEPT-MODES-BP' && _0x12543a !== 0 && _0x12543a !== 1) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'EMPTY-EXCEPT-MODES-BP-DR' && _0x12543a !== 0 && _0x12543a !== 1 && _0x12543a !== 6) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'EMPTY-EXCEPT-MODES-BP-DR-GE' && _0x12543a !== 0 && _0x12543a !== 1 && _0x12543a !== 5 && _0x12543a !== 6) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'EMPTY-EXCEPT-MODES-BP-DR-GE-GC' && _0x12543a !== 0 && _0x12543a !== 1 && _0x12543a !== 3 && _0x12543a !== 5 && _0x12543a !== 6) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'EMPTY-EXCEPT-MAIN-PLUS-SMALL' && ![0, 1, 3, 5, 6, 7, 11, 17, 20].includes(_0x12543a)) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'EMPTY-PLUS-PRODUCTS' && ![0, 1, 2, 3, 5, 6, 7, 11, 17, 20].includes(_0x12543a)) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'EMPTY-PLUS-STORE' && ![0, 1, 3, 4, 5, 6, 7, 11, 17, 20].includes(_0x12543a)) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'PLUS-PRODUCTS-STORE' && ![0, 1, 2, 3, 4, 5, 6, 7, 11, 17, 20].includes(_0x12543a)) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'A' && _0x12543a < 9) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'B' && _0x12543a >= 9) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'A1' && _0x12543a < 4) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'A2' && _0x12543a >= 4 && _0x12543a < 9) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'A1a' && _0x12543a < 2) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'A1b' && _0x12543a >= 2 && _0x12543a < 4) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'A1a1' && _0x12543a === 0) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'A1a2' && _0x12543a === 1) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'C-only-pascal' && _0x12543a !== 1 && _0x12543a !== 2 && _0x12543a !== 3 && _0x12543a !== 4 && _0x12543a !== 5 && _0x12543a !== 6) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'C-no-products' && (_0x12543a === 2 || _0x12543a === 3 || _0x12543a === 0)) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'C-no-general' && (_0x12543a === 4 || _0x12543a === 0)) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'C-no-modes' && (_0x12543a === 1 || _0x12543a === 0)) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'C-no-store' && (_0x12543a === 5 || _0x12543a === 6 || _0x12543a === 0)) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'OOB-no-products' && (_0x12543a === 2 || _0x12543a === 3)) _0x1c26d8 = _0xe6d47e;
    _BISECT === 'OOB-products-no-skins' && (_0x12543a === 2 || _0x12543a === 3) && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), _0x1c26d8.Configs['default'].skins_data = {});
    _BISECT === 'OOB-products-no-bppremium' && (_0x12543a === 2 || _0x12543a === 3) && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), _0x1c26d8.Configs['default'].battle_pass_premium_data = {});
    _BISECT === 'OOB-products-no-influencer' && (_0x12543a === 2 || _0x12543a === 3) && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), _0x1c26d8.Configs['default'].influencer_campaign_data = null);
    _BISECT === 'OOB-products-no-coins' && (_0x12543a === 2 || _0x12543a === 3) && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), _0x1c26d8.Configs['default'].coins_data = {});
    if (_BISECT === 'PRODUCTS-malformed' && (_0x12543a === 2 || _0x12543a === 3)) {
      _0xa1fb4e.ProductsV6 = '{invalid_json', _0xa1fb4e.ProductsV7 = '{invalid_json', _0xa1fb4e.ProductsID = _0x529505;
      return;
    }
    if (_BISECT === 'GENERAL-malformed' && _0x12543a === 4) {
      _0xa1fb4e.GeneralConfigV4 = '{invalid_json', _0xa1fb4e.GeneralConfigID = _0x529505;
      return;
    }
    if (_BISECT === 'CHALLENGES-malformed' && _0x12543a === 8) {
      _0xa1fb4e.ChallengesV2 = '{invalid_json', _0xa1fb4e.ChallengesID = _0x529505;
      return;
    }
    if (_BISECT === 'FTUE-malformed' && _0x12543a === 10) {
      _0xa1fb4e.FTUEConfigV1 = '{invalid_json', _0xa1fb4e.FTUEConfigID = _0x529505;
      return;
    }
    if (_BISECT === 'LEADERBOARDS-malformed' && _0x12543a === 12) {
      _0xa1fb4e.Leaderboards = '{invalid_json', _0xa1fb4e.LeaderboardsID = _0x529505;
      return;
    }
    if (_BISECT === 'EQUIPMENT-malformed' && _0x12543a === 19) {
      _0xa1fb4e.EquipmentV1 = '{invalid_json', _0xa1fb4e.EquipmentID = _0x529505;
      return;
    }
    if (_BISECT === 'GACHA-malformed' && _0x12543a === 15) {
      _0xa1fb4e.LootBoxesGacha = '{invalid_json', _0xa1fb4e.LootBoxesId = _0x529505;
      return;
    }
    _BISECT === 'OOB-products-no-skus' && (_0x12543a === 2 || _0x12543a === 3) && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), _0x1c26d8.Configs['default'].skins_data = {}, _0x1c26d8.Configs['default'].coins_data = {}, _0x1c26d8.Configs['default'].battle_pass_premium_data = {}, _0x1c26d8.Configs['default'].influencer_campaign_data = null);
    if (_BISECT === 'OOB-no-general' && _0x12543a === 4) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'OOB-no-store' && (_0x12543a === 5 || _0x12543a === 6)) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'OOB-no-bp' && _0x12543a === 0) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'BP-minimal' && _0x12543a === 0) _0x1c26d8 = {
      Configs: {
        'default': {
          current_season: 1
        }
      }
    };
    _BISECT === 'BP-no-tiers' && _0x12543a === 0 && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), _0x1c26d8.Configs['default'].battle_pass.tiers = []);
    _BISECT === 'BP-no-banner' && _0x12543a === 0 && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), delete _0x1c26d8.Configs['default'].banner_image, delete _0x1c26d8.Configs['default'].premium_popup_config);
    _BISECT === 'BP-no-dates' && _0x12543a === 0 && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), delete _0x1c26d8.Configs['default'].start_date, delete _0x1c26d8.Configs['default'].end_date);
    _BISECT === 'BP-empty-rewards' && _0x12543a === 0 && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), _0x1c26d8.Configs['default'].battle_pass.tiers = _0x1c26d8.Configs['default'].battle_pass.tiers.map(function (_0x54d064) {
      return {
        xp: _0x54d064.xp,
        free_rewards: [],
        premium_rewards: []
      };
    }));
    _BISECT === 'BP-1tier' && _0x12543a === 0 && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), _0x1c26d8.Configs['default'].battle_pass.tiers = [{
      xp: 100,
      free_rewards: [],
      premium_rewards: []
    }]);
    _BISECT === 'BP-1tier-placement' && _0x12543a === 0 && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), _0x1c26d8.Configs['default'].battle_pass.tiers = [{
      xp: 100,
      free_rewards: [],
      premium_rewards: []
    }], _0x1c26d8.Configs['default'].battle_pass.placement_xp = [50]);
    _BISECT === 'BP-empty-tier-obj' && _0x12543a === 0 && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), _0x1c26d8.Configs['default'].battle_pass.tiers = [{}]);
    if (_BISECT === 'MODES-min' && _0x12543a === 0) _0x1c26d8 = _0xe6d47e;
    _BISECT === 'MODES-min' && _0x12543a === 1 && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), _0x1c26d8.Configs['default'].ModesInfo = {
      '1v1': {
        OverridenRangeIncreaseFactor: 12000,
        OverridenBattlePassPlacementXP: []
      }
    });
    if (_BISECT === 'MODES-empty' && _0x12543a === 0) _0x1c26d8 = _0xe6d47e;
    _BISECT === 'MODES-empty' && _0x12543a === 1 && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), _0x1c26d8.Configs['default'].ModesInfo = {});
    if (_BISECT === 'MODES-omit' && _0x12543a === 0) _0x1c26d8 = _0xe6d47e;
    _BISECT === 'MODES-omit' && _0x12543a === 1 && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), delete _0x1c26d8.Configs['default'].ModesInfo);
    if (_BISECT === 'MODES-omit-key' && _0x12543a === 0) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'MODES-omit-key' && _0x12543a === 1) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'MODES-malformed' && _0x12543a === 0) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'MODES-malformed' && _0x12543a === 1) {
      _0xa1fb4e.GameModesV4 = '{invalid_json', _0xa1fb4e.GameModesID = _0x529505;
      return;
    }
    if (_BISECT === 'MODES-null' && _0x12543a === 1) {
      _0xa1fb4e.GameModesV4 = 'null', _0xa1fb4e.GameModesID = _0x529505;
      return;
    }
    if (_BISECT === 'MODES-skip' && _0x12543a === 0) _0x1c26d8 = _0xe6d47e;
    if (_BISECT === 'MODES-skip' && _0x12543a === 1) {
      _0xa1fb4e.GameModesID = _0x529505;
      return;
    }
    _BISECT === 'BP-only-battle-pass' && _0x12543a === 0 && (_0x1c26d8 = {
      Configs: {
        'default': {
          battle_pass: {
            placement_xp: [],
            tiers: [{
              xp: 0,
              free_rewards: [],
              premium_rewards: []
            }]
          }
        }
      }
    }), _BISECT === 'BP-no-battle-pass-field' && _0x12543a === 0 && (_0x1c26d8 = JSON.parse(JSON.stringify(_0x4d990d)), delete _0x1c26d8.Configs['default'].battle_pass), _0xa1fb4e[_0x664ac9] = JSON.stringify(_0x1c26d8), _0xa1fb4e[_0xcda8d1] = _0x529505;
  });
}