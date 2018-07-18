// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import styled, { css } from 'styled-components';
import Anchor from 'components/Link';

import space from 'style/space';
import radius from 'style/radius';

const Wrapper = styled.ul`
  color: ${({ theme }) => theme.link};
  font-size: 17px;
  min-width: 100%;
  font-weight: 500;
  margin: ${space.xm}px 0;
  white-space: nowrap;
  display: block;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    opacity: 0;
    display: none;
  }


  & li {
    display: inline-block;
    text-decoration: inherit;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
  }
`;

Wrapper.propTypes = {
  onSurface: PropTypes.bool,
};

Wrapper.defaultProps = {
  onSurface: false,
};

export default Wrapper;

const Link = Anchor.extend`
  display: inline-block;
  padding: 10px 15px;
  width: calc(2 * 14.2857142% - 10px);
  margin-right: ${space.r}px;
  border-radius: ${radius.m}px;
  text-align: center;
  background-color: ${({ theme, onSurface }) => (onSurface ? darken(0.03, theme.surface) : theme.surface)};

  &:last-of-type {
    margin-right: 0px;
  }
`;

Link.propTypes = {
  onSurface: PropTypes.bool,
};

Link.defaultProps = {
  onSurface: false,
};

export { Link };
