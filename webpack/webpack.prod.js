const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const logger = require('../server/logger');
const webpackBaseConfig = require('./webpack.base');

module.exports = webpackBaseConfig({
  //
  entry: [path.resolve(process.cwd(), 'src')],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  optimization: {
    splitChunks: {
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    },
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
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [require('autoprefixer')()],
            },
          },
          'sass-loader',
        ],
      }),
    },
    {
      test: /\.(png|jpe?g)$/,
      use: {
        loader: 'responsive-loader',
        options: {
          adapter: require('responsive-loader/sharp'),
          sizes: [300, 600, 1200, 2000],
          placeholder: true,
          placeholderSize: 64,
          name: 'img/[hash]-[width].[ext]',
        },
      },
    },
    {
      test: /\.(mp4)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'video/[hash].[ext]',
        },
      },
    },
    {
      test: /\.(gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'img/[hash].[ext]',
        },
      },
    },
  ],
  plugins: [
    new ImageminPlugin({ test: /\.(png|jpe?g|gif)$/ }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin('styles.css'),
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
        minifyURLs: true,
      },
      inject: true,
    }),
  ],

  // Emit a source map for easier debugging See
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-source-map',

  performance: {
    hints: false,
  },
});
