import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { transparentize as fade, timingFunctions as easeF, position, size, hiDPI } from 'polished';

import { media, has } from 'utils/mixins';
import config from './config';

const NavWrapper = styled.nav`
  ${size('auto', '100vw')}
  max-height   : ${config.size.default}px;
  ${media.phoneOnly(css`
    max-height:${config.size.phone}px;
  `)}
  overflow     : hidden;
  z-index      : 9999;
  transition   : background-color ${config.time.default}s ${easeF('easeInSine')},
                backdrop-filter ${config.time.default}s ${easeF('easeInSine')},
                -webkit-backdrop-filter ${config.time.default}s ${easeF('easeInSine')},
                box-shadow ${config.time.out}s ${easeF('easeInOutQubic')},
                max-height ${config.time.out}s ${easeF('easeInOutQubic')};
  position: fixed;
  top: ${props => props.top || 0}px;
  bottom: auto;
  left: 0;
  right: 0;
  ${hiDPI(2)} {
    border-width: .5px;
  }
  display      : block;
  background-color: ${({theme}) => fade(.4, theme.backgroundNav)};
  backdrop-filter: blur(30px) saturate(1.1);
  ${media.tabletPortrait(css`
    backdrop-filter: blur(40px) saturate(1.1);
  `)}
  ${has.backdrop(css`
    background-color: ${({theme}) => fade(.81, theme.backgroundNav)};
  `)}

  ${props => props.isVisible || props.solid ? css`
    background-color: ${({theme}) => fade(.04, theme.backgroundNav)};
    backdrop-filter: blur(30px) saturate(1.7);
    ${media.tabletPortrait(css`
      backdrop-filter: blur(40px) saturate(1.7);
    `)}
    ${has.backdrop(css`
      background-color: ${({theme}) => fade(.19, theme.backgroundNav)};
    `)}
  ` : ''}

  ${props => props.isVisible ? css`
    backdrop-filter: blur(30px) saturate(1.7) brightness(1.2);
    ${media.tabletPortrait(css`
      backdrop-filter: blur(40px) saturate(1.7) brightness(1.2);
    `)}
    box-shadow: 0 1px 80px rgba(0, 0, 0, .15);
    transition: background-color ${config.time.default}s ${easeF('easeOutSine')},
                backdrop-filter ${config.time.default}s ${easeF('easeOutSine')},
                -webkit-backdrop-filter ${config.time.default}s ${easeF('easeInSine')},
                box-shadow ${config.time.in}s ${easeF('easeInOutQubic')},
                max-height ${config.time.in}s ${easeF('easeInOutQubic')};
    max-height: ${ props => config.size.default + props.menuHeight}px;
    ${media.phoneOnly(css`
      max-height:${props => config.size.phone + props.menuHeight}px;
    `)}
  ` : ''}
`
NavWrapper.propTypes = {
  theme: PropTypes.shape({
    nav: PropTypes.string.isRequired,
    navBorder: PropTypes.string.isRequired,
  }),
  menuHeight: PropTypes.number.isRequired,
}

NavWrapper.defaultProps = {
  menuHeight: 0,
}

export default NavWrapper;
