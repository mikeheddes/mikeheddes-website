import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { position, transparentize as fade, timingFunctions as easeF } from 'polished';

import { footerHeight } from 'utils/sizes';

const Footer = styled.footer`
  height         : ${footerHeight}px;
  position       : absolute;
  bottom         : 0;
  left           : 0;
  right          : 0;
  width          : 100%;
  display        : flex;
  align-items    : center;
  justify-content: center;

  p {
    font-size  : 9px;
    font-weight: 400;
    color: ${props => props.theme.heading};
  }
`

Footer.propTypes = {
  theme: PropTypes.shape({
    heading: PropTypes.string.isRequired,
  })
}

export default Footer
