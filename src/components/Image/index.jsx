import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { radius as rad } from 'style'
import { zDepthPropType, radiusPropType } from 'utils/PropTypes'
import ContentBorder from 'components/ContentBorder'
import Blur from 'components/Blur'

import Wrapper from './Wrapper'
import Badge from './Badge'
import Content from './Content'
import Preload from './Preload'

const ratioLookup = {
  screen: 0.618,
  square: 1,
  tall: 0.75,
  wide: 0.533,
}

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
  }

  static defaultProps = {
    src: null,
    badge: null,
    children: null,
    className: '',
    placeholder: null,
    zDepth: 0,
    shape: 'screen',
    alt: null,
    srcSet: null,
    rounded: false,
    radius: 'r',
    noBorder: false,
    onClick: null,
    width: null,
    height: null,
  }

  constructor(props) {
    super(props)
    this.setLoaded = this.setLoaded.bind(this)
    this.loadImage = this.loadImage.bind(this)
  }

  state = {
    loaded: false,
    showPreload: false,
  }

  componentDidMount() {
    this.loadImage()
  }

  setLoaded() {
    this.setState({
      loaded: true,
    })
  }

  loadImage() {
    this.setState({ showPreload: true })
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
    } = this.props
    const { loaded, showPreload } = this.state
    const radiusInPx = rounded ? rad[radius] : 0
    const ratio =
      shape === 'original'
        ? height / width || ratioLookup.screen
        : ratioLookup[shape]
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
        <Preload
          src={placeholder}
          radius={radiusInPx}
          isVisible={!showPreload}
        />
        {showPreload && (
          <React.Fragment>
            <Blur
              background={null}
              src={placeholder}
              blur={40}
              radius={radiusInPx}
            />
            <Content
              src={src}
              srcSet={srcSet}
              alt={alt}
              radius={radiusInPx}
              onLoad={this.setLoaded}
              loaded={loaded}
            />
          </React.Fragment>
        )}
        <ContentBorder radius={radiusInPx} />
        {badge && <Badge>{badge}</Badge>}
        {children}
      </Wrapper>
    )
  }
}

export default Image
