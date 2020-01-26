// in pixels
export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

const screen = {}

for (const [key, width] of Object.entries(breakpoints)) {
  screen[key] = `(min-width: ${width / 16}em)`
}

export { screen }
