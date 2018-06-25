const SEcnf = require('../../StorageEngine/config');
const mongoose = require('mongoose');

module.exports = (data) => {
  if (data) return {
    srcSet: data.demensions.map(dim => `${SEcnf.publicPath}/${data._id}?width=${dim.width} ${dim.width}w`).join(','),
    images: data.demensions.map(dim => Object.assign({}, dim, {path: SEcnf.publicPath + '/' + data._id + '?width=' + dim.width})),
    src: `${SEcnf.publicPath}/${data._id}`,
    color: data.color,
    placeholder: data.micro.URI,
  }
  return data
};
