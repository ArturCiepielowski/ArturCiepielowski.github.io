"use strict";



if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
    
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


console.log('https://www.youtube.com/watch?v=eaEMSKzqGAg');


    document.getElementById("button__loadMore").onclick = function () {
        location.href = "https://github.com/ArturCiepielowski?tab=repositories";
    };



