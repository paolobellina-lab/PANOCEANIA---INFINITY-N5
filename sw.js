// Questo file è obbligatorio per l'installazione della PWA
const CACHE_NAME = 'pano-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Lasciamo il fetch vuoto per bypassare la cache offline 
  // ma soddisfare i requisiti di installazione di Android
  event.respondWith(fetch(event.request));
});
