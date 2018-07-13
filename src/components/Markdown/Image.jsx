import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media, mediaWidthQuery } from 'utils/mixins';
import { space, width as W } from 'style';
import { widthProp } from 'utils/position';
import Img from 'components/Image';

const Wrapper = styled.div`
  margin-top: ${space.xm}px;
  margin-bottom: ${space.xm}px;
  ${({ width }) => width === 'full'
    && css`
      position: relative;
      width: 100vw;
      left: 50%;
      transform: translateX(-50vw);
    `};
  ${({ width }) => width === 'content'
    && css`
    position: relative;
    width: 100vw;
    left: 50%;
    transform: translateX(-50vw);
    padding: 0 ${space.phone}px;

    ${media.tabletPortrait(css`
      padding: 0 ${space.tabletPortrait}px;
    `)}

    ${media.tabletLandscape(css`
      padding: 0 ${space.tabletLandscape}px;
    `)}

    ${media.desktop(css`
      padding: 0 ${space.desktop}px;
    `)};

    ${mediaWidthQuery(W.content + 2 * space.desktop)(css`
      width: ${W.content}px;
      transform: translateX(-${W.content / 2}px);
      padding: 0;
    `)}

  `};
`;

const Image = ({ width, ...otherProps }) => (
  <Wrapper width={width}>
    <Img {...otherProps} />
  </Wrapper>
);

Image.propTypes = {
  width: widthProp,
};

Image.defaultProps = {
  width: 'text',
};

export default Image;
