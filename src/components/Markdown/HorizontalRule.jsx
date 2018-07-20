import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'style';

const HorizontalRule = styled.hr`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.borderSeparate};
  margin-top: ${space.m}px;
  margin-bottom: ${space.m}px;
  border: 0;
`;

HorizontalRule.propTypes = {
  className: PropTypes.string,
};

HorizontalRule.defaultProps = {
  className: '',
};

export default HorizontalRule;
