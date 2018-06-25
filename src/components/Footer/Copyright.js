import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { position, transparentize as fade, timingFunctions as easeF } from 'polished';

import { footerHeight, spaces } from 'utils/sizes';
import { grays } from 'utils/colors';
import { media } from 'utils/mixins';

const Copyright = styled.div`
  height         : ${footerHeight}px;
  width          : 100%;
  display        : flex;
  align-items    : center;
  justify-content: center;

  p {
    color: ${props => fade(0.25, props.theme.heading)};
    font-size  : 7px;
    font-weight: 400;
    ${media.tabletPortrait(css`
    font-size  : 9px;
    font-weight: 500;
    `)}
  }
`

export default Copyright