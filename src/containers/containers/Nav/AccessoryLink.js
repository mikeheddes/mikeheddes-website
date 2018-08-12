import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
// import { transparentize as fade, timingFunctions as easeF, position, size, hiDPI } from 'polished';

import { media, center } from 'utils/mixins';
import { space, spaces, radius } from 'utils/sizes';
import { DAY, NIGHT, grays } from 'utils/colors';

const AccLink = ({ className, children, to }) => (
  <Link className={className} to={to}>
    {children}
  </Link>
)

const AccessoryLink = styled(AccLink)`
  cursor    : pointer;
  transition: opacity 0.12s ease-out;
  color        : ${props => props.theme.blue};
  text-decoration: none;

  &:hover{
    text-decoration: none;
  }

  &:active {
    opacity: 0.5;
  }

  ${({type})=> type == 'BUTTON' ? css`
    ${space('padding', 4, 'r')}
    border-radius: ${radius.s}px;
    font-size    : 14px;
    color        : ${grays['000']};
    background-color: ${props => props.theme.blue};
  ` : ''}
`

AccessoryLink.defaultProps = {
  theme: DAY,
}

export default AccessoryLink;
