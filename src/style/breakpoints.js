import { css } from 'styled-components'

export const breakpoints = {
  xs: 0, // extra small
  sm: 600, // small
  md: 960, // medium
  lg: 1280, // large
  xl: 1920, // extra large
}

// iterate through the sizes and create a media template
export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = breakpoints[label] / 16

  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const map = (prop, interpolateFn) => {
  if (typeof prop !== 'object') {
    return interpolateFn(prop)
  }

  return prop.reduce((acc, key) => {
    if (key in breakpoints) {
      acc.push(media[key]`
        ${interpolateFn(prop[key])}
        `)
    }

    return acc
  }, [])
}
