import { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'utils/mixins';

const paragraphStyles = css`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => props.theme.text};
  ${media.tabletPortrait(css`font-size: 17px;`)}
  ${media.tabletLandscape(css`font-size: 19px;`)}
  ${media.desktop(css`font-size: 21px;`)}
  ${media.giant(css`font-size: 23px;`)}
`;

paragraphStyles.PropTypes = {
  theme: PropTypes.shape({
    text: PropTypes.string.isRequired,
  })
}

export default paragraphStyles;
