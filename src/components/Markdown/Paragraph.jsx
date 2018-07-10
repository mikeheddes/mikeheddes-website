import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'style';
import position, { widthProp } from 'utils/position';

const Paragraph = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  margin-bottom: ${space.xm}px;
  line-height: 1.48;
  ${position};
`;

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  width: widthProp,
};

Paragraph.defaultProps = {
  className: '',
  width: 'text',
};

export default Paragraph;
