import styled, { css } from 'styled-components'
import { transparentize as fade } from 'polished'
import { fluidFont } from '../../styles/mixins'
import { media } from '../../styles/breakpoints'
import { space, radius } from '../../styles'

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.surface};
  padding-top: ${space.xl};
  padding-bottom: ${space.xr};
`

export const Title = styled.h1`
  ${fluidFont(32, 68)};
  color: ${({ theme }) => theme.link};
  line-height: 1.08;
  font-weight: 700;
  margin-bottom: ${space.md};

  ${media.md`
    margin-bottom: ${space.xm};
  `};

  ${({ children }) =>
    !children &&
    css`
      height: 1.12em;
      width: 75%;
      border-radius: ${radius.re};
      background-color: ${({ theme }) => fade(0.8, theme.link)};

      ${media.lg`
        width: 100%;
      `};
    `};
`

export const Description = styled.p`
  ${fluidFont(20, 28)};
  color: ${({ theme }) => fade(0.4, theme.title)};
  font-weight: 500;
  margin-bottom: ${space.re};
  margin-top: -${space.re};

  ${media.md`
    margin-bottom: ${space.md};
  `};
`

export const InfoLine = styled.div`
  ${fluidFont(14, 17)};
  font-weight: 400;
  color: ${({ theme }) => theme.textSubtle};
  margin-bottom: ${space.re};

  ${media.md`
    margin-bottom: ${space.md};
  `};
`

export const Author = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.link};
`

export const PhotoCredit = styled.span`
  display: block;
  text-align: center;
  ${fluidFont(14, 16)};
  margin-top: ${space.xr};
  font-weight: 400;
  color: ${({ theme }) => fade(0.7, theme.title)};
`

export const SlotTitle = styled.h3`
  font-weight: 500;
  ${fluidFont(18, 24)};
  margin-bottom: ${space.xm}px;
  color: ${({ theme }) => theme.link};
`

export const SlotImage = styled.div`
  width: 256px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: ${space.xr};
`
