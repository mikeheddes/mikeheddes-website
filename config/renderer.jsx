import React from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { HelmetProvider } from 'react-helmet-async'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'

export default async (render, Comp, meta) => {
  await Loadable.preloadAll()
  // eslint-disable-next-line global-require
  const stats = require('../dist/react-loadable.json')

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
}
