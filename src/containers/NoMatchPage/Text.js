import styled from 'styled-components';
import propTypes from 'prop-types';
// import is, { isNot, isOr, isSomeNot } from 'styled-is';
import { transparentize as fade, timingFunctions as easeF, position, size, hiDPI } from 'polished';

import { media } from 'utils/mixins';
import { space, spaces } from 'utils/sizes';
import { DAY } from 'utils/colors';

import P from 'components/P';

const Text = P.extend`
  color: ${props => fade(.3, props.theme.heading)};
  margin-top: ${spaces.r}px;
  line-height: 1.6;
  ${space('padding', 0, 'm')};
`

Text.defaultProps = {
  theme: DAY,
}

export default Text;
