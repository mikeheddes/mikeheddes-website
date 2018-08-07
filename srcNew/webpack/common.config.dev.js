const devConfig = {
  optimization: {
    noEmitOnErrors: true,
  },
  devtool: 'eval',
};

module.exports = config => Object.assign({}, config, devConfig);
