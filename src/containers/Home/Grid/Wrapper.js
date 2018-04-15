import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media, center } from 'utils/mixins';
import { spaces, space, navSize } from 'utils/sizes';

const Wrapper = styled.section`
  display: block;
  grid-template-columns: 1fr;
  grid-row: auto;
  grid-gap: ${spaces.r}px;
  ${media.desktop(css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: ${spaces.r}px;
    padding-right: ${spaces.r}px;
    padding-bottom: ${spaces.r}px;
  `)}
`

Wrapper.propTypes = {
}

export default Wrapper;
