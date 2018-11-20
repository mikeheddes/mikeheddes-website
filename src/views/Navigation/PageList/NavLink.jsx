import React from 'react'
import styled, { css } from 'styled-components'
import { transparentize as fade, timingFunctions as easeF } from 'polished'
import { NavLink, withRouter } from 'react-router-dom'

import { has } from '../../../styles/mixins'
import { media } from '../../../styles/breakpoints'
import { space } from '../../../styles'

import config from '../config'

const NavigationLink = styled(NavLink)`
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

  ${({ active, theme }) =>
    active &&
    css`
      color: ${fade(0.5, theme.heading)};
    `}

  &:active {
    color: ${({ theme }) => fade(0.5, theme.heading)};
  }
`

export default withRouter(
  ({ location, match, history, staticContext, ...restProps }) => (
    <NavigationLink
      {...restProps}
      active={location.pathname === restProps.to ? 'true' : undefined}
    />
  )
)
