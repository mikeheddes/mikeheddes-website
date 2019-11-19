import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useTheme } from '../hooks'

const query = graphql`
  query metaTags {
    site {
      siteMetadata {
        homepage
      }
    }
    openGraph: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "open_graph_logo.png" }
    ) {
      childImageSharp {
        original {
          src
        }
      }
    }
    favicon: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "favicon.png" }
    ) {
      xs: childImageSharp {
        fixed(width: 16, quality: 100) {
          ...faviconItems
        }
      }
      sm: childImageSharp {
        fixed(width: 32, quality: 100) {
          ...faviconItems
        }
      }
      md: childImageSharp {
        fixed(width: 96, quality: 100) {
          ...faviconItems
        }
      }
      lg: childImageSharp {
        fixed(width: 120, quality: 100) {
          ...faviconItems
        }
      }
      xl: childImageSharp {
        fixed(width: 180, quality: 100) {
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

const description =
  'My personal website. Here I host my projects, research and music'

const MetaTags = () => {
  const {
    site: {
      siteMetadata: { homepage },
    },
    openGraph: {
      childImageSharp: {
        original: { src: openGraph },
      },
    },
    favicon: { xs, sm, md, lg, xl },
  } = useStaticQuery(query)

  const theme = useTheme()

  const favicon = [xs, sm, md]
  const touchIcons = [lg, xl]

  return (
    <Helmet defaultTitle="Mike Heddes" titleTemplate="Mike Heddes | %s">
      <html lang="en" />
      <link rel="canonical" href={homepage} />
      <link rel="shortcut icon" href={homepage + md.fixed.src} />
      {favicon.map(({ fixed: { width, height, src } }) => (
        <link
          key={width}
          rel="icon"
          type="image/png"
          sizes={`${width}x${height}`}
          href={homepage + src}
        />
      ))}
      {touchIcons.map(({ fixed: { width, height, src } }) => (
        <link
          key={width}
          rel="apple-touch-icon"
          type="image/png"
          sizes={`${width}x${height}`}
          href={homepage + src}
        />
      ))}
      <meta name="keywords" content="coding, design, music, research" />
      <meta name="description" content={description} />
      <meta name="application-name" content="Mike Heddes" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="noodp" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="google" content="notranslate" />
      <meta name="revisit-after" content="3 days" />
      <meta name="author" content="Mike Heddes" />
      <meta name="web_author" content="Mike Heddes" />
      <meta name="copyright" content="© Mike Heddes" />
      <meta httpEquiv="content-language" content="en" />
      <meta property="og:title" content="Mike Heddes" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={homepage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={homepage + openGraph} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Mike Heddes" />
      <meta name="twitter:site" content="@mikeheddes" />
      <meta name="twitter:creator" content="@mikeheddes" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={homepage + openGraph} />
      <meta name="twitter:domain" content={homepage} />
      <meta name="theme-color" content={theme.backgroundColor} />
      <script type="application/ld+json">
        {`{
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Mike Heddes",
        "url": "${homepage}",
        "sameAs": [
          "https://facebook.com/djmikeheddes",
          "https://instagram.com/mikeheddes",
          "https://youtube.com/mikeheddes",
          "https://soundcloud.com/mikeheddes",
          "https://twitter.com/mikeheddes",
          "https://github.com/mikeheddes"
        ]
      }`}
      </script>
    </Helmet>
  )
}

export default MetaTags
