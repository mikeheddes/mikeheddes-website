import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet-async'
import { withTheme } from 'styled-components'

// import openGraphLogo from './assets/open_graph_logo.png'
// import favicon from './assets/favicon.png?sizes[]=16,sizes[]=32,sizes[]=96'
// import touchicon from './assets/touchicon.png?sizes[]=57,sizes[]=60,sizes[]=72,sizes[]=76,sizes[]=114,sizes[]=120,sizes[]=144,sizes[]=152,sizes[]=180'

const description =
  'My personal website. Here I host my projects, research and music'

const MetaTags = ({ theme }) => (
  <Helmet>
    {/* <link rel="canonical" href={WEBSITE_BASE} />
      <link rel="shortcut icon" href={WEBSITE_BASE + favicon.toString()} />
      {favicon.images.map(({ width, height, path }) => (
      <link
        key={width}
        rel="icon"
        type="image/png"
        sizes={`${width}x${height}`}
        href={WEBSITE_BASE + path}
      />
      ))}
      {touchicon.images.map(({ width, height, path }) => (
      <link
        key={width}
        rel="apple-touch-icon"
        type="image/png"
        sizes={`${width}x${height}`}
        href={WEBSITE_BASE + path}
      />
    ))} */}
    <meta name="keyWords" content={description} />
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
    {/* <meta property="og:url" content={WEBSITE_BASE} /> */}
    <meta property="og:locale" content="en_US" />
    {/* <meta
      property="og:image"
      content={WEBSITE_BASE + openGraphLogo.toString()}
    /> */}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Mike Heddes" />
    <meta name="twitter:site" content="@mikeheddes" />
    <meta name="twitter:creator" content="@mikeheddes" />
    <meta name="twitter:card" content="summary_large_image" />
    {/* <meta
      name="twitter:image"
      content={WEBSITE_BASE + openGraphLogo.toString()}
    /> */}
    <meta name="twitter:domain" content="mikeheddes.nl" />
    <meta name="theme-color" content={theme.backgroundColor} />
    <script type="application/ld+json">
      {`{
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Mike Heddes",
        "url": "https://mikeheddes.nl",
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

MetaTags.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object.isRequired,
}

export default withTheme(MetaTags)
