import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
  opacity: .6;
  background-color: ${props => props.theme.surfaceProminent};
`

export default class Blur extends Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    radius: PropTypes.number.isRequired,
  }

  static defaultProps = {
    radius: 100,
  }

  handleResize = lodash.debounce(() => {
    this.calcImageSize();
    this.blurImage(this.props.radius);
  }, 200);

  loadImage = (src) => {
    let sourceImage = new Image();
    sourceImage.onload = () => {
      this.calcImageSize();
      this.blurImage(this.props.radius);
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
    this.widthOffset = (offsetWidth - this.newWidth) >> 1;
    this.heightOffset = (offsetHeight - this.newHeight) >> 1;
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

  componentWillReceiveProps(nextProps) {
    if (this.props.src != nextProps.src) {
      this.loadImage(nextProps.src);
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.loadImage(this.props.src);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    this.blurImage(this.props.radius);
  }

  render() {
    return (
      <Canvas innerRef={x => this.canvas = x}/>
    )
  }
}
