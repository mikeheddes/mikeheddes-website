import PropTypes from 'prop-types'

import spaceObj from 'style/space'
import radiusObj from 'style/radius'
import timingObj from 'style/timing'
import zDepthObj from 'style/zDepth'

export const spacePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf(Object.keys(spaceObj)),
])

export const marginPropType = PropTypes.oneOfType([
  spacePropType,
  PropTypes.oneOf(['auto']),
])

export const paddingPropType = spacePropType

export const radiusPropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf(Object.keys(radiusObj)),
])

export const timingPropType = PropTypes.oneOf(Object.keys(timingObj))

export const zDepthPropType = PropTypes.oneOf(zDepthObj.map((z, i) => i))
