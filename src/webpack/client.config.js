const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { ReactLoadablePlugin } = require('react-loadable/webpack')
const ImageminPlugin = require('imagemin-webpack-plugin').default

const createConfig = require('./common.config')

const entryFile = path.resolve(__dirname, '../entry/client.jsx')
const serverDir = path.resolve(__dirname, '../../functions/build')
const serverDirDev = path.resolve(__dirname, '../../functions/buildDev')
const loadableFile = path.resolve(serverDir, 'react-loadable.json')
const loadableFileDev = path.resolve(serverDirDev, 'react-loadable.json')
const manifestPath = path.resolve(serverDir, 'client-manifest.json')
const manifestPathDev = path.resolve(serverDirDev, 'client-manifest.json')
const outputPath = path.resolve(__dirname, '../../public/')
const dllManifestPath = path.resolve(__dirname, '../../dlls/library.json')
const dllPath = path.resolve(__dirname, '../../dlls/library.dll.js')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = createConfig({
  entry: {
    client: isDev
      ? ['webpack-hot-middleware/client?reload=true&quiet=true', entryFile]
      : entryFile,
  },
  output: {
    filename: isDev ? '[name].js' : '[name].[chunkhash].js',
    path: outputPath,
    publicPath: '/',
  },
  optimization: isDev
    ? {}
    : {
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      },
  plugins: isDev
    ? [
        new CopyWebpackPlugin([{ from: dllPath }], { copyUnmodified: true }),
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: dllManifestPath,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ManifestPlugin({
          writeToFileEmit: true,
          fileName: manifestPathDev,
        }),
        new ReactLoadablePlugin({ filename: loadableFileDev }),
      ]
    : [
        new ImageminPlugin({ test: /\.(png|jpe?g|gif)$/ }),
        new CleanWebpackPlugin([outputPath], { allowExternal: true }),
        new webpack.HashedModuleIdsPlugin(),
        new ManifestPlugin({ writeToFileEmit: true, fileName: manifestPath }),
        new ReactLoadablePlugin({ filename: loadableFile }),
      ],
})
