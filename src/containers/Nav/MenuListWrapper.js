import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media, center } from 'utils/mixins';
import { space } from 'utils/sizes';
import config from './config';

const MenuListWrapper = styled.ul`
  display        : flex;
  align-items    : center;
  justify-content: space-between;
  flex-direction : row;
  list-style     : none;
  height         : auto;
  min-height     : ${config.size.default}px;
  width          : ${config.size.width}px;
  max-width      : 100%;
  font-size      : 17px;
  font-weight    : 500;
  ${center}
  ${media.phoneOnly(css`
    flex-direction: column;
    align-content : stretch;
    ${space('padding', 'l', 0, 'M')}
    transition    : transform 1s ease-out;
  `)}
`

export default MenuListWrapper;
