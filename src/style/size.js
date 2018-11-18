import { objectValuesToStrings } from '../util'

export const sizeNumbers = {
  xs: 12,
  sm: 16,
  re: 24,
  xr: 32,
  md: 48,
  xm: 64,
  lg: 96,
  xl: 128,
  gi: 192,
  xg: 256,
  co: 384,
  xc: 512,
  footerHeight: 100,
}

const size = objectValuesToStrings(sizeNumbers, { suffix: 'px' })

export default size
