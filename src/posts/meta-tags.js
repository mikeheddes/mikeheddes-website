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
        <title>{title}</title>
        <meta name="twitter:title" content={title} />
        <meta property="og:title" content={title} />

        <meta
          name="keywords"
          content={`technology, ${genre}, art, science, computer graphics, computer science`}
        />

        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="description" content={description} />

        <meta property="og:url" content={siteUrl + slug} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={isoString} />
        <meta property="article:author" content="Mike Heddes" />
        <meta property="article:section" content={genre} />

        <meta name="image" content={siteUrl + imageSquare} />
        <meta property="og:image" content={siteUrl + imageSquare} />
        <meta name="twitter:image" content={siteUrl + imageWide} />
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
          copyrightYear: new Date().getFullYear().toString(),
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
