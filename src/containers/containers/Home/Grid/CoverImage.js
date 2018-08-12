import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ImageWrapper from './ImageWrapper'
import Image from './Image'

class CoverImage extends Component{
  render() {
    const { src, srcSet, placeholder, onClick } = this.props;
    return(
      <ImageWrapper uImg={placeholder} onClick={onClick}>
        <Image {...{srcSet, src}} />
      </ImageWrapper>
    )
  }
}

CoverImage.propTypes = {
  placeholder: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  onClick: PropTypes.func,
}

export default CoverImage
