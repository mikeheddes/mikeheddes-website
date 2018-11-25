import React from 'react'
import PropTypes from 'prop-types'
import Badge from '../../components/Badge'
import Image from '../../components/Image'
import Link from '../../components/Link'

import { EyebrowRow, ImageBoxWrapper } from './components'

const ImageBox = ({ eyebrow, image, url }) => {
  let baseUrl = url.split('/')
  baseUrl.pop()
  baseUrl = baseUrl.join('/')
  return (
    <ImageBoxWrapper>
      <EyebrowRow>
        <Badge fillType="fade" size="lg" marginRight="auto">
          {eyebrow}
        </Badge>
        <Link to={baseUrl}>See all</Link>
      </EyebrowRow>
      <Link to={url}>
        <Image src={image} depth={6} />
      </Link>
    </ImageBoxWrapper>
  )
}

ImageBox.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default ImageBox
