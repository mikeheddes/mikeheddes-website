import PropTypes from 'prop-types'

import space from './space'
import { mapMedia } from './breakpoints'

const marginPropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf([...Object.keys(space), 'auto']),
])

export const marginPropTypes = {
  margin: marginPropType,
  marginTop: marginPropType,
  marginBottom: marginPropType,
  marginLeft: marginPropType,
  marginRight: marginPropType,
}

export const setMargin = ({
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => [
  ...mapMedia(margin, val => `margin: ${space[val] || val};`),
  ...mapMedia(marginTop, val => `margin-top: ${space[val] || val};`),
  ...mapMedia(marginBottom, val => `margin-bottom: ${space[val] || val};`),
  ...mapMedia(marginLeft, val => `margin-left: ${space[val] || val};`),
  ...mapMedia(marginRight, val => `margin-right: ${space[val] || val};`),
]
