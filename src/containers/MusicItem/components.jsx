// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { transparentize as fade, darken } from 'polished';
import styled, { css } from 'styled-components';
import Paragraph from 'components/Markdown/Paragraph';

import space from 'style/space';
import radius from 'style/radius';
import { media, fluidText } from 'utils/mixins';

export const Title = styled.h1`
  ${fluidText(18, 46)};
  font-weight: 700;
  color: ${({ theme }) => theme.heading};
`;

export const Artist = styled.h2`
  ${fluidText(17, 32)};
  font-weight: 500;
  color: ${({ theme }) => theme.link};
  margin-top: ${space.s}px;
  margin-bottom: ${space.r}px;
`;

export const GenreDate = styled.h5`
  ${fluidText(15, 17)};
  font-weight: 400;
  color: ${({ theme }) => theme.textSubtle};
  margin-bottom: ${space.xm}px;
`;

export const AlbumInfo = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.textSubtle};
  font-weight: 400;
  margin-top: ${space.xr}px;
`;

export const Pline = styled.div`
  font-size: 12px;
  color: ${({ theme }) => fade(0.5, theme.textSubtle)};
  font-weight: 500;
  margin-top: ${space.s}px;
`;
