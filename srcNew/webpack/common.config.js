const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const isDev = process.env.NODE_ENV !== 'production';

const commonConfig = {
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: loader => [require('autoprefixer')()],
            },
          },
          'sass-loader',
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
            name: isDev ? 'assets/[name]-[width].[ext]' : 'assets/[chunkhash]-[width].[ext]',
          },
        },
      },
      {
        test: /\.(mp4|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: isDev ? 'assets/[name].[ext]' : 'assets/[chunkhash].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../../src'),
      path.resolve(__dirname, '../node_modules'),
    ],
    extensions: ['.js', '.jsx', '.json'],
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, '../node_modules')],
  },
  performance: {
    hints: false,
  },
};

module.exports = config => {
  let totalConfig = Object.assign({}, config, commonConfig);

  if (!isDev) {
    const addProdConfig = require('./common.config.prod.js');
    totalConfig = addProdConfig(totalConfig);
  } else {
    const addDevConfig = require('./common.config.dev.js');
    totalConfig = addDevConfig(totalConfig);
  }
  return totalConfig;
};
