import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import zD from 'style/zDepth';

const Wrapper = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  padding-bottom: ${({ ratio }) => Math.round(ratio * 100)}%;
  border-radius: ${({ radius }) => radius}px;
  background-clip: border-box;
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  background-color: ${({ color, theme }) => color || theme.surface};

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `};

  ${({ zDepth }) =>
    zDepth &&
    css`
      box-shadow: ${zD[zDepth]};
    `};
`;

Wrapper.propTypes = {
  micro: PropTypes.string,
  ratio: PropTypes.number.isRequired,
  color: PropTypes.string,
  radius: PropTypes.number,
  border: PropTypes.bool,
};

Wrapper.defaultProps = {
  micro: null,
  color: null,
  radius: 0,
  border: true,
};

export default Wrapper;
