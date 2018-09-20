import { css } from 'styled-components'
import { hideVisually } from 'polished'
import radius from 'style/radius'
import widths from 'style/width'
import {
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
  setPadding,
  setPaddingX,
  setPaddingY,
} from 'utils/setSpacingStyle'
import breakpointStyleProp from 'utils/breakpointStyleProp'

const justifyContentObj = {
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
}

function setJustifyContent(justifyContent) {
  const styleToSet = justifyContentObj[justifyContent] || justifyContent
  return css`
    justify-content: ${styleToSet};
  `
}

const alignItemsObj = {
  start: 'flex-start',
  end: 'flex-end',
}

function setAlignItems(alignItems) {
  const styleToSet = alignItemsObj[alignItems] || alignItems
  return css`
    align-items: ${styleToSet};
  `
}

const alignSelfObj = {
  start: 'flex-start',
  end: 'flex-end',
}

function setAlignSelf(alignSelf) {
  const styleToSet = alignSelfObj[alignSelf] || alignSelf
  return css`
    align-self: ${styleToSet};
  `
}

const alignContentObj = {
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
}

function setAlignContent(alignContent) {
  const styleToSet = alignContentObj[alignContent] || alignContent
  return css`
    align-content: ${styleToSet};
  `
}

const flexObj = {
  grow: '1 0 auto',
  shrink: '0 1 auto',
}

function setFlex(flex) {
  const styleToSet = flexObj[flex] || flex
  return css`
    flex: ${styleToSet};
  `
}

function setDirection(direction) {
  return css`
    flex-direction: ${direction};
  `
}

function setWrap(wrap) {
  return css`
    flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
  `
}

function flexParentOptions({ display }) {
  if (display === 'flex') {
    return css`
      ${breakpointStyleProp('direction', setDirection)};
      ${breakpointStyleProp('wrap', setWrap)};
      ${breakpointStyleProp('justifyContent', setJustifyContent)};
      ${breakpointStyleProp('alignItems', setAlignItems)};
      ${breakpointStyleProp('alignContent', setAlignContent)};
    `
  }
  return ''
}

function flexChildOptions() {
  return css`
    ${breakpointStyleProp('flex', setFlex)};
    ${breakpointStyleProp('alignSelf', setAlignSelf)};
  `
}

function setPosition(position) {
  return css`
    position: ${position};
  `
}

function createConstrain(tag) {
  return function setConstrain(hasConstrain) {
    return css`
      ${tag}: ${hasConstrain ? 0 : 'auto'};
    `
  }
}

function setPositionStyles() {
  return css`
    ${breakpointStyleProp('bottom', createConstrain('bottom'))};
    ${breakpointStyleProp('top', createConstrain('top'))};
    ${breakpointStyleProp('left', createConstrain('left'))};
    ${breakpointStyleProp('right', createConstrain('right'))};
    ${breakpointStyleProp('position', setPosition)};
  `
}

function setDisplay(display) {
  switch (display) {
    case 'inlineBlock':
      return `display: inline-block`
    case 'visuallyHidden':
      return hideVisually()
    default:
      return `display: ${display};`
  }
}

function setSize(key, val) {
  const ext = typeof val === 'number' ? 'px' : ''
  return css`
    ${val ? `${key}: ${val}${ext}` : ''};
  `
}

function setWidth(val) {
  if (!val) return ''
  if (val && val in widths) {
    return css`
      max-width: ${widths[val]}px;
      width: 100%;
    `
  }
  const ext = typeof val === 'number' ? 'px' : ''
  return css`
    width: ${`${val}${ext}`};
  `
}

function setOverflow(overflow) {
  switch (overflow) {
    case 'scrollX':
      return `overflow-x: scroll`
    case 'scrollY':
      return `overflow-y: scroll`
    default:
      return `overflow: ${overflow}`
  }
}

const boxRadius = radius.m

function setShape(shape) {
  switch (shape) {
    case 'rounded':
      return css`
        border-radius: ${boxRadius}px;
      `
    case 'circle':
      return css`
        border-radius: 50%;
      `
    case 'square':
      return css`
        border-radius: 0;
      `
    case 'roundedTop':
      return css`
        border-top-right-radius: ${boxRadius}px;
        border-top-left-radius: ${boxRadius}px;
      `
    case 'roundedBottom':
      return css`
        border-bottom-right-radius: ${boxRadius}px;
        border-bottom-left-radius: ${boxRadius}px;
      `
    case 'roundedLeft':
      return css`
        border-top-left-radius: ${boxRadius}px;
        border-bottom-left-radius: ${boxRadius}px;
      `
    case 'roundedRight':
      return css`
        border-top-right-radius: ${boxRadius}px;
        border-bottom-right-radius: ${boxRadius}px;
      `
    default:
      return ''
  }
}

function setColor(color) {
  return css`
    background-color: ${({ theme }) => theme[color] || color};
  `
}

// The css renderd by the component
export default css`
  ${breakpointStyleProp('display', setDisplay)};
  ${flexParentOptions};
  ${flexChildOptions};
  ${setPositionStyles};
  ${breakpointStyleProp('width', setWidth)};
  ${breakpointStyleProp('minWidth', minWidth =>
    setSize('min-width', minWidth)
  )};
  ${breakpointStyleProp('maxWidth', maxWidth =>
    setSize('max-width', maxWidth)
  )};
  ${breakpointStyleProp('height', height => setSize('height', height))};
  ${breakpointStyleProp('minHeight', minHeight =>
    setSize('min-height', minHeight)
  )};
  ${breakpointStyleProp('maxHeight', maxHeight =>
    setSize('max-height', maxHeight)
  )};
  ${breakpointStyleProp('overflow', setOverflow)};
  ${breakpointStyleProp('shape', setShape)};
  ${breakpointStyleProp('color', setColor)};
  ${setMargin};
  ${setMarginTop};
  ${setMarginRight};
  ${setMarginBottom};
  ${setMarginLeft};
  ${setPadding};
  ${setPaddingX};
  ${setPaddingY};
`
