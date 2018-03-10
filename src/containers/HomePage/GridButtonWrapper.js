import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { position } from 'polished';

const GridButtonWrapper = styled.div`
  ${position('absolute', 0, 0, 0, 0)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  z-index: 1;

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
  }
`

export default GridButtonWrapper
