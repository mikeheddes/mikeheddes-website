import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  transparentize as fade,
  timingFunctions as easeF,
  size,
} from 'polished';

import { media, has } from 'utils/mixins';
import config from './config';

const easeInSine = easeF('easeInSine');
const easeOutSine = easeF('easeOutSine');
const easeInOutQubic = easeF('easeInOutQubic');

const Wrapper = styled.nav`
  ${size('auto', '100vw')};
  position: fixed;
  overflow: hidden;
  bottom: auto;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  display: block;
  max-height: ${config.size.tablet}px;
  ${media.phoneOnly(css`
    max-height: ${config.size.phone}px;
  `)};
  transition: background-color ${config.time.standard}s ${easeInSine},
    backdrop-filter ${config.time.standard}s ${easeInSine},
    -webkit-backdrop-filter ${config.time.standard}s ${easeInSine},
    box-shadow ${config.time.outgoing}s ${easeInOutQubic},
    max-height ${config.time.outgoing}s ${easeInOutQubic};
  background-color: ${({ theme }) => fade(0.4, theme.backgroundNav)};
  ${has.backdrop(css`
    background-color: ${({ theme }) => fade(0.81, theme.backgroundNav)};
  `)};
  backdrop-filter: blur(30px) saturate(1.1);
  ${media.tabletPortrait(css`
    backdrop-filter: blur(40px) saturate(1.1);
  `)};

  ${({ isVisible, solid }) =>
    (isVisible || solid) &&
    css`
      background-color: ${({ theme }) => fade(0.04, theme.backgroundNav)};
      backdrop-filter: blur(30px) saturate(1.7);
      ${media.tabletPortrait(css`
        backdrop-filter: blur(40px) saturate(1.7);
      `)};
      ${has.backdrop(css`
        background-color: ${({ theme }) => fade(0.19, theme.backgroundNav)};
      `)};
    `};

  ${({ isVisible }) =>
    isVisible &&
    css`
      backdrop-filter: blur(30px) saturate(1.7) brightness(1.8);
      ${media.tabletPortrait(css`
        backdrop-filter: blur(40px) saturate(1.7) brightness(1.8);
      `)};
      box-shadow: 0 1px 80px rgba(0, 0, 0, 0.15);
      transition: background-color ${config.time.standard}s ${easeOutSine},
        backdrop-filter ${config.time.standard}s ${easeOutSine},
        -webkit-backdrop-filter ${config.time.standard}s ${easeInSine},
        box-shadow ${config.time.incomming}s ${easeInOutQubic},
        max-height ${config.time.incomming}s ${easeInOutQubic};
      max-height: ${({ menuHeight }) => config.size.tablet + menuHeight}px;
      ${media.phoneOnly(css`
        max-height: ${({ menuHeight }) => config.size.phone + menuHeight}px;
      `)};
    `};
`;

Wrapper.propTypes = {
  menuHeight: PropTypes.number,
  isVisible: PropTypes.bool,
  solid: PropTypes.bool,
};

Wrapper.defaultProps = {
  menuHeight: 0,
  isVisible: false,
  solid: false,
};

export default Wrapper;
