'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html", "elements2.html", "generic.html", "style/*", "script/*", "fonts/*"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
