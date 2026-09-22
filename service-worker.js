/* Offline-Cache — sorgt dafür, dass die App auch ohne Internet startet.
   Bewusst KEIN Push: eine Webseite kann sich nicht selbst zu einer festen
   Uhrzeit melden (siehe Seite "Erinnerung"). Die 19:30-Erinnerung kommt vom
   Kalender bzw. Wecker des Handys. Dieser Service Worker ist aber die
   Grundlage, falls du das später einmal nachrüsten willst. */

const CACHE = 'vamos-v4';

const DATEIEN = [
  './', './index.html', './manifest.json', './css/stil.css', './js/speicher.js',
  './js/kurse.js', './js/texte.js', './js/kurs-definitionen.js', './js/daten.js',
  './js/srs.js', './js/sprache.js', './js/uebungen.js', './js/statistik.js',
  './js/tagesplan.js', './js/app.js', './data/de/lektionen-01-10.js',
  './data/de/lektionen-101-110.js', './data/de/lektionen-11-20.js',
  './data/de/lektionen-111-120.js', './data/de/lektionen-21-30.js',
  './data/de/lektionen-31-40.js', './data/de/lektionen-41-50.js',
  './data/de/lektionen-51-60.js', './data/de/lektionen-61-70.js',
  './data/de/lektionen-71-80.js', './data/de/lektionen-81-90.js',
  './data/de/lektionen-91-100.js',
  './data/de-beruf/lektionen-01-08.js', './data/de-beruf/lektionen-09-16.js',
  './data/de-beruf/lektionen-17-24.js', './data/de-beruf/lektionen-25-30.js',
  './data/de-beruf/lektionen-31-37.js', './data/de-beruf/lektionen-38-42.js',
  './data/de-beruf/lektionen-43-45.js',
  './data/es-419/lektionen-01-10.js',
  './data/es-419/lektionen-11-20.js', './data/es-419/lektionen-21-30.js',
  './data/es-419/lektionen-31-40.js', './data/es-419/lektionen-41-50.js',
  './data/es-419/lektionen-51-60.js', './data/es-419/lektionen-61-70.js',
  './data/es-419/lektionen-71-80.js', './data/es-419/lektionen-81-90.js',
  './data/es-es/lektionen-01-10.js', './data/es-es/lektionen-11-20.js',
  './data/es-es/lektionen-21-30.js', './data/es-es/lektionen-31-40.js',
  './data/es-es/lektionen-41-50.js', './data/es-es/lektionen-51-60.js',
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
