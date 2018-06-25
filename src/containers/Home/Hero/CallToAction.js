import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import Link from 'components/Link'
import ButtonPosition from './ButtonPosition'

class CallToAction extends Component {
  render() {
    const { url, name } = this.props;
    return(
      <ButtonPosition>
        <Link to={url}>{name}</Link>
      </ButtonPosition>
    )
  }
}

CallToAction.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default CallToAction
