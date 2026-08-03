/**
 * Life Hacks — service worker.
 * Cache-first for the app shell so it works offline (true PWA). Bump CACHE
 * whenever you ship changes so clients pick up the new version.
 */
const CACHE = 'life-hacks-v3';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/hacks.js',
  './manifest.webmanifest',
  './assets/banner.png',
  './assets/icon-512.png',
  './assets/hack-stylus-hero.png',
  './assets/step-diagram.png',
  './assets/hack-wifi-hero.png',
  './assets/hack-scissors-hero.png',
  './assets/hack-regrow-hero.png',
  './assets/hack-dryerballs-hero.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const { request } = e;
  if (request.method !== 'GET') return;
  e.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(res => {
        // runtime-cache same-origin GETs
        if (res.ok && new URL(request.url).origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(request, copy));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
