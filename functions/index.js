const functions = require('firebase-functions');
const serverBundle = require('./build/server.bundle.js');
const clientManifest = require('./build/client-manifest.json');
const loadableStats = require('./build/react-loadable.json');

process.env.NODE_ENV = 'production';

serverBundle.loadablePreload();

exports.app = functions.https.onRequest((req, res) => {
  serverBundle.default(req, res, {
    clientBundle: clientManifest['client.js'],
    vendorBundle: clientManifest['vendors.js'],
    runtimeBundle: clientManifest['runtime.js'],
    loadableStats,
  });
});
