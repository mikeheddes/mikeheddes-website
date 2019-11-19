import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import GlobalStyles from '../styles/GlobalStyles'
import Theme from '../styles/Theme'
import MetaTags from './MetaTags'
import Markdown from './Markdown'

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
