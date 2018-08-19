const path = require('path');
const webpack = require('webpack');

const createConfig = require('./common.config');

const outputPath = path.resolve(__dirname, '../../dlls');

const pkg = require('../package.json');

const exclude = ['apollo-client', 'graphql', 'react-apollo', 'through'];

module.exports = createConfig({
  context: __dirname,
  entry: {
    library: Object.keys(pkg.dependencies).filter(
      module => exclude.indexOf(module) === -1
    ),
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
