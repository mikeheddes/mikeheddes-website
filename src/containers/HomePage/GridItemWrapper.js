import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media, center } from 'utils/mixins';
import { space, navSize } from 'utils/sizes';

const GridItemWrapper = styled.div`
  background-color: ${props => props.theme.accentGray};
  justify-self: stretch;
  align-self: stretch;
  text-align: left;
  ${props => props.order ? css`
    order: ${props.order};
  ` : ''};
`

GridItemWrapper.propTypes = {
  theme: PropTypes.shape({
    accentGray: PropTypes.string.isRequired,
  }),
  order: PropTypes.number.isRequired,
}

export default GridItemWrapper;
