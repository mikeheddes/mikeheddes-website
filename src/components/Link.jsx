import React, { Component } from 'react'
import { Link as Anchor } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Arrow45 from './icon/Arrow45'
import ArrowDown from './icon/ArrowDown'
import Carrot from './icon/Carrot'
import Heading from './Heading'

// import {
//   defaultStyle,
//   linkStyle,
//   primaryStyle,
//   subtleLinkStyle,
//   subtleStyle,
//   actionStyle,
//   basicStyle,
// } from 'components/Button'

const StyledAnchor = styled.a.attrs(props => ({
  href: props.to,
}))`
  text-decoration: none;
  text-align: ${({ align }) => align};
  color: ${({ theme }) => theme.link};
  cursor: pointer;
  font-weight: 500;

  ${Heading} & {
    font-weight: inherit;
  }

  &:hover {
    text-decoration: underline;
  }
`

export default class Link extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    download: PropTypes.bool,
    to: PropTypes.string.isRequired,
    display: PropTypes.oneOf(['block', 'inline']),
    icon: PropTypes.bool,
    variation: PropTypes.oneOf([
      'default',
      'button',
      'buttonPrimary',
      'action',
      'subtleButton',
      'subtle',
    ]),
    align: PropTypes.oneOf(['center', 'left', 'right']),
    target: PropTypes.oneOf(['self', 'blank']),
  }

  static defaultProps = {
    download: false,
    display: 'inline',
    icon: false,
    variation: 'default',
    align: 'center',
    target: undefined,
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
        target={target}
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
