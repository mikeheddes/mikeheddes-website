import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media, center } from 'utils/mixins';
import { space, navSize } from 'utils/sizes';
import config from './config';

const NavHeadWrapper = styled.div`
  font-size            : 17px;
  display              : grid;
  visibility           : hidden;
  grid-template-columns: 1fr auto 1fr;
  height               : ${config.size.default}px;
  width                : 100%;
  align-items          : center;
  justify-content      : space-between;
  color: ${props => props.theme.heading};
  ${media.phoneOnly(css`
    height    : ${config.size.phone}px;
    visibility: visible;
  `)}
  ${media.tabletPortrait(css`
    top     : -100%;
    position: absolute;
  `)}
`

export default NavHeadWrapper;
