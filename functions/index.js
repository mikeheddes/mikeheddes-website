const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

const serverBundle = require('./build/server.bundle.js')
const clientManifest = require('./build/client-manifest.json')
const loadableStats = require('./build/react-loadable.json')

exports.app = functions.https.onRequest((req, res) => {
  serverBundle
    .loadablePreload()
    .then(() =>
      serverBundle.default(req, res, {
        clientBundle: clientManifest['client.js'],
        vendorBundle: clientManifest['vendors.js'],
        runtimeBundle: clientManifest['runtime.js'],
        loadableStats,
      })
    )
    .catch(err => {
      console.log('ERROR: ', err)
      res.send('Something went wrong')
    })
})
