import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Navigation from '../views/Navigation'
import Footer from '../views/Footer'
import GlobalStyles from '../styles/Global'
import { DAY, NIGHT } from '../styles/color'

const themeLookup = {
  DAY,
  NIGHT,
}

const getTheme = (themeName, defaultThemeName) => {
  const defaultThemeNameUp = defaultThemeName.toUpperCase()
  if (typeof themeName !== 'string') {
    return themeLookup[defaultThemeNameUp]
  }
  const themeNameUp = themeName.toUpperCase()
  return themeLookup[themeNameUp] || themeLookup[defaultThemeNameUp]
}

const query = graphql`
  query themeQuery {
    site {
      siteMetadata {
        defaultTheme
      }
    }
  }
`

const Layout = ({ children, pageContext }) => (
  <StaticQuery
    query={query}
    render={({ site }) => (
      <ThemeProvider
        theme={getTheme(pageContext.theme, site.siteMetadata.defaultTheme)}
      >
        <Fragment>
          <Helmet defaultTitle="Mike Heddes" titleTemplate="Mike Heddes | %s">
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css"
              type="text/css"
              defer
              integrity="sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y"
              crossOrigin="anonymous"
            />
          </Helmet>
          <GlobalStyles />
          <Navigation />
          {children}
          <Footer />
        </Fragment>
      </ThemeProvider>
    )}
  />
)

export default Layout
