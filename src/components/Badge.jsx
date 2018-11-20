import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { transparentize as fade } from 'polished'

import { space, radius } from '../styles'
import { marginPropTypes, setMargin } from '../styles/space'

const fontSize = {
  re: '12px',
  lg: '14px',
}

const Badge = styled.span`
  display: inline-block;
  text-transform: uppercase;
  padding: ${space.xs} ${space.sm};
  ${setMargin};

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}

  ${({ size }) =>
    css`
      font-size: ${fontSize[size] || fontSize.re};
    `}

  ${({ rounded }) =>
    rounded
      ? css`
          border-radius: 1000px;
          font-weight: 600;
        `
      : css`
          border-radius: ${radius.sm};
          font-weight: 700;
        `}

  ${({ weight }) =>
    weight === 'subtle' &&
    css`
      ${({ fillType }) =>
        fillType === 'solid' &&
        css`
          color: ${({ theme }) => theme.textSubtle};
          background-color: ${({ theme }) => theme.surfaceProminent};
        `};

      ${({ fillType }) =>
        fillType === 'fade' &&
        css`
          background-color: ${({ theme }) => fade(0.95, theme.title)};
          color: ${({ theme }) => fade(0.5, theme.title)};
        `};
    `}

  ${({ weight }) =>
    weight === 'bold' &&
    css`
      ${({ fillType }) =>
        fillType === 'solid' &&
        css`
          color: ${({ theme }) => theme.headingSubtle};
          background-color: ${({ theme }) => theme.surfaceSelected};
        `};

      ${({ fillType }) =>
        fillType === 'fade' &&
        css`
          background-color: ${({ theme }) => fade(0.9, theme.title)};
          color: ${({ theme }) => fade(0.3, theme.title)};
        `};
    `}
`

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  rounded: PropTypes.bool,
  fillType: PropTypes.oneOf(['solid', 'fade', 'blur']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['re', 'lg']),
  weight: PropTypes.oneOf(['bold', 'subtle']),
  ...marginPropTypes,
}

Badge.defaultProps = {
  rounded: false,
  fillType: 'solid',
  size: 're',
  weight: 'bold',
}

export default Badge
