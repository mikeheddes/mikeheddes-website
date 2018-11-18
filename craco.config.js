const { getLoader, loaderByName } = require('@craco/craco')
const LoadablePlugin = require('@loadable/webpack-plugin')
const slug = require('remark-slug')
const math = require('remark-math')
const highlight = require('remark-highlight.js')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  babel: {
    plugins: [
      isProd
        ? ['styled-components', { displayName: false, pure: true }]
        : 'styled-components',
      '@loadable/babel-plugin',
    ],
  },
  webpack: {
    plugins: [new LoadablePlugin()],
    configure: webpackConfig => {
      const {
        isFound,
        match: { loader },
      } = getLoader(webpackConfig, loaderByName('babel-loader'))

      if (isFound) {
        const newWebpackConfig = { ...webpackConfig }

        newWebpackConfig.module.rules.forEach((rule, i) => {
          if (rule.oneOf) {
            newWebpackConfig.module.rules[i].oneOf.unshift({
              test: /.mdx?$/,
              include: loader.include,
              use: [
                { loader: loader.loader, options: loader.options },
                {
                  loader: '@mdx-js/loader',
                  options: {
                    mdPlugins: [slug, highlight, math],
                  },
                },
              ],
            })

            return newWebpackConfig
          }
        })
      }
      return webpackConfig
    },
  },
}
