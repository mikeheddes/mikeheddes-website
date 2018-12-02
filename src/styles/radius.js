import PropTypes from 'prop-types'
import { objectValuesToStrings } from '../utils'

export const radiusNumbers = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 14,
}

const radius = objectValuesToStrings(radiusNumbers, { suffix: 'px' })

export default radius

export const radiusPropType = PropTypes.oneOf(Object.keys(radius))
