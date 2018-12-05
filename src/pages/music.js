import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'

import Banner from '../views/Banner'
import LatestMusic from '../views/ContentHighlight/LatestMusic'
import ContentGrid from '../views/ContentGrid'
import Card from '../components/Card'

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

const MusicOverview = ({
  data: {
    allMusicYaml: { edges },
  },
}) => (
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
        content={edges}
        columns={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      >
        {item => (
          <Card
            key={item.node.fields.slug}
            shape="square"
            maxTitleLines={1}
            maxDescriptionLines={1}
            url={item.node.fields.slug}
            title={item.node.title}
            image={item.node.image.childImageSharp.fluid}
          >
            {item.node.artist}
          </Card>
        )}
      </ContentGrid>
    </React.Fragment>
  </ThemeProvider>
)

export default MusicOverview

export const pageQuery = graphql`
  query musicOverview {
    allMusicYaml(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          artist
          title
          image {
            childImageSharp {
              fluid(maxHeight: 350, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
