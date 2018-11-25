import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import Box from '../../components/Box'

export default class Description extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
  }

  state = {
    extended: false,
  }

  toggleDescription = () => {
    const { extended } = this.state
    this.setState({ extended: !extended })
  }

  render() {
    const { extended } = this.state
    const { children } = this.props
    const needToToggle = children.length > 200
    return (
      <React.Fragment>
        <Heading as="h5" marginBottom="sm" marginTop="md">
          Description
        </Heading>
        <Paragraph
          maxlines={needToToggle && !extended ? 3 : null}
          color="subtle"
          size="re"
        >
          {children}
        </Paragraph>
        {needToToggle && (
          <Box textAlign="right" marginTop="sm">
            <Button onClick={this.toggleDescription} variant="link">
              {extended ? 'Hide' : 'More'}
            </Button>
          </Box>
        )}
      </React.Fragment>
    )
  }
}
