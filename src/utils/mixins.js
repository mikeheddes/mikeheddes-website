import { css } from 'styled-components'
import { breakpoints } from 'style/breakpoints'

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
export const mediaWidthQuery = (size, type = 'min') => styles => css`
    @media only screen and (${type}-width: ${size / 16}em) {
      ${styles}
    }
  `

export const media = {
  giant: mediaWidthQuery(breakpoints.giant),
  desktop: mediaWidthQuery(breakpoints.desktop),
  tabletLandscape: mediaWidthQuery(breakpoints.tabletLandscape),
  tabletPortrait: mediaWidthQuery(breakpoints.tabletPortrait),
  phoneOnly: mediaWidthQuery(breakpoints.tabletPortrait - 1, 'max'),
}

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
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-line-clamp: ${({ lineClamp }) => lineClamp};
  -webkit-box-orient: vertical;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  max-height: calc(
    1em * ${({ lineHeight, lineClamp }) => (lineHeight || 1.2) * lineClamp}
  );
  overflow: hidden;
  text-overflow: ellipsis;
`

// stylelint-disable property-no-unknown
export const fluidValue = (min, max, param, unit = '') => css`
  ${param}: ${`${min}${unit}`};

  ${media.tabletPortrait(css`
    ${param}: calc(
      ${max - min} * (100vw - ${breakpoints.tabletPortrait}px) /
        ${breakpoints.desktop - breakpoints.tabletPortrait} + ${`${min}${unit}`}
    );
  `)};

  ${media.desktop(css`
    ${param}: ${`${max}${unit}`};
  `)};
`
// stylelint-enable property-no-unknown

export const fluidText = (min, max) => fluidValue(min, max, 'font-size', 'px')
