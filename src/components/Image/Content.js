import styled from 'styled-components';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';

const Content = styled(animated.img)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: ${({ radius }) => radius}px;
  opacity: ${({ loaded }) => Number(loaded)};
  transition: opacity 0.5s ease-in;
  overflow: hidden;
  object-fit: cover;
  object-position: center center;
`;

Content.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  onLoad: PropTypes.func,
};

Content.defaultProps = {
  src: '',
  srcSet: '',
  onLoad: null,
};

export default Content;
