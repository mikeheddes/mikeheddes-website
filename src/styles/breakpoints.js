// How to decide which breakpoints to use: https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/
// Use breakpoints from: https://material-ui.com/customization/breakpoints/
// in pixels
export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

const screen = {}

// transform breakpoints to em: https://zellwk.com/blog/media-query-units/
for (const [key, width] of Object.entries(breakpoints)) {
  screen[key] = `(min-width: ${width / 16}em)`
}

export { screen }
