import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { position, transparentize as fade, timingFunctions as easeF } from 'polished';

import { spaces } from 'utils/sizes';
import { grays } from 'utils/colors';

const Footer = styled.footer`
  background-color: ${props => props.theme.surface};
  padding-top    : ${spaces.l}px;
  width          : 100vw;
`

Footer.propTypes = {
  theme: PropTypes.shape({
    accentGray: PropTypes.string.isRequired,
  }),
}

export default Footer
