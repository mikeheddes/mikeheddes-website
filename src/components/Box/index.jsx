import PropTypes, {
  oneOf,
  objectOf,
  oneOfType,
  bool,
  number,
  string,
} from 'prop-types'
import styled from 'styled-components'

import style from './style'
import { marginPropTypes, paddingPropTypes } from '../../styles/space'
import { depthPropType } from '../../styles/depth'
import radius from '../../styles/radius'

function ofTypeArray(options) {
  return [oneOf(options), objectOf(oneOf(options))]
}

function oneOfObject(options) {
  return oneOfType(ofTypeArray(options))
}

function oneOfBareObject(oneOfWithOptions) {
  return oneOfType([oneOfWithOptions, objectOf(oneOfWithOptions)])
}

const boolObject = oneOfType([bool, objectOf(bool)])

const numberOrStringObject = oneOfType([
  number,
  string,
  objectOf(oneOfType([number, string])),
])

const Box = styled.div.attrs(({ radius: ra }) => ({
  radius: radius[ra],
}))`
  ${style};
`
Box.propTypes = {
  alignContent: oneOfObject([
    'start',
    'end',
    'center',
    'between',
    'around',
    'stretch',
  ]),
  alignItems: oneOfObject(['start', 'end', 'center', 'baseline', 'stretch']),
  alignSelf: oneOfObject([
    'auto',
    'start',
    'end',
    'center',
    'baseline',
    'stretch',
  ]),
  border: boolObject,
  bottom: boolObject,
  children: PropTypes.node,
  color: oneOfObject([
    'background',
    'surface',
    'surfaceProminent',
    'transparent',
  ]),
  depth: oneOfBareObject(depthPropType),
  direction: oneOfObject(['row', 'column']),
  display: oneOfObject([
    'none',
    'flex',
    'block',
    'inlineBlock',
    'visuallyHidden',
  ]),
  flex: oneOfType([...ofTypeArray(['grow', 'shrink', 'none']), string]),
  height: numberOrStringObject,
  justifyContent: oneOfObject(['start', 'end', 'center', 'between', 'around']),
  left: boolObject,
  maxHeight: numberOrStringObject,
  maxWidth: numberOrStringObject,
  minHeight: numberOrStringObject,
  minWidth: numberOrStringObject,
  overflow: oneOfObject([
    'visible',
    'hidden',
    'scroll',
    'scrollX',
    'scrollY',
    'auto',
  ]),
  position: oneOfObject(['static', 'absolute', 'relative', 'fixed']),
  radius: oneOfObject(Object.keys(radius)),
  right: boolObject,
  shape: oneOfObject([
    'square',
    'rounded',
    'circle',
    'roundedTop',
    'roundedBottom',
    'roundedLeft',
    'roundedRight',
  ]),
  top: boolObject,
  width: numberOrStringObject,
  wrap: boolObject,
  ...marginPropTypes,
  ...paddingPropTypes,
}

Box.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  alignSelf: 'auto',
  border: false,
  bottom: false,
  children: null,
  color: 'transparent',
  depth: 0,
  direction: 'row',
  display: 'block',
  flex: 'shrink',
  height: null,
  justifyContent: 'start',
  left: false,
  maxHeight: null,
  maxWidth: null,
  minHeight: null,
  minWidth: null,
  overflow: 'visible',
  position: 'static',
  radius: 'sm',
  right: false,
  shape: 'square',
  top: false,
  width: null,
  wrap: null,
}

export default Box
