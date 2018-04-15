import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { position, transparentize as fade, timingFunctions as easeF } from 'polished'

import { spaces, space, radius } from 'utils/sizes'
import { media, has, fluidText } from 'utils/mixins'
import { grays } from 'utils/colors'
import { timing } from 'utils/time'


let fillColor,
  textColor,
  borderColor,
  useBackdrop;

export default css`

  ${props => {
    if(props.color && props.color in props.theme) {
      if(props.border) {
        borderColor = props.theme[props.color];
        fillColor = 'transparent';
        textColor = props.theme[props.color];
        useBackdrop = false;
      } else {
        fillColor = props.theme[props.color];
        textColor = grays['000'];
        useBackdrop = false;
      }
    } else {
      textColor = props.theme.heading;
      useBackdrop = true;
      fillColor = props.theme.accentGray3;
    }
  }}

  display: inline-block;
  user-select: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: ${() => textColor};
  ${fluidText(13, 17)}
  font-weight: 500;
  ${space('padding', 'r', 'xr')};
  border-radius: ${radius.r}px;
  text-transform: uppercase;
  ${props => props.border ? css`
    border: 1px solid ${() => borderColor};
  `:''}
  opacity: ${props => props.isHidden ? 0 : 1};
  transition: opacity ${timing.r}s ${easeF('easeInOutQuad')},
              background-color ${timing.s}s ${easeF('easeInOutQuad')},
              -webkit-backdrop-filter ${timing.s}s ${easeF('easeInOutQuad')};

  & svg {
    display: none;
  }

  ${media.tabletLandscape(css`
    text-transform: none;
    font-weight: 400;
    ${space('padding', 'r', 'm')};
    & svg {
      display: inline-block;
    }
  `)}

  ${props => props.round ? css`
    ${space('padding', 'r', 'm')};
    border-radius: 1000px;
      ${media.desktop(css`
        ${space('padding', 'r', 'xm')};
      `)}
  ` : ''}

  ${() => useBackdrop ? css`
    background-color: ${() => fade(0.2, fillColor)};
    ${has.backdrop(css`
      backdrop-filter: blur(20px) saturate(1.5) brightness(1);
      background-color: ${() => fade(0.3, fillColor)};
    `)}
  ` : css`
    background-color: ${() => fillColor};
  `}


  margin-top: ${spaces.xr}px;

  &:first-of-type {
    margin-top: 0;
  }

  &:hover, &:active {
    ${() => useBackdrop ? css`
      background-color: ${(props) => fade(0.2, props.theme.accentGray2)};
      ${has.backdrop(css`
        backdrop-filter: blur(20px) saturate(1.5) brightness(.8);
        background-color: ${(props) => fade(0.3, props.theme.accentGray2)};
      `)}
    `: css`
      background-color: ${() => fade(0.15, fillColor)};
    `}
  }
`
