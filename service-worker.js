/* Offline-Cache — sorgt dafür, dass die App auch ohne Internet startet.
   Bewusst KEIN Push: eine Webseite kann sich nicht selbst zu einer festen
   Uhrzeit melden (siehe Seite "Erinnerung"). Die 19:30-Erinnerung kommt vom
   Kalender bzw. Wecker des Handys. Dieser Service Worker ist aber die
   Grundlage, falls du das später einmal nachrüsten willst. */

const CACHE = 'vamos-v1';

const DATEIEN = [
  './', './index.html', './manifest.json',
  './css/stil.css',
  './js/daten.js', './js/speicher.js', './js/srs.js', './js/sprache.js',
  './js/uebungen.js', './js/statistik.js', './js/tagesplan.js', './js/app.js',
  './data/lektionen-01-10.js', './data/lektionen-11-20.js', './data/lektionen-21-30.js',
  './data/lektionen-31-40.js', './data/lektionen-41-50.js', './data/lektionen-51-60.js',
  './icons/icon-192.png', './icons/icon-512.png'
];

// Beim Installieren: alle Dateien in den Zwischenspeicher legen
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(DATEIEN))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[SW] Cache unvollständig:', err))
  );
});

// Beim Aktivieren: alte Zwischenspeicher aufräumen
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(namen => Promise.all(namen.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// Bei jeder Anfrage: erst Zwischenspeicher, sonst Netz (und dann nachlegen)
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(treffer => {
      if (treffer) return treffer;
      return fetch(e.request).then(antwort => {
        if (antwort.ok && e.request.url.startsWith(self.location.origin)) {
          const kopie = antwort.clone();
          caches.open(CACHE).then(c => c.put(e.request, kopie));
        }
        return antwort;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
