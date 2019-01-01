import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Section from '../components/Section'
import Link from '../components/Link'
import Box from '../components/Box'
import P from '../components/Paragraph'
import { fluidFont } from '../styles/mixins'
import { size } from '../styles'

const Main = styled(Section)`
  min-height: calc(100vh - ${size.footerHeight});
`

const MegaHeader = styled.h1`
  text-align: center;
  font-weight: 700;
  ${fluidFont(120, 300)};
  color: ${({ theme }) => theme.surface};
`

const themeColor = 'blue'
const setTheme = theme => {
  return {
    ...theme,
    link: theme[themeColor],
    surface: theme.surfaceColors[themeColor],
  }
}

const NotFound = () => (
  <React.Fragment>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <ThemeProvider theme={setTheme}>
      <Main display="flex" justifyContent="center" direction="column">
        <MegaHeader>404</MegaHeader>
        <Box
          width="text"
          marginLeft="auto"
          marginRight="auto"
          marginTop="xm"
          marginBottom="xm"
          textAlign="center"
        >
          <P size="md">
            Sorry the page you are looking for does not exist. You could start
            at <Link to="/">the home page</Link>.
          </P>
        </Box>
      </Main>
    </ThemeProvider>
  </React.Fragment>
)

export default NotFound
