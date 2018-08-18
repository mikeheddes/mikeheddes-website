// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { darken } from 'polished';
import styled, { css } from 'styled-components';
// import Anchor from 'components/Link';

import space from 'style/space';
// import radius from 'style/radius';

const Wrapper = styled.ul`
  color: ${({ theme }) => theme.link};
  font-size: 17px;
  min-width: 100%;
  font-weight: 500;
  margin: ${space.xm}px 0;
  white-space: nowrap;
  display: block;
  overflow-x: scroll;
  text-align: ${({ textAlign }) => textAlign};

  &::-webkit-scrollbar {
    opacity: 0;
    display: none;
  }
`;

export default Wrapper;

const Item = styled.li`
  display: inline-block;
  margin-right: ${space.r}px;

  ${({ width }) =>
    width === 'fixed' &&
    css`
      width: calc(2 * 14.2857142% - 10px);
    `};
  &:last-of-type {
    margin-right: 0;
  }
`;

export { Item };
