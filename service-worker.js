"use strict";var precacheConfig=[["/mega/index.html","be1a40a5bcc9979bd1a815af69cf9036"],["/mega/static/js/main.b6ae943f.js","dc063344361fea8de9b4e07a4fa6eac4"],["/mega/static/media/Consumidores-01.f9bd8e04.png","f9bd8e04b67aee74734baf00aedc6c33"],["/mega/static/media/Consumidores-03.32af1d2f.png","32af1d2fb08c0c69544283f9141040f2"],["/mega/static/media/Consumidores-04.21470365.png","214703652ddb1e98a1fffb8d341a9f19"],["/mega/static/media/Consumidores-05.4cb6a3cc.png","4cb6a3ccbf213c4b5ec498de85643c50"],["/mega/static/media/Consumidores-06.2060819f.png","2060819f9c1c5e33c42b21da7843e21f"],["/mega/static/media/Consumidores02.fd19fa8f.png","fd19fa8f957a29ac3dd67e44180c2459"],["/mega/static/media/HeroImage.8dc87cbc.png","8dc87cbc48c4a5594502698976959fda"],["/mega/static/media/Logo-Cartoon_Network.79d787c6.svg","79d787c6febf61acc95d04d0bf41a120"],["/mega/static/media/Logo-Lee.df983239.svg","df9832396db59935a1281177d432dbbd"],["/mega/static/media/Logo-Wrangler.7f4b0b9a.svg","7f4b0b9a4236493c04b58c1a5b0d9e47"],["/mega/static/media/Logo-YPF-blanco.eb8f482c.svg","eb8f482c212ec59d08c97ed2f8d7b297"],["/mega/static/media/Logo-YPF.791ed97a.svg","791ed97aba1cce718904372292d37e43"],["/mega/static/media/Logo-akzonobel.8ed05581.svg","8ed05581c0c14087be009db2c594dca0"],["/mega/static/media/Logo-dafiti.767904b9.svg","767904b9b9ed2cc0bad04398e40685a2"],["/mega/static/media/Logo-directv-blanco.ea264caf.svg","ea264caf0849f2d537157f0bfa34fc72"],["/mega/static/media/Logo-directv.eac2b381.svg","eac2b3814784505993b8bf31ffdfe941"],["/mega/static/media/Logo-givaudan-blanco.10abdce3.svg","10abdce33bd7f4969637e146557ed4c8"],["/mega/static/media/Logo-givaudan.ac8f7bb9.svg","ac8f7bb972a57cf24ba334ef558c4208"],["/mega/static/media/Logo-grupo-cepas.6e1730b9.svg","6e1730b9a651c260d1129a6f46a637e3"],["/mega/static/media/Logo-walmart.94848ff6.svg","94848ff64dfea1dac2e24691347e6965"],["/mega/static/media/PARTNER01.7567d436.png","7567d436e61ac00860e180fa1c7551b1"],["/mega/static/media/Vf-corp-logo.2fd568d8.svg","2fd568d836dc42458ad6b6f920780256"],["/mega/static/media/client-mobile-1.fd6bf0bf.png","fd6bf0bf8a2d380daeb6c379d4f73649"],["/mega/static/media/client-mobile-2.9f5eb13f.png","9f5eb13fec466ab47b29adb629460f81"],["/mega/static/media/client-mobile-3.a10ebe82.png","a10ebe82d6b16bd5de9928803a30e950"],["/mega/static/media/deliveries03.c3f36b8b.png","c3f36b8b60311e979a7c8780fbc01bb6"],["/mega/static/media/deliveriescustom02.137515ce.png","137515cefdb6f04c392153917f340374"],["/mega/static/media/facebook-icon.fe67596e.svg","fe67596ee02008a040546b2e01ecc841"],["/mega/static/media/left-arrow.9fc2bb54.svg","9fc2bb54b72295195c4169cbefb6d561"],["/mega/static/media/left-culture.8fea05c6.jpg","8fea05c6947ca3b0393e9f1e26deb942"],["/mega/static/media/linkedin-icon.8ad9bbd2.svg","8ad9bbd2a473c79905ad68a97140136d"],["/mega/static/media/location-icon.6054aa47.svg","6054aa472eac5ce8c9acf97106c75301"],["/mega/static/media/megaresearch-white.ca6575a9.svg","ca6575a93bc11bf29ac0966fa9a65478"],["/mega/static/media/megaresearch.39db4002.svg","39db4002e032674aac3f0a13b22f5a2e"],["/mega/static/media/mercurias.235432af.svg","235432afb18abdd0bb8124ed68369c28"],["/mega/static/media/metodologias02.5fc6164d.png","5fc6164da73012dad22fd179614f3d2b"],["/mega/static/media/mexico.e3939b7a.jpg","e3939b7afc1e278633b33973f8c981b3"],["/mega/static/media/opt-phone.c72cfafa.jpg","c72cfafa50992baf740e81a08684b86f"],["/mega/static/media/right-arrow.3325c436.svg","3325c436629211d0b5445f3aa9e915d4"],["/mega/static/media/soluciones.767314a7.png","767314a73017e7bc6b64c1a5ab5a7854"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/mega/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});