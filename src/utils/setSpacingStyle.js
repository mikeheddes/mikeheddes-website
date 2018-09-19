import { map } from 'style/breakpoints'
import defaultSpacing from 'style/space'

export function getSpacingFromTheme(key, theme) {
  let value =
    (theme && theme.spacing && theme.spacing[key]) || defaultSpacing[key]
  if (process.env.NODE_ENV !== 'production') {
    if (typeof key === 'undefined') {
      console.error(`A spacing named "${key}" does not exist.`) // eslint-disable-line no-console
      return '0'
    }
  }
  if (typeof value === 'number') {
    value = `${value}px`
  }
  return value
}

export function createSpacingFunc(propName, styleTags) {
  return function spacing({ theme, ...props }) {
    const styleProp = props[propName]
    return map(styleProp, key => {
      if (key) {
        return styleTags.map(
          tag => `${tag}: ${getSpacingFromTheme(key, theme)};`
        )
      }
      return ''
    })
  }
}

export const setMargin = createSpacingFunc('margin', ['margin'])

export const setMarginX = createSpacingFunc('marginX', [
  'margin-left',
  'margin-right',
])

export const setMarginY = createSpacingFunc('marginY', [
  'margin-top',
  'margin-bottom',
])

export const setMarginTop = createSpacingFunc('marginTop', ['margin-top'])

export const setMarginRight = createSpacingFunc('marginRight', ['margin-right'])

export const setMarginBottom = createSpacingFunc('marginBottom', [
  'margin-bottom',
])

export const setMarginLeft = createSpacingFunc('marginLeft', ['margin-left'])

export const setPadding = createSpacingFunc('padding', ['padding'])

export const setPaddingX = createSpacingFunc('paddingX', [
  'padding-left',
  'padding-right',
])

export const setPaddingY = createSpacingFunc('paddingY', [
  'padding-top',
  'padding-bottom',
])
