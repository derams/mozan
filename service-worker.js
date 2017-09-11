"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/mozan/index.html","31aadf1a6f46ec08bce46466ef74437e"],["/mozan/static/css/main.f415f9d9.css","db08e4b0eb496419efc23a770b88d521"],["/mozan/static/js/main.31dc3bea.js","bd8b35702051199d5b89b29e1809f59e"],["/mozan/static/media/bg1_03.4f707e4b.jpg","4f707e4b37f6c878bd80c6b361f0ec30"],["/mozan/static/media/bj_03.b5c080d7.jpg","b5c080d7e386229a4377a43a06a04b16"],["/mozan/static/media/erweima_07_07.33f1f132.png","33f1f13268ae810b58f8a1307e3fffba"],["/mozan/static/media/iconfont.058c86f3.eot","058c86f3d72b8daba91a75a3dc9950bf"],["/mozan/static/media/iconfont.21f07be2.svg","21f07be299e9016b7a63bed7e49aef83"],["/mozan/static/media/iconfont.83e9f80c.ttf","83e9f80c7f256580a54b6277d0383c6c"],["/mozan/static/media/iconfont.e5dcbd82.woff","e5dcbd822bbdf66b1def5431deaaf477"],["/mozan/static/media/img1_03.775b9122.png","775b9122e57772f0ebdaa5f6277e3d95"],["/mozan/static/media/img2_03.d13b1eb4.png","d13b1eb43beb7191e21c66a6d7daa97a"],["/mozan/static/media/img3_03.e00e3df1.png","e00e3df119b637f7a4a63e45fe6f1805"],["/mozan/static/media/img_03.0eb9fd63.png","0eb9fd63a00c9104f7fee3f003f75db8"],["/mozan/static/media/img_04_03.a53f5c4e.png","a53f5c4e6b4cc1b4b9a07afc2bbf33eb"],["/mozan/static/media/line3_03.37b9a521.jpg","37b9a52179e1d85ab234901b55915d34"],["/mozan/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/mozan/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/mozan/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/mozan/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/mozan/static/media/success_03.dd00b452.png","dd00b452c3e545bcc36ebf20881e36f6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/mozan/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});