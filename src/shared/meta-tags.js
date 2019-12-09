import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { useTheme } from './hooks'

const query = graphql`
  query metaTags {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }

  fragment faviconItems on ImageSharpFixed {
    src
    width
    height
  }
`

const MetaTags = () => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(query)

  const theme = useTheme()

  return (
    <Helmet defaultTitle="Mike Heddes" titleTemplate="%s | Mike Heddes">
      <html lang="en" />
      {/*
      Fix css active for mobile safari
      https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
      */}
      <body ontouchstart="" />
      <link rel="canonical" href={siteUrl} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <link rel="manifest" href="/manifest.json" />
      <meta name="application-name" content="Mike Heddes" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="noodp" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="google" content="notranslate" />
      <meta name="revisit-after" content="3 days" />
      <meta name="author" content="Mike Heddes" />
      <meta name="web_author" content="Mike Heddes" />
      <meta name="copyright" content="Mike Heddes" />
      <meta httpEquiv="content-language" content="en" />
      <meta name="theme-color" content={theme.background} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mikeheddes" />
      <meta name="twitter:creator" content="@mikeheddes" />
    </Helmet>
  )
}

export default MetaTags
