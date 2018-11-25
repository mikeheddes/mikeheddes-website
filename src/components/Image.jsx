import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Box from './Box'
import { radius as rad, depth as DEPTH } from '../styles'
import { depthPropType } from '../styles/depth'
import { radiusPropType } from '../styles/radius'
import { marginPropTypes, setMargin } from '../styles/space'

const ratioLookup = {
  screen: 0.618,
  square: 1,
  tall: 0.75,
  wide: 0.533,
}

const StyledImage = styled.img`
  max-width: 100%;

  ${({ ratio }) =>
    ratio &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    `};

  ${({ onClick }) => onClick && `cursor: pointer;`};
`

const RatioWrapper = styled.div`
  position: relative;
  overflow: hidden;

  ${({ ratio }) =>
    ratio
      ? css`
          padding-bottom: ${ratio * 100}%;
        `
      : css`
          width: 100%;
        `};

  ${({ radius }) => radius && `border-radius: ${rad[radius]};`};
  ${({ depth }) => depth && `box-shadow: ${DEPTH[depth]};`};
  ${setMargin};
`

const Image = ({
  className,
  children,
  shape,
  depth,
  radius,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  ...restProps
}) => (
  <RatioWrapper
    className={className}
    radius={radius}
    ratio={ratioLookup[shape]}
    depth={depth}
    margin={margin}
    marginTop={marginTop}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginBottom={marginBottom}
  >
    <StyledImage ratio={ratioLookup[shape]} {...restProps} />
    {children && (
      <Box position="absolute" top={0} bottom={0} left={0} rigth={0}>
        {children}
      </Box>
    )}
  </RatioWrapper>
)

Image.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  alt: PropTypes.string,
  srcSet: PropTypes.string,
  shape: PropTypes.oneOf(['tall', 'screen', 'original', 'wide', 'square']),
  radius: radiusPropType,
  border: PropTypes.bool,
  depth: depthPropType,
  width: PropTypes.number,
  height: PropTypes.number,
  ...marginPropTypes,
}

Image.defaultProps = {
  src: null,
  children: null,
  className: '',
  depth: 0,
  shape: 'screen',
  alt: null,
  srcSet: null,
  radius: 'sm',
  border: true,
  width: null,
  height: null,
}

export default Image
