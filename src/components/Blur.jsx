/* eslint-env browser */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import StackBlur from 'stackblur-canvas';
import lodash from 'lodash';

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: opacity 1.25s cubic-bezier(0, 0, 0.25, 1);
  opacity: ${({ opacity, loaded }) => (loaded ? opacity : 0)};
  background-color: ${({ theme, background }) => theme[background]};
`;

class Blur extends Component {
  handleResize = lodash.debounce(() => {
    this.drawImageFromScratch();
  }, 200);

  scaleLookup = {
    cover: 'max',
    contain: 'min',
  }

  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    radius: PropTypes.number,
    opacity: PropTypes.number,
    onLoad: PropTypes.func,
    fit: PropTypes.oneOf(['cover', 'contain']),
    background: PropTypes.oneOf(['surfaceProminent', 'background', 'surface']),
    theme: PropTypes.shape({
      background: PropTypes.string.isRequired,
      surfaceProminent: PropTypes.string.isRequired,
      surface: PropTypes.string.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    className: '',
    radius: 100,
    opacity: 1,
    onLoad: () => {},
    fit: 'cover',
    background: 'surfaceProminent',
  }

  state = {
    loaded: false,
  }

  componentDidMount() {
    const { src } = this.props;
    window.addEventListener('resize', this.handleResize);
    this.loadImage(src);
  }

  componentWillReceiveProps(nextProps) {
    const { src } = this.props;
    if (src !== nextProps.src) {
      this.loadImage(nextProps.src);
    }
  }

  componentDidUpdate() {
    const { radius } = this.props;
    this.blurImage(radius);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  setCanvasRef = (node) => { this.canvas = node; };

  loadImage = (src) => {
    const { onLoad } = this.props;
    const sourceImage = new Image();
    sourceImage.onload = () => {
      this.drawImageFromScratch();
      onLoad();
      this.setState(prev => ({ ...prev, loaded: true }));
    };
    sourceImage.src = src;
    this.sourceImage = sourceImage;
  }

  calcImageSize = () => {
    const { fit } = this.props;
    const { offsetWidth, offsetHeight } = this.canvas;
    const { naturalWidth, naturalHeight } = this.sourceImage;
    this.canvas.width = offsetWidth;
    this.canvas.height = offsetHeight;
    const scaleFactor = Math[this.scaleLookup[fit]](
      offsetWidth / naturalWidth,
      offsetHeight / naturalHeight,
    );
    this.newWidth = naturalWidth * scaleFactor;
    this.newHeight = naturalHeight * scaleFactor;
    // Uses bitwise operation because of performance,
    // bitwise >> 1  ~ (x / 2) roundend downward.
    // eslint-disable-next-line no-bitwise
    this.widthOffset = (offsetWidth - this.newWidth) >> 1;
    // eslint-disable-next-line no-bitwise
    this.heightOffset = (offsetHeight - this.newHeight) >> 1;
  }

  drawImageFromScratch = () => {
    const { radius } = this.props;
    this.calcImageSize();
    this.blurImage(radius);
  }

  blurImage = (radius) => {
    this.drawImage();
    const { offsetWidth, offsetHeight } = this.canvas;
    StackBlur.canvasRGB(this.canvas, 0, 0, offsetWidth, offsetHeight, Math.round(radius));
  }

  drawImage = () => {
    const { theme, background } = this.props;
    const context = this.canvas.getContext('2d');
    context.fillStyle = theme[background];
    context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    context.drawImage(
      this.sourceImage,
      this.widthOffset,
      this.heightOffset,
      this.newWidth,
      this.newHeight,
    );
  }

  render() {
    const { className, opacity, background } = this.props;
    const { loaded } = this.state;
    return (
      <Canvas
        className={className}
        loaded={loaded}
        opacity={opacity}
        background={background}
        back
        innerRef={this.setCanvasRef}
      />
    );
  }
}

export default styled(withTheme(Blur))``;
