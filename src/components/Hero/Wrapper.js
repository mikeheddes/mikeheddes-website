import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { space, spaces } from 'utils/sizes';

const Wrapper = styled.section`
  width: 100%;
  ${space('padding', 'xl', 'M')}
  margin-bottom: ${spaces.r}px;
  min-height: 86vh;
  background-color: ${props => props.theme.accent};
  ${props => props.img ? css`
    background-image: url(${props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  ` : ''}
  text-align: center;
`

export default Wrapper
