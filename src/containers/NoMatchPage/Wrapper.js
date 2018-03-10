import styled from 'styled-components';
import propTypes from 'prop-types';
// import is, { isNot, isOr, isSomeNot } from 'styled-is';
// import { transparentize as fade, timingFunctions as easeF, position, size, hiDPI } from 'polished';

import { media } from 'utils/mixins';
import { space, spaces } from 'utils/sizes';


const Wrapper = styled.main`
  ${space('padding', 'l', 0, 'M')}
  min-height     : 100vh;
  text-align     : center;
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
`;

export default Wrapper;
