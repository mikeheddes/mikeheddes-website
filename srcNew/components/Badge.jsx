import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { transparentize as fade } from 'polished';

import { createPadding } from 'utils/createSpace';
import { has } from 'utils/mixins';
import space from 'style/space';
import radius from 'style/radius';

const Badge = styled.div`
  display: inline-block;
  position: absolute;
  text-transform: uppercase;
  padding: ${createPadding('s', 'r')};
  top: 0;
  left: 0;
  font-size: 17px;
  font-weight: 600;
  background-color: ${({ theme }) => fade(0.15, theme.title)};
  color: ${({ theme }) => theme.background};
  border-radius: ${radius.r}px;
  margin-top: ${space.r}px;
  margin-left: ${space.r}px;

  ${has.backdrop(css`
    background-color: ${({ theme }) => fade(0.3, theme.title)};
    backdrop-filter: blur(10px) saturate(2);
  `)};
`;

Badge.propTypes = {
  children: PropTypes.node,
};

Badge.defaultProps = {
  children: undefined,
};

export default Badge;
