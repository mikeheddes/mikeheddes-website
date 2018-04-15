const express = require('express');
const resolve = require('path').resolve;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const MongoDB = require('./MongoDB');
const frontendMiddleware = require('./middlewares/frontendMiddleware');
const logger = require('./logger');
const argv = require('minimist')(process.argv.slice(2));
const api = require('./api');
const api2 = require('./api2');
const serveUploads = require('./StorageEngine/serveUploads');

const isDev = process.env.NODE_ENV !== 'production';
const port = parseInt(argv.port || process.env.PORT || '3000', 10);
const ngrok = process.env.ENABLE_TUNNEL || argv.tunnel
  ? require('ngrok')
  : false;
var bs = (isDev && (process.env.ENABLE_SYNC || argv.sync))
  ? require("browser-sync").create()
  : false;
const opn = !argv.noOpen && require('opn');

const app = express();


// Add MongoDB connection
MongoDB.connect({database: 'mike-heddes-site'})
.then(() => {

  // Add api routes
  app.use(bodyParser.json());
  app.use('/api/v1', api);
  app.use('/api/v2', api2);


  // Get uploads files
  app.use('/uploads', serveUploads);


  // Add webpack settings
  frontendMiddleware(app, {
    outputPath: resolve(process.cwd(), 'public', 'build'),
    publicPath: '/'
  });


  // get the intended host and port number, use localhost and port 3000 if not
  // provided
  const customHost = argv.host || process.env.HOST;
  const host = customHost || null; // Let http.Server use its default IPv6/4 host
  const prettyHost = customHost || 'localhost';


  // Start your app.
  app.listen(port, host, (err) => {
    if (err) {
      return logger.error(err.message);
    }

    if (bs) {
      // Start a Browsersync proxy
      const bsPort = port + 1;
      bs.init({
        proxy: `http://${prettyHost}:${port}`,
        ui: false,
        port: bsPort,
        logLevel: 'silent',
        // tunnel: argv.tunnel ? 'mikeheddes' : null
      });
      logger.appStarted(port, prettyHost, `http://${prettyHost}:${bsPort}`);
    } else if (ngrok) {
      // Start a ngrok connection
      ngrok.connect(port, (innerErr, url) => {
        if (innerErr) {
          return logger.error(innerErr);
        }
        if (opn) opn(url);

        logger.appStarted(port, prettyHost, url);
      });
    } else {
      logger.appStarted(port, prettyHost);
      if (opn) opn(`http://${prettyHost}:${port}`);
    }
  });
})
