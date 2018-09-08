import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet-async'
import Banner from 'components/Banner'
import ContentHighlight from 'containers/ContentHighlight/Loadable'
import ContentGrid from 'containers/ContentGrid/Loadable'
import { colorNames } from 'style/color'
import Card from 'components/Card'
import { visibilities } from 'actions/music'
import { contentTypes } from 'actions/content'

const filters = [
  {
    name: 'All music',
    action: visibilities.all,
  },
  {
    name: 'Podcasts',
    action: visibilities.podcasts,
  },
  {
    name: 'Albums',
    action: visibilities.albums,
  },
  {
    name: 'Singles',
    action: visibilities.singles,
  },
]

export default class MusicOverview extends Component {
  static propTypes = {
    bannerLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ),
    color: PropTypes.oneOf(colorNames),
    match: PropTypes.shape({
      params: PropTypes.shape({
        contentType: PropTypes.oneOf(contentTypes).isRequired,
      }).isRequired,
    }).isRequired,
  }

  static defaultProps = {
    bannerLinks: [
      {
        name: 'Spotify',
        href: 'https://open.spotify.com/artist/4kQdT4uFc2e0zHL755qJ0U',
      },
      {
        name: 'Apple Music',
        href: 'https://itunes.apple.com/nl/artist/mike-heddes/1185471953',
      },
      {
        name: 'YouTube',
        href: 'https://youtube.com/mikeheddes',
      },
      {
        name: 'SoundCloud',
        href: 'https://soundcloud.com/mikeheddes',
      },
    ],
    color: 'pink',
  }

  setTheme = theme => {
    const { color } = this.props
    return {
      ...theme,
      link: theme[color],
      surface: theme.surfaceColors[color],
    }
  }

  render() {
    const { bannerLinks, match } = this.props
    const { contentType } = match.params
    return (
      <ThemeProvider theme={this.setTheme}>
        <React.Fragment>
          <Helmet>
            <title>Music</title>
          </Helmet>
          <Banner links={bannerLinks}>
            <h2>Music</h2>
            <h1>
              Like You Have
              <br />
              Never Heard.
            </h1>
          </Banner>
          <ContentHighlight
            noFetch
            actionTitle="More info"
            contentType={contentType}
            eyebrow="Latest music"
            externalActionTitle="Listen on"
            highlightType="latest"
            marginTop
          />
          <ContentGrid
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
          </ContentGrid>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
