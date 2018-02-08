const path = require('path');
const webpack = require('webpack');

const resolve = path.resolve;

module.exports = options => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/'
  }, options.output),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({fetch: 'exports-loader?self.fetch!whatwg-fetch'}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NamedModulesPlugin()
  ]),
  resolve: {
    modules: [
      'src', 'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json', '.react.js']
  },
  devtool: options.devtool || 'eval',
  target: 'web',
  performance: options.performance || {}
});
