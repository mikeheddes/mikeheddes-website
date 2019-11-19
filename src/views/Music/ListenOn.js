import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'

import { fluidFont } from '../../styles/mixins'
import SoundCloud from '../../icons/logos/soundcloud'
import AppleMusic from '../../icons/logos/applemusic'
import YouTube from '../../icons/logos/youtube'
import Spotify from '../../icons/logos/spotify'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;

  ${up('sm')} {
    grid-gap: 30px;
  }
`

const ItemWrapper = styled.a`
  display: block;
  border-radius: 10px;
  padding: 8px;
  background-color: var(--surface-faded);
  color: var(--heading-obvious);
  text-decoration: none;
  transition: transform 150ms ease-out;

  :active {
    transform: scale(0.96);

    svg {
      opacity: 0.5;
    }
  }
`

const LogoWrapper = styled.div`
  margin: 12px 0 8px;

  svg {
    width: 32px;
    height: 32px;
    fill: currentColor;
    transition: opacity 100ms ease-out;

    ${up('sm')} {
      width: 34px;
      height: 34px;
    }
  }
`

const ItemLable = styled.div`
  opacity: 0.4;
  font-weight: 500;
  ${fluidFont(13, 14)};
`

const Item = ({ service, url }) => {
  const serviceKey = service.toLowerCase()
  return (
    <ItemWrapper href={url}>
      <LogoWrapper>
        {serviceKey === 'spotify' && <Spotify />}
        {serviceKey === 'apple music' && <AppleMusic />}
        {serviceKey === 'youtube' && <YouTube />}
        {serviceKey === 'soundcloud' && <SoundCloud />}
      </LogoWrapper>
      <ItemLable>{service}</ItemLable>
    </ItemWrapper>
  )
}

const ListenOn = ({ externalUrls }) => {
  return (
    <Grid>
      {externalUrls.map(service => (
        <Item key={service.url} {...service} />
      ))}
    </Grid>
  )
}

export default ListenOn
