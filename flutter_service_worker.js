'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5fb23358ec3ee9878c0db479f51d9496",
"assets/AssetManifest.json": "e65faa6b0907719fa6606310fbfc4060",
"assets/assets/audio/assets_audio_bounce.wav": "63621de02044af415adcb0cdbc7afe87",
"assets/assets/audio/assets_audio_collect_fruit.wav": "81efa093638b482b3593b1022837169d",
"assets/assets/audio/assets_audio_disappear.wav": "1d328b82b7707e42002f42927346e923",
"assets/assets/audio/assets_audio_hit.wav": "3c90d1d642f2409a1ccede4189b8618f",
"assets/assets/audio/assets_audio_jump.wav": "0955bb8692212a59ffbf265053d0f09a",
"assets/assets/audio/bg_music.ogg": "e0ee19692c51bd7e07713a82d570c099",
"assets/assets/images/attack_knight.png": "0d673428ea80bac7280786494f2c9fe8",
"assets/assets/images/dead_knight.png": "8000dcf5a81afcbfe6c9add76c3b7f77",
"assets/assets/images/Enemies/Bat/Ceiling%2520In%2520(46x30).png": "7e10917c9db181457e409d9f1e176647",
"assets/assets/images/Enemies/Bat/Ceiling%2520Out%2520(46x30).png": "25f70ccf6545e1142b2c71f54d231dd8",
"assets/assets/images/Enemies/Bat/Flying%2520(46x30).png": "7986dfad436b4607994d3fe1ecced6ce",
"assets/assets/images/Enemies/Bat/Hit%2520(46x30).png": "7eaa7663096d5491a7fd01167a78f577",
"assets/assets/images/Enemies/Bat/Idle%2520(46x30).png": "33ff43b920fb19d66c2b8ad6164fb2d0",
"assets/assets/images/Enemies/Chameleon/Attack%2520(84x38).png": "232005d4ed479f6d43a1bc23d5ceebce",
"assets/assets/images/Enemies/Chameleon/Hit%2520(84x38).png": "ef602abaebdbcc47ae142a8ec6111cf7",
"assets/assets/images/Enemies/Chameleon/Idle%2520(84x38).png": "1ffec858376f730875a949ca482826cc",
"assets/assets/images/Enemies/Chameleon/Run%2520(84x38).png": "26c68c327500fe45d2fe6f6d48c54d2c",
"assets/assets/images/Enemies/Chicken/Hit%2520(32x34).png": "1a0b324bc2c06c132f6e17d509928a34",
"assets/assets/images/Enemies/Chicken/Idle%2520(32x34).png": "540724fcaccd692f5d3adb169fa8db2b",
"assets/assets/images/Enemies/Chicken/Run%2520(32x34).png": "58190fdf957eaba5b783bbe2df837c2e",
"assets/assets/images/Enemies/Ghost/Appear%2520(44x30).png": "7dbcc1b1b6fd12afdd5dc558a5b07a90",
"assets/assets/images/Enemies/Ghost/Desappear%2520(44x30).png": "0c9c842fcf097f1db31e59d39f2fe478",
"assets/assets/images/Enemies/Ghost/Gost%2520Particles%2520(48x16).png": "ebc69a624328a2854dd39af7ff8cd9d4",
"assets/assets/images/Enemies/Ghost/Hit%2520(44x30).png": "f7b602662245356ef0fdce4240842bfc",
"assets/assets/images/Enemies/Ghost/Idle%2520(44x30).png": "6545a172dfd2d3bdfe32d8db33822cfe",
"assets/assets/images/Enemies/Rocks/Rock1_Hit.png": "3e538b96d9d80ba5e4d31056936ebb17",
"assets/assets/images/Enemies/Rocks/Rock1_Idle%2520(38x34).png": "e6cb8a2ec957aa6164e3729b8d829e83",
"assets/assets/images/Enemies/Rocks/Rock1_Run%2520(38x34).png": "fc84b09d7ff4fd53da8d86626bca70a6",
"assets/assets/images/Enemies/Rocks/Rock2_Hit%2520(32x28).png": "f052a48054ce5b06217032c72e31d138",
"assets/assets/images/Enemies/Rocks/Rock2_Idle%2520(32x28).png": "7057681c0c21c55f0266d819c8a617c3",
"assets/assets/images/Enemies/Rocks/Rock2_Run%2520(32x28).png": "7c2d8c15ed7b4823bc21a464f748d476",
"assets/assets/images/Enemies/Rocks/Rock3_Hit%2520(22x18).png": "3a5a4976cfe664d279d2f81487ee5c90",
"assets/assets/images/Enemies/Rocks/Rock3_Idle%2520(22x18).png": "69e6ae3cb950dc31544c7a16cbd48fd8",
"assets/assets/images/Enemies/Rocks/Rock3_Run%2520(22x18).png": "c5cd938ee706eb7e9b8051076229d36f",
"assets/assets/images/Enemies/Slime/Hit%2520(44x30).png": "1e8cef3c01446d8f5f520246cb18bf5e",
"assets/assets/images/Enemies/Slime/Idle-Run%2520(44x30).png": "18c00de4ccc9a5026237c945ff226a4c",
"assets/assets/images/Enemies/Slime/Particles%2520(62x16).png": "0ea75cbca462433c0165dd710e363081",
"assets/assets/images/Enemies/Snail/Hit%2520(38x24).png": "1ed36e32a5ef463bbd8a1e31b824e6cc",
"assets/assets/images/Enemies/Snail/Idle%2520(38x24).png": "05e1cbcf2c9c9420ec96ddbfe4a2680f",
"assets/assets/images/Enemies/Snail/Shell%2520Idle%2520(38x24).png": "2bc757a2ee0a293adf050c72ea8dbb19",
"assets/assets/images/Enemies/Snail/Shell%2520Top%2520Hit%2520(38x24).png": "eddcefae600333acc7862187108cf943",
"assets/assets/images/Enemies/Snail/Shell%2520Wall%2520Hit%2520(38x24).png": "80d9a81c7c3d8d8e5d2cbdc0b28734d7",
"assets/assets/images/Enemies/Snail/Snail%2520without%2520shell.png": "345df192e0ce642e275cb07b97f7e025",
"assets/assets/images/Enemies/Snail/Walk%2520(38x24).png": "793fde1396db7a63a9a5e2e8566237e6",
"assets/assets/images/idle_knight.png": "bb3afb8de03079e7929ec165070f6a0e",
"assets/assets/images/Items/Checkpoints/End/End%2520(Idle).png": "484d2c6f5012652a2be0366af353f8ec",
"assets/assets/images/Items/Checkpoints/End/End%2520(Pressed)%2520(64x64).png": "7c8ee365eba44c461016d4f757705f55",
"assets/assets/images/Items/Fruits/Apple.png": "de3dbfa7d33e6bb344d0560e36d8bf53",
"assets/assets/images/Items/Fruits/Bananas.png": "03466a1dbd95724e705efe17e72c1c4e",
"assets/assets/images/Items/Fruits/Cherries.png": "fc2a60aee885c33d0d10e643157213e4",
"assets/assets/images/Items/Fruits/Collected.png": "0aa8cdedde5af58d5222c2db1e0a96de",
"assets/assets/images/Items/Fruits/Orange.png": "60e0f68620c442b9403a477bbe3588ed",
"assets/assets/images/Items/Fruits/Pineapple.png": "0740bf84a38504383c80103d60582217",
"assets/assets/images/Items/Fruits/Strawberry.png": "568a3f91b8f6102f1b518c1aba0e8e09",
"assets/assets/images/jump_attack_knight.png": "35d0c2be13ba5d0eaa939d41c162f770",
"assets/assets/images/jump_knight.png": "8a4262546e0cb694498bb495b763d02d",
"assets/assets/images/Main%2520Characters/Appearing%2520(96x96).png": "9449bf1f8d68ac08331aa091d6095e34",
"assets/assets/images/Main%2520Characters/Desappearing%2520(96x96).png": "1284313649da02eccc0d3ed6796996a3",
"assets/assets/images/Menu/Buttons/Achievements.png": "b9bb58144606336efcd4862d35482f47",
"assets/assets/images/Menu/Buttons/heart_1.png": "ee89a47c6c0583f19a35220f50c49382",
"assets/assets/images/Menu/Buttons/heart_2.png": "79702db61c9007babaa4c599f86e2bfa",
"assets/assets/images/Menu/Buttons/heart_3.png": "0ef56160f74754f74465e90f834bd3ff",
"assets/assets/images/Menu/Buttons/heart_4.png": "ba5ddb920ae2922171dfced4f476dfad",
"assets/assets/images/Menu/Buttons/heart_5.png": "f236bd539a84e586386fc21d6d929492",
"assets/assets/images/Menu/Buttons/Leaderboard.png": "e3854b8ad5633b1f8017d08b7a783047",
"assets/assets/images/Menu/Buttons/pause.png": "6d930f95dc8b67ba5e9718c741b215a8",
"assets/assets/images/Menu/Buttons/Play.png": "23f2b2a41eb467518bbfef795d876dc8",
"assets/assets/images/Menu/Buttons/Restart.png": "45fe1343f546485e8e288b122467f2fd",
"assets/assets/images/Menu/Buttons/Volume.png": "60060aab64ff40a0a996820f64a308b3",
"assets/assets/images/run_knight.png": "39bf239198325934b682173c6a7c3fa0",
"assets/assets/images/sparkle.png": "d257f4dfb0b90f48c0a11e89599c69f1",
"assets/assets/images/tileset/inca_back.png": "bd219fba4982a94f75ebdd95ad606ecc",
"assets/assets/images/tileset/inca_back2.png": "8a7932c6774543803a97ed995b7b60fc",
"assets/assets/images/tileset/inca_front.png": "55e8eb9d9843ad302077e4d9eedbf432",
"assets/assets/images/Traps/Spikes/Idle.png": "64c275b1b14a4c8cd49088ce8ebf0db5",
"assets/assets/images/walk_knight.png": "780c61f8c97ccb7a21ebe0ea20b744b1",
"assets/assets/tiles/inca_back_dark.tsx": "aff78d5b5616dd03419a247a9f5ce76c",
"assets/assets/tiles/inca_back_tileset.tsx": "2709edd87155cefaf68bb47781a1acdf",
"assets/assets/tiles/Inca_front_tileset.tsx": "6b0e131021ee63bd19aefb8ea277afc0",
"assets/assets/tiles/inca_tiles.tmx": "bbd21d59a5e726b2ee3532606aaae5dc",
"assets/assets/tiles/mario_game_tileset.tiled-project": "f569bfd3353c5a0faa26a765cae42f0d",
"assets/assets/tiles/mario_game_tileset.tiled-session": "23b5371097c414f5779c8b1877afcbb5",
"assets/FontManifest.json": "cf067bd47b79db2902360d1ffe210994",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/NOTICES": "cb80e05dd09cfc9c4a1ee7d419548416",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "7a36e9f3d9ac26cbacb323ceb0ff60cd",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "148d9ce6880e2503fc4e468a776f87c0",
"icons/Icon-512.png": "1220e9efc13e3be06033f6cafccf430a",
"icons/Icon-maskable-192.png": "148d9ce6880e2503fc4e468a776f87c0",
"icons/Icon-maskable-512.png": "1220e9efc13e3be06033f6cafccf430a",
"index.html": "0860796dd3b2639bf84a88aacabef6b3",
"/": "0860796dd3b2639bf84a88aacabef6b3",
"main.dart.js": "5df5d059adf11d7548c2ad5c23ab60af",
"manifest.json": "205d5748b00af8e0ba1c04652968fa8a",
"version.json": "e2d44466afc64a1752a5e2b42ddcb764"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
