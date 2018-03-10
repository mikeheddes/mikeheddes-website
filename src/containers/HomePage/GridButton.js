import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { position, transparentize as fade, timingFunctions as easeF } from 'polished';

const GridButton = styled.div`
  font-size: 17px;
  color: white;
  background-color: ${fade(.08, "#2E2E2E")};
  border-radius: 200px;
  text-align: center;
  padding: 10px 30px;
  margin-top: 15px;
  transition: opacity .36s ${easeF('easeInOutQuad')},
              background-color .3s ease-out;
  opacity: ${props => props.isVisible ? 1 : 0};

  &:first-of-type {
    margin-top: 0;
  }

  &:hover {
    background-color: ${fade(.04, "#393939")};
  }
`

export default GridButton
