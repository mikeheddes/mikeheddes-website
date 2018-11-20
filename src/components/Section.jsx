import React from 'react'
import PropTypes from 'prop-types'

import Box from './Box'

const Section = props => <Box {...props} />

Section.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
}

Section.defaultProps = {
  as: 'section',
  paddingX: {
    xs: 'md',
    sm: 'xl',
    md: 'gi',
  },
  paddingY: { xs: 'xm', sm: 'xl' },
  overflow: 'hidden',
}

export default Section
