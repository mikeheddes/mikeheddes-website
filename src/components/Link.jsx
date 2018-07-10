import React, { Component } from 'react';
import { Link as Anchor } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ForwardSVG from 'svg/Forward';
import ExitSVG from 'svg/Exit';

const styleLink = Comp => styled(Comp)`
  ${({ noTheme }) => (noTheme
    ? css`
          text-decoration: none;
        `
    : css`
          color: ${({ theme }) => theme.link};
          ${({ noFontSize }) => !noFontSize
            && css`
              font-size: 17px;
            `};
          text-decoration: none;
          transition: opacity 150ms cubic-bezier(0.19, 1, 0.22, 1);
          -webkit-tap-highlight-color: transparent;

          &:hover {
            text-decoration: underline;
          }

          &:active {
            opacity: 0.6;
          }
        `)};
  cursor: pointer;
`;

const ToPropToHref = (props) => {
  const { to, children, ...other } = props;
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

ToPropToHref.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

class Link extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    download: PropTypes.bool,
    to: PropTypes.string.isRequired,
    // eslint-disable-next-line react/no-unused-prop-types
    noFontSize: PropTypes.bool,
    noIcon: PropTypes.bool,
    noInner: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    noTheme: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    download: false,
    noFontSize: false,
    noIcon: false,
    noInner: false,
    noTheme: false,
  };

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
  };

  getIcon = (linkType) => {
    switch (linkType) {
      case 'DOWNLOAD':
        return null;
      case 'INTERNAL':
        return ForwardSVG;
      case 'EXIT':
        return ExitSVG;
      default:
        return null;
    }
  };

  getTarget = (linkType) => {
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
  };

  render() {
    const {
      children, className, noIcon, noInner, to,
    } = this.props;
    const linkType = this.getLinkType();
    const target = this.getTarget(linkType);
    const href = linkType === 'DOWNLOAD' ? '#' : to;
    const Icon = this.getIcon(linkType);
    const Wrapper = target ? ToPropToHref : Anchor;
    return (
      <Wrapper className={className} target={target} to={href}>
        {!noInner ? (
          <span>
            {children}
          </span>
        ) : children}
        {!noIcon && Icon && <Icon />}
      </Wrapper>
    );
  }
}

export default styleLink(Link);
