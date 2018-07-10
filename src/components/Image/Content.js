import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from 'utils/mixins';

const Content = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  border-radius: ${({ radius }) => radius}px;
  opacity: ${({ loaded }) => Number(loaded)};
  ${({ loaded }) => !loaded
    && css`
      filter: blur(20px);
      ${media.phoneOnly(css`
        filter: blur(10px);
      `)}
    `};
  object-fit: cover;
  object-position: center center;
  will-change: filter;
  transition: filter 500ms ease-in-out, opacity 250ms ease-out 0s;
`;

Content.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  onLoad: PropTypes.func,
  radius: PropTypes.number.isRequired,
};

export default Content;
