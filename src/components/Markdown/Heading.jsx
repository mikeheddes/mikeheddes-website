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
      ${fluidText(34, 57)};
      line-height: 1.0625;
      margin-top: ${space.xl}px;
      margin-bottom: ${space.xm}px;

      h4 + & {
        margin-top: 0;
      }

    `};

  ${({ tag }) => tag === 'h2'
    && css`
      ${fluidText(28, 42)};
      margin-top: ${space.l}px;
      margin-bottom: ${space.xr}px;
    `};

  ${({ tag }) => tag === 'h3'
    && css`
      ${fluidText(22, 34)};
      font-weight: 600;
      margin-top: ${space.xm}px;
      margin-bottom: ${space.r}px;
    `};

  ${({ tag }) => tag === 'h4'
    && css`
      ${fluidText(22, 34)};
      opacity: .7;
      line-height: 1;
      font-weight: 600;
      margin-top: ${space.xl}px;
      margin-bottom: 0.25em;
    `};

  ${({ tag }) => tag === 'h5'
    && css`
      ${fluidText(20, 28)};
      margin-top: ${space.xm}px;
    `};

  ${({ tag }) => tag === 'h6'
    && css`
      ${fluidText(18, 20)};
      margin-top: ${space.xm}px;
      margin-bottom: ${space.s}px;
      font-weight: 600;
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
