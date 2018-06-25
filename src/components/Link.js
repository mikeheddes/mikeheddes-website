import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import ForwardSVG from 'svg/Forward';
import ExitSVG from 'svg/Exit';
import { marginPropType } from 'utils/PropTypes';
import { createMargin } from 'utils/createSpace';


const LinkStyled = styled(Link)`
  color: ${props => props.theme.link};
  text-decoration: none;
  transition: opacity 150ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    text-decoration: underline;
  }

  &:active {
    opacity: .6;
  }
`

export default class AutoLink extends Component {

  static propTypes = {
    download: PropTypes.bool,
    to: PropTypes.string.isRequired,
    noIcon: PropTypes.bool,
  }

  static defaultProps = {
  }

  getLinkType = () => {
    const { download, to } = this.props;
    if (download) {
      return 'DOWNLOAD';
    }
    if (to) {
      if (to.match(/^https?/g)) {
        return 'EXIT';
      }
      if (to === '#') {
        return 'NONE';
      }
      return 'INTERNAL';
    }
    return 'NONE';
  }

  getIcon = linkType => {
    switch (linkType) {
      case 'DOWNLOAD':
        return null;
      case 'INTERNAL':
        return ForwardSVG;
      case 'EXIT':
        return ExitSVG;
      default:
        return null
    }
  }

  getTarget = linkType => {
    switch (linkType) {
      case 'DOWNLOAD':
        return '_self';
      case 'INTERNAL':
        return undefined;
      case 'EXIT':
        return '_blank';
      case 'NONE':
        return '_self';
      default:
        return undefined;
    }
  }

  render() {
    const { to, children, noIcon } = this.props;
    const linkType = this.getLinkType();
    const target = this.getTarget(linkType);
    const href = linkType === 'DOWNLOAD' ? '#' : to;
    const Icon = this.getIcon(linkType);
    return (
      <LinkStyled {...this.props}
        target={target}
        to={href}
      >
        <span>
          {children}
        </span>
        {!noIcon && Icon && <Icon/>}
      </LinkStyled>
    )
  }
}
