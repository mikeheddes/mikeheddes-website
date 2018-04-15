import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { media, center } from 'utils/mixins'
import { space, spaces, radius } from 'utils/sizes'

const ImageWrapper = styled.div`
  padding-bottom: 75%;
  min-height: 100%;
  cursor: pointer;
  ${media.phoneOnly(css`
    border-radius: ${radius.s}px;
  `)}
  overflow: hidden;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-origin: border-box;
  background-color: ${props => props.theme.accentGray2};
  ${props => props.uImg ? css`
    background-image: url('${props.uImg}');
  ` : css`
  animation: AnimationName 2s ease-out infinite;
`}

  @keyframes AnimationName {
      0% {
        background-color: ${props => props.theme.accentGray2};
      }
      50% {
        background-color: ${props => props.theme.accentGray4};
      }
      100% {
        background-color: ${props => props.theme.accentGray2};
      }
  }

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0.5px solid ${props => props.theme.borderContent};
    box-sizing: border-box;
    background-clip: border-box;
    background-origin: border-box;
    ${media.phoneOnly(css`
      border-radius: ${radius.s}px;
    `)}
    ${media.desktop(css`
      border: none;
    `)}
  }

`

ImageWrapper.propTypes = {
  uImg: PropTypes.string,
}

export default ImageWrapper
