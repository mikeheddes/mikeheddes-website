import { css } from 'styled-components'
import PropTypes from 'prop-types'

export default css`
  grid-column: ${({ width }) => width};
`

export const widthProp = PropTypes.oneOf(['content', 'text', 'full'])
