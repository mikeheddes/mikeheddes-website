import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { position, transparentize as fade, timingFunctions as easeF } from 'polished';

import { spaces, space } from 'utils/sizes';
import { media, fluidText, fluidValue } from 'utils/mixins';


const Description = styled.p`
  ${fluidText(22, 29)}
  font-weight: 600;
  ${fluidValue(2.0, 1.42, 'line-height')}
  ${space('padding', 'l', 'm')};

  ${media.tabletPortrait(css`
    ${space('padding', 'xl', 'xl')};
  `)}

  ${media.tabletLandscape(css`
    ${space('padding', 'xl', 'M')};
  `)}

  ${media.desktop(css`
    ${space('padding', 'xl', 'xM')};
  `)}
`

export default Description
