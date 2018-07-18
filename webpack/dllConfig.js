const lodash = require('lodash');
const path = require('path');

const pullAll = lodash.pullAll;
const uniq = lodash.uniq;
const resolve = path.resolve;

const pkg = require('../package.json');

const exclude = [
  //dependencies NOT for client code
  'chalk',
  'compression',
  'cross-env',
  'express',
  'multer',
  'mongoose',
  'mongoose-types',
  'ip',
  'mkdirp',
  'minimist',
  'shelljs',
  'opn',
  'body-parser',
  'sharp',
  'rimraf',
  'website-articles',
];

const include = [
  //(dev)Dependencies that need to be included
  'core-js',
  'eventsource-polyfill',
  'babel-polyfill',
  'lodash',
];

module.exports = {
  path: resolve(process.cwd(), 'dlls/project-dlls'),
  include,
  exclude,
  entry() {
    const dependencyNames = Object.keys(pkg.dependencies);
    const includeDependencies = uniq(dependencyNames.concat(include));

    return {
      library: pullAll(includeDependencies, exclude)
    }
  }
};
