import React from 'react'
import styled, { withTheme, css } from 'styled-components'

import { width } from '../../../styles'
import { media, breakpoints } from '../../../styles/breakpoints'

export const fluidValue = (min, max, param, unit = '') => css`
  ${param}: blur(${`${min}${unit}`}) saturate(1.2);

  ${media.sm`
    ${param}: blur(calc((100vw - ${breakpoints.sm}px) / ${(breakpoints.lg -
    breakpoints.sm) /
    (max - min)} + ${`${min}${unit}`})) saturate(1.2);
  `};

  ${media.lg`
    ${param}: blur(${`${max}${unit}`}) saturate(1.2);
  `};
`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.surface};
`

const SVG = styled.svg`
  width: 100%;
  max-width: ${width.text};
  ${fluidValue(35, 60, 'filter', 'px')};
`

export default withTheme(({ theme }) => (
  <Wrapper>
    <SVG viewBox="0 0 151 100">
      <linearGradient id="blue_pink-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: theme.blue, stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: theme.pink, stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="purple-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#904FF7', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#3E37E3', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="green-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#46F77C', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#26CB3F', stopOpacity: 1 }} />
      </linearGradient>
      <rect x="10" y="10" width="37" height="80" fill="url(#blue_pink-grad)" />
      <rect x="57" y="10" width="37" height="80" fill="url(#purple-grad)" />
      <rect x="104" y="10" width="37" height="80" fill="url(#green-grad)" />
    </SVG>
  </Wrapper>
))
