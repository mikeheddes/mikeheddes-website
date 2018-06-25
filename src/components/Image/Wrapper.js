import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { hiDPI } from 'polished';

import { radius } from 'utils/sizes';
import zDepth from 'style/zDepth';


const Wrapper = styled.div`
  display: block;
  overflow: hidden;
  padding-bottom: ${props => Math.round(props.ratio * 100)}%;
  border-radius: ${props => props.radius}px;

  ${props => props.onClick && css`
    cursor: pointer;
  `}

  background-clip: border-box;
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  background-color: ${props => props.color || props.theme.surface};

  &::before {
    content: "";
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
    background-image: url(${props => props.micro});

    filter: blur(20px);
    border-radius: ${props => props.radius}px;
  }

  ${props => props.border ? css`
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      background-clip: border-box;
      background-origin: border-box;
      box-sizing: border-box;

      border-radius: ${props => props.radius}px;
      border: 1px solid ${props => props.theme.borderContent};
      ${hiDPI(2)} {
        border-width: .5px;
      }
    }
  ` : ''}

  ${props => props.zDepth && css`
    box-shadow: ${zDepth[props.zDepth]};
  `};
`

Wrapper.propTypes = {
  micro: PropTypes.string,
  ratio: PropTypes.number.isRequired,
  color: PropTypes.string,
  radius: PropTypes.number.isRequired,
  border: PropTypes.bool,
}

export default Wrapper;
