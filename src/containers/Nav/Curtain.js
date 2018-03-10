import styled, { css } from 'styled-components';
import { transparentize as fade, timingFunctions as easeF, position, size, hiDPI } from 'polished';
import PropTypes from 'prop-types';

import { media, has } from 'utils/mixins';
import { DAY, NIGHT } from 'utils/colors';

const Curtain = styled.div.attrs({
    style: ({ opacity }) => ({
      opacity,
    }),
  })`
  ${position('fixed', 0, 0, 0, 0)}
  z-index: 1;
  background-color: rgba(0,0,0,.3);
`

Curtain.propTypes = {
  opacity: PropTypes.number.isRequired,
}

export default Curtain;
