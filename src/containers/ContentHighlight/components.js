import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Box from 'components/Box';
import { media, fluidText } from 'utils/mixins';
import { createPadding } from 'utils/createSpace';
import space from 'style/space';

export const CompWrapper = styled.section`
  background-color: ${props => props.theme.surface};
  color: ${props => props.theme.title};
  overflow: hidden;
  padding: ${createPadding('xm', 'm')};
  ${media.desktop(css`
    padding: ${createPadding('xl', 'M')};
  `)};
  ${props => props.marginTop ? css`
    margin-top: ${space.xr}px;
  ` : ''};
  ${props => props.marginBottom ? css`
    margin-bottom: ${space.xr}px;

    ${media.desktop(css`
      margin-bottom: ${space.l}px;
    `)}
  ` : ''};
`

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${props => props.image && css`
    background-image: url(${props.image});
    background-clip: border-box;
    background-origin: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
    filter: blur(50px) saturate(1.5);
    opacity: .4;
  `}
`

export const ImageWrapper = styled.div`
  ${media.desktop(css`
    flex: 0 0 63%;
  `)}
`

export const ContWrapper = Box.extend`
  display: block;

  ${media.desktop(css`
    display: flex;
  `)}
`

// export const TextWrapper =
