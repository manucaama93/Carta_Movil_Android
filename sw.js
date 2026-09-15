const CACHE_NAME = 'app-carta-v2';
const ASSETS = [
  './',
  './index.html',
  './fondo.png?v=2',
  './bicycle-roja.png',
  './bicycle-azul.png',
  './tallyho-roja.png',
  './tallyho-azul.png',
  './icon.png?v=2',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
