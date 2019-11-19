import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Article from '../Article'
import { contentWrapper } from '../../styles'
import Cover from './Cover'
import Wallpaper from './Wallpaper'
import { PlayPauseButton, ProgressIndicator, usePlayer } from './player'
import ListenOn from './ListenOn'
import { fluidFont } from '../../styles/mixins'

const Wrapper = styled.div`
  max-width: 460px;
  text-align: center;
  margin: 0 auto;
`

const WallpaperWrapper = styled.div`
  ${contentWrapper};
  margin-top: 80px;

  ${up('md')} {
    margin-top: 130px;
  }

  ${up('lg')} {
    margin-top: 210px;
  }
`

const PlayPauseButtonWrapper = styled.div`
  margin: 20px 0;

  ${up('md')} {
    margin: 30px 0;
  }
`

const Header = styled.h4`
  margin: 0;
  color: hsla(0, 0%, var(--foreground-lightness), 0.6);
  ${fluidFont(18, 21)};
  font-weight: 600;
  margin-bottom: 15px;
`

const Music = ({ data: { musicYaml } }) => {
  const {
    title,
    date,
    wallpaper,
    cover,
    genre,
    tracks,
    externalUrls,
  } = musicYaml

  const {
    bind,
    play,
    pause,
    fraction,
    durationMs,
    isPlaying,
    seekFraction,
  } = usePlayer(tracks[0].file.publicURL)

  return (
    <Article title={title} date={date} genre={genre}>
      <div css={contentWrapper}>
        <Wrapper>
          <Cover {...cover.childImageSharp.fluid} isPlaying={isPlaying} />
          <PlayPauseButtonWrapper>
            <PlayPauseButton isPlaying={isPlaying} play={play} pause={pause} />
          </PlayPauseButtonWrapper>
          <ProgressIndicator
            fraction={fraction}
            durationMs={durationMs}
            seekFraction={seekFraction}
            isPlaying={isPlaying}
            play={play}
          />
          <audio {...bind} css="display: none;" preload="auto" />
          {externalUrls && (
            <div css="margin-top: 80px;">
              <Header>Available on</Header>
              <ListenOn externalUrls={externalUrls} />
            </div>
          )}
        </Wrapper>
      </div>
      <WallpaperWrapper wide>
        <Header>Wallpaper</Header>
        <Wallpaper {...wallpaper.childImageSharp.fluid} />
      </WallpaperWrapper>
    </Article>
  )
}

export default Music

export const pageQuery = graphql`
  query musicData($id: String!) {
    musicYaml(id: { eq: $id }) {
      title
      date
      wallpaper {
        childImageSharp {
          fluid(maxHeight: 900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cover {
        childImageSharp {
          fluid(maxHeight: 460, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      genre
      tracks {
        title
        file {
          publicURL
        }
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
