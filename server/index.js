const express = require('express');
const opn = require('opn');
const path = require('path');

const frontendMiddleware = require('./middlewares/frontendMiddleware');
const logger = require('./logger');
const argv = require('./argv');

const port = parseInt(argv.port || process.env.PORT || '3000', 10);

const app = express();

frontendMiddleware(app, {
  outputPath: path.resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);
  opn(`http://${prettyHost}:${port}`)
});
