import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { space, spaces } from 'utils/sizes';
import { grays, gradient } from 'utils/colors';
import { media } from 'utils/mixins';

const Wrapper = styled.section`
  width: 100%;
  background-color: ${props => props.theme.accentGray};
  color: ${props => props.theme.heading};
  ${props => props.article ? css`
    background: ${gradient.article};
  ` : ''}
  ${props => props.music ? css`
    background: ${gradient.music};
  ` : ''}
  ${props => props.about ? css`
    background: ${gradient.about};
  ` : ''}
  text-align: center;
  padding-top: 130px;
  & h2 {
    font-size: 27px;
    font-weight: 500;
    margin-bottom: 6px;
  }
  & h1 {
    font-size: 48px;
    font-weight: 700;
    padding-bottom: 130px;
  }
  ${props => props.img ? css`
    background-image: url(${props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  ` : ''}
  ${props => props.extended ? css`
    ${space('padding', 'xl', 'm')}
    ${media.desktop(css`
      ${space('padding', 'xl', 'M')}
    `)}
    min-height: 86vh;
    & h2 {
      font-size: 26px;
      padding-top: 30px;

      ${media.tabletPortrait(css`
        padding-top: 80px;
        font-size: 38px;
      `)}

      ${media.tabletLandscape(css`
        padding-top: 30px;
        font-size: 40px;
      `)}

      ${media.desktop(css`
        font-size: 42px;
      `)}
    }
    & h1 {
      font-size: 38px;
      margin-top: 6px;

      ${media.tabletPortrait(css`
        font-size: 58px;
      `)}

      ${media.tabletLandscape(css`
        font-size: 62px;
      `)}

      ${media.desktop(css`
        font-size: 68px;
      `)}
    }
  ` : ''}
`

export default Wrapper
