import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
// import { transparentize as fade } from 'polished'
import Img from 'gatsby-image'

// import Box from './Box'
import { radius as rad, depth as DEPTH } from '../styles'
import { depthPropType } from '../styles/depth'
import { radiusPropType } from '../styles/radius'
// import space, { marginPropTypes, setMargin } from '../styles/space'
import { marginPropTypes, setMargin } from '../styles/space'

const ratioLookup = {
  screen: 0.618,
  square: 1,
  tall: 0.75,
  wide: 0.533,
}

// const Caption = styled.figcaption`
//   font-size: 0.9em;
//   background-color: ${({ theme }) => theme.surface};
//   padding: ${space.xr} ${space.md};
//   color: ${({ theme }) => fade(0.5, theme.title)};
//   text-align: center;
//   border-top: 5px solid;
//   border-color: ${({ theme }) => fade(0.3, theme.link)};
// `

const Wrapper = styled(Img)`
  overflow: hidden;
  max-width: 100% !important;
  ${({ depth }) => depth && `box-shadow: ${DEPTH[depth]};`};
  ${setMargin};

  ${({ border, radius, hasCapton, theme }) =>
    border &&
    css`
      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 1px solid ${theme.borderContent};
      }

      &,
      &:after,
      & .gatsby-resp-image-image,
      & .gatsby-resp-image-background-image,
      & img {
        ${radius &&
          css`
            border-top-left-radius: ${rad[radius]};
            border-top-right-radius: ${rad[radius]};

            ${!hasCapton &&
              css`
                border-bottom-left-radius: ${rad[radius]};
                border-bottom-right-radius: ${rad[radius]};
              `}
          `}
      }
    `};
`

const Image = props => {
  const { shape } = props
  let { fluid, fixed } = props
  if (fixed && shape !== 'original') {
    fixed = { ...fluid, aspectRatio: 1 / ratioLookup[shape] }
  }
  if (fluid && shape !== 'original') {
    fluid = { ...fluid, aspectRatio: 1 / ratioLookup[shape] }
  }
  return <Wrapper {...props} fixed={fixed} fluid={fluid} />
}

Image.propTypes = {
  fixed: PropTypes.object,
  fluid: PropTypes.object,
  caption: PropTypes.node,
  className: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  shape: PropTypes.oneOf(['tall', 'screen', 'original', 'wide', 'square']),
  radius: radiusPropType,
  border: PropTypes.bool,
  depth: depthPropType,
  ...marginPropTypes,
}

Image.defaultProps = {
  depth: 0,
  shape: 'screen',
  radius: 'sm',
  border: true,
}

export default Image
