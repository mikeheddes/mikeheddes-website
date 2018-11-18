import { objectValuesToStrings } from '../util'

export const spaceNumbers = {
  xs: 2,
  sm: 4, // small
  re: 10, // regular
  xr: 15,
  md: 20, // medium
  xm: 30,
  lg: 50, // large
  xl: 80,
  gi: 130, // giant
  xg: 210,
  co: 340, // colossal
  xc: 550,
  phone: 20,
  tabletPortrait: 80,
  tabletLandscape: 130,
  desktop: 130,
}

const space = objectValuesToStrings(spaceNumbers, { suffix: 'px' })

export default space
