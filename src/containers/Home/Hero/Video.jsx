// import PropTypes from 'prop-types';
import { getLuminance } from 'polished';
import styled, { css } from 'styled-components';
import { media } from 'utils/mixins';

const Video = styled.video`
  position: absolute;
  object-fit: contain;
  object-position: center;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 1.25s cubic-bezier(0, 0, 0.25, 1);
  top: -20px;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ theme }) => (getLuminance(theme.background) > 0.5
    ? css`
          filter: blur(30px) saturate(1.15);
        `
    : css`
          filter: blur(30px) saturate(1.5) hue-rotate(180deg) invert();
          opacity: 0.7;
        `)} ${media.tabletPortrait(css`
    ${({ theme }) => (getLuminance(theme.background) > 0.5
    ? css`
            filter: blur(50px) saturate(1.15);
          `
    : css`
            filter: blur(50px) saturate(1.5) hue-rotate(180deg) invert();
          `)};
  `)};
`;

export default Video;
