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

// const shake = keyframes`
//   0% {
//     ${'' /* transform: skewY(20deg) */}
//     transform: rotateX(30deg) rotateY(0deg)
//   }
//   25% {
//     transform: rotateX(0deg) rotateY(30deg)
//   }
//   50% {
//     transform: rotateX(-30deg) rotateY(30deg)
//   }
//   75% {
//     transform: rotateX(3deg) rotateY(-30deg)
//   }
//   100% {
//     transform: rotateX(30deg) rotateY(0deg)
//     ${'' /* transform: skewY(-20deg); */}
//   }
// `

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
`

const SVG = styled.svg`
  width: 100%;
  max-width: ${width.text};
  ${fluidValue(35, 60, 'filter', 'px')};
  ${'' /* animation: ${shake} 3s ease; */}
  animation-direction: alternate;
  animation-iteration-count: infinite;
  will-change: transform filter;
  perspective: 600px;
`

export default withTheme(({ theme }) => (
  <Wrapper>
    <SVG viewBox="0 0 151 100">
      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: theme.blue, stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: theme.pink, stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: theme.purple, stopOpacity: 1 }} />
        <stop
          offset="100%"
          style={{ stopColor: theme.purple, stopOpacity: 1 }}
        />
      </linearGradient>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: theme.green, stopOpacity: 1 }} />
        <stop
          offset="100%"
          style={{ stopColor: theme.green, stopOpacity: 1 }}
        />
      </linearGradient>
      <rect x="10" y="10" width="37" height="80" fill="url(#grad1)" />
      <rect x="57" y="10" width="37" height="80" fill="url(#grad2)" />
      <rect x="104" y="10" width="37" height="80" fill="url(#grad3)" />
    </SVG>
  </Wrapper>
))
