const path = require('path');
const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// const requireFromMemory = require('./require-from-memory');
const clientConfig = require('../../src/webpack/client.config');
const serverConfig = require('../../src/webpack/server.config');

const app = express();

// Constant paths
const baseOutput = serverConfig.output.path;
const clientManifestPath = path.resolve(baseOutput, 'client-manifest.json');
const serverManifestPath = path.resolve(baseOutput, 'server-manifest.json');
const loadableStatsPath = path.resolve(baseOutput, 'react-loadable.json');
const serverOutputPath = path.resolve(baseOutput, 'server.bundle.js');

// Client middleware
const clientCompiler = webpack(clientConfig);
const middleware = webpackDevMiddleware(clientCompiler, {
  noInfo: true,
  publicPath: clientConfig.output.publicPath,
  silent: true,
  stats: 'errors-only',
});

app.use(middleware);
app.use(webpackHotMiddleware(clientCompiler));

// Server middleware
const serverCompiler = webpack(serverConfig);
const holdingMiddleware = compiler => {
  let isCompiling = false;
  let isFirstCompile = true;
  let compiling;
  let resolveCompiling;

  compiler.hooks.beforeCompile.tap('before', () => {
    compiling = new Promise(resolve => {
      resolveCompiling = resolve;
    });
    isCompiling = true;
    // Do cache delete stuff
    if (!isFirstCompile) {
      const serverManifest = require(serverManifestPath);
      Object.keys(serverManifest)
        .filter(file => file.endsWith('.chunk.js'))
        .forEach(file => {
          const pathToCache = path.resolve(baseOutput, file);
          delete require.cache[pathToCache];
        });
      delete require.cache[loadableStatsPath];
      delete require.cache[serverOutputPath];
      delete require.cache[clientManifestPath];
      delete require.cache[serverManifestPath];
    }
  });

  compiler.watch({ ignored: /node_modules/ }, () => {
    isFirstCompile = false;
    // First do cache set stuff
    require(loadableStatsPath);
    require(clientManifestPath);
    const serverBundle = require(serverOutputPath);
    serverBundle.loadablePreload().then(() => {
      resolveCompiling();
      isCompiling = false;
    });
  });

  return (req, res, next) => {
    if (isCompiling) {
      compiling.then(next);
    } else {
      next();
    }
  };
};

app.use(holdingMiddleware(serverCompiler));

app.get('*', (req, res) => {
  const clientManifest = require(clientManifestPath);
  const loadableStats = require(loadableStatsPath);
  const serverBundle = require(serverOutputPath);
  serverBundle.default(req, res, {
    clientBundle: clientManifest['client.js'],
    dllBundle: clientManifest['library.dll.js'],
    loadableStats,
  });
});

app.listen(3000, () => console.log('Example app online http://localhost:3000'));
