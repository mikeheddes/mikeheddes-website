import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { position, transparentize as fade, timingFunctions as easeF, hiDPI} from 'polished';

import { spaces, space } from 'utils/sizes';
import { media, fluidText, fluidValue } from 'utils/mixins';


const Description = styled.p`
  color: ${props => props.theme.heading};
  border-top: 1px solid rgba(0,0,0,.15);
  border-bottom: 1px solid rgba(0,0,0,.15);
  ${hiDPI(2)} {
    border-top: .5px solid rgba(0,0,0,.15);
    border-bottom: .5px solid rgba(0,0,0,.15);
  }
  ${fluidText(22, 29)}
  font-weight: 600;
  ${fluidValue(1.6, 1.42, 'line-height')}
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
