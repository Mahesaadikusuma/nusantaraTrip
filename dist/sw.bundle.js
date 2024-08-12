if (!self.define) {
  let e,
    i = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    i[a] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = i), document.head.appendChild(e);
        } else (e = a), importScripts(a), i();
      }).then(() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[r]) return;
    let s = {};
    const o = (e) => a(e, r),
      f = { module: { uri: r }, exports: s, require: o };
    i[r] = Promise.all(n.map((e) => f[e] || o(e))).then((e) => (c(...e), s));
  };
}
define(["./workbox-3ca83693"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "app.bundle.js", revision: "ebcb30b19741d1a1e7e45f247467cefe" },
        {
          url: "app.bundle.js.LICENSE.txt",
          revision: "670c5f5add6f9d8273ae2dd44cf6feee",
        },
        {
          url: "app.webmanifest",
          revision: "ec8ca6fac8be5764fe3a39653fe21d77",
        },
        { url: "favicon.png", revision: "e2c7b628dfbc210b20233998676aad7a" },
        {
          url: "icons/logont_128.png",
          revision: "66fbc4441cbf089647d58729f9617d12",
        },
        {
          url: "icons/logont_144.png",
          revision: "4f4a8d7f96e3733ead113f4258d41d45",
        },
        {
          url: "icons/logont_152.png",
          revision: "3da31af9100946641fd0003c97c92127",
        },
        {
          url: "icons/logont_192.png",
          revision: "9d443e3fb2b17917f811dd710228f942",
        },
        {
          url: "icons/logont_384.png",
          revision: "ae9135438a8b6cc0dfdf6ab53d5a33b8",
        },
        {
          url: "icons/logont_512.png",
          revision: "e2c7b628dfbc210b20233998676aad7a",
        },
        {
          url: "icons/logont_72.png",
          revision: "5178cc8717ca550c798382ef958a8235",
        },
        {
          url: "icons/logont_96.png",
          revision: "f9f08cd5ee151e9c5c56c4d09af9ebf4",
        },
        {
          url: "images/Calendar.svg",
          revision: "073fe17707be413860dbcc6c556c7616",
        },
        {
          url: "images/Location.svg",
          revision: "99bfa87b7d9e1a5b23cb6dc9ed2ad3bf",
        },
        {
          url: "images/article.png",
          revision: "2e784307cc6075379e003015354eeeb4",
        },
        {
          url: "images/article.webp",
          revision: "d6675734adb3f791e5c3110ec0df1750",
        },
        {
          url: "images/avatar.png",
          revision: "a8f955dadcfbd2087c09c18210969180",
        },
        {
          url: "images/avatar.webp",
          revision: "f5b0f37a086e21e2c5ed0561ff981140",
        },
        {
          url: "images/axcell.jpg",
          revision: "9ba936800aa932bbbbfeb395819ea6c0",
        },
        {
          url: "images/devina.jpg",
          revision: "6f900696908e4fb0253ebd9d3848286f",
        },
        { url: "images/esa.jpg", revision: "b8690e8cc80e16931ee083237de237c1" },
        {
          url: "images/hero.webp",
          revision: "839468132e39dfc0924baefdf9e4d9c4",
        },
        {
          url: "images/star.svg",
          revision: "dbecc68d9dc00a86dc375059c143427e",
        },
        {
          url: "images/star_black.svg",
          revision: "53019eeec55089fb0c0c2efc20ae9250",
        },
        {
          url: "images/thumbnail.webp",
          revision: "6489d73d15efbfae8298f1852b608f81",
        },
        {
          url: "images/ticket.svg",
          revision: "205b591a7ec9c7de46aa942e77cb4d10",
        },
        { url: "index.html", revision: "3bc841eaf50872817bf039f5e7a69b4d" },
      ],
      {}
    ),
    e.registerRoute(
      ({ url: e }) => e.href.startsWith("https://nusantaratrip.site/api"),
      new e.StaleWhileRevalidate({
        cacheName: "nusantara-trip-api",
        plugins: [],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => e.href.startsWith("https://nusantaratrip.site/storage"),
      new e.StaleWhileRevalidate({
        cacheName: "nusantara-trip-image-api",
        plugins: [],
      }),
      "GET"
    );
});
//# sourceMappingURL=sw.bundle.js.map
