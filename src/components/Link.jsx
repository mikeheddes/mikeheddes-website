import React, { Component } from 'react'
import { Link as Anchor } from 'react-router-dom'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import {
  defaultStyle,
  linkStyle,
  primaryStyle,
  subtleLinkStyle,
  subtleStyle,
  actionStyle,
  basicStyle,
} from 'components/Button'
import ForwardSVG from 'components/svg/Forward'
import ExitSVG from 'components/svg/Exit'

const overallLinkStyle = css`
  ${({ noTheme }) =>
    noTheme &&
    css`
      text-decoration: none;
    `};
  ${({ noTheme }) =>
    !noTheme &&
    css`
      ${basicStyle};

      ${({ noFontSize }) =>
        noFontSize &&
        css`
          font-size: inherit;
        `};

      ${({ variation }) => {
        switch (variation) {
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
    `};
  cursor: pointer;
`

const ToToHref = styled.a`
  ${overallLinkStyle};
`

const LinkWithTarget = props => {
  const { to, children, ...other } = props
  return (
    <ToToHref href={to} {...other}>
      {children}
    </ToToHref>
  )
}

LinkWithTarget.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
}

const LinkWithoutTarget = ToToHref.withComponent(Anchor)

class Link extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    download: PropTypes.bool,
    to: PropTypes.string.isRequired,
    // eslint-disable-next-line react/no-unused-prop-types
    display: PropTypes.oneOf(['block', 'inline-block']),
    // eslint-disable-next-line react/no-unused-prop-types
    noFontSize: PropTypes.bool,
    noIcon: PropTypes.bool,
    noInner: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    noTheme: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    variation: PropTypes.oneOf([
      'default',
      'button',
      'buttonPrimary',
      'action',
      'subtleButton',
      'subtle',
    ]),
    // eslint-disable-next-line react/no-unused-prop-types
    textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  }

  static defaultProps = {
    className: '',
    download: false,
    display: null,
    noFontSize: false,
    noIcon: false,
    noInner: false,
    noTheme: false,
    variation: 'default',
    textAlign: 'center',
  }

  getLinkType = () => {
    const { download, to } = this.props
    if (download) {
      return 'DOWNLOAD'
    }
    if (to) {
      if (to.match(/^https?/g)) {
        return 'EXIT'
      }
      if (to === '#') {
        return 'NONE'
      }
      return 'INTERNAL'
    }
    return 'NONE'
  }

  getIcon = linkType => {
    switch (linkType) {
      case 'DOWNLOAD':
        return null
      case 'INTERNAL':
        return ForwardSVG
      case 'EXIT':
        return ExitSVG
      default:
        return null
    }
  }

  getTarget = linkType => {
    switch (linkType) {
      case 'DOWNLOAD':
        return '_self'
      case 'INTERNAL':
        return undefined
      case 'EXIT':
        return '_blank'
      case 'NONE':
        return '_self'
      default:
        return undefined
    }
  }

  render() {
    const {
      children,
      className,
      noIcon,
      noInner,
      to,
      ...styleProps
    } = this.props
    const linkType = this.getLinkType()
    const target = this.getTarget(linkType)
    const href = linkType === 'DOWNLOAD' ? '#' : to
    const Icon = this.getIcon(linkType)
    const Wrapper = target ? LinkWithTarget : LinkWithoutTarget
    return (
      <Wrapper className={className} target={target} to={href} {...styleProps}>
        {!noInner ? <span>{children}</span> : children}
        {!noIcon && Icon && <Icon />}
      </Wrapper>
    )
  }
}

// stylelint-disable block-no-empty
export default styled(Link)``
// stylelint-enable block-no-empty
