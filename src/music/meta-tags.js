import React from 'react'
import { Helmet } from 'react-helmet'

import StructuredData from '../shared/structured-data'
import { dateFormatter, durationFormatter } from '../shared/formatters'

const MetaTags = ({
  siteUrl,
  album,
  genre,
  date,
  tracks,
  cover,
  imageSquare,
  imageWide,
  slug,
  upc,
  sameAs,
}) => {
  const formattedDate = dateFormatter.format(new Date(date))
  const description = `${genre} by Mike Heddes released on ${formattedDate}.`

  return (
    <>
      <Helmet>
        <meta property="og:url" content={siteUrl + slug} />
        <meta property="og:type" content="music.song" />
        <meta property="og:title" content={`${album} by Mike Heddes`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={siteUrl + imageSquare} />
        <meta property="music:album" content={album} />
        <meta property="music:musician" content="Mike Heddes" />
        <meta property="music:song:url" content={siteUrl + slug} />

        <meta name="twitter:title" content={`${album} by Mike Heddes`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={siteUrl + imageWide} />
        <meta name="keywords" content={`music, ${genre}, art`} />
        <meta name="description" content={description} />
      </Helmet>
      <StructuredData>
        {{
          '@context': 'http://schema.org/',
          '@type': 'MusicAlbum',
          name: album,
          byArtist: {
            '@type': 'MusicGroup',
            name: 'Mike Heddes',
          },
          image: siteUrl + cover,
          url: siteUrl + slug,
          genre,
          identifier: upc,
          numtracks: `${tracks.length}`,
          datePublished: new Date(date).toISOString(),
          track: tracks.map(({ title, isrc, duration }, i) => ({
            '@type': 'MusicRecording',
            position: `${i + 1}`,
            name: title,
            url: siteUrl + slug,
            duration: durationFormatter.format(
              new Date(0).setSeconds(duration)
            ),
            isrcCode: isrc,
          })),
          sameAs: sameAs ? sameAs.map(({ url }) => url) : undefined,
        }}
      </StructuredData>
    </>
  )
}

export default MetaTags
