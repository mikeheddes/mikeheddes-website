import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'style';
import position, { widthProp } from 'utils/position';

const HorizontalRule = styled.hr`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.borderSeparate};
  margin-top: ${space.m}px;
  margin-bottom: ${space.m}px;
  border: 0;
  ${position};
`;

HorizontalRule.propTypes = {
  className: PropTypes.string,
  width: widthProp,
};

HorizontalRule.defaultProps = {
  className: '',
  width: 'text',
};

export default HorizontalRule;
