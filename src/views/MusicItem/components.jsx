import { transparentize as fade } from 'polished'
import styled from 'styled-components'

import space from '../../styles/space'
import width from '../../styles/width'
import { fluidFont } from '../../styles/mixins'
import { media } from '../../styles/breakpoints'

export const Title = styled.h1`
  ${fluidFont(18, 46)};
  font-weight: 700;
  color: ${({ theme }) => theme.heading};
`

export const Artist = styled.h2`
  ${fluidFont(17, 32)};
  font-weight: 500;
  color: ${({ theme }) => theme.link};
  margin-top: ${space.sm};
  margin-bottom: ${space.re};
`

export const GenreDate = styled.h5`
  ${fluidFont(15, 17)};
  font-weight: 400;
  color: ${({ theme }) => theme.textSubtle};
  margin-bottom: ${space.xm};
`

export const AlbumInfo = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.textSubtle};
  font-weight: 400;
  margin-top: ${space.xr};
`

export const Pline = styled.div`
  font-size: 12px;
  color: ${({ theme }) => fade(0.5, theme.textSubtle)};
  font-weight: 500;
  margin-top: ${space.sm};
`

export const LinkListWrapper = styled.div`
  margin: ${space.xm} 0;
`

export const ContentWrapper = styled.div`
  max-width: ${width.content};
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${media.lg`
    flex-direction: row;
    display: flex;
  `};
`
