import React from 'react'
import { Helmet } from 'react-helmet'

import StructuredData from '../shared/structured-data'

const TITLE = "Mike Heddes' Personal Website"
const DESCRIPTION =
  'Combining Art, Technology, and Science, the projects on my personal website cover my diverse interests.'

const MetaTags = ({ siteUrl, profileImage, profileImageTwitter }) => (
  <>
    <Helmet>
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={siteUrl + profileImage} />

      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={siteUrl + profileImageTwitter} />
      <meta
        name="keywords"
        content="coding, design, music, technology, science, art, computers"
      />
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <StructuredData>
      {{
        '@context': 'https://schema.org/',
        '@type': 'Person',
        name: 'Mike Heddes',
        url: siteUrl,
        image: siteUrl + profileImage,
        sameAs: [
          'https://github.com/mikheddes',
          'https://soundcloud.com/mikeheddes',
          'https://youtube.com/mikeheddes',
          'https://twitter.com/mikeheddes',
          'https://instagram.com/mikeheddes/',
          'https://facebook.com/djmikeheddes',
          'https://open.spotify.com/artist/4kQdT4uFc2e0zHL755qJ0U',
          'https://itunes.apple.com/nl/artist/mike-heddes/1185471953',
        ],
      }}
    </StructuredData>
  </>
)

export default MetaTags
