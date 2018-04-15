import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { media, center } from 'utils/mixins'
import { space, spaces } from 'utils/sizes'

const Image = styled.img`
  position: absolute;
  object-fit: cover;
  object-position: center center;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
`

Image.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
}

export default Image
