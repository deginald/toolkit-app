// All Hair Connect: service worker for web push notifications.
//
// This file only handles two things: showing a notification when a push
// arrives, and taking the person to the right place when they tap it. It
// does not do any offline caching of the app itself, so it can't make the
// app work without a network connection -- that's a separate feature this
// file does not attempt.

self.addEventListener('install', (event) => {
  // Take over immediately instead of waiting for all open tabs to close,
  // so a freshly (re)installed service worker is ready to receive push
  // messages right away.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
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
    // passport.html) instead of just landing on the home screen.
    data: { url: payload.url || './', messageId: payload.messageId || null },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || './';
  const messageId = event.notification.data && event.notification.data.messageId;
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        // Reuse an already-open tab for this app instead of opening a new one,
        // if one happens to be open. Since focusing a client doesn't navigate
        // it, tell the already-open page which message to show via postMessage
        // instead of relying on the URL (which only a freshly opened window reads).
        if (client.url.includes(self.registration.scope) && 'focus' in client) {
          if (messageId && 'postMessage' in client) {
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
