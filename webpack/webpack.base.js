const path = require('path');
const webpack = require('webpack');

const createBuildDate = require('./createBuildDate');


module.exports = options => ({
  entry: options.entry,
  mode: process.env.NODE_ENV || 'development',
  output: Object.assign({
    path: path.resolve(process.cwd(), 'public', 'build'),
    publicPath: '/',
  }, options.output),
  module: {
    rules: options.rules.concat([
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.json$/,
        use: 'json-loader',
      },
    ]),
  },
  plugins: options.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify('0.1'),
      BUILD_DATE: JSON.stringify(createBuildDate()),
    }),
    new webpack.NamedModulesPlugin(),
  ]),
  resolve: {
    modules: [
      'src', 'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json', '.react.js'],
  },
  devtool: options.devtool || 'eval',
  target: 'web',
  performance: options.performance || {},
});
