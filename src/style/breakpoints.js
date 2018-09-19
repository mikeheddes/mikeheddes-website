import { createStatic } from 'styled-components-breakpoint'

export const breakpoints = {
  phone: 0, // extra small
  tabletPortrait: 600, // small
  tabletLandscape: 960, // medium
  desktop: 1280, // large
  giant: 1920, // extra large
}

const breakpointsFuncObj = createStatic(breakpoints)

export const { map } = breakpointsFuncObj

export default breakpointsFuncObj
