import { css } from 'styled-components'
import { media, breakpoints } from './breakpoints'

const cssQuery = query => styles => css`
  ${query} {
    ${styles};
  }
`

export const has = {
  backdrop: cssQuery('@supports (backdrop-filter: blur(2px))'),
}

export const center = css`
  margin-right: auto;
  margin-left: auto;
`

export const maxLines = css`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${({ maxlines }) => maxlines};
  -webkit-box-orient: vertical;
  max-height: ${({ lineHeight, maxlines }) => (lineHeight || 1.2) * maxlines}em;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const fluidValue = (min, max, param, unit = '') => css`
  ${param}: ${`${min}${unit}`};

  ${media.sm`
    ${param}: calc((100vw - ${breakpoints.sm}px) / ${(breakpoints.lg -
    breakpoints.sm) /
    (max - min)} + ${`${min}${unit}`});
  `};

  ${media.lg`
    ${param}: ${`${max}${unit}`};
  `};
`

export const fluidFont = (min, max) => fluidValue(min, max, 'font-size', 'px')
