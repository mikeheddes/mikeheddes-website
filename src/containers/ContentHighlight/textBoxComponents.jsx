import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { transparentize as fade } from 'polished'
import Anchor from 'components/Link'
import Badge from 'components/Badge'
import space from 'style/space'
import radius from 'style/radius'
import { media, fluidText, maxLines } from 'utils/mixins'

export const Title = styled.h1`
  ${fluidText(28, 44)};
  font-weight: 700;
  opacity: 0.9;
  ${maxLines};

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${space.m}px;
    `};

  ${media.desktop(css`
    ${({ marginBottom }) =>
      marginBottom &&
      css`
        margin-bottom: ${space.xm}px;
      `};
  `)};

  ${({ children }) =>
    !children &&
    css`
      height: 1.15em;
      width: 75%;
      border-radius: ${radius.r}px;
      background-color: ${({ theme }) => fade(0.8, theme.title)};

      ${media.desktop(css`
        width: 100%;
      `)};
    `};
`

Title.propTypes = {
  lineClamp: PropTypes.number.isRequired,
}

export const Artist = styled.h2`
  ${fluidText(22, 32)};
  font-weight: 500;
  opacity: 0.7;
  ${maxLines};
  margin-top: ${space.s}px;
  margin-bottom: ${space.m}px;

  ${media.desktop(css`
    margin-top: ${space.r}px;
    margin-bottom: ${space.l}px;
  `)};

  ${({ children }) =>
    !children &&
    css`
      height: 1.15em;
      width: 50%;
      border-radius: ${radius.r}px;
      background-color: ${({ theme }) => fade(0.9, theme.title)};

      ${media.desktop(css`
        width: 70%;
      `)};
    `};
`

Artist.propTypes = {
  lineClamp: PropTypes.number,
}

Artist.defaultProps = {
  lineClamp: 2,
}

export const Link = styled(Anchor)`
  ${fluidText(17, 20)};
  font-weight: 500;
  margin-right: auto;
  margin-bottom: ${space.xr}px;

  ${media.desktop(css`
    display: inline-block;
  `)};

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const BadgeDesktop = styled(Badge)`
  display: none;

  ${media.desktop(css`
    display: inline-block;
  `)};
`

export const Wrapper = styled.div`
  flex: 1 1 auto;
  margin: ${space.xr}px 0;

  ${media.desktop(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    margin-left: ${space.l}px;
  `)};
`
