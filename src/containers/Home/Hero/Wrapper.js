import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { space, spaces } from 'utils/sizes'
import { grays, gradient } from 'utils/colors'
import { media, fluidText } from 'utils/mixins'

const Wrapper = styled.header`
  color: ${props => props.theme.title};
  background-image: linear-gradient(${grays['200']}, ${grays['000']});
  text-align: center;
  ${space('padding', 'xl', 'm', 'l')}
  ${media.desktop(css`
    ${space('padding', 'xl', 'M', 'l')}
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
    ${fluidText(28, 42)};
    display: none;
    font-weight: 500;
    opacity: .7;
    margin-bottom: ${spaces.s}px;
    margin-top: ${spaces.xm}px;

    ${media.tabletPortrait(css`
      display: block;
      margin-top: ${spaces.xl}px;
    `)}

    ${media.tabletLandscape(css`
      margin-top: ${spaces.xm}px;
    `)}
  }

  & h1 {
    ${fluidText(46, 68)};
    font-weight: 700;
    margin-top: ${spaces.s}px;
    margin-bottom: ${spaces.xM}px;

    ${media.tabletPortrait(css`
      margin-bottom: ${spaces.G}px;
    `)}

    ${media.tabletLandscape(css`
      margin-bottom: ${spaces.xM}px;
    `)}

    ${media.desktop(css`
      margin-bottom: 420px;
    `)}
  }

  & h1, & h2 {
    text-shadow: 0 0 2px rgba(0,0,0,.15);
  }

  & a {
    font-size: 17px;
    font-weight: 500;
  }
`

export default Wrapper
