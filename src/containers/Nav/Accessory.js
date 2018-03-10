import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media, center } from 'utils/mixins';
import { space, spaces } from 'utils/sizes';

const Accessory = styled.div`
  display    : flex;
  align-items: center;
  height     : 100%;
  font-weight: 400;

  ${props => props.right ? css`
    justify-content: flex-end;
    text-align     : right;
    padding-right  : ${spaces.m}px;
    padding-left   : ${spaces.r}px;
    margin-left    : ${spaces.r}px;
  ` : ''}

  ${props => props.left ? css`
    justify-content: flex-start;
    text-align     : left;
    padding-left   : ${spaces.m}px;
    padding-right  : ${spaces.r}px;
    margin-right   : ${spaces.r}px;
  ` : ''}

  ${props => props.clickable ? css`
    cursor    : pointer;
    transition: opacity 0.12s ease-out;

    &:active {
      opacity: 0.5;
    }
  ` : ''}
`

export default Accessory;
