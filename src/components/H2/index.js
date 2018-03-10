import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'utils/mixins';

const H1 = styled.h2`
  font-weight: 700;
  font-size: 25px;
  color: ${props => props.theme.heading};
  ${media.tabletPortrait`font-size: 32px;`}
  ${media.tabletLandscape`font-size: 38px;`}
  ${media.desktop`font-size: 45px;`}
  ${media.giant`font-size: 53px;`}
`

H1.propTypes = {
  theme: PropTypes.shape({
    heading: PropTypes.string.isRequired,
  })
}

export default H1
