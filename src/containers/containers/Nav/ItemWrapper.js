import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'utils/mixins';
import { space, spaces } from 'utils/sizes';

const ItemWrapper = styled.li`
  ${media.phoneOnly(css`
    display      : block;
    width        : 100%;
    ${space('padding', 0, 'l')}
    margin-bottom: ${spaces.s}px;
  `)}
`

export default ItemWrapper;
