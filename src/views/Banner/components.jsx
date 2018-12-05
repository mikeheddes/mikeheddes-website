import styled from 'styled-components'
import { darken, transparentize as fade } from 'polished'

import Anchor from '../../components/Link'
import space, { spaceNumbers } from '../../styles/space'
import { fluidFont } from '../../styles/mixins'
import { media } from '../../styles/breakpoints'
import radius from '../../styles/radius'

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.link};
  text-align: center;
  padding-bottom: ${space.sm};
  padding-top: ${space.xl};

  ${media.sm`
    padding-bottom: 0;
    padding-top: ${space.gi};
  `};
`

export const Eyebrow = styled.h2`
  ${fluidFont(18, 27)};
  font-weight: 600;
  margin-left: ${space.md};
  margin-right: ${space.md};
  margin-bottom: ${space.re};

  ${media.sm`
    font-weight: 500;
  `};
`

export const Header = styled.h1`
  ${fluidFont(40, 48)};
  font-weight: 700;
  margin-left: ${space.md};
  margin-right: ${space.md};
  padding-bottom: ${space.lg};

  ${media.sm`
    padding-bottom: ${space.xl};

    &:last-child{
      padding-bottom: ${space.gi};
    }
  `};
`

export const LinkWrapper = styled.ul`
  padding-bottom: ${space.re};
  white-space: nowrap;
  display: block;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  text-align: center;

  ${media.sm`
    padding-top: ${space.re};
    padding-bottom: ${space.md};
  `};
`

export const Link = styled(Anchor)`
  ${fluidFont(17, 20)};
  font-weight: 500;
  display: inline-block;
  padding: ${space.re} ${space.xr};
  width: calc(66.67vw - ${spaceNumbers.md + spaceNumbers.re / 2}px);
  background-color: ${({ theme }) => darken(0.03, theme.surface)};
  border-radius: ${radius.md};
  color: ${({ theme }) => theme.link};

  &:active {
    color: ${({ theme }) => fade(0.5, theme.link)};
  }

  ${media.sm`
    padding: 0;
    width: auto;
    background-color: transparent;
  `};
`

export const ListItem = styled.li`
  max-width: calc(100% - 1em);
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: normal;
  display: inline-block;
  text-decoration: inherit;
  margin-right: ${space.re};

  &:first-of-type {
    margin-left: ${space.md};
  }

  &:last-of-type {
    margin-right: ${space.md};
  }

  ${media.sm`
    max-width: none;
    margin: 0 ${space.xr};
    background-color: transparent;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

  `};
`
