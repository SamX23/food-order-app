if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => a(e, c),
      o = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts(),
    self.addEventListener("message", (e) => {
      e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/1a48c3c1-e33c7a5fe3ee72a5.js",
          revision: "e33c7a5fe3ee72a5",
        },
        {
          url: "/_next/static/chunks/252f366e-fe18ca2380492caa.js",
          revision: "fe18ca2380492caa",
        },
        {
          url: "/_next/static/chunks/545f34e4-c1135ceb05436843.js",
          revision: "c1135ceb05436843",
        },
        {
          url: "/_next/static/chunks/633-042029718e1bd88c.js",
          revision: "042029718e1bd88c",
        },
        {
          url: "/_next/static/chunks/framework-2c79e2a64abdb08b.js",
          revision: "2c79e2a64abdb08b",
        },
        {
          url: "/_next/static/chunks/main-41c7a067006caf69.js",
          revision: "41c7a067006caf69",
        },
        {
          url: "/_next/static/chunks/pages/_app-82ba63d1578d4b2b.js",
          revision: "82ba63d1578d4b2b",
        },
        {
          url: "/_next/static/chunks/pages/_error-54de1933a164a1ff.js",
          revision: "54de1933a164a1ff",
        },
        {
          url: "/_next/static/chunks/pages/index-f61a6d2b1b8455d4.js",
          revision: "f61a6d2b1b8455d4",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",
          revision: "8fa1640cc84ba8fe",
        },
        {
          url: "/_next/static/css/5080773ed02aa010.css",
          revision: "5080773ed02aa010",
        },
        {
          url: "/_next/static/g7WjY94bVIVHq4SvUN1Re/_buildManifest.js",
          revision: "aa23addbb73f637c19426ca64cba2c92",
        },
        {
          url: "/_next/static/g7WjY94bVIVHq4SvUN1Re/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/assets/images/brownies-1.jpg",
          revision: "1349eb5656bafc5b997bde59bcf59f83",
        },
        {
          url: "/assets/images/brownies-2.jpg",
          revision: "6025007e7d3741d3eabcdf72c1fa3911",
        },
        {
          url: "/assets/images/brownies-3.jpg",
          revision: "a55a43e41a1262a72829411d069b4963",
        },
        {
          url: "/assets/images/brownies-mini-1.jpg",
          revision: "abbf5e1eb50ba6077c4f86a483e28b06",
        },
        {
          url: "/assets/images/brownies-mini-2.jpg",
          revision: "4dbfa98590906965bfe20311d16f64dc",
        },
        {
          url: "/assets/images/fla-1.jpg",
          revision: "4a7217091f8ab1043e4bb32a94072aef",
        },
        {
          url: "/assets/images/fla-2.jpg",
          revision: "e1c40e765e36a5d0db7f309fe82f3d04",
        },
        {
          url: "/assets/images/fla-3.jpg",
          revision: "26e0911f5e229869032b65597498d950",
        },
        {
          url: "/assets/images/food-1.jpg",
          revision: "6264b52e95005c51c41c7b8089b472db",
        },
        {
          url: "/assets/images/food-2.jpg",
          revision: "8012baca60659c5173fdae7e65899135",
        },
        { url: "/favicon.ico", revision: "c30c7d42707a47a3f4591831641e50dc" },
        {
          url: "/icon-192x192.png",
          revision: "56aeea40a7c2cb736226d48f52d56f0f",
        },
        {
          url: "/icon-256x256.png",
          revision: "66bc7fc8f1dac77ab42bee15481d07b4",
        },
        {
          url: "/icon-384x384.png",
          revision: "4fe8a8ed9d49d853ebd2ef0a06060859",
        },
        {
          url: "/icon-512x512.png",
          revision: "b32cb9813d403520d3a6b4d686f6330f",
        },
        { url: "/logo.png", revision: "2a623691cafb1773613655d1f35262e3" },
        { url: "/manifest.json", revision: "10ee9a4720dbbe198ae9ff61179b267f" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/thirteen.svg", revision: "53f96b8290673ef9d2895908e69b2f92" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
