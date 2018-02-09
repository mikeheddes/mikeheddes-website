const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const logger = require('../server/logger');
const webpackBaseConfig = require('./webpack.base');

module.exports = webpackBaseConfig({
  //
  entry: [path.resolve(process.cwd(), 'src')],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },

  rules: [
    {
      test: /\.(css|scss|sass)$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [require('autoprefixer')()]
            }
          },
          'sass-loader',
        ]
      })
    }, {
      test: /\.(jpe?g|png|gif)$/,
      exclude: /node_modules/,
      use: [
        'file-loader', {
          loader: 'image-webpack-loader',
          options: {
            progressive: true,
            optimizationLevel: 7,
            interlaced: false,
            pngquant: {
              quality: '65-90',
              speed: 4
            }
          }
        }
      ]
    }
  ],
  // Add development plugins
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin(
      {name: 'vendor', children: true, minChunks: 2, async: true}
    ),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    })
  ],

  // Emit a source map for easier debugging See
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-source-map',

  performance: {
    hints: false
  }
});
