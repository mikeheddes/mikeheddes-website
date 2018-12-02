import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import * as StackBlur from 'stackblur-canvas'

import OptimizedResize from './OptimizedResize'

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
  background-color: ${({ theme, background }) =>
    background && theme[background]};
  ${({ radius }) => radius && `border-radius: ${radius}px`};
`
// TODO: add base64 support
class Blur extends Component {
  scaleLookup = {
    cover: 'max',
    contain: 'min',
  }

  canvas = React.createRef()

  state = {
    loaded: false,
    StackBlur: null,
  }

  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    base64: PropTypes.string,
    blur: PropTypes.number,
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
    blur: 100,
    opacity: 1,
    onLoad: () => {},
    fit: 'cover',
    background: 'surfaceProminent',
  }

  constructor(props) {
    super(props)
    this.loadImage = this.loadImage.bind(this)
    this.calcImageSize = this.calcImageSize.bind(this)
    this.drawImageFromScratch = this.drawImageFromScratch.bind(this)
    this.blurImage = this.blurImage.bind(this)
    this.drawImage = this.drawImage.bind(this)
  }

  componentDidMount() {
    const { src } = this.props
    this.loadImage(src)
  }

  componentDidUpdate(prevProps) {
    const { src, blur } = this.props
    if (src !== prevProps.src) {
      this.loadImage(prevProps.src)
    }
    this.blurImage(blur)
  }

  loadImage(src) {
    const { onLoad } = this.props
    const sourceImage = new Image()
    sourceImage.onload = () => {
      this.drawImageFromScratch()
      this.setState({ loaded: true })
      onLoad()
    }
    sourceImage.src = src
    this.sourceImage = sourceImage
  }

  calcImageSize() {
    const { fit } = this.props
    const { offsetWidth, offsetHeight } = this.canvas.current
    const { naturalWidth, naturalHeight } = this.sourceImage
    this.canvas.current.width = offsetWidth
    this.canvas.current.height = offsetHeight
    const scaleFactor = Math[this.scaleLookup[fit]](
      offsetWidth / naturalWidth,
      offsetHeight / naturalHeight
    )
    this.newWidth = naturalWidth * scaleFactor
    this.newHeight = naturalHeight * scaleFactor
    // Uses bitwise operation because of performance,
    // bitwise >> 1  ~ (x / 2) roundend downward.
    // eslint-disable-next-line no-bitwise
    this.widthOffset = (offsetWidth - this.newWidth) >> 1
    // eslint-disable-next-line no-bitwise
    this.heightOffset = (offsetHeight - this.newHeight) >> 1
  }

  drawImageFromScratch() {
    const { blur } = this.props
    this.calcImageSize()
    this.blurImage(blur)
  }

  blurImage(radius) {
    this.drawImage()
    const { offsetWidth, offsetHeight } = this.canvas.current
    StackBlur.canvasRGB(
      this.canvas.current,
      0,
      0,
      offsetWidth,
      offsetHeight,
      Math.round(radius)
    )
  }

  drawImage() {
    const { theme, background } = this.props
    const context = this.canvas.current.getContext('2d')
    context.fillStyle = theme[background]
    context.fillRect(
      0,
      0,
      this.canvas.current.width,
      this.canvas.current.height
    )
    context.drawImage(
      this.sourceImage,
      this.widthOffset,
      this.heightOffset,
      this.newWidth,
      this.newHeight
    )
  }

  render() {
    const { _blur, ...restProps } = this.props
    const { loaded } = this.state
    return (
      <React.Fragment>
        <Canvas loaded={loaded} ref={this.canvas} {...restProps} />
        <OptimizedResize onResize={this.drawImageFromScratch} />
      </React.Fragment>
    )
  }
}

export default withTheme(Blur)
