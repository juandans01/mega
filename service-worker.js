"use strict";var precacheConfig=[["/mega/index.html","62d2508163c0850e76ed2d8f9d3035e8"],["/mega/static/js/main.96173f52.js","280125da3399553751afcd08d091dd4c"],["/mega/static/media/Consumidores-01.94ee88d4.png","94ee88d40ddc018d90550eb89ce3682f"],["/mega/static/media/Consumidores-03.4a809624.png","4a8096243f5f0eedc7aaae16868ba1ec"],["/mega/static/media/Consumidores-04.b929dd12.png","b929dd12f20e9bbbfcb1c23594d4802a"],["/mega/static/media/Consumidores-05.4ca83f22.png","4ca83f22f28805240c56098df07937e9"],["/mega/static/media/Consumidores02.02f12dcc.png","02f12dccd6c5f1c632070a6e7757f500"],["/mega/static/media/Logo-Cartoon_Network.79d787c6.svg","79d787c6febf61acc95d04d0bf41a120"],["/mega/static/media/Logo-Lee.df983239.svg","df9832396db59935a1281177d432dbbd"],["/mega/static/media/Logo-Wrangler.7f4b0b9a.svg","7f4b0b9a4236493c04b58c1a5b0d9e47"],["/mega/static/media/Logo-YPF-blanco.eb8f482c.svg","eb8f482c212ec59d08c97ed2f8d7b297"],["/mega/static/media/Logo-YPF.791ed97a.svg","791ed97aba1cce718904372292d37e43"],["/mega/static/media/Logo-akzonobel.8ed05581.svg","8ed05581c0c14087be009db2c594dca0"],["/mega/static/media/Logo-dafiti.767904b9.svg","767904b9b9ed2cc0bad04398e40685a2"],["/mega/static/media/Logo-directv-blanco.ea264caf.svg","ea264caf0849f2d537157f0bfa34fc72"],["/mega/static/media/Logo-directv.eac2b381.svg","eac2b3814784505993b8bf31ffdfe941"],["/mega/static/media/Logo-fox.5b959d2f.svg","5b959d2f04bc085aecf0f0007b5a74ea"],["/mega/static/media/Logo-givaudan-blanco.10abdce3.svg","10abdce33bd7f4969637e146557ed4c8"],["/mega/static/media/Logo-givaudan.ac8f7bb9.svg","ac8f7bb972a57cf24ba334ef558c4208"],["/mega/static/media/Logo-grupo-cepas.6e1730b9.svg","6e1730b9a651c260d1129a6f46a637e3"],["/mega/static/media/Logo-mac.eb6bf64a.svg","eb6bf64acc2118109cf298b2e27c9b6c"],["/mega/static/media/Logo-makro.5277112d.svg","5277112d68075f650a3140f870db7b50"],["/mega/static/media/Logo-walmart.94848ff6.svg","94848ff64dfea1dac2e24691347e6965"],["/mega/static/media/PARTNER01.6dcd8c81.png","6dcd8c81e427cebd48de2d322a58b96d"],["/mega/static/media/Vf-corp-logo.2fd568d8.svg","2fd568d836dc42458ad6b6f920780256"],["/mega/static/media/deliveries03.6bdbb11b.png","6bdbb11b2ac8cd19a782e4e38883f087"],["/mega/static/media/deliveriescustom02.529a2b45.png","529a2b4575f0e02e080df40a107f590f"],["/mega/static/media/facebook-icon.fe67596e.svg","fe67596ee02008a040546b2e01ecc841"],["/mega/static/media/header.131f1768.png","131f176894c920c7984395f4d07e67c0"],["/mega/static/media/left-arrow.9fc2bb54.svg","9fc2bb54b72295195c4169cbefb6d561"],["/mega/static/media/linkedin-icon.8ad9bbd2.svg","8ad9bbd2a473c79905ad68a97140136d"],["/mega/static/media/location-icon.6054aa47.svg","6054aa472eac5ce8c9acf97106c75301"],["/mega/static/media/logo-turner.c41cc980.svg","c41cc9801cccb8f39640d47774dc89e1"],["/mega/static/media/megaresearch-white.ca6575a9.svg","ca6575a93bc11bf29ac0966fa9a65478"],["/mega/static/media/megaresearch.39db4002.svg","39db4002e032674aac3f0a13b22f5a2e"],["/mega/static/media/mercurias.235432af.svg","235432afb18abdd0bb8124ed68369c28"],["/mega/static/media/metodologias02.7f8d38dd.png","7f8d38ddd45d0ed951c6eaa2aab2c34e"],["/mega/static/media/opt-phone.63a52c72.jpg","63a52c7219f80199b8ce1f7c08f318e6"],["/mega/static/media/right-arrow.3325c436.svg","3325c436629211d0b5445f3aa9e915d4"],["/mega/static/media/soluciones.fa386630.png","fa386630f21e36e0a836460c9d0b6594"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/mega/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});