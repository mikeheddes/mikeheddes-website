'use strict';

var Module = require('module');
var path = require('path');

module.exports = function requireFromString(fs, filename, opts) {
  filename = path.resolve(filename);

  let code = fs.readFileSync(filename).toString();

  if (path.extname(filename) === '.json') {
    return JSON.parse(code);
  }

  if (filename in require.cache) {
    // console.log('___READ FROM CACHE___');
    return require.cache[filename].exports;
  }
  // console.log('___CREATE NEW MODULE___');
  if (typeof filename === 'object') {
    opts = filename;
    filename = undefined;
  }

  opts = opts || {};
  filename = filename || '';

  opts.appendPaths = opts.appendPaths || [];
  opts.prependPaths = opts.prependPaths || [];

  if (typeof code !== 'string') {
    throw new Error('code must be a string, not ' + typeof code);
  }

  var paths = Module._nodeModulePaths(path.dirname(filename));

  var parent = module.parent;
  var m = new Module(filename, parent);
  m.filename = filename;
  m.paths = []
    .concat(opts.prependPaths)
    .concat(paths)
    .concat(opts.appendPaths);
  m._compile(code, filename);
  Module._cache[filename] = m;

  var exports = m.exports;
  parent &&
    parent.children &&
    parent.children.splice(parent.children.indexOf(m), 1);

  return exports;
};
