'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","elements2.html", "style/style.css", "style/main.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
