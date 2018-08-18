import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet-async';

import openGraphLogo from 'assets/open_graph_logo.png';
import favicon from 'assets/favicon.png?sizes[]=16,sizes[]=32,sizes[]=96';
import touchicon from 'assets/touchicon.png?sizes[]=57,sizes[]=60,sizes[]=72,sizes[]=76,sizes[]=114,sizes[]=120,sizes[]=144,sizes[]=152,sizes[]=180';

const MetaTags = ({ backgroundColor }) => (
  <Helmet defaultTitle="Mike Heddes" titleTemplate="Mike Heddes | %s">
    <html lang="en-US" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="https://mikeheddes.nl" />
    <link rel="shortcut icon" href={favicon.toString()} />
    {favicon.images.map(({ width, height, path }) => (
      <link
        key={width}
        rel="icon"
        type="image/png"
        sizes={`${width}x${height}`}
        href={path}
      />
    ))}
    {touchicon.images.map(({ width, height, path }) => (
      <link
        key={width}
        rel="apple-touch-icon"
        type="image/png"
        sizes={`${width}x${height}`}
        href={path}
      />
    ))}
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1"
    />
    <meta
      name="keyWords"
      content="Mike Heddes, Creative, Curious, Developer, Frontend, Machine Learing, Data Science, Artist, DJ, Producer, Music, Dance, Pop, Electronic Dance Music"
    />
    <meta
      name="description"
      content="Mike Heddes is a creative engineer and artist who does software engineering makes dance - pop music and is curious in the world around him. Better know as a nerd."
    />
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
    <meta
      property="og:description"
      content="Mike Heddes is a creative engineer and artist who does software engineering makes dance - pop music and is curious in the world around him. Better know as a nerd."
    />
    <meta property="og:url" content="https://mikeheddes.nl" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content={openGraphLogo.toString()} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Mike Heddes" />
    <meta name="twitter:site" content="@mikeheddes" />
    <meta name="twitter:creator" content="@mikeheddes" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={openGraphLogo.toString()} />
    <meta name="twitter:domain" content="mikeheddes.nl" />
    <meta name="theme-color" content={backgroundColor} />
    <body onTouchStart="" style={`background-color: ${backgroundColor};`} />
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
    <noscript>
      If you&#39;re seeing this message, that means JavaScript has been disabled
      on your browser, please enable JS to make this app work.
    </noscript>
  </Helmet>
);

MetaTags.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default MetaTags;
