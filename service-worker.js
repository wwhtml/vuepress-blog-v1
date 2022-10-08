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
    "revision": "3114a76ed2a8f272c43a9d5bdfd0ef39"
  },
  {
    "url": "assets/css/0.styles.9731c27d.css",
    "revision": "55d1103f4977090628c3ce1766e42934"
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
    "url": "assets/js/10.084a1de5.js",
    "revision": "d7af37a2db70ea08ba307565d3dc1909"
  },
  {
    "url": "assets/js/11.ff336c07.js",
    "revision": "20d0890c7441eff8affb16f49b3a98f9"
  },
  {
    "url": "assets/js/12.dec8097c.js",
    "revision": "6bb592fec86e9db2224cfcf338fb47c8"
  },
  {
    "url": "assets/js/13.bb35d34c.js",
    "revision": "07e445e8422ebca8c8352bb3757d8b01"
  },
  {
    "url": "assets/js/14.92951b17.js",
    "revision": "7d8f0e741bd87258a582c1f1e4c76f11"
  },
  {
    "url": "assets/js/15.8fa7810e.js",
    "revision": "b3c785317484aa7e529df8faf2c13f3c"
  },
  {
    "url": "assets/js/16.aa92b64d.js",
    "revision": "07a49873c21f7f10d5135491431003a5"
  },
  {
    "url": "assets/js/17.f23a576e.js",
    "revision": "c695cd032dba4f2c7d77443ded0ae2e0"
  },
  {
    "url": "assets/js/18.0cdbc495.js",
    "revision": "4513511f1479bffaba447d1186b87525"
  },
  {
    "url": "assets/js/19.c5b016cb.js",
    "revision": "e11ac4637b9e112e4dda90a2d7ab7b67"
  },
  {
    "url": "assets/js/2.c56277e4.js",
    "revision": "fb1ccbb32d3bad41b567c85b35998060"
  },
  {
    "url": "assets/js/20.859e53bb.js",
    "revision": "37d808b22fdd71d7a394ee93bf744eff"
  },
  {
    "url": "assets/js/21.dc1c4b94.js",
    "revision": "836667055ba404155da2b83f3ded433e"
  },
  {
    "url": "assets/js/22.a2d1c9cd.js",
    "revision": "b2b09bd4106ec4ea37b1de3b5180e770"
  },
  {
    "url": "assets/js/23.8224d907.js",
    "revision": "7b8ee0716812ced23caffb2dcf451fb2"
  },
  {
    "url": "assets/js/24.3bf0823b.js",
    "revision": "aa3864a42ba500038ca04c0334af87b6"
  },
  {
    "url": "assets/js/25.944c6521.js",
    "revision": "15bf8dc1ef26c129d285fa6db5fa853a"
  },
  {
    "url": "assets/js/26.7723f1de.js",
    "revision": "ad0011b5a7ebfa19c7b525f05d1922f9"
  },
  {
    "url": "assets/js/27.a02e7661.js",
    "revision": "a66ace4f5d1c2160e83165e6c782cb5d"
  },
  {
    "url": "assets/js/28.fb367314.js",
    "revision": "5d4379434fb13b5d32edacd1706b796e"
  },
  {
    "url": "assets/js/29.25eb2712.js",
    "revision": "68e9cae3f5f4362915550fe077f3420c"
  },
  {
    "url": "assets/js/3.4414ae53.js",
    "revision": "1d4e683374c915b5dfa17d591776a227"
  },
  {
    "url": "assets/js/30.e53204ee.js",
    "revision": "a7a575d6b3491adc9712b7b252150a8d"
  },
  {
    "url": "assets/js/31.b9821d5c.js",
    "revision": "1fbbaf1e9fac77405bb71f9bf8db19a8"
  },
  {
    "url": "assets/js/32.0d1fe847.js",
    "revision": "e8d00b709a20cbcbf3c2621a723d0121"
  },
  {
    "url": "assets/js/33.28dd0a9f.js",
    "revision": "fc33f45ba685fbd81d10369c74576664"
  },
  {
    "url": "assets/js/34.e0bf055e.js",
    "revision": "ce3f6eec06feac05cda37ed6f69dd433"
  },
  {
    "url": "assets/js/35.4ff78e2c.js",
    "revision": "af3d332450df5ab2801ff4ca6a868745"
  },
  {
    "url": "assets/js/36.fc185f2a.js",
    "revision": "a02664adb09a80481a5c775103e864ee"
  },
  {
    "url": "assets/js/37.ea847aa6.js",
    "revision": "f4527098d9371cf091fd790f80701a1a"
  },
  {
    "url": "assets/js/38.3b260883.js",
    "revision": "4943760164cdb3994af323c4722c6815"
  },
  {
    "url": "assets/js/39.3415fd67.js",
    "revision": "324b058760d00fb164bff934464e6771"
  },
  {
    "url": "assets/js/4.caa5970f.js",
    "revision": "510b50af9d9f1c12a6592098cdeb3a61"
  },
  {
    "url": "assets/js/40.29960384.js",
    "revision": "c1aea09d09639999fd6618532e63bc57"
  },
  {
    "url": "assets/js/41.88ab6b0e.js",
    "revision": "550eee65b3006a43911fb8a7aa5e2211"
  },
  {
    "url": "assets/js/42.e882c736.js",
    "revision": "4711cd1e81f3e5c7ad3c79717fb5313f"
  },
  {
    "url": "assets/js/43.3895feb3.js",
    "revision": "80b900c48d02c3ebcf3cc8a9c8eb3eda"
  },
  {
    "url": "assets/js/44.2b072eed.js",
    "revision": "a21746639669470f2c445d28cdc46c51"
  },
  {
    "url": "assets/js/45.a93c286e.js",
    "revision": "999bfbbcdcf12648578fcd5faff79fd1"
  },
  {
    "url": "assets/js/46.4649e8d2.js",
    "revision": "1a3ef275ffe5fcad5266638c001d11ac"
  },
  {
    "url": "assets/js/47.604b65f0.js",
    "revision": "3ded54e404a6f46386b2d108d798b0d9"
  },
  {
    "url": "assets/js/48.331b89af.js",
    "revision": "04fe117bc3c7827ebe26910ba037c7ab"
  },
  {
    "url": "assets/js/49.95bfdb67.js",
    "revision": "7f04ccf1e798d0c6a8860a1e61f5c276"
  },
  {
    "url": "assets/js/5.868b1837.js",
    "revision": "c4c9afcee701c4ac8f0788e88bfd31fe"
  },
  {
    "url": "assets/js/50.cdc8bf98.js",
    "revision": "91b005daeb207e434f3abdf6ce749f32"
  },
  {
    "url": "assets/js/51.b5612c7d.js",
    "revision": "3340a9de7d72a78a0bed2fe34b7b753d"
  },
  {
    "url": "assets/js/6.2817b343.js",
    "revision": "16283bac54dbf4193a4f580958e62b6d"
  },
  {
    "url": "assets/js/7.5b015ca4.js",
    "revision": "a261009c74300158343083553c0f85ab"
  },
  {
    "url": "assets/js/8.764a1636.js",
    "revision": "a1da16a3bc72673636c722b889f7927a"
  },
  {
    "url": "assets/js/9.4f9a7c44.js",
    "revision": "90a0fe1723371a3497123e17ed8ed62b"
  },
  {
    "url": "assets/js/app.56897465.js",
    "revision": "0699bc181a606eb933ffd13a0f006dca"
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
    "revision": "f54bc1620de7cdc06afd4d125e57ffb6"
  },
  {
    "url": "javascript/RADEME.html",
    "revision": "674603beb6b52f22e15d9cc779e7bd7c"
  },
  {
    "url": "javascript/内置对象/Array.html",
    "revision": "8644360b57fcb4fbc0adc15f048e578b"
  },
  {
    "url": "javascript/内置对象/Boolean.html",
    "revision": "53445a167ae1848c5004889cc0e72769"
  },
  {
    "url": "javascript/内置对象/Date.html",
    "revision": "ff105c3d90bee1a92f8e18b4c5582ec0"
  },
  {
    "url": "javascript/内置对象/Function.html",
    "revision": "c055bd9f6d9f3fa1dba97f4341cba3ec"
  },
  {
    "url": "javascript/内置对象/JSON.html",
    "revision": "18e8f90b88489dee0d98e5badc5fec3c"
  },
  {
    "url": "javascript/内置对象/Math.html",
    "revision": "89e1a543f460ba19d75059401d8dba0c"
  },
  {
    "url": "javascript/内置对象/null.html",
    "revision": "299bbbf8418c09cc37204cff5d504539"
  },
  {
    "url": "javascript/内置对象/Number.html",
    "revision": "652439f24a3bd7062e8f9956bc4ece4c"
  },
  {
    "url": "javascript/内置对象/Object.html",
    "revision": "1e77af5d42b7908cf8b9b598cb968041"
  },
  {
    "url": "javascript/内置对象/Promise.html",
    "revision": "91f356ed0b4247772ffcf7d3142a3f2b"
  },
  {
    "url": "javascript/内置对象/Proxy.html",
    "revision": "44621740ca77f3e3735abe616d108ea2"
  },
  {
    "url": "javascript/内置对象/RegExp.html",
    "revision": "29a76c5c59594b8975e57168bb7bf3bf"
  },
  {
    "url": "javascript/内置对象/String.html",
    "revision": "82e946dfc4e739e475e4e8fd908488e3"
  },
  {
    "url": "javascript/内置对象/Symbol.html",
    "revision": "f65293edab5747f060e82a5fa3f0f151"
  },
  {
    "url": "javascript/内置对象/undefined.html",
    "revision": "e357c97f7139ee372935aca8777e09e4"
  },
  {
    "url": "javascript/内置对象/单体内置对象.html",
    "revision": "8c7fe7cb7eb52c08f947610fd646ccf7"
  },
  {
    "url": "javascript/内置对象/基本包装类型.html",
    "revision": "1242d05909c84a64343f0ed4e69038ae"
  },
  {
    "url": "javascript/函数/其他.html",
    "revision": "47de6e73864744b71b395ebe5c9f3773"
  },
  {
    "url": "javascript/函数/概述.html",
    "revision": "c3130abe61abf48f8d429a62d1437450"
  },
  {
    "url": "javascript/基础/var、let、const.html",
    "revision": "f06ec5888d882816851795b3ed419247"
  },
  {
    "url": "javascript/基础/变量、变量的解构赋值.html",
    "revision": "ee7f26a81d139eb9364ba01d2c47a625"
  },
  {
    "url": "javascript/基础/常用的全局方法.html",
    "revision": "39204c7c8f775dad197b740e7eb782a6"
  },
  {
    "url": "javascript/基础/操作符.html",
    "revision": "3b9f31c8e5510bff6eb2c318bc211fcb"
  },
  {
    "url": "javascript/基础/数据类型.html",
    "revision": "0e7c5ca0376adcc01ad720269732f8b0"
  },
  {
    "url": "javascript/基础/标识符、保留字、关键字.html",
    "revision": "7628679d92caec31f5aeb6abf622abee"
  },
  {
    "url": "javascript/基础/简介.html",
    "revision": "cc326006d76b9d3d5672a2a79f1bd4cb"
  },
  {
    "url": "javascript/基础/语句.html",
    "revision": "6c0dc199beed099cdccd65fe21559350"
  },
  {
    "url": "javascript/对象、类与面向对象编程/Class基本语法.html",
    "revision": "3042c49643300ab7739b60a771c7336d"
  },
  {
    "url": "javascript/对象、类与面向对象编程/This关键字.html",
    "revision": "660f4380d22598b64a21d42473f167c2"
  },
  {
    "url": "javascript/对象、类与面向对象编程/创建对象的方式.html",
    "revision": "143210f26d745d7153dc445e77aab875"
  },
  {
    "url": "javascript/对象、类与面向对象编程/对象的继承.html",
    "revision": "0ef0ed990a1562e6d17a55e224ac75c0"
  },
  {
    "url": "javascript/对象、类与面向对象编程/构造函数与new关键字.html",
    "revision": "c2b7e46fb268bca32c6a16b40402fc49"
  },
  {
    "url": "javascript/异步操作/async.html",
    "revision": "e2002a9468b0d99e495e0542f92d1da2"
  },
  {
    "url": "javascript/异步操作/Promise.html",
    "revision": "6f7f4c664251f4e3581c55b92b81a7a9"
  },
  {
    "url": "javascript/异步操作/定时器.html",
    "revision": "160f501d32b2805b9f789b743eeed5d5"
  },
  {
    "url": "javascript/异步操作/概述.html",
    "revision": "bd45d1c88bdb490d2c170f13d697fd3c"
  },
  {
    "url": "JS设计模式/创建型设计模式/单例模式.html",
    "revision": "e7f5eb8e11cb91ffc097c1a97e90a93c"
  },
  {
    "url": "JS设计模式/创建型设计模式/工厂模式.html",
    "revision": "e99980c08c38c66dde1fead23aff7639"
  },
  {
    "url": "JS设计模式/概述/简介.html",
    "revision": "c0592449c3757041cb187709114701c8"
  },
  {
    "url": "JS设计模式/概述/设计模式总览.html",
    "revision": "5ddf657e0ceeb2f3107f8697f3200a07"
  },
  {
    "url": "JS设计模式/结构型设计模式/代理模式.html",
    "revision": "04d8134d4c0234548a086369a536eaa4"
  },
  {
    "url": "JS设计模式/行为型设计模式/备忘录模式.html",
    "revision": "1de79b91c47575666065f68626d0c8ab"
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
