import styled from 'styled-components';
import PropTypes from 'prop-types';

import { space } from 'style';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.surface};
  padding-top: ${space.l}px;
  width: 100vw;
`;

Footer.propTypes = {
  theme: PropTypes.shape({
    accentGray: PropTypes.string.isRequired,
  }),
};

export default Footer;
