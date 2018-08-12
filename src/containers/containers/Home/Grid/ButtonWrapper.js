import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { position } from 'polished';

import { media } from 'utils/mixins';

const GridButtonWrapper = styled.div`
  ${position('absolute', 0, 0, 0, 0)};
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  z-index: 1;
  transition: opacity .4s ease .1s;
  ${media.desktop(css`
    display: flex;
    & .buttons {
      transition: opacity .3s ease 0s;
      opacity: 0;

      a {
        display: block;
        margin-top: 0;
      }
    }
  `)}

  &::after{
    content: "";
    background-color: black;
    ${position('absolute', 0, 0, 0, 0)};
    opacity: 0;
    transition: opacity .64s ease;
    z-index: -1;
  }

  &:hover{
    &::after{
      opacity: .3;
    }
    & .buttons{
      opacity: 1;
      transition: opacity .4s ease .1s;
    }
  }
`

export default GridButtonWrapper
