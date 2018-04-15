import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { space, spaces } from 'utils/sizes'
import { grays, gradient } from 'utils/colors'
import { media, fluidText } from 'utils/mixins'

const Wrapper = styled.header`
  width: 100%;
  background-color: ${props => props.theme.accentGray};
  overflow: hidden;
  color: ${props => props.theme.heading};
  text-align: center;
  min-height: 86vh;
  transition: min-height 999999s;
  ${space('padding', 'xl', 'm')}
  ${media.desktop(css`
    ${space('padding', 'xl', 'M')}
  `)}

  ${props => props.uImg ? css`
    background-image: url(${props.uImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &::before {
      content: "";
      filter: blur(20px);
      transform-origin: center;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image: url(${props.uImg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  ` : ''}

  & h2 {
    font-size: ${fluidText(26, 42)};
    font-weight: 500;
    margin-bottom: ${spaces.s}px;
    padding-top: ${spaces.xm}px;

    ${media.tabletPortrait(css`
      padding-top: ${spaces.xl}px;
    `)}

    ${media.tabletLandscape(css`
      padding-top: ${spaces.xm}px;
    `)}

  }

  & h1 {
    font-size: ${fluidText(38, 68)};
    margin-top: ${spaces.s}px;
    font-weight: 700;
    padding-bottom: ${spaces.M}px;
  }
`

export default Wrapper
