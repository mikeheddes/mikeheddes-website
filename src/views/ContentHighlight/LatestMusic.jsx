import React from 'react'

import music from '../../content/music'
import ContentHighlight from './'

const latestMusic = Object.values(music).sort(
  (a, b) => b.publishedAt - a.publishedAt
)[0]

const extraAction =
  latestMusic.externalUrls &&
  latestMusic.externalUrls.length > 0 &&
  latestMusic.externalUrls[0]

export default props => (
  <ContentHighlight
    {...props}
    eyebrow="Latest music"
    action={{ name: 'More info', url: latestMusic.url }}
    image={latestMusic.imageCover}
    title={latestMusic.title}
    author={latestMusic.artist}
    extraAction={
      extraAction
        ? { name: `Listen on ${extraAction.service}`, url: extraAction.url }
        : undefined
    }
  />
)
