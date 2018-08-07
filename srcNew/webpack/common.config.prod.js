const prodConfig = {
  devtool: 'cheap-module-source-map',
};

module.exports = config => Object.assign({}, config, prodConfig);
