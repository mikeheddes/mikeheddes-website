import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { transparentize as fade } from 'polished'

import Anchor from '../../components/Link'
import Badge from '../../components/Badge'
import space from '../../styles/space'
import radius from '../../styles/radius'
import { fluidFont, ellipsis } from '../../styles/mixins'
import { media } from '../../styles/breakpoints'

export const ImageBoxWrapper = styled.div`
  ${media.lg`
    flex: 0 0 63%;
  `};
`

export const EyebrowRow = styled.div`
  margin-bottom: ${space.xr};
  ${media.lg`
    display: none;
  `};

  & > a {
    float: right;
  }
`

export const Title = styled.h1`
  ${fluidFont(28, 44)};
  font-weight: 700;
  opacity: 0.9;
  ${ellipsis};

  ${({ marginBottom }) => marginBottom && `margin-bottom: ${space.md};`};

  ${media.lg`
    ${({ marginBottom }) => marginBottom && `margin-bottom: ${space.xm};`};
  `};

  ${({ children }) =>
    !children &&
    css`
      height: 1.15em;
      width: 75%;
      border-radius: ${radius.re};
      background-color: ${({ theme }) => fade(0.8, theme.title)};

      ${media.lg`
        width: 100%;
      `};
    `};
`

export const Artist = styled.h2`
  ${fluidFont(22, 32)};
  font-weight: 500;
  opacity: 0.7;
  ${ellipsis};
  margin-top: ${space.sm};
  margin-bottom: ${space.md};

  ${media.lg`
    margin-top: ${space.re};
    margin-bottom: ${space.lg};
  `};

  ${({ children }) =>
    !children &&
    css`
      height: 1.15em;
      width: 50%;
      border-radius: ${radius.re};
      background-color: ${({ theme }) => fade(0.9, theme.title)};

      ${media.lg`
        width: 70%;
      `};
    `};
`

Artist.propTypes = {
  maxlines: PropTypes.number,
}

Artist.defaultProps = {
  maxlines: 2,
}

export const Link = styled(Anchor)`
  ${fluidFont(17, 20)};
  font-weight: 500;
  margin-right: auto;
  margin-bottom: ${space.xr};

  ${media.lg`
    display: inline-block;
  `};

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const BadgeDesktop = styled(Badge)`
  display: none;

  ${media.lg`
    display: inline-block;
  `};
`

export const TextBoxWrapper = styled.div`
  flex: 1 1 auto;
  margin-top: ${space.xr};

  ${media.lg`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    margin-left: ${space.lg};
  `};
`
