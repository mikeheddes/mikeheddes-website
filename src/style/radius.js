import { objectValuesToStrings } from '../util'

export const radiusNumbers = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 14,
}

const radius = objectValuesToStrings(radiusNumbers, { suffix: 'px' })

export default radius
