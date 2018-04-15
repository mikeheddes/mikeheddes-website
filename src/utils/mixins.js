import { css } from 'styled-components';

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
const mediaWidthQuery = (size, type = 'min') => {
  return (styles) => css`
    @media only screen and (${type}-width: ${size / 16}em) {
      ${styles}
    }
  `
}

export const media = {
  giant: mediaWidthQuery(1800),
  desktop: mediaWidthQuery(1200),
  tabletLandscape: mediaWidthQuery(900),
  tabletPortrait: mediaWidthQuery(600),
  phoneOnly: mediaWidthQuery(599, 'max'),
}

const cssQuery = query => {
  return (styles) => css`
    ${query} {
      ${styles}
    }
  `
}

export const has = {
  backdrop: cssQuery('@supports (backdrop-filter: blur(2px))'),
}

export const center = css`
  margin-right: auto;
  margin-left: auto;
`

export const fluidText = (min, max) => fluidValue(min, max, 'font-size', 'px');

export const fluidValue = (min, max, param, unit='') => (
  css`
    ${param}: ${min}${unit};

    ${media.tabletPortrait(css`
    ${'' /* 600 and 1200 are min and max media sizes */}
      ${param}: calc(${max - min} * (100vw - 600px) / ${1200 - 600} + ${min}${unit});
    `)}

    ${media.desktop(css`
      ${param}: ${max}${unit};
    `)}
  `
)
