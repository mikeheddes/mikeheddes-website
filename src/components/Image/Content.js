import styled from 'styled-components';
import PropTypes from 'prop-types';
import { animated } from 'react-spring'
import { timingFunctions as tf } from 'polished'

const Content = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  border-radius: ${props => props.radius}px;
  opacity: ${props => Number(props.loaded)};
  filter: blur(${props => props.loaded ? 0 : 20}px);
  object-fit: cover;
  object-position: center center;
  will-change: filter;
  transition: filter 1s ease-in-out .4s,
              opacity .6s ease-out 0s;
`

Content.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  onLoad: PropTypes.func,
  radius: PropTypes.number.isRequired,
}

export default Content;
