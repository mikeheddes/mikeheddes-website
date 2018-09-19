import { map } from 'style/breakpoints'

export default function breakpointStyleProp(propName, styleFunc) {
  return function displayStyle(props) {
    const styleProp = props[propName]
    return map(styleProp, key => {
      if (key) {
        return styleFunc(key)
      }
      return ''
    })
  }
}
