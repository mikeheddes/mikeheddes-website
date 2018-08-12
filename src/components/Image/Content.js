import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from 'utils/mixins';

const Content = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  opacity: ${({ loaded }) => Number(loaded)};
  object-fit: cover;
  object-position: center center;
  transition: filter 500ms ease-in-out, opacity 250ms ease-out 0s;
  ${({ loaded }) =>
    !loaded &&
    css`
      filter: blur(20px);
      ${media.phoneOnly(css`
        filter: blur(10px);
      `)};
    `};
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
