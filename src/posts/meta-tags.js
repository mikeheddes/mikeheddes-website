import React from 'react'
import { Helmet } from 'react-helmet'

import StructuredData from '../shared/structured-data'

const MetaTags = ({
  siteUrl,
  title,
  genre,
  date,
  description,
  imageSquare,
  imageWide,
  slug,
}) => {
  const isoString = new Date(date).toISOString()

  return (
    <>
      <Helmet>
        <meta property="og:url" content={siteUrl + slug} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={siteUrl + imageSquare} />
        <meta property="article:published_time" content={isoString} />
        <meta property="article:author" content="Mike Heddes" />
        <meta property="article:section" content={genre} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={siteUrl + imageWide} />
        <meta name="keywords" content={`technology, ${genre}, art, science`} />
        <meta name="description" content={description} />
      </Helmet>
      <StructuredData>
        {{
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          image: siteUrl + imageWide,
          url: siteUrl + slug,
          headline: title,
          alternativeHeadline: description,
          dateCreated: isoString,
          datePublished: isoString,
          inLanguage: 'en-US',
          isFamilyFriendly: 'true',
          copyrightYear: '2019',
          copyrightHolder: 'Mike Heddes',
          author: {
            '@type': 'Person',
            name: 'Mike Heddes',
            url: siteUrl,
          },
          creator: {
            '@type': 'Person',
            name: 'Mike Heddes',
            url: siteUrl,
          },
          mainEntityOfPage: 'True',
          keywords: ['technology', genre, 'art', 'science'],
          genre: [genre],
        }}
      </StructuredData>
    </>
  )
}

export default MetaTags
