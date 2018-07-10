import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { hiDPI } from 'polished';
import position from 'utils/position';

// import { radius } from 'utils/sizes';
import zD from 'style/zDepth';

const Wrapper = styled.div`
  display: block;
  overflow: hidden;
  padding-bottom: ${({ ratio }) => Math.round(ratio * 100)}%;
  border-radius: ${({ radius }) => radius}px;
  ${position};

  ${({ onClick }) => onClick
    && css`
      cursor: pointer;
    `} background-clip: border-box;
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  background-color: ${({ color, theme }) => color || theme.surface};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-clip: border-box;
    background-origin: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
    background-image: url(${({ micro }) => micro});
    transition: opacity 150ms ease-out 150s;
    opacity: ${({ loaded }) => Number(!loaded)};
    filter: blur(20px);
    border-radius: ${({ radius }) => radius}px;
  }

  ${({ border }) => border
    && css`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-clip: border-box;
        background-origin: border-box;
        box-sizing: border-box;

        border-radius: ${({ radius }) => radius}px;
        border: 1px solid ${({ theme }) => theme.borderContent};
        ${hiDPI(2)} {
          border-width: 0.5px;
        }
      }
    `} ${({ zDepth }) => zDepth
    && css`
      box-shadow: ${zD[zDepth]};
    `};
`;

Wrapper.propTypes = {
  micro: PropTypes.string,
  ratio: PropTypes.number.isRequired,
  color: PropTypes.string,
  radius: PropTypes.number.isRequired,
  border: PropTypes.bool,
};

export default Wrapper;
