// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { darken } from 'polished';
import styled, { css } from 'styled-components';
import Anchor from 'components/Link';

import space from 'style/space';
import radius from 'style/radius';
import { media, fluidText } from 'utils/mixins';

const Wrapper = styled.ul`
  color: ${({ theme }) => theme.link};
  text-align: center;
  padding-top: ${space.r}px;
  padding-bottom: ${space.m}px;

  ${media.phoneOnly(css`
    padding: 0;
    margin: 0 20px;
    margin-bottom: ${space.r}px;
    white-space: nowrap;
    border-radius: ${radius.m}px;
    background-color: ${({ theme }) => darken(0.03, theme.surface)};
    display: inline-block;
  `)};

  & li {
    display: inline-block;
    text-decoration: inherit;

    ${media.phoneOnly(css`
      max-width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: normal;
    `)};
  }
`;

export default Wrapper;

export const Link = Anchor.extend`
  ${fluidText(17, 20)} font-weight: 500;
  margin: 0 ${space.xr}px;
  display: inline-block;

  ${media.phoneOnly(css`
    padding: 10px 15px;
    min-width: 150px;
    margin: 0;
    border-right: 2px solid ${({ theme }) => theme.surface};
    &:last-of-type {
      border-right: none;
    }
  `)};
`;
