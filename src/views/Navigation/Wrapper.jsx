import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { transparentize as fade, timingFunctions as easeFn } from 'polished'

import { media } from '../../styles/breakpoints'
import { has } from '../../styles/mixins'
import config from './config'

const easeInSine = easeFn('easeInSine')
const easeOutSine = easeFn('easeOutSine')
const easeInOutQubic = easeFn('easeInOutQubic')

const Wrapper = styled.nav`
  height: auto;
  width: 100vw;
  position: fixed;
  overflow: hidden;
  bottom: auto;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  display: block;

  ${({ isOpen, isSolid, theme }) =>
    isOpen || isSolid
      ? css`
          backdrop-filter: blur(30px) saturate(1.7);
          background-color: ${fade(0.04, theme.backgroundNav)};

          ${media.sm`
            backdrop-filter: blur(40px) saturate(1.7);
          `};

          ${has.backdrop`
            background-color: ${fade(0.19, theme.backgroundNav)};
          `};
        `
      : css`
          backdrop-filter: blur(30px) saturate(1.1);
          background-color: ${({ theme }) => fade(0.4, theme.backgroundNav)};

          ${media.sm`
            backdrop-filter: blur(40px) saturate(1.1);
          `};

          ${has.backdrop`
            background-color: ${({ theme }) => fade(0.81, theme.backgroundNav)};
          `};
        `};

  ${({ isOpen, listHeight }) =>
    isOpen
      ? css`
          backdrop-filter: blur(30px) saturate(1.7) brightness(1.8);
          box-shadow: 0 1px 80px rgba(0, 0, 0, 0.15);
          transition: background-color ${config.time.standard}s ${easeOutSine},
            backdrop-filter ${config.time.standard}s ${easeOutSine},
            -webkit-backdrop-filter ${config.time.standard}s ${easeInSine},
            box-shadow ${config.time.incomming}s ${easeInOutQubic},
            max-height ${config.time.incomming}s ${easeInOutQubic};
          max-height: ${config.size.phone + listHeight}px;

          ${media.sm`
            backdrop-filter: blur(40px) saturate(1.7) brightness(1.8);
            max-height: ${config.size.tablet + listHeight}px;
          `};
        `
      : css`
          box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
          transition: background-color ${config.time.standard}s ${easeInSine},
            backdrop-filter ${config.time.standard}s ${easeInSine},
            -webkit-backdrop-filter ${config.time.standard}s ${easeInSine},
            box-shadow ${config.time.outgoing}s ${easeInOutQubic},
            max-height ${config.time.outgoing}s ${easeInOutQubic};
          max-height: ${config.size.phone}px;

          ${media.sm`
            max-height: ${config.size.tablet}px;
          `};
        `};
`

Wrapper.propTypes = {
  listHeight: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isSolid: PropTypes.bool.isRequired,
}

export default Wrapper
