import PropTypes from 'prop-types'
import { css } from 'styled-components'

import { mapMedia } from './breakpoints'

import { objectValuesToStrings } from '../utils'

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

const marginPropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf([...Object.keys(space), 'auto']),
  PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([...Object.keys(space), 'auto']),
    ])
  ),
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

const paddingPropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf([...Object.keys(space)]),
  PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([...Object.keys(space)]),
    ])
  ),
])

export const paddingPropTypes = {
  padding: paddingPropType,
  paddingX: paddingPropType,
  paddingY: paddingPropType,
}

export const setPadding = ({ padding, paddingX, paddingY }) => [
  ...mapMedia(padding, val => `padding: ${space[val] || val};`),
  ...mapMedia(
    paddingX,
    val =>
      css`
        padding-left: ${space[val] || val};
        padding-right: ${space[val] || val};
      `
  ),
  ...mapMedia(
    paddingY,
    val =>
      css`
        padding-top: ${space[val] || val};
        padding-bottom: ${space[val] || val};
      `
  ),
]
