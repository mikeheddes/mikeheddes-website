const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const highlight = require('remark-highlight.js');

const isDev = process.env.NODE_ENV !== 'production';

// const cssUseArray = [
//   {
//     loader: 'css-loader',
//     options: {
//       minimize: !isDev,
//     },
//   },
//   {
//     loader: 'postcss-loader',
//     options: {
//       ident: 'postcss',
//       plugins: () => [autoprefixer()],
//     },
//   },
//   'sass-loader',
// ];

module.exports = options => ({
  context: options.context,
  entry: options.entry,
  output: options.output,
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.(css|scss|sass)$/,
      //   exclude: /node_modules/,
      //   use: isDev
      //     ? [].concat(['style-loader'], cssUseArray)
      //     : ExtractTextPlugin.extract({
      //         fallback: 'style-loader',
      //         use: cssUseArray,
      //       }),
      // },
      {
        test: /\.mdx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: '@mdx-js/loader',
            options: {
              mdPlugins: [highlight],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g)$/,
        use: {
          loader: 'responsive-loader',
          options: {
            sizes: [300, 600, 1200, 2000],
            adapter: require('responsive-loader/sharp'),
            placeholder: true,
            placeholderSize: 64,
            name: isDev
              ? 'assets/[name]-[width].[ext]'
              : 'assets/[hash]-[width].[ext]',
          },
        },
      },
      {
        test: /\.(mp4|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: isDev ? 'assets/[name].[ext]' : 'assets/[hash].[ext]',
          },
        },
      },
    ],
  },
  plugins: isDev
    ? options.plugins.concat([
        new webpack.DefinePlugin({
          WEBSITE_BASE: JSON.stringify('http://localhost'),
        }),
      ])
    : options.plugins.concat([
        new webpack.DefinePlugin({
          WEBSITE_BASE: JSON.stringify('https://mikeheddes.nl'),
        }),
      ]),
  // : options.plugins.concat([new ExtractTextPlugin('styles.css')]),
  resolve: {
    modules: [
      path.resolve(__dirname, '../../src'),
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../../node_modules'),
    ],
    extensions: ['.js', '.jsx', '.json'],
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../../node_modules'),
    ],
  },
  optimization: Object.assign({ noEmitOnErrors: true }, options.optimization),
  performance: { hints: false },
  target: options.target || 'web',
  devtool: isDev ? 'eval' : 'cheap-module-source-map',
});
