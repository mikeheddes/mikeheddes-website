import { css } from 'styled-components'
import { hideVisually } from 'polished'

import { radius, width, depth } from '../../styles'
import { mapMediaProp } from '../../styles/breakpoints'
import { setMargin, setPadding } from '../../styles/space'

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
      ${mapMediaProp('direction', setDirection)};
      ${mapMediaProp('wrap', setWrap)};
      ${mapMediaProp('justifyContent', setJustifyContent)};
      ${mapMediaProp('alignItems', setAlignItems)};
      ${mapMediaProp('alignContent', setAlignContent)};
    `
  }
  return ''
}

function flexChildOptions() {
  return css`
    ${mapMediaProp('flex', setFlex)};
    ${mapMediaProp('alignSelf', setAlignSelf)};
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
    ${mapMediaProp('bottom', createConstrain('bottom'))};
    ${mapMediaProp('top', createConstrain('top'))};
    ${mapMediaProp('left', createConstrain('left'))};
    ${mapMediaProp('right', createConstrain('right'))};
    ${mapMediaProp('position', setPosition)};
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
  if (val && val in width) {
    return css`
      max-width: ${width[val]};
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

const boxRadius = radius.sm

function setShape(shape) {
  switch (shape) {
    case 'rounded':
      return css`
        border-radius: ${boxRadius};
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
        border-top-right-radius: ${boxRadius};
        border-top-left-radius: ${boxRadius};
      `
    case 'roundedBottom':
      return css`
        border-bottom-right-radius: ${boxRadius};
        border-bottom-left-radius: ${boxRadius};
      `
    case 'roundedLeft':
      return css`
        border-top-left-radius: ${boxRadius};
        border-bottom-left-radius: ${boxRadius};
      `
    case 'roundedRight':
      return css`
        border-top-right-radius: ${boxRadius};
        border-bottom-right-radius: ${boxRadius};
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

function setDepth(depthIdx) {
  return css`
    box-shadow: ${depth[depthIdx]};
  `
}

// The css renderd by the component
export default css`
  ${mapMediaProp('display', setDisplay)};
  ${flexParentOptions};
  ${flexChildOptions};
  ${setPositionStyles};
  ${mapMediaProp('width', setWidth)};
  ${mapMediaProp('minWidth', minWidth => setSize('min-width', minWidth))};
  ${mapMediaProp('maxWidth', maxWidth => setSize('max-width', maxWidth))};
  ${mapMediaProp('height', height => setSize('height', height))};
  ${mapMediaProp('minHeight', minHeight => setSize('min-height', minHeight))};
  ${mapMediaProp('maxHeight', maxHeight => setSize('max-height', maxHeight))};
  ${mapMediaProp('overflow', setOverflow)};
  ${mapMediaProp('shape', setShape)};
  ${mapMediaProp('color', setColor)};
  ${mapMediaProp('depth', setDepth)};
  ${setMargin};
  ${setPadding};
`
