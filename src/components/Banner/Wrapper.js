import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { space, spaces } from 'utils/sizes';
import { media, fluidText, fluidValue } from 'utils/mixins';

const Wrapper = styled.section`
  width: 100%;
  background-color: ${props => props.theme.surface};
  color: ${props => props.theme.heading};
  text-align: center;
  padding-top: ${spaces.M}px;

  ${media.phoneOnly(css`
    padding-bottom: 15px;
    padding-top: ${spaces.xl}px;
  `)}

  & > h2 {
    ${fluidText(18, 27)}
    font-weight: 500;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: ${spaces.r}px;
    ${media.phoneOnly(css`
      font-weight: 600;
    `)}
  }

  & > h1 {
    ${fluidText(40, 48)}
    font-weight: 700;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: ${props => props.links ? spaces.xl : spaces.M}px;
    ${media.phoneOnly(css`
      padding-bottom: ${spaces.l}px;
    `)}
  }
`

Wrapper.propTypes = {
}

export default Wrapper
