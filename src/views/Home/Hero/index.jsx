import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import Link from '../../../components/Link'
import Box from '../../../components/Box'
import Animation from './Animation'
// import Stripes from './Stripes'

import Wrapper, { TitleBox } from './Wrapper'

export default class Hero extends Component {
  static propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    action: PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }

  static defaultProps = {
    title: 'Curious. Creative.',
    eyebrow: 'Mike Heddes',
    action: {
      url: '/about',
      name: 'More about me',
    },
  }

  setThemeColors = theme => ({
    ...theme,
    link: theme.title,
  })

  render() {
    const { eyebrow, title, action } = this.props
    return (
      <ThemeProvider theme={this.setThemeColors}>
        <Wrapper>
          <Box
            width="text"
            position="relative"
            marginLeft="auto"
            marginRight="auto"
            textAlign="center"
          >
            <TitleBox>
              <h2>{eyebrow}</h2>
              <h1>{title}</h1>
            </TitleBox>
            {action && (
              <Link to={action.url} fontSize={17} icon>
                {action.name}
              </Link>
            )}
          </Box>
          {/* <Stripes /> */}
          <Animation />
        </Wrapper>
      </ThemeProvider>
    )
  }
}
