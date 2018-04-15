import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import buttonStyle from 'utils/buttonStyle'


const InternButton = styled(Link)`
  ${buttonStyle}
`

InternButton.propTypes = {
  to: PropTypes.string.isRequired,
}



const ExternButton = styled.a.attrs({
  target: '_blank',
})`
  ${buttonStyle}
`

ExternButton.propTypes = {
  href: PropTypes.string.isRequired,
}


export {
  InternButton,
  ExternButton,
}
