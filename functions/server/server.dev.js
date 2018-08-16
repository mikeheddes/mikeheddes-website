// eslint
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
let clientCompiling;
let resolveClientCompiling;
clientCompiler.hooks.beforeCompile.tap('before', () => {
  clientCompiling = new Promise(resolve => {
    resolveClientCompiling = resolve;
  });
});
clientCompiler.hooks.done.tap('after', stats => {
  resolveClientCompiling(stats);
});
clientCompiler.hooks.failed.tap('error', error => {
  new Error(error);
});

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
  let serverCompiling;
  let resolveServerCompiling;

  compiler.hooks.beforeCompile.tap('before', () => {
    serverCompiling = new Promise(resolve => {
      resolveServerCompiling = resolve;
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

  compiler.hooks.done.tap('after', stats => {
    clientCompiling
      .then(() => {
        isFirstCompile = false;
        // First do cache set stuff
        require(loadableStatsPath);
        require(clientManifestPath);
        return require(serverOutputPath);
      })
      .then(serverBundle => serverBundle.loadablePreload())
      .then(() => {
        resolveServerCompiling(stats);
        isCompiling = false;
        return stats;
      })
      .catch(err => {
        throw err;
      });
  });

  compiler.hooks.failed.tap('error', error => {
    new Error(error);
  });

  compiler.watch({ ignored: /node_modules/ }, () => {});

  return (req, res, next) => {
    if (isCompiling) {
      serverCompiling
        .then(stats => {
          next();
          return stats;
        })
        .catch(err => {
          throw err;
        });
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

app.listen(3000, () =>
  console.log('dev-server running: http://localhost:3000')
);
