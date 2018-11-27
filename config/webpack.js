import { ReactLoadablePlugin } from 'react-loadable/webpack'

const slug = require('remark-slug')
const math = require('remark-math')
const highlight = require('remark-highlight.js')

export default (
  config,
  { stage, defaultLoaders: { jsLoader, fileLoader } }
) => {
  const isProd = stage === 'prod'
  const isNode = stage === 'node'

  const newConfig = { ...config }

  newConfig.plugins.push(
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    })
  )

  newConfig.module.rules = [
    {
      oneOf: [
        jsLoader,

        {
          test: /.mdx?$/,
          exclude: jsLoader.exclude,
          use: [
            ...jsLoader.use,
            {
              loader: '@mdx-js/loader',
              options: {
                mdPlugins: [slug, highlight, math],
              },
            },
          ],
        },

        {
          ...fileLoader,
          query: {
            ...fileLoader.query,
            name: `static/${isProd || isNode ? '[hash:8]' : '[name]'}.[ext]`,
            emitFile: !isNode,
          },
        },
      ],
    },
  ]

  return newConfig
}
