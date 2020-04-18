import React from 'react'
import { ThemeProvider } from 'styled-components'

import { breakpoints } from './breakpoints'
import { dark, light } from './colors'
import { useMediaQuery } from '../shared/hooks'

const Theme = (props) => {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = {
    ...(prefersDark ? dark : light),
    id: prefersDark ? 'dark' : 'light',
    breakpoints,
  }

  return (
    <ThemeProvider {...props} theme={theme}>
      <>{props.children}</>
    </ThemeProvider>
  )
}

export default Theme
