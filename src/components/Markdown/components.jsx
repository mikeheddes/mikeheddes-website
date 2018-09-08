import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, radius, typography } from 'style'
import Link from 'components/Link'
import { transparentize as fade } from 'polished'

export const Bold = styled.strong`
  font-weight: 700;
  color: ${({ theme }) => theme.title};
`

export const Italic = styled.em`
  font-style: italic;
`

export const Code = styled.code`
  font-size: 82%;
  color: ${({ theme }) => theme.text};
  font-family: ${typography.mono};
  background-color: ${({ theme }) => fade(0.3, theme.surface)};
  padding: ${space.xs}px ${space.s}px;
  border-radius: ${radius.r}px;
`

const Anchor = props => {
  const { href } = props
  return <Link {...props} to={href} noIcon noFontSize />
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
}

export { Anchor }
