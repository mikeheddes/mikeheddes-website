/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isDev = process.env.NODE_ENV !== 'production';

  if (!isDev) {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../webpack/webpack.dev');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
