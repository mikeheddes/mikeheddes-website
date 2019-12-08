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
    favicon: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "favicon.png" }
    ) {
      xs: childImageSharp {
        fixed(width: 16) {
          ...faviconItems
        }
      }
      sm: childImageSharp {
        fixed(width: 32) {
          ...faviconItems
        }
      }
      md: childImageSharp {
        fixed(width: 96) {
          ...faviconItems
        }
      }
      lg: childImageSharp {
        fixed(width: 120) {
          ...faviconItems
        }
      }
      xl: childImageSharp {
        fixed(width: 180) {
          ...faviconItems
        }
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
    favicon: { xs, sm, md, lg, xl },
  } = useStaticQuery(query)

  const theme = useTheme()

  const favicon = [xs, sm, md]
  const touchIcons = [lg, xl]

  return (
    <Helmet defaultTitle="Mike Heddes" titleTemplate="%s | Mike Heddes">
      <html lang="en" />
      {/*
      Fix css active for mobile safari
      https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
      */}
      <body ontouchstart="" />
      <link rel="canonical" href={siteUrl} />
      <link rel="shortcut icon" href={siteUrl + md.fixed.src} />
      {favicon.map(({ fixed: { width, height, src } }) => (
        <link
          key={width}
          rel="icon"
          type="image/png"
          sizes={`${width}x${height}`}
          href={siteUrl + src}
        />
      ))}
      {touchIcons.map(({ fixed: { width, height, src } }) => (
        <link
          key={width}
          rel="apple-touch-icon"
          type="image/png"
          sizes={`${width}x${height}`}
          href={siteUrl + src}
        />
      ))}
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
