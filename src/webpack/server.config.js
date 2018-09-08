const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const createConfig = require('./common.config')

const entryFile = path.resolve(__dirname, '../entry/server.jsx')
const serverDirDev = path.resolve(__dirname, '../../functions/buildDev')
const outputPath = path.resolve(__dirname, '../../functions/build')
const outputPathDev = path.resolve(__dirname, '../../functions/buildDev')
const manifestPathDev = path.resolve(serverDirDev, 'server-manifest.json')

const isDev = process.env.NODE_ENV !== 'production'

// Note that since this is for the server, it is important to
// set the target to node and set the libraryTarget to commonjs2
module.exports = createConfig({
  target: 'node',
  entry: {
    server: entryFile,
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: isDev ? outputPathDev : outputPath,
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },
  plugins: isDev
    ? [new ManifestPlugin({ fileName: manifestPathDev })]
    : [new CleanWebpackPlugin([outputPath], { allowExternal: true })],
})
