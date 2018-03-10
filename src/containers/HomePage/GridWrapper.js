import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media, center } from 'utils/mixins';
import { space, navSize } from 'utils/sizes';

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-row: auto;
  grid-gap: 10px;
  ${space('padding', 0, 'm')}
  ${media.tabletPortrait(css`
    ${space('padding', 0, 'xl')}
  `)}
  ${media.tabletLandscape(css`
    ${space('padding', 0, 'xM')}
  `)}
  ${media.desktop(css`
    grid-template-columns: 1fr 1fr;
    ${space('padding', 0, 'r')}
  `)}
`

GridWrapper.propTypes = {
}

export default GridWrapper;
