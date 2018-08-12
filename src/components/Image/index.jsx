import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons';
import { radius as rad } from 'style';
import { zDepthPropType, radiusPropType } from 'utils/PropTypes';
import styled from 'styled-components';
import ContentBorder from 'components/ContentBorder';
import Blur from 'components/Blur';

import Wrapper from './Wrapper';
import Badge from './Badge';
import Content from './Content';
// import Preload from './Preload';
// import delay from 'delay';

const ratioLookup = {
  screen: 0.618,
  square: 1,
  tall: 0.75,
  wide: 0.533,
};

// const ImageAnimation = Keyframes.Spring({
//   // Slots can take arrays/chains,
//   loading: { from: { opacity: 0 }, to: { opacity: 0 } },
//   // single items,
//   loaded: {
//     delay: 1000,
//     to: { opacity: 1 },
//     duration: 1000,
//     easing: Easing.linear,
//   },
// });
//
class Image extends Component {
  static propTypes = {
    src: PropTypes.string,
    badge: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    alt: PropTypes.string,
    srcSet: PropTypes.string,
    shape: PropTypes.oneOf(['tall', 'screen', 'original', 'wide', 'square']),
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
    placeholder: undefined,
    zDepth: 0,
    shape: 'screen',
    alt: undefined,
    srcSet: undefined,
    rounded: false,
    radius: 'r',
    noBorder: false,
    onClick: undefined,
    width: null,
    height: null,
  };

  constructor(props) {
    super(props);
    this.setLoaded = this.setLoaded.bind(this);
  }

  state = {
    loaded: false,
  };

  setLoaded() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const {
      placeholder,
      badge,
      src,
      srcSet,
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
    const { loaded } = this.state;
    const radiusInPx = rounded ? rad[radius] : 0;
    const ratio =
      shape === 'original'
        ? height / width || ratioLookup.screen
        : ratioLookup[shape];
    return (
      <Wrapper
        className={className}
        zDepth={zDepth}
        ratio={ratio}
        micro={placeholder}
        border={!noBorder}
        onClick={onClick}
        loaded={loaded}
      >
        {placeholder && (
          <Blur
            background={null}
            src={placeholder}
            blur={40}
            radius={radiusInPx}
          />
        )}
        <Spring
          native
          impl={TimingAnimation}
          config={{ duration: 250, easing: Easing.easeIn }}
          from={{ opacity: 1 }}
          to={{ opacity: Number(loaded) }}
        >
          {style => (
            <Content
              style={style}
              src={src}
              srcSet={srcSet}
              alt={alt}
              radius={radiusInPx}
              onLoad={this.setLoaded}
              // loaded={loaded}
            />
          )}
        </Spring>
        <ContentBorder radius={radiusInPx} />
        {badge && <Badge>{badge}</Badge>}
        {children}
      </Wrapper>
    );
  }
}

export default styled(Image)``;
