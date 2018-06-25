import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import styled, { css } from 'styled-components';

import { space, spaces } from 'utils/sizes';
import { media, fluidText, fluidValue } from 'utils/mixins';

const Wrapper = styled.ul`
  color: ${props => props.theme.link};
  text-align: center;
  padding-top: ${spaces.r}px;
  padding-bottom: ${spaces.m}px;

  ${media.phoneOnly(css`
    padding: 0;
    margin: 0 20px;
    white-space: nowrap;
    border-radius: 8px;
    background-color: ${props => darken(.03, props.theme.surface)};
    display: inline-block;
  `)}

  & > li {
    ${fluidText(17, 20)}
    font-weight: 500;
    margin: 0 ${spaces.xr}px;
    display: inline-block;

    ${media.phoneOnly(css`
      padding: 10px 15px;
      min-width: 150px;
      margin: 0;
      border-right: 2px solid ${props => props.theme.surface};
      &:last-of-type {
        border-right: none;
      }
    `)}
  }
  & a > span {
    ${media.phoneOnly(css`
      max-width: 100px;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: normal;
    `)}
  }
`

// overflow text hidden and elipsses

export default Wrapper
