// PHA TOOLS OS - Service Worker
const CACHE = "pha-v2";
const FILES = ["/pha-tools-os/", "/pha-tools-os/index.html", "/pha-tools-os/manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
