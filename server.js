#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
    chromeLocation: '/usr/bin/chromium-browser',
});

server.use(prerender.sendPrerenderHeader());
server.use(prerender.browserForceRestart());
// server.use(prerender.blockResources());
server.use(prerender.addMetaTags());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
