import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet-async'

import Banner from '../Banner'
import LatestMusic from '../ContentHighlight/LatestMusic'
// import ContentGrid from 'containers/ContentGrid/Loadable'
// import Card from 'components/Card'

// const filters = [
//   {
//     name: 'All music',
//     action: visibilities.all,
//   },
//   {
//     name: 'Podcasts',
//     action: visibilities.podcasts,
//   },
//   {
//     name: 'Albums',
//     action: visibilities.albums,
//   },
//   {
//     name: 'Singles',
//     action: visibilities.singles,
//   },
// ]
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

const Music = () => (
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
      <LatestMusic
        marginTop={{ xs: 'xr', md: 'md' }}
        marginBottom={{ xs: 'xr', md: 'md' }}
      />
      {/* <ContentGrid
            contentType={contentType}
            title="All music"
            filters={filters}
            phoneColumns={2}
            tabletPortraitColumns={3}
            tabletLandscapeColumns={4}
            desktopColumns={5}
            >
            {items =>
              items.map(item => (
            <Card
            key={item.id}
            shape="square"
            maxTitleLines={1}
            maxDescriptionLines={1}
            to={`/${contentType}/${item.id}`}
            title={item.title}
            image={item.imageCover || item.imageHero}
            >
            {item.artist}
            </Card>
              ))
            }
          </ContentGrid> */}
    </React.Fragment>
  </ThemeProvider>
)

export default Music
