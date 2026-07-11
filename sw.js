const CACHE_NAME = 'jb-passwords-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// Fetch handler vacío: exigido por Chrome para considerar la PWA instalable.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
