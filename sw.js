'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html", "gene.html"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/style/*', toolbox.cacheFirst);
toolbox.router.get('/fonts/*', toolbox.cacheFirst);
toolbox.router.get('/script/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
