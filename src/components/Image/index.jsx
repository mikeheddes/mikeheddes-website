import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { widthProp } from 'utils/position';

import { radius } from 'utils/sizes';
import { zDepthPropType } from 'utils/PropTypes';
import Wrapper from './Wrapper';
import Badge from './Badge';
import Content from './Content';

export default class Image extends Component {
  static propTypes = {
    src: PropTypes.string,
    badge: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        vibrant: PropTypes.string,
      }),
    ]),
    alt: PropTypes.string,
    srcSet: PropTypes.string,
    ratio: PropTypes.number,
    square: PropTypes.bool,
    tall: PropTypes.bool,
    wide: PropTypes.bool,
    rounded: PropTypes.bool,
    noBorder: PropTypes.bool,
    zDepth: zDepthPropType,
    onClick: PropTypes.func,
    width: widthProp,
  };

  static defaultProps = {
    src: undefined,
    badge: undefined,
    children: undefined,
    ratio: 0.618,
    color: undefined,
    placeholder: undefined,
    zDepth: 0,
    alt: undefined,
    srcSet: undefined,
    square: false,
    wide: false,
    rounded: false,
    tall: false,
    noBorder: false,
    onClick: undefined,
    width: 'text',
  };

  state = {
    loaded: false,
  };

  componentWillMount() {
    this.determineRatio();
    this.determineRadius();
  }

  setLoaded = () => {
    this.setState(prev => ({
      ...prev,
      loaded: true,
    }));
  };

  determineRatio = () => {
    const {
      square, tall, wide, ratio,
    } = this.props;
    if (process.env.NODE_ENV !== 'production') {
      if ((Number(square) || 0) + (Number(tall) || 0) + (Number(wide) || 0) > 1) {
        // eslint-disable-next-line no-console
        console.warn(
          `Multiple ratio settings have been passed as props. Falling back to the default ratio of ${ratio}`,
        );
        this.ratio = ratio;
      } else {
        this.ratio = ratio;
        if (square) this.ratio = 1;
        if (tall) this.ratio = 0.75;
        if (wide) this.ratio = 0.533;
      }
    } else {
      this.ratio = ratio;
      if (square) this.ratio = 1;
      if (tall) this.ratio = 0.75;
      if (wide) this.ratio = 0.533;
    }
  };

  determineRadius = () => {
    const { rounded } = this.props;
    this.radius = rounded ? radius.s : 0;
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
      width,
    } = this.props;
    const { loaded } = this.state;
    return (
      <Wrapper
        zDepth={zDepth}
        ratio={this.ratio}
        micro={placeholder}
        color={color && (color.vibrant || color.muted)}
        radius={this.radius}
        border={!noBorder}
        onClick={onClick}
        loaded={loaded}
        width={width}
      >
        <Content
          src={src}
          srcSet={srcSet}
          radius={this.radius}
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
