import React from 'react'
import styled from 'styled-components'
import { hiDPI } from 'polished'
import { Link } from 'gatsby'

import { breakpoints, screen } from '../styles/breakpoints'
import Footer from '../shared/footer'
import Hero from './hero'
import Image from './image'
import { contentWrapper, fluidFont, absoluteSize } from '../styles'
import Arrow from '../icons/Arrow/right'
import { useTheme } from '../shared/hooks'
import MetaTags from './meta-tags'
import ActionBlock, { ActionItem } from '../shared/action-block'
import GitHub from '../icons/logos/github'
import Twitter from '../icons/logos/twitter'
import Instagram from '../icons/logos/instagram'
import YouTube from '../icons/logos/youtube'
import Spotify from '../icons/logos/spotify'

const InfoWrapper = styled.div`
  margin: 0px auto;
  width: 100%;
  display: flex;
  border-radius: 10px;
  backdrop-filter: blur(20px) saturate(1.2);
  padding: 12px 15px;
  background-color: var(--surface-backdrop);
  color: var(--heading-obvious);
  align-items: center;
  flex-direction: row;

  @media ${screen.sm} {
    max-width: 393px;
  }
`

const InfoPosition = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 15px;

  @media ${screen.sm} {
    padding: 20px;
  }

  @media ${screen.md} {
    padding: 30px;
  }
`

const ItemWrapper = styled(Link)`
  text-decoration: none;
  color: var(--heading);
  display: block;
  margin: 30px 0px;
  position: relative;
  border-radius: 2px;
  overflow: hidden;

  :after {
    content: '';
    display: block;
    ${absoluteSize};
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.08);

    ${hiDPI(2)} {
      border-width: 0.5px;
    }
  }

  @media ${screen.sm} {
    margin: 50px 0px;
  }

  @media ${screen.md} {
    margin: 80px 0px;
  }
`

const Genre = styled.h3`
  margin: 0;
  ${fluidFont(18, 18)};
  font-weight: 600;
  opacity: 0.6;
`

const Title = styled.h2`
  margin: 0;
  ${fluidFont(21, 21)};
  font-weight: 600;
  margin-bottom: 2px;
`

const unwrapNode = (type, themeId) => ({ node }) => {
  let image = node.image

  if (type === 'post') {
    image = node.themedImages[themeId]
  }

  return {
    ...node,
    image,
    date: new Date(node.date),
    slug: node.fields.slug,
    __type: type,
  }
}

function Item(props) {
  const { title, album, genre, slug, image, __type } = props

  return (
    <ItemWrapper to={slug} accentColor={image?.colors?.lightMuted}>
      <Image
        alt={title || album}
        image={image}
        sizes={`(max-width: ${breakpoints.sm}px) 150vw, 100vw`}
      />
      <InfoPosition>
        <InfoWrapper>
          <div>
            <Title>{title || album}</Title>
            <Genre>
              {genre}
              {__type === 'music' ? ' music' : ''}
            </Genre>
          </div>
          <div css="flex-grow: 1; min-width: 20px; min-height: 20px;" />
          <Arrow />
        </InfoWrapper>
      </InfoPosition>
    </ItemWrapper>
  )
}

export default function Home({ data }) {
  const theme = useTheme()

  const music = data.allMusicYaml.edges.map(unwrapNode('music', theme.id))
  const posts = data.allPostYaml.edges.map(unwrapNode('post', theme.id))
  const content = [...music, ...posts].sort((a, b) => b.date - a.date)

  const {
    profileImage: {
      childImageSharp: {
        resize: { src: profileImage },
      },
    },
    profileImageTwitter: {
      childImageSharp: {
        resize: { src: profileImageTwitter },
      },
    },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data

  return (
    <>
      <MetaTags
        profileImage={profileImage}
        profileImageTwitter={profileImageTwitter}
        siteUrl={siteUrl}
      />
      <Hero image={data.wideImage} />
      <ActionBlock css="margin-bottom: -30px;">
        <ActionItem icon={GitHub} href="https://github.com/mikeheddes">
          GitHub
        </ActionItem>
        <ActionItem icon={Twitter} href="https://twitter.com/mikeheddes">
          Twitter
        </ActionItem>
        <ActionItem icon={Instagram} href="https://instagram.com/mikeheddes">
          Instagram
        </ActionItem>
        <ActionItem
          icon={Spotify}
          href="https://open.spotify.com/artist/4kQdT4uFc2e0zHL755qJ0U"
        >
          Spotify
        </ActionItem>
        <ActionItem icon={YouTube} href="https://youtube.com/mikeheddes">
          YouTube
        </ActionItem>
      </ActionBlock>
      <div css={contentWrapper} wide>
        {content.map((item) => (
          <Item key={item.title || item.album} {...item} />
        ))}
      </div>
      <Footer />
    </>
  )
}
