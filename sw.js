// All Hair Connect: service worker for web push notifications, plus light
// caching of static image/icon assets.
//
// Two things on purpose, and one thing deliberately avoided:
//   1. Showing a notification when a push arrives, and taking the person to
//      the right place when they tap it.
//   2. Cache-first serving of the fixed list of static assets below (app
//      icons + logo) so they paint instantly on repeat visits and still show
//      up if the network drops for a moment.
//   3. What this does NOT do: cache or intercept index.html / passport.html /
//      directory.html (or anything else not in that fixed list) in any way.
//      Those HTML documents carry the app-build meta tag the app polls to
//      detect a new version -- caching them here would risk silently serving
//      a stale build and breaking that update-detection banner. This file
//      stays out of the way of every navigation request; the browser's own
//      network fetch handles those exactly as if this service worker didn't
//      exist.

const STATIC_CACHE = 'ahc-static-v1';
const STATIC_ASSETS = [
  'icon-192.png',
  'icon-512.png',
  'icon-512-maskable.png',
  'icon-180.png',
  'favicon-32.png',
  'logo.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .catch(() => {}) // a missing/renamed asset shouldn't block install
  );
  // Take over immediately instead of waiting for all open tabs to close,
  // so a freshly (re)installed service worker is ready to receive push
  // messages right away.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((n) => n !== STATIC_CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (e) { return; }
  if (url.origin !== self.location.origin) return;
  const filename = url.pathname.split('/').pop();
  // Only the fixed static-asset list above is ever intercepted -- everything
  // else (every .html page, every Supabase call) passes straight through to
  // the network untouched, same as if this listener weren't here at all.
  if (!STATIC_ASSETS.includes(filename)) return;
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
      // Cache-first: instant paint from cache when we have it, while still
      // refreshing the cache in the background for next time.
      return cached || network;
    })
  );
});

self.addEventListener('push', (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch (e) {
    payload = { title: 'All Hair Connect', body: event.data ? event.data.text() : '' };
  }
  const title = payload.title || 'All Hair Connect';
  const options = {
    body: payload.body || '',
    icon: payload.icon || 'icon-192.png',
    badge: payload.badge || 'favicon-32.png',
    // messageId lets the app open straight to the full message (see
    // notificationclick below and the quick-message popup in index.html /
    // passport.html) instead of just landing on the home screen. kind
    // distinguishes a Jobs Board message (no single popup to fetch by id --
    // it opens straight to the Jobs > Messages list instead).
    data: { url: payload.url || './', messageId: payload.messageId || null, kind: payload.kind || null },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || './';
  const messageId = event.notification.data && event.notification.data.messageId;
  const kind = event.notification.data && event.notification.data.kind;
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        // Reuse an already-open tab for this app instead of opening a new one,
        // if one happens to be open. Since focusing a client doesn't navigate
        // it, tell the already-open page which message to show via postMessage
        // instead of relying on the URL (which only a freshly opened window reads).
        if (client.url.includes(self.registration.scope) && 'focus' in client) {
          if (kind === 'job_message' && 'postMessage' in client){
            client.postMessage({ type: 'show-job-message' });
          } else if (messageId && 'postMessage' in client){
            client.postMessage({ type: 'show-quick-message', id: messageId });
          }
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});
