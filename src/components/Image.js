import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

const ratioLookup = {
  screen: 0.618,
  square: 1,
  tall: 0.75,
  wide: 0.533,
}

const Wrapper = styled(Img)`
  overflow: hidden;
  max-width: 100% !important;
  z-index: 0;

  & img {
    z-index: 1;
  }

  ${({ border, theme }) =>
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
        z-index: 1;
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
}

Image.defaultProps = {
  depth: 0,
  shape: 'screen',
  radius: 'sm',
  border: true,
}

export default Image
