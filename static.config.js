/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { HelmetProvider } from 'react-helmet-async'
import Loadable from 'react-loadable'
import { ReactLoadablePlugin, getBundles } from 'react-loadable/webpack'

import Document from './src/Document'

const slug = require('remark-slug')
const math = require('remark-math')
const highlight = require('remark-highlight.js')

export default {
  webpack: (config, { stage, defaultLoaders: { jsLoader, fileLoader } }) => {
    const newConfig = { ...config }
    const isProd = stage === 'prod'
    const isNode = stage === 'node'

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
  },
  getRoutes: async () => [
    {
      path: '/',
    },
    {
      path: '/about',
    },
    {
      path: '/music',
    },
    {
      path: '/articles',
    },
  ],
  renderToHtml: async (render, Comp, meta) => {
    await Loadable.preloadAll()
    // eslint-disable-next-line global-require
    const stats = require('./dist/react-loadable.json')

    const sheet = new ServerStyleSheet()
    const helmetContext = {}
    const modules = []

    const html = render(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StyleSheetManager sheet={sheet.instance}>
          <HelmetProvider context={helmetContext}>
            <Comp />
          </HelmetProvider>
        </StyleSheetManager>
      </Loadable.Capture>
    )

    /* eslint-disable no-param-reassign */
    meta.styleTags = sheet.getStyleElement()
    meta.bundles = getBundles(stats, modules)
    meta.helmet = helmetContext.helmet
    /* eslint-enable no-param-reassign */

    return html
  },
  Document,
}
