import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import Section from '../components/Section'
import Banner from '../views/Banner'
import Box from '../components/Box'

const color = 'purple'
const links = []

const setTheme = theme => {
  return {
    ...theme,
    link: theme[color],
    surface: theme.surfaceColors[color],
  }
}

const About = () => (
  <ThemeProvider theme={setTheme}>
    <React.Fragment>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Banner links={links} eyebrow="About">
        Artist. Designer.
        <br />
        Engineer.
      </Banner>
      <Section>
        <Box width="text" marginLeft="auto" marginRight="auto" />
      </Section>
    </React.Fragment>
  </ThemeProvider>
)

export default About
