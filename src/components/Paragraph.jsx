import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { fluidFont, ellipsis } from '../styles/mixins'
import { marginPropTypes, setMargin } from '../styles/space'

const Paragraph = styled.p`
  font-weight: 400;
  color: ${({ theme, color }) => {
    switch (color) {
      case 'subtle':
        return theme.textSubtle
      default:
        return theme.text
    }
  }};

  line-height: ${({ lineHeight }) => lineHeight};

  ${({ maxlines }) =>
    maxlines &&
    css`
      ${ellipsis};
      margin-bottom: 20px;
    `};

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return fluidFont(13, 15)
      case 're':
        return fluidFont(15, 17)
      case 'md':
        return fluidFont(18, 20)
      default:
        return 'font-size: inherit'
    }
  }};
  ${setMargin};
`

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 're', 'md', 'inherit']),
  color: PropTypes.oneOf(['subtle', 'normal']),
  maxlines: PropTypes.number,
  lineHeight: PropTypes.number,
  ...marginPropTypes,
}

Paragraph.defaultProps = {
  size: 'inherit',
  color: 'normal',
  margin: 0,
  maxlines: undefined,
  lineHeight: 1.48,
}

export default Paragraph
