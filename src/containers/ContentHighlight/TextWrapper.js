import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import space from 'style/space';
import { grays, gradient } from 'utils/colors';
import { media, fluidText } from 'utils/mixins';

const Wrapper = styled.div`
  flex: 0 1 auto;

  h3 {
    display: none;
  }

  h1 {
    ${fluidText(28, 44)};
    font-weight: 700;
    opacity: .9;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2 {
    ${fluidText(22, 32)};
    font-weight: 500;
    opacity: .7;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    ${fluidText(17, 21)};
    font-weight: 400;
    opacity: .7;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    ${fluidText(17, 20)};
    font-weight: 500;
    margin-right: auto;

    &:last-of-type {
      margin-bottom: 0;
    }
  }


  ${media.desktop(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: ${space.l}px;

    ${props => props.contentType == 'articles' && css`
      h1 {
        margin-bottom: ${space.xm}px;
      }
    `}

    h3 {
      display: block;
      font-size: 20px;
      font-weight: 500;
      opacity: .9;
      margin-bottom: ${space.m}px;
    }

    h2 {
      margin-top: ${space.r}px;
      margin-bottom: ${space.l}px;
    }

    p {
      margin-top: ${space.xm}px;
      margin-bottom: ${space.m}px;
    }

    a {
      display: inline-block;
      margin-bottom: ${space.xr}px;
    }

  `)}
`

export default Wrapper
