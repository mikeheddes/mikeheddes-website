import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Navigation from '../views/Navigation'
import Footer from '../views/Footer'
import GlobalStyles from '../styles/Global'
import { DAY, NIGHT } from '../styles/color'
import MetaTags from '../components/MetaTags'

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
        homepage
      }
    }
  }
`

const Layout = ({ children, pageContext }) => (
  <StaticQuery
    query={query}
    render={({ site: { siteMetadata } }) => (
      <ThemeProvider
        theme={getTheme(pageContext.theme, siteMetadata.defaultTheme)}
      >
        <Fragment>
          <Helmet defaultTitle="Mike Heddes" titleTemplate="Mike Heddes | %s" />
          <GlobalStyles />
          <MetaTags homepage={siteMetadata.homepage} />
          <Navigation />
          {children}
          <Footer />
        </Fragment>
      </ThemeProvider>
    )}
  />
)

export default Layout
