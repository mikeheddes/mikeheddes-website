import PropTypes, {
  oneOf,
  objectOf,
  oneOfType,
  bool,
  number,
  string,
} from 'prop-types'
import styled from 'styled-components'
import {
  marginPropType,
  paddingPropType,
  zDepthPropType,
} from 'utils/PropTypes'
import style from './style'

function oneOfObject(options) {
  return oneOfType([oneOf(options), objectOf(oneOf(options))])
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

const Box = styled.div`
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
  depth: oneOfBareObject(zDepthPropType),
  direction: oneOfObject(['row', 'column']),
  display: oneOfObject([
    'none',
    'flex',
    'block',
    'inlineBlock',
    'visuallyHidden',
  ]),
  flex: oneOfObject(['grow', 'shrink', 'none']),
  height: numberOrStringObject,
  justifyContent: oneOfObject(['start', 'end', 'center', 'between', 'around']),
  left: boolObject,
  margin: oneOfBareObject(marginPropType),
  marginBottom: oneOfBareObject(marginPropType),
  marginLeft: oneOfBareObject(marginPropType),
  marginRight: oneOfBareObject(marginPropType),
  marginTop: oneOfBareObject(marginPropType),
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
  padding: oneOfBareObject(paddingPropType),
  paddingX: oneOfBareObject(paddingPropType),
  paddingY: oneOfBareObject(paddingPropType),
  position: oneOfObject(['static', 'absolute', 'relative', 'fixed']),
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
  margin: 0,
  marginBottom: null,
  marginLeft: null,
  marginRight: null,
  marginTop: null,
  maxHeight: null,
  maxWidth: null,
  minHeight: null,
  minWidth: null,
  overflow: 'visible',
  padding: 0,
  paddingX: null,
  paddingY: null,
  position: 'static',
  right: false,
  shape: 'square',
  top: false,
  width: null,
  wrap: false,
}

export default Box
