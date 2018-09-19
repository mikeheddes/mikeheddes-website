const commonPlugins = [
  '@babel/proposal-class-properties',
  '@babel/proposal-export-default-from',
  '@babel/proposal-export-namespace-from',
  '@babel/syntax-dynamic-import',
]

module.exports = {
  presets: [['@babel/env', { modules: false }], '@babel/react'],
  env: {
    production: {
      plugins: [
        ['styled-components', { displayName: false }],
        'react-loadable/babel',
        'transform-react-remove-prop-types',
        '@babel/transform-react-constant-elements',
        '@babel/transform-react-inline-elements',
      ].concat(commonPlugins),
    },
    development: {
      plugins: ['styled-components', 'react-loadable/babel'].concat(
        commonPlugins
      ),
    },
  },
}
