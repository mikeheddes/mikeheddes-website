import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { InternButton } from 'components/Buttons'
import ButtonPosition from './ButtonPosition'
import ForwardSVG from 'svg/Forward'

class CallToAction extends Component {
  render() {
    const { url, name } = this.props;
    return(
      <ButtonPosition>
        <InternButton round to={url}>
          {name}<ForwardSVG/>
        </InternButton>
      </ButtonPosition>
    )
  }
}

CallToAction.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default CallToAction
