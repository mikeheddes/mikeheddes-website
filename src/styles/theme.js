import React from 'react'
import { ThemeProvider } from 'styled-components'

import { breakpoints } from './breakpoints'
import { dark, light } from './colors'
import { useMediaQuery } from '../shared/hooks'

function shouldUseDarkTheme(themeId, userPrefersDark) {
  if (themeId === 'dark') return true
  else if (themeId === 'light') return false
  else if (userPrefersDark) return true
  return false
}

const Theme = ({ themeId, children, ...restProps }) => {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
  const isDark = shouldUseDarkTheme(themeId, prefersDark)

  const themeObj = {
    ...(isDark ? dark : light),
    id: isDark ? 'dark' : 'light',
    breakpoints,
  }

  return (
    <ThemeProvider {...restProps} theme={themeObj}>
      <>{children}</>
    </ThemeProvider>
  )
}

export function withTheme(themeId, Element) {
  return function ElementWithTheme(props) {
    return (
      <Theme themeId={themeId}>
        <Element {...props} />
      </Theme>
    )
  }
}

export default Theme
