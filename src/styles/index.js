import { css } from 'styled-components'
import { up, down } from 'styled-breakpoints'
import { between, rem } from 'polished'

import { breakpoints } from './breakpoints'

const contentOrTextWidth = ({ wide }) =>
  wide ? '--width-content' : '--width-text'

export const contentWrapper = css`
  width: 100%;
  max-width: calc(var(${contentOrTextWidth}) + 2 * 20px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  ${up('sm')} {
    padding-left: 50px;
    padding-right: 50px;
    max-width: calc(var(${contentOrTextWidth}) + 2 * 50px);
  }

  ${up('md')} {
    padding-left: 130px;
    padding-right: 130px;
    max-width: calc(var(${contentOrTextWidth}) + 2 * 130px);
  }
`

export const ellipsis = css`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${({ maxlines }) => maxlines};
  -webkit-box-orient: vertical;
  max-height: ${({ lineHeight, maxlines }) => (lineHeight || 1.2) * maxlines}em;
  overflow: hidden;
  text-overflow: ellipsis;
`

const tracking = fontSize =>
  `${-0.0223 + 0.185 * Math.exp(-0.1745 * fontSize)}em`

const trackingBetween = (x1, x2, y1, y2, mid) => {
  const slope = (x2 - x1) / (y2 - y1)
  const base = x2 - slope * y2

  return tracking(slope * mid + base)
}

/**
 *
 * @param {Number} min font-size in pixels
 * @param {Number} max font-size in pixels
 */
export const fluidFont = (min, max) => css`
  ${down('sm')} {
    font-size: ${rem(min)};
    letter-spacing: ${tracking(min)};
  }

  ${up('sm')} {
    font-size: ${between(
      rem(min),
      rem(max),
      rem(breakpoints.sm),
      rem(breakpoints.lg)
    )};
    letter-spacing: ${trackingBetween(
      min,
      max,
      breakpoints.sm,
      breakpoints.lg,
      (breakpoints.sm + breakpoints.md) / 2
    )};
  }

  ${up('md')} {
    letter-spacing: ${trackingBetween(
      min,
      max,
      breakpoints.sm,
      breakpoints.lg,
      (breakpoints.md + breakpoints.lg) / 2
    )};
  }

  ${up('lg')} {
    font-size: ${rem(max)};
    letter-spacing: ${tracking(max)};
  }
`
