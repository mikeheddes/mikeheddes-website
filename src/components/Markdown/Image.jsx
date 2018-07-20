import React from 'react';
import styled, { css } from 'styled-components';
import { media, mediaWidthQuery } from 'utils/mixins';
import { space, width as W } from 'style';
import Img from 'components/Image';

const Image = ({ width, ...otherProps }) => (
  <Wrapper width={width}>
    <Img {...otherProps} />
  </Wrapper>
);

export default Image;
