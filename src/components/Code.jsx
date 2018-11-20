import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { transparentize as fade } from 'polished'

import { fonts, space, radius } from '../styles'

const Code = styled.code`
  font-size: 0.82em;
  ${fonts.mono};

  ${({ variant }) =>
    variant === 'inline' &&
    css`
      background-color: ${({ theme }) => fade(0.25, theme.surface)};
      border-radius: ${radius.sm};
      padding: ${space.xs} ${space.sm};
    `};

  ${({ variant }) =>
    variant === 'block' &&
    css`
      display: block;
      padding: ${space.md};
      overflow-x: auto;
      color: ${({ theme }) => theme.text};
      ${({ theme }) => theme.code}
    `};
`

Code.propTypes = {
  variant: PropTypes.oneOf(['inline', 'block']),
}

Code.defaultProps = {
  variant: 'inline',
}

export default Code
