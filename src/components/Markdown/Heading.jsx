import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { fluidText } from 'utils/mixins';
import { space } from 'style';
import position, { widthProp } from 'utils/position';

const headingStyle = css`
  font-weight: 700;
  line-height: 1.13;
  color: ${({ theme }) => theme.heading};
  ${({ tag }) => tag === 'h1'
    && css`
      ${fluidText(34, 58)};
      margin-top: ${space.xl}px;
      margin-bottom: ${space.xm}px;
    `};
  ${({ tag }) => tag === 'h2'
    && css`
      ${fluidText(28, 42)};
      margin-top: ${space.l}px;
      margin-bottom: ${space.xr}px;
    `};
  ${({ tag }) => tag === 'h3'
    && css`
      ${fluidText(24, 36)};
      margin-top: ${space.xm}px;
      margin-bottom: ${space.r}px;
    `};
  ${position};
`;

const Heading = (props) => {
  const { tag } = props;
  const H = styled(tag)`
    ${headingStyle};
  `;
  return <H {...props} />;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  width: widthProp,
};

Heading.defaultProps = {
  className: '',
  width: 'text',
};

export default Heading;
