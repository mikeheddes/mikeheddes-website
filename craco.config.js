const { getLoader, loaderByName } = require('@craco/craco')
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
    ],
  },
  webpack: {
    configure: webpackConfig => {
      const {
        isFound,
        match: { loader },
      } = getLoader(webpackConfig, loaderByName('babel-loader'))

      if (isFound) {
        const newWebpackConfig = { ...webpackConfig }
        // eslint-disable-next-line consistent-return
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
