import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider, withTheme } from 'styled-components'

import Section from '../../components/Section'
import Box from '../../components/Box'
import Image from '../../components/Image'
import Link from '../../components/Link'
import LinkList from '../../components/LinkList'
import { size } from '../../styles'

import {
  Title,
  Artist,
  GenreDate,
  AlbumInfo,
  Pline,
  LinkListWrapper,
} from './components'
import Description from './Description'
import TrackTable from './TrackTable'

const Main = styled(Section)`
  min-height: calc(100vh - ${size.footerHeight});
`

class MusicItem extends Component {
  static propTypes = {
    theme: PropTypes.shape({
      setTheme: PropTypes.func.isRequired,
      setDefaultTheme: PropTypes.func.isRequired,
    }).isRequired,
    themeName: PropTypes.oneOf(['DAY', 'NIGHT']),
    themeColor: PropTypes.string,
    title: PropTypes.string.isRequired,
    publishedAt: PropTypes.instanceOf(Date).isRequired,
    imageCover: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    description: PropTypes.string,
    license: PropTypes.string,
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        artist: PropTypes.string,
        title: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
      })
    ).isRequired,
    externalUrls: PropTypes.arrayOf(
      PropTypes.shape({
        service: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
  }

  static defaultProps = {
    themeName: 'DAY',
    themeColor: 'pink',
    description: null,
    license: null,
    externalUrls: [],
  }

  componentDidMount() {
    const { theme, themeName } = this.props
    theme.setTheme(themeName)
  }

  componentWillUnmount() {
    const { theme } = this.props
    theme.setDefaultTheme()
  }

  setTheme = theme => {
    const { themeColor } = this.props
    return {
      ...theme,
      link: theme[themeColor],
      surface: theme.surfaceColors[themeColor],
    }
  }

  albumTotalMinutes = tracks =>
    Math.round(
      tracks.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.duration / 1000 / 60,
        0
      )
    )

  render() {
    const {
      description,
      title,
      imageCover,
      artist,
      genre,
      publishedAt,
      license,
      tracks,
      externalUrls,
    } = this.props
    return (
      <ThemeProvider theme={theme => this.setTheme(theme)}>
        <Main>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta
                property="og:image"
                content={WEBSITE_BASE + item.imageCover.toString()}
                />
                <meta
                name="twitter:image"
                content={WEBSITE_BASE + item.imageCover.toString()}
            /> */}
          </Helmet>
          <Box
            display={{ xs: 'block', lg: 'flex' }}
            width="content"
            marginLeft="auto"
            marginRight="auto"
            marginTop={{ xs: 'lg', sm: 'xm', lg: 0 }}
          >
            <Box flex="1 0 1px" marginRight={{ lg: 'lg' }}>
              <Box display={{ xs: 'flex', lg: 'block' }} direction="row">
                <Box
                  width={{ xs: '50%', lg: 'auto' }}
                  marginRight={{ xs: 'xr', sm: 'xm', lg: 0 }}
                >
                  <Image src={imageCover} shape="square" />
                </Box>
                <Box
                  display={{ lg: 'none' }}
                  marginTop={{ xs: 'xr', sm: 'md' }}
                >
                  <Title>{title}</Title>
                  <Artist>{artist}</Artist>
                  <GenreDate>{`${genre} - ${publishedAt.getFullYear()}`}</GenreDate>
                </Box>
              </Box>
              {description && <Description>{description}</Description>}
            </Box>
            <Box flex="none" width="text" marginTop="xr">
              <Box display={{ xs: 'none', lg: 'block' }}>
                <Title>{title}</Title>
                <Artist>{artist}</Artist>
                <GenreDate>{`${genre} - ${publishedAt.getFullYear()}`}</GenreDate>
              </Box>
              <LinkListWrapper>
                <LinkList width="fixed" links={externalUrls}>
                  {link => (
                    <Link
                      to={link.url}
                      key={link.service}
                      variant="button"
                      display="block"
                    >
                      {link.service}
                    </Link>
                  )}
                </LinkList>
              </LinkListWrapper>
              <TrackTable tracks={tracks} artist={artist} />
              <AlbumInfo>
                {`${tracks.length} tracks, ${this.albumTotalMinutes(
                  tracks
                )} minutes`}
              </AlbumInfo>
              {license && <Pline>{`Ⓟ ${license}`}</Pline>}
            </Box>
          </Box>
        </Main>
      </ThemeProvider>
    )
  }
}

export default withTheme(MusicItem)
