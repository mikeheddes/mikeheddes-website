import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Section from '../components/Section'
import Box from '../components/Box'
import Image from '../components/Image'
import Link from '../components/Link'
import LinkList from '../components/LinkList'
import { size } from '../styles'

import {
  Title,
  Artist,
  GenreDate,
  AlbumInfo,
  Pline,
  LinkListWrapper,
} from '../views/MusicItem/components'
import Description from '../views/MusicItem/Description'
import TrackTable from '../views/MusicItem/TrackTable'

const Main = styled(Section)`
  min-height: calc(100vh - ${size.footerHeight});
`

class MusicItem extends Component {
  static propTypes = {
    data: PropTypes.shape({
      musicYaml: PropTypes.shape({
        color: PropTypes.string,
        title: PropTypes.string.isRequired,
        publishedAt: PropTypes.string.isRequired,
        image: PropTypes.object.isRequired,
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
      }).isRequired,
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          homepage: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }

  static defaultProps = {
    externalUrls: [],
  }

  setTheme = theme => {
    const {
      data: {
        musicYaml: { color },
      },
    } = this.props
    const themeColor = color || 'pink'
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
      data: {
        musicYaml: {
          description,
          title,
          image: {
            childImageSharp: { fluid: image },
          },
          artist,
          genre,
          publishedAt,
          license,
          tracks,
          externalUrls,
        },
        site: {
          siteMetadata: { homepage },
        },
      },
    } = this.props
    return (
      <ThemeProvider theme={this.setTheme}>
        <Main>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={homepage + image.src} />
            <meta name="twitter:image" content={homepage + image.src} />
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
                  <Image fluid={image} shape="square" />
                </Box>
                <Box
                  display={{ lg: 'none' }}
                  marginTop={{ xs: 'xr', sm: 'md' }}
                >
                  <Title>{title}</Title>
                  <Artist>{artist}</Artist>
                  <GenreDate>{`${genre} - ${new Date(
                    publishedAt
                  ).getFullYear()}`}</GenreDate>
                </Box>
              </Box>
              {description && <Description>{description}</Description>}
            </Box>
            <Box flex="none" width="text" marginTop="xr">
              <Box display={{ xs: 'none', lg: 'block' }}>
                <Title>{title}</Title>
                <Artist>{artist}</Artist>
                <GenreDate>{`${genre} - ${new Date(
                  publishedAt
                ).getFullYear()}`}</GenreDate>
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
                {`${tracks.length} track${
                  tracks.length > 1 ? 's' : ''
                }, ${this.albumTotalMinutes(tracks)} minutes`}
              </AlbumInfo>
              {license && <Pline>{`Ⓟ ${license}`}</Pline>}
            </Box>
          </Box>
        </Main>
      </ThemeProvider>
    )
  }
}

export default MusicItem

export const pageQuery = graphql`
  query musicData($slug: String!) {
    musicYaml(fields: { slug: { eq: $slug } }) {
      artist
      title
      color
      publishedAt(formatString: "MMMM DD, YYYY")
      image {
        childImageSharp {
          fluid(maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      description
      genre
      license
      tracks {
        artist
        title
        duration
      }
      externalUrls {
        service
        url
      }
    }
    site {
      siteMetadata {
        homepage
      }
    }
  }
`
