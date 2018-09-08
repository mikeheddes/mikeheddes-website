import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import Section from 'components/Section'
import Banner from 'components/Banner'
import { colorNames } from 'style/color'
import Box from 'components/Box'
import components from 'components/Markdown'

import Txt from './text.md'

export default class About extends Component {
  static propTypes = {
    color: PropTypes.oneOf(colorNames),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ),
  }

  static defaultProps = {
    color: 'purple',
    links: [],
  }

  setTheme = theme => {
    const { color } = this.props
    return {
      ...theme,
      link: theme[color],
      surface: theme.surfaceColors[color],
    }
  }

  render() {
    const { links } = this.props
    return (
      <ThemeProvider theme={this.setTheme}>
        <React.Fragment>
          <Helmet>
            <title>About</title>
          </Helmet>
          <Banner links={links}>
            <h2>About</h2>
            <h1>
              Artist. Designer.
              <br />
              Engineer.
            </h1>
          </Banner>
          <Section>
            <Box width="text" marginLeft="auto" marginRight="auto" markdown>
              <Txt components={components} />
            </Box>
          </Section>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
