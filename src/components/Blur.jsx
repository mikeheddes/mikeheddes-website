/* eslint-env browser */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StackBlur from 'stackblur-canvas';
import lodash from 'lodash';


const styleCanvas = Comp => (
  styled(Comp)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: .6;
    background-color: ${({ theme }) => theme.surfaceProminent};
  `
);

class Blur extends Component {
  handleResize = lodash.debounce(() => {
    this.drawImageFromScratch();
  }, 200);

  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    radius: PropTypes.number,
  }

  static defaultProps = {
    className: '',
    radius: 100,
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

  loadImage = (src) => {
    const sourceImage = new Image();
    sourceImage.onload = () => {
      this.drawImageFromScratch();
    };
    sourceImage.src = src;
    this.sourceImage = sourceImage;
  }

  calcImageSize = () => {
    const { offsetWidth, offsetHeight } = this.canvas;
    const { naturalWidth, naturalHeight } = this.sourceImage;
    this.canvas.width = offsetWidth;
    this.canvas.height = offsetHeight;
    const scaleFactor = Math.max(
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

  drawImage = () => {
    const context = this.canvas.getContext('2d');
    context.drawImage(
      this.sourceImage,
      this.widthOffset,
      this.heightOffset,
      this.newWidth,
      this.newHeight,
    );
  }

  blurImage = (radius) => {
    this.drawImage();
    const { offsetWidth, offsetHeight } = this.canvas;
    StackBlur.canvasRGB(this.canvas, 0, 0, offsetWidth, offsetHeight, Math.round(radius));
  }

  render() {
    const { className } = this.props;
    return (
      <canvas
        className={className}
        ref={(x) => { this.canvas = x; }}
      />
    );
  }
}

export default styleCanvas(Blur);
