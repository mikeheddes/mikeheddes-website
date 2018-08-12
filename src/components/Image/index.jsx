import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { radius as rad } from 'style';
import { zDepthPropType, radiusPropType } from 'utils/PropTypes';
import styled from 'styled-components';
import ContentBorder from 'components/ContentBorder';
import Wrapper from './Wrapper';
import Badge from './Badge';
import Content from './Content';
import Preload from './Preload';

const ratioLookup = {
  screen: 0.618,
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
    color: undefined,
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

  // componentDidMount() {
  //   const sourceImage = new Image();
  //   sourceImage.onload = () => {
  //     this.drawImageFromScratch();
  //     onLoad();
  //     this.setState({ loaded: true });
  //   };
  //   sourceImage.src = src;
  //   this.sourceImage = sourceImage;
  //
  // }

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
        color={color && (color.vibrant || color.muted)}
        radius={radiusInPx}
        border={!noBorder}
        onClick={onClick}
        loaded={loaded}
      >
        <Preload image={placeholder} loaded={loaded} />
        <Content
          src={src}
          srcSet={srcSet}
          alt={alt}
          onLoad={this.setLoaded}
          loaded={loaded}
        />
        <ContentBorder />
        {badge && <Badge>{badge}</Badge>}
        {children}
      </Wrapper>
    );
  }
}

export default styled(Image)``;
