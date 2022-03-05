/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c1d316059cb3b80a40d2216d53cebdb3"
  },
  {
    "url": "assets/css/0.styles.88d60c64.css",
    "revision": "20e5c648cb9f6b616bc60a254b6f2e01"
  },
  {
    "url": "assets/img/ceshi2.67c06082.png",
    "revision": "67c06082fce3cdc11a7b7b7c89c3f5cc"
  },
  {
    "url": "assets/img/ceshi3.43c23ea0.png",
    "revision": "43c23ea01be1815c2e1c74e5006423c9"
  },
  {
    "url": "assets/img/ceshi4.a956f3e7.png",
    "revision": "a956f3e77a820117590a7b8dc73b8ffe"
  },
  {
    "url": "assets/img/ceshi5.0c017889.png",
    "revision": "0c01788975a48dc8e08430f541ce5289"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "c7045fa94bf00e6acf1e342ee2bf3ca3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3a521b81.js",
    "revision": "580bc45efaff84819775c9ee7d769189"
  },
  {
    "url": "assets/js/11.cc9ccd37.js",
    "revision": "c3d069f51f5b87e13e8e964c71123ac5"
  },
  {
    "url": "assets/js/12.b90bc713.js",
    "revision": "16eaa6e78e11e286ccedd42a6464bcc5"
  },
  {
    "url": "assets/js/13.c5196b82.js",
    "revision": "dfb48353a5338891233507e0f7cfbad6"
  },
  {
    "url": "assets/js/14.feece68d.js",
    "revision": "38161c1ca7bbcf20a079207734d7be8b"
  },
  {
    "url": "assets/js/15.35361e61.js",
    "revision": "0e350c5cceac08d2ce9e96782fbf488b"
  },
  {
    "url": "assets/js/16.ea8ffe1c.js",
    "revision": "acf5e07fb7798730f315012fe55f3724"
  },
  {
    "url": "assets/js/17.7d6a0ad8.js",
    "revision": "f0375658c6998e7fd1b0ad875209d613"
  },
  {
    "url": "assets/js/18.c075feeb.js",
    "revision": "8e454713e157698f3cc7c0b082b7d79e"
  },
  {
    "url": "assets/js/19.35a820c2.js",
    "revision": "b3b4430a9d58a64790207a531b6500f5"
  },
  {
    "url": "assets/js/2.13089680.js",
    "revision": "bc3375d9226c3d2a7e5916111e9a5010"
  },
  {
    "url": "assets/js/20.436d619a.js",
    "revision": "857fd4b94b54541df3285299836d8d7a"
  },
  {
    "url": "assets/js/21.71aa206b.js",
    "revision": "4f8752064190a513bb99d7dd301cf533"
  },
  {
    "url": "assets/js/22.19cf44c5.js",
    "revision": "1193a7fda046dc1da55b126a6adf0e1b"
  },
  {
    "url": "assets/js/23.914482f3.js",
    "revision": "a9f1169e1d97fc7e8bd291258bb9ac25"
  },
  {
    "url": "assets/js/24.cbed7bad.js",
    "revision": "d84aef370aa11dbd88beb53ec61235e2"
  },
  {
    "url": "assets/js/25.695ce8e1.js",
    "revision": "da123a716d180f6f467067cc5c58d6f8"
  },
  {
    "url": "assets/js/26.6722a03b.js",
    "revision": "fb6ae1ea28b097c99baf7b5b22d27a77"
  },
  {
    "url": "assets/js/27.e6a32b9e.js",
    "revision": "0d76b6133da601b6794fabb18b1e7002"
  },
  {
    "url": "assets/js/28.932bb34a.js",
    "revision": "42bdc1ff4331c890a2ea683938d27ae8"
  },
  {
    "url": "assets/js/29.0404d139.js",
    "revision": "63b9c58532d844c0156a3ffb46bfb0d7"
  },
  {
    "url": "assets/js/3.532341c7.js",
    "revision": "46b6a5079a3d43dac748e53ca7a7b38f"
  },
  {
    "url": "assets/js/30.1b439d45.js",
    "revision": "eff7b5d03a62532a6ad2085845196dac"
  },
  {
    "url": "assets/js/31.f166f8ff.js",
    "revision": "f64f4aa55dc12a28396741fe52311d7a"
  },
  {
    "url": "assets/js/32.be341681.js",
    "revision": "ac9dc84c7634a241c4d3e9e4bf92df75"
  },
  {
    "url": "assets/js/33.f34013ad.js",
    "revision": "f73c28d9a23cd4cdd240420190f961ab"
  },
  {
    "url": "assets/js/34.dfe5f141.js",
    "revision": "5ecef995bcaef70de7c2c92875d4518c"
  },
  {
    "url": "assets/js/35.cf766a45.js",
    "revision": "6c1fb1baf46cbeaa15696add784b7bc5"
  },
  {
    "url": "assets/js/36.2a5a20f6.js",
    "revision": "6f37afcb6efe7c6eb02b28bfa07fb884"
  },
  {
    "url": "assets/js/37.5f9c3fbd.js",
    "revision": "e1fa15acf8bf507f2c0a33ebde6f563c"
  },
  {
    "url": "assets/js/38.1f9d8b4e.js",
    "revision": "4015141880cc6d20394abd9e4ef039fe"
  },
  {
    "url": "assets/js/39.281ff763.js",
    "revision": "f1d4328c7c4679f5894baf8456e662ea"
  },
  {
    "url": "assets/js/4.ebb91132.js",
    "revision": "e2fe26c1988c8d01551dfc54e9c5ceb8"
  },
  {
    "url": "assets/js/40.1e04f78d.js",
    "revision": "1d5265504f3be5496b64ef8ed3f7d55a"
  },
  {
    "url": "assets/js/41.70841dfe.js",
    "revision": "ec52e61a818bb133811e497ddf94d0ab"
  },
  {
    "url": "assets/js/42.2b602f7d.js",
    "revision": "14fca25279c7abcd0584abf79691c451"
  },
  {
    "url": "assets/js/43.1f440c1b.js",
    "revision": "264b4a5cf35a014c26d77cf95ada3afe"
  },
  {
    "url": "assets/js/44.f828a660.js",
    "revision": "30d5e1a1a4cbacece0562b7cc3b1a4b1"
  },
  {
    "url": "assets/js/45.bee8692f.js",
    "revision": "ecbcb949d46b4452a2dd5869083c777e"
  },
  {
    "url": "assets/js/46.65407c70.js",
    "revision": "c685236a9ea98fc47b47b73516830bac"
  },
  {
    "url": "assets/js/47.b0eddc71.js",
    "revision": "3c4d1a0e8043ccceb9fe996d5e0fd557"
  },
  {
    "url": "assets/js/48.c1eeccc5.js",
    "revision": "837aa55d8b970b12a4f083eff408aa90"
  },
  {
    "url": "assets/js/49.5241b201.js",
    "revision": "bf43bde9020f4912c56da95c5ad6c582"
  },
  {
    "url": "assets/js/5.eb3bf5f5.js",
    "revision": "cb7f37adfc3b37426b693e83b78b6c5e"
  },
  {
    "url": "assets/js/50.0a157649.js",
    "revision": "e23ceea7daad5cf7800d40ebaa3b7cf4"
  },
  {
    "url": "assets/js/51.1bb1d030.js",
    "revision": "24fec5a7ccbdc585a65f1536fec00e40"
  },
  {
    "url": "assets/js/52.9ae255a6.js",
    "revision": "9114c47c87bd3dee3c7bed836f57d763"
  },
  {
    "url": "assets/js/53.16606168.js",
    "revision": "1ebe2183e9db3d34df7bc71e6b62166d"
  },
  {
    "url": "assets/js/54.611256a3.js",
    "revision": "31ac8e3276898d1767bc84d65886cc12"
  },
  {
    "url": "assets/js/55.49a9b5dd.js",
    "revision": "c74c9f9d842a2f2df0b950a055e21ca1"
  },
  {
    "url": "assets/js/56.28be028b.js",
    "revision": "6e0d61a9bc00dc391e5c48510f9be0b7"
  },
  {
    "url": "assets/js/57.a6f880a7.js",
    "revision": "3e05ef0fc6dc40d862a1132e7bd5896c"
  },
  {
    "url": "assets/js/58.c5d9f6e2.js",
    "revision": "fd54bf0bcf9c2a030b1b48306070f540"
  },
  {
    "url": "assets/js/59.c2ac5938.js",
    "revision": "e74d9f377619b815f9a32ac98f877268"
  },
  {
    "url": "assets/js/6.08614262.js",
    "revision": "7f7c9898430a7a5efdc82f0927b31ff4"
  },
  {
    "url": "assets/js/7.768bf869.js",
    "revision": "ab779147701fd35de1e8a3f86d0bb151"
  },
  {
    "url": "assets/js/8.00fdf09d.js",
    "revision": "f9ca23c80f0ed47f29c8340f39c0a13e"
  },
  {
    "url": "assets/js/9.c3cdfab9.js",
    "revision": "bc9a39364b8915dffb15f92c507ddf27"
  },
  {
    "url": "assets/js/app.2601bdc8.js",
    "revision": "ad6f01ccb461ffa4d1d26bfa0ef23010"
  },
  {
    "url": "images/Object.create.png",
    "revision": "235a44b5818d623c27086ccd857e4d3f"
  },
  {
    "url": "images/object.defineProperty.png",
    "revision": "48966661f7f74437eef50cac4a3b0464"
  },
  {
    "url": "images/String属性.png",
    "revision": "ecabe8a2b32614ba3189528f62b1094b"
  },
  {
    "url": "index.html",
    "revision": "7cc852c5ea5cbd35639d51a42be13772"
  },
  {
    "url": "javascript/DOM相关/概述.html",
    "revision": "8c7bae5000983fedf7173799bcd83133"
  },
  {
    "url": "javascript/RADEME.html",
    "revision": "0aeb94d9d32e246511e6d0d224793d76"
  },
  {
    "url": "javascript/内置对象/Array.html",
    "revision": "f1b842cc67760dd11d266348dc0af0de"
  },
  {
    "url": "javascript/内置对象/Boolean.html",
    "revision": "c5a4833e3d2a24eb034129a1dbc70136"
  },
  {
    "url": "javascript/内置对象/Date.html",
    "revision": "15b90c1940c690d14262efe8ef4fd741"
  },
  {
    "url": "javascript/内置对象/Function.html",
    "revision": "9ca2e41b618904f74f2c7a33fa222bb4"
  },
  {
    "url": "javascript/内置对象/JSON.html",
    "revision": "9545c5706f9c49948f522fc3a09a9317"
  },
  {
    "url": "javascript/内置对象/Math.html",
    "revision": "80f65cff2f9e31815fc3e160384396fd"
  },
  {
    "url": "javascript/内置对象/null.html",
    "revision": "06bd90c74f1b0adb56c023c78a61ec61"
  },
  {
    "url": "javascript/内置对象/Number.html",
    "revision": "79a9b9089e07e4a5da297fa95b624eed"
  },
  {
    "url": "javascript/内置对象/Object.html",
    "revision": "87ee8806d47b34dc51e4eebee009f4ed"
  },
  {
    "url": "javascript/内置对象/Promise.html",
    "revision": "e1faec6035c53cfef431edc05523349e"
  },
  {
    "url": "javascript/内置对象/Proxy.html",
    "revision": "be6a0be61bc2b6269aa7d00b6a10e5ca"
  },
  {
    "url": "javascript/内置对象/RegExp.html",
    "revision": "2eb2b7c9d9e56c21090176a9d7f24de2"
  },
  {
    "url": "javascript/内置对象/String.html",
    "revision": "d29f14fb78d9f10ef6d2d516f0486931"
  },
  {
    "url": "javascript/内置对象/Symbol.html",
    "revision": "e839554f4c41c1c4642f0287f2c4ebdf"
  },
  {
    "url": "javascript/内置对象/undefined.html",
    "revision": "2cae163825474c6cabc855de34297411"
  },
  {
    "url": "javascript/内置对象/单体内置对象.html",
    "revision": "ce9068e378e8a7de73941f615b2951aa"
  },
  {
    "url": "javascript/内置对象/基本包装类型.html",
    "revision": "101491435d8af34dbe965c7b8a5762da"
  },
  {
    "url": "javascript/函数/其他.html",
    "revision": "1a7e5ae00ce34b40581b4e621a077e53"
  },
  {
    "url": "javascript/函数/概述.html",
    "revision": "73bf6140404d15a4ed1d0ef69c961906"
  },
  {
    "url": "javascript/基础/var、let、const.html",
    "revision": "ec67afec4c996677c585974383efa0a8"
  },
  {
    "url": "javascript/基础/变量、变量的解构赋值.html",
    "revision": "b3599520602ba362ca189baa1a1df9cb"
  },
  {
    "url": "javascript/基础/常用的全局方法.html",
    "revision": "8e1933b589d324e45643a0bdfd0d2797"
  },
  {
    "url": "javascript/基础/操作符.html",
    "revision": "53dc74f1b85d25f33f2b12519d0d4d4a"
  },
  {
    "url": "javascript/基础/数据类型.html",
    "revision": "6cee8818b2f97c98fad48118df63857b"
  },
  {
    "url": "javascript/基础/标识符、保留字、关键字.html",
    "revision": "4be747a1a147e085aa8d46fde1a01bf2"
  },
  {
    "url": "javascript/基础/简介.html",
    "revision": "47a4a5ea77c66608df251685d210572f"
  },
  {
    "url": "javascript/基础/语句.html",
    "revision": "3ea2f3d58ae5d62f663eb2a4ceb1fd5c"
  },
  {
    "url": "javascript/对象、类与面向对象编程/Class基本语法.html",
    "revision": "497f4e73a6978690f591af4ee50a129d"
  },
  {
    "url": "javascript/对象、类与面向对象编程/This关键字.html",
    "revision": "18d7726fb6a1d47dbc185abc91d9b00e"
  },
  {
    "url": "javascript/对象、类与面向对象编程/创建对象的方式.html",
    "revision": "add659563b5b32a78f261033e4b79771"
  },
  {
    "url": "javascript/对象、类与面向对象编程/对象的继承.html",
    "revision": "8ba9ff7b0c5164252a99f5910e76f050"
  },
  {
    "url": "javascript/对象、类与面向对象编程/构造函数与new关键字.html",
    "revision": "f94f3cef763c377897b6b651734c6ae4"
  },
  {
    "url": "javascript/异步操作/async.html",
    "revision": "49cdc8726b3e26958a6b804d8951a573"
  },
  {
    "url": "javascript/异步操作/Promise.html",
    "revision": "4a2a6ab7bd4904744aa4e5234e84ebbc"
  },
  {
    "url": "javascript/异步操作/定时器.html",
    "revision": "53d101418ab8ac405d529603ac4a4874"
  },
  {
    "url": "javascript/异步操作/概述.html",
    "revision": "6a59e337f80b68be194854c438e362e9"
  },
  {
    "url": "javascript/浏览器模型/history对象.html",
    "revision": "10dc47b8a6d8377432799ebc17c7548c"
  },
  {
    "url": "javascript/浏览器模型/location对象.html",
    "revision": "e498386f4ab66924e6de332e0c72bffa"
  },
  {
    "url": "javascript/浏览器模型/Navigator对象.html",
    "revision": "3dfb7a469ae4c809c7c8222c458c0af6"
  },
  {
    "url": "javascript/浏览器模型/window对象.html",
    "revision": "189fefc450f7c0cee72e75d55e9f9ace"
  },
  {
    "url": "javascript/浏览器模型/概述.html",
    "revision": "e45b90549cb0ddba3c4944f3a3545ff5"
  },
  {
    "url": "JS设计模式/代理模式.html",
    "revision": "ce7717f535083ad15b5beadd10be25d5"
  },
  {
    "url": "JS设计模式/单例模式.html",
    "revision": "8ac17b3e11cf6b9ce50dc889169a5fee"
  },
  {
    "url": "JS设计模式/发布--订阅模式.html",
    "revision": "ae64062df6c6f1095aafa127a799e55e"
  },
  {
    "url": "JS设计模式/概述/简介.html",
    "revision": "593af362a5a4ff8413670916a092ab8a"
  },
  {
    "url": "JS设计模式/概述/设计模式总览.html",
    "revision": "29387ef8135a50a6280f8ad4167028ea"
  },
  {
    "url": "JS设计模式/策略模式.html",
    "revision": "324c69d96f3ad34f01892fa8ce98ca52"
  },
  {
    "url": "JS设计模式/迭代器模式.html",
    "revision": "256b40ffd2d529339bc75840f7d99a43"
  },
  {
    "url": "vue/概述.html",
    "revision": "e2a1d1be25bb8ed8de2e20ed5b2e5d56"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
