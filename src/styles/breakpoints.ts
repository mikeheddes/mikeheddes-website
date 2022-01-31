// How to decide which breakpoints to use: https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/
// Use breakpoints from: https://material-ui.com/customization/breakpoints/
// in pixels
export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

// transform breakpoints to em: https://zellwk.com/blog/media-query-units/
export const screen = {
  xs: `(min-width: ${breakpoints.xs / 16}em)`,
  sm: `(min-width: ${breakpoints.sm / 16}em)`,
  md: `(min-width: ${breakpoints.md / 16}em)`,
  lg: `(min-width: ${breakpoints.lg / 16}em)`,
  xl: `(min-width: ${breakpoints.xl / 16}em)`,
};
