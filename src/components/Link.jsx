import React, { Component } from 'react'
import { Link as Anchor } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Arrow45 from './icon/Arrow45'
import ArrowDown from './icon/ArrowDown'
import Carrot from './icon/Carrot'
import Heading from './Heading'

import {
  defaultStyle,
  linkStyle,
  primaryStyle,
  subtleLinkStyle,
  subtleStyle,
  actionStyle,
  basicStyle,
} from './Button'

const StyledAnchor = styled.a.attrs(({ to, target }) => ({
  href: to,
  rel: target === '_blank' ? 'noopener noreferrer' : '',
}))`
  text-decoration: none;
  text-align: ${({ align }) => align};
  color: ${({ theme }) => theme.link};
  cursor: pointer;
  font-weight: 500;
  -webkit-tap-highlight-color: transparent;
  font-size: ${({ fontSize }) =>
    typeof fontSize === 'number' ? `${fontSize}px` : fontSize};

  ${basicStyle};

  ${({ variant }) => {
    switch (variant) {
      case 'button':
        return defaultStyle
      case 'buttonPrimary':
        return primaryStyle
      case 'subtle':
        return subtleLinkStyle
      case 'subtleButton':
        return subtleStyle
      case 'action':
        return actionStyle
      default:
        return linkStyle
    }
  }};

  ${Heading} &,
  strong &,
  b & {
    font-weight: inherit;
  }

  &:hover {
    text-decoration: ${({ variant }) =>
      variant === 'none' ? 'none' : 'underline'};
  }
`

export default class Link extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    download: PropTypes.bool,
    to: PropTypes.string.isRequired,
    display: PropTypes.oneOf(['block', 'inline']),
    icon: PropTypes.bool,
    variant: PropTypes.oneOf([
      'default',
      'button',
      'buttonPrimary',
      'action',
      'subtleButton',
      'subtle',
      'none',
    ]),
    align: PropTypes.oneOf(['center', 'left', 'right']),
    target: PropTypes.oneOf(['self', 'blank']),
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  static defaultProps = {
    download: false,
    display: 'inline',
    icon: false,
    variant: 'default',
    align: 'center',
    target: undefined,
    fontSize: 'inherit',
  }

  isExternal = () => {
    const { to } = this.props

    if (to === '#') {
      return false
    }

    return !!to.match(/^https?/g)
  }

  getIcon = exits => {
    const { download } = this.props

    if (download) {
      return ArrowDown
    }

    if (exits) {
      return Arrow45
    }

    return Carrot
  }

  render() {
    const { children, icon, to, download, target, ...restProps } = this.props

    const isExtern = this.isExternal() || target
    const Icon = this.getIcon(isExtern)

    return (
      <StyledAnchor
        as={isExtern || download ? undefined : Anchor}
        target={target ? `_${target}` : target}
        to={to}
        download={download}
        {...restProps}
      >
        {children}
        {icon && Icon && <Icon />}
      </StyledAnchor>
    )
  }
}
