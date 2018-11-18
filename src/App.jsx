import React from 'react'
import Helmet, { HelmetProvider } from 'react-helmet-async'
import { MDXProvider } from '@mdx-js/tag'
import MathJax from 'react-mathjax2'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Body from './README.md'
import MDDefaults from './component/MarkdownDefaults'
import GlobalStyles from './style/Global'
import { DAY } from './style/color'

const theme = { ...DAY, link: DAY['red'], surface: DAY.surfaceColors['red'] }

const App = () => (
  <Router>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <MathJax.Context
          input="tex"
          options={{
            showMathMenu: false,
            showProcessingMessages: false,
            messageStyle: 'none',
            tex2jax: { preview: 'none' },
          }}
        >
          <MDXProvider components={MDDefaults}>
            <GlobalStyles />
            <div className="App">
              <Body />
              <Helmet>
                <title>Hello World</title>
              </Helmet>
            </div>
          </MDXProvider>
        </MathJax.Context>
      </ThemeProvider>
    </HelmetProvider>
  </Router>
)

export default App
