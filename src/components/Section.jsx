import React from 'react'
import PropTypes from 'prop-types'

import Box from './Box'

/**
 * Preset for the Box component.
 * For documentation see the Box component.
 */
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
  // eslint-disable-next-line react/default-props-match-prop-types
  paddingX: {
    xs: 'md',
    sm: 'xl',
    md: 'gi',
  },
  // eslint-disable-next-line react/default-props-match-prop-types
  paddingY: { xs: 'xm', sm: 'xl' },
  // eslint-disable-next-line react/default-props-match-prop-types
  overflow: 'hidden',
}

export default Section
