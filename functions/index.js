const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const serverBundle = require('./build/server.bundle.js');
const clientManifest = require('./build/client-manifest.json');
const loadableStats = require('./build/react-loadable.json');

serverBundle.loadablePreload();

exports.app = functions.https.onRequest((req, res) => {
  res.set('Content-Type', 'text/html');
  res.set('Cache-Control', 'max-age=300');
  serverBundle.default(req, res, {
    clientBundle: clientManifest['client.js'],
    vendorBundle: clientManifest['vendors.js'],
    runtimeBundle: clientManifest['runtime.js'],
    loadableStats,
  });
});
