import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet-async'

import Banner from '../Banner'
import LatestMusic from '../ContentHighlight/LatestMusic'
import ContentGrid from '../ContentGrid/Loadable'
import Card from '../../components/Card'
import music from '../../content/music'

const sortedmusic = Object.values(music).sort(
  (a, b) => b.publishedAt - a.publishedAt
)

const bannerLinks = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/4kQdT4uFc2e0zHL755qJ0U',
  },
  {
    name: 'Apple Music',
    url: 'https://itunes.apple.com/nl/artist/mike-heddes/1185471953',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/mikeheddes',
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/mikeheddes',
  },
]

const color = 'pink'

const setTheme = theme => ({
  ...theme,
  link: theme[color],
  surface: theme.surfaceColors[color],
})

const MusicOverview = () => (
  <ThemeProvider theme={setTheme}>
    <React.Fragment>
      <Helmet>
        <title>Music</title>
      </Helmet>
      <Banner actions={bannerLinks} eyebrow="Music">
        Like You Have
        <br />
        Never Heard.
      </Banner>
      <LatestMusic marginTop={{ xs: 'xr', md: 'md' }} />
      <ContentGrid
        title="All music"
        content={sortedmusic}
        columns={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      >
        {item => (
          <Card
            key={item.id}
            shape="square"
            maxTitleLines={1}
            maxDescriptionLines={1}
            url={item.url}
            title={item.title}
            image={item.imageCover}
          >
            {item.artist}
          </Card>
        )}
      </ContentGrid>
    </React.Fragment>
  </ThemeProvider>
)

export default MusicOverview
