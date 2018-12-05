import styled from 'styled-components'
import { transparentize as fade, timingFunctions as easeF } from 'polished'
import { Link } from 'gatsby'

import { has } from '../../../styles/mixins'
import { media } from '../../../styles/breakpoints'
import { space } from '../../../styles'

import config from '../config'

const NavigationLink = styled(Link)`
  text-decoration: none;
  position: relative;
  transition: color 0.12s ${easeF('easeOutQuad')};
  color: ${({ theme }) => theme.heading};
  -webkit-tap-highlight-color: transparent;
  display: block;
  padding: ${space.re} ${space.sm} ${space.xr};
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => fade(0.9, theme.heading)};

    ${has.backdrop`
      backdrop-filter: brightness(0.87) saturate(1.7);
      background-color: transparent;
    `};
  }

  ${media.sm`
    padding: ${space.sm} ${space.re};
    height: ${config.size.tablet}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:after {
      content: none;
    }
  `};

  &.active,
  &:active {
    color: ${({ theme }) => fade(0.5, theme.heading)};
  }
`

export default NavigationLink
