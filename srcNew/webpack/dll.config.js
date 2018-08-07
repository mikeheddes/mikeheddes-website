const path = require('path');
const webpack = require('webpack');

const createConfig = require('./common.config');

const outputPath = path.resolve(__dirname, '../../dlls');

const pkg = require('../package.json');

module.exports = createConfig({
  target: 'web',
  context: __dirname,
  entry: {
    library: Object.keys(pkg.dependencies),
  },
  output: {
    filename: '[name].dll.js',
    path: outputPath,
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.resolve(outputPath, '[name].json'),
    }),
  ],
  devtool: false,
});
