import React from 'react'
import PropTypes from 'prop-types'
import { contentTypes } from 'actions/content'
import Badge from 'components/Badge'
import Image from 'components/Image'
import Link from 'components/Link'

import { EyebrowRow, Wrapper } from './imageBoxComponents'

const ImageBox = props => {
  const { contentType, eyebrow, image, to } = props
  return (
    <Wrapper>
      <EyebrowRow>
        <Badge fillType="fade" size="l" marginRight="auto">
          {eyebrow}
        </Badge>
        <Link noIcon to={`/${contentType}`}>
          See all
        </Link>
      </EyebrowRow>
      <Link to={to} noIcon noTheme noInner>
        <Image {...image} rounded zDepth={6} />
      </Link>
    </Wrapper>
  )
}

ImageBox.propTypes = {
  contentType: PropTypes.oneOf(contentTypes).isRequired,
  eyebrow: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }),
  to: PropTypes.string,
}

ImageBox.defaultProps = {
  image: undefined,
  to: '#',
}

export default ImageBox
