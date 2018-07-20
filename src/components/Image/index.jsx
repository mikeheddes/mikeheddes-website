import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { radius as rad } from 'style';
import { zDepthPropType, radiusPropType } from 'utils/PropTypes';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Badge from './Badge';
import Content from './Content';

const ratioLookup = {
  'default': 0.618,
  square: 1,
  tall: 0.75,
  wide: 0.533,
};

class Image extends Component {
  static propTypes = {
    src: PropTypes.string,
    badge: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    alt: PropTypes.string,
    srcSet: PropTypes.string,
    shape: PropTypes.oneOf(['tall', 'default', 'original', 'wide', 'square']),
    rounded: PropTypes.bool,
    radius: radiusPropType,
    noBorder: PropTypes.bool,
    zDepth: zDepthPropType,
    onClick: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  static defaultProps = {
    src: undefined,
    badge: undefined,
    children: undefined,
    className: '',
    color: undefined,
    placeholder: undefined,
    zDepth: 0,
    shape: 'default',
    alt: undefined,
    srcSet: undefined,
    rounded: false,
    radius: 'r',
    noBorder: false,
    onClick: undefined,
    width: null,
    height: null,
  };

  state = {
    loaded: false,
  };

  setLoaded = () => {
    this.setState(prev => ({
      ...prev,
      loaded: true,
    }));
  };

  render() {
    const {
      placeholder,
      badge,
      src,
      srcSet,
      color,
      noBorder,
      zDepth,
      onClick,
      alt,
      children,
      className,
      shape,
      width,
      height,
      rounded,
      radius,
    } = this.props;
    // console.log(this.props);
    const { loaded } = this.state;
    const radiusInPx = rounded ? rad[radius] : 0;
    const ratio = shape === 'original' ? height / width || ratioLookup.default : ratioLookup[shape];
    return (
      <Wrapper
        className={className}
        zDepth={zDepth}
        ratio={ratio}
        micro={placeholder}
        color={color && (color.vibrant || color.muted)}
        radius={radiusInPx}
        border={!noBorder}
        onClick={onClick}
        loaded={loaded}
      >
        <Content
          src={src}
          srcSet={srcSet}
          radius={radiusInPx}
          alt={alt}
          onLoad={this.setLoaded}
          loaded={loaded}
        />
        {badge && (
        <Badge>
          {badge}
        </Badge>
        )}
        {children}
      </Wrapper>
    );
  }
}

export default styled(Image)``;
