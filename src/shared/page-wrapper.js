import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import GlobalStyles from '../styles/global-styles'
import Theme from '../styles/theme'
import MetaTags from './meta-tags'
import Markdown from './markdown'

const PageWrapper = ({ element, props }) => (
  <Theme>
    <MDXProvider components={Markdown}>
      <GlobalStyles />
      <MetaTags />
      {element}
    </MDXProvider>
  </Theme>
)

export default PageWrapper
