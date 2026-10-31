// Offline-Speicher für die Onboarding-App.
// Eigene Dateien: erst aus dem Cache anzeigen, im Hintergrund aktualisieren.
// Nach Änderungen an der Seite VERSION erhöhen, damit alle die neue Version bekommen.
const VERSION = 'rb-onboarding-v45';

const APP_SHELL = [
  './',
  'index.html',
  'styles.css',
  'script.js',
  'manifest.webmanifest',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/apple-touch-icon.png',
  'assets/icons/favicon-64.png',
  'assets/logo-rise-beyond.png',
  'assets/logos/syntra.jpg',
  'assets/logos/mt5.jpg',
  'assets/logos/deepsage.png',
  'assets/logos/wow.png',
  'assets/logos/sagemaster.png',
  'assets/logos/telegram.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Buchcover von Amazon: einmal laden, dann aus dem Cache
  if (url.hostname.endsWith('media-amazon.com')) {
    event.respondWith(
      caches.open(VERSION).then((cache) =>
        cache.match(req).then(
          (hit) =>
            hit ||
            fetch(req).then((res) => {
              cache.put(req, res.clone());
              return res;
            })
        )
      )
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // Eigene Dateien: Cache zuerst, parallel aktualisieren (stale-while-revalidate)
  event.respondWith(
    caches.open(VERSION).then((cache) =>
      cache.match(req, { ignoreSearch: true }).then((hit) => {
        const fresh = fetch(req)
          .then((res) => {
            if (res.ok) cache.put(req, res.clone());
            return res;
          })
          .catch(() => hit || cache.match('index.html'));
        return hit || fresh;
      })
    )
  );
});
