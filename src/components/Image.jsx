import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { transparentize as fade } from 'polished'

import Box from './Box'
import { radius as rad, depth as DEPTH } from '../styles'
import { depthPropType } from '../styles/depth'
import { radiusPropType } from '../styles/radius'
import space, { marginPropTypes, setMargin } from '../styles/space'

const ratioLookup = {
  screen: 0.618,
  square: 1,
  tall: 0.75,
  wide: 0.533,
}

const StyledImage = styled.img`
  max-width: 100%;
  display: block;

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
  ${({ radius, hasCapton }) =>
    radius &&
    css`
      border-top-left-radius: ${rad[radius]};
      border-top-right-radius: ${rad[radius]};

      ${!hasCapton &&
        css`
          border-bottom-left-radius: ${rad[radius]};
          border-bottom-right-radius: ${rad[radius]};
        `}
    `}
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
    `}
`

const Caption = styled.figcaption`
  font-size: 0.9em;
  background-color: ${({ theme }) => theme.surface};
  padding: ${space.xr} ${space.md};
  color: ${({ theme }) => fade(0.5, theme.title)};
  text-align: center;
  border-top: 5px solid;
  border-color: ${({ theme }) => fade(0.3, theme.link)};
`

const Figure = styled.figure`
  ${setMargin};
  overflow: hidden;
  position: relative;
  ${({ radius }) => radius && `border-radius: ${rad[radius]};`};
  ${({ depth }) => depth && `box-shadow: ${DEPTH[depth]};`};
`

const Image = ({
  caption,
  className,
  children,
  shape,
  border,
  depth,
  radius,
  src,
  alt,
  srcSet,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  ...restProps
}) => (
  <Figure
    className={className}
    radius={radius}
    margin={margin}
    marginTop={marginTop}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginBottom={marginBottom}
    depth={depth}
    border={border}
  >
    <RatioWrapper
      ratio={ratioLookup[shape]}
      border={border}
      radius={radius}
      hasCapton={!!caption}
      {...restProps}
    >
      <StyledImage
        ratio={ratioLookup[shape]}
        radius={radius}
        hasCapton={!!caption}
        src={src}
        alt={alt}
        srcSet={srcSet}
      />
      {children && (
        <Box position="absolute" top="0" bottom="0" left="0" right="0">
          {children}
        </Box>
      )}
    </RatioWrapper>
    {caption && <Caption>{caption}</Caption>}
  </Figure>
)

Image.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
  caption: PropTypes.node,
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
  caption: null,
}

export default Image
