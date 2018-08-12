import styled, { css } from 'styled-components';
import { transparentize as fade, timingFunctions as easeF } from 'polished';
import { animated } from 'react-spring';
import { media, has } from 'utils/mixins';
import { space } from 'style';

import config from '../config';

const Child = styled(animated.a)`
  text-decoration: none;
  position: relative;
  transition: color 0.12s ${easeF('easeOutQuad')};
  padding: ${space.s}px ${space.r}px;
  color: ${({ theme }) => theme.heading};
  -webkit-tap-highlight-color: transparent;

  ${media.phoneOnly(css`
    display: block;
    padding: ${space.r}px ${space.s}px ${space.xr}px;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: ${({ theme }) => fade(0.9, theme.heading)};
      ${has.backdrop(css`
        backdrop-filter: brightness(0.87) saturate(1.7);
        background-color: transparent;
      `)};
    }
  `)};

  ${media.tabletPortrait(css`
    height: ${config.size.tablet}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 1 !important;
    transform: none !important;
  `)};

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: ${({ theme }) => fade(0.5, theme.heading)};
  }

  ${({ current }) =>
    current &&
    css`
      color: ${({ theme }) => fade(0.5, theme.heading)};
    `};
`;

export default Child;
