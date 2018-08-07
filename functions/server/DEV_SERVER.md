```js
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

// Get MemoryFS from webpack-dev-middleware to use in custom server middleware
// const fs = middleware.fileSystem;

let firstCompileComplete = false;
const serverCompiler = webpack(serverConfig);
serverCompiler.hooks.beforeCompile.tap('log-compile', () => {
  console.log('---BEFORE---');
});
serverCompiler.hooks.done.tap('log-done', () => {
  console.log('---AFTER---');
});

// Set FS of custom middleware to MemoryFS
new Promise(resolve => {
  serverCompiler.watch({ ignored: /node_modules/ }, err => {
    if (err) throw err;
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
    require(loadableStatsPath);
    require(clientManifestPath);
    const serverBundle = require(serverOutputPath);
    serverBundle.loadablePreload();

    if (!firstCompileComplete) {
      resolve();
    }
    firstCompileComplete = true;
  });
}).then(() => {
  app.use(middleware);
  app.use(webpackHotMiddleware(clientCompiler));

  app.get('*', (req, res) => {
    const clientManifest = require(clientManifestPath);
    const loadableStats = require(loadableStatsPath);
    const serverBundle = require(serverOutputPath);
    serverBundle.default(req, res, {
      clientBundle: clientManifest['client.js'],
      loadableStats,
    });
  });

  const serverBundle = require(serverOutputPath);
  serverBundle.loadablePreload().then(() => {
    // eslint-disable-next-line no-console
    app.listen(3000, () => console.log('Example app listening on port 3000!'));
  });
});
```

# Dev server documentation

## Server steps
1. Initialisation, import modules, middleware and define paths
1. Compiler setup
1. Create holding middleware, hold request when compiling and reload chunks.


## Compile steps
### 1. Start
- Hold incomming requests
- Delete cache
### 2. done
- Fill cache
- Process requests


## Holding middleware
```js
const holdingMiddleware = (compiler) => {

  let isCompiling = false;
  let compiling;
  let resolveCompiling;

  compiler.hooks.beforeCompile.tap('before', () => {
    compiling = new Promise(resolve => {
      resolveCompiling = resolve;
    })
    isCompiling = true;
  });

  compiler.watch({ ignored: /node_modules/ }, () => {
    isCompiling = false;
    resolve();
  });

  return (req, res, next) => {
    if (isCompiling) {
      await compiling;
    }
    next();
    return
  };
}
```
