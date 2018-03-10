import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'utils/mixins';

const H1 = styled.h1`
  font-weight: 700;
  line-height: 1.15;
  font-size: 34px;
  color: ${props => props.theme.heading};
  ${media.tabletPortrait`font-size: 48px;`}
  ${media.tabletLandscape`font-size: 57px;`}
  ${media.desktop`font-size: 68px;`}
  ${media.giant`font-size: 79px;`}
`

H1.propTypes = {
  theme: PropTypes.shape({
    heading: PropTypes.string.isRequired,
  })
}

export default H1
