import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { transparentize as fade, timingFunctions as easeF } from 'polished';

import { media, has } from 'utils/mixins';
import { space, spaces } from 'utils/sizes';

import config from './config';

const Item = styled(NavLink)`
  text-decoration: none;
  transition: color 0.12s ${easeF('easeOutQuad')};
  ${space('padding', 's', 'r')};
  color: ${({ theme }) => theme.heading};
  -webkit-tap-highlight-color: transparent;
  ${media.phoneOnly(css`
    display: block;
    ${space('padding', 'r', 's', 'xr')};
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: ${({ theme }) => fade(0.9, theme.heading)};
      ${'' /* ${has.backdrop(css`
        backdrop-filter: brightness(0.87) saturate(1.7);
        background-color: transparent;
      `)} */};
    }
  `)} ${media.tabletPortrait(css`
    height: ${config.size.default}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `)}

  &:hover {
    cursor: pointer;
  }

  &.active,
  &:active {
    color: ${({ theme }) => fade(0.5, theme.heading)};
  }
`;

Item.propTypes = {
  theme: PropTypes.shape({
    heading: PropTypes.string.isRequired,
  }),
};

export default Item;
