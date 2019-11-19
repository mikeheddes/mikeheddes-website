import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { useSpring, animated } from 'react-spring'

import { makeSpringConfig } from '../../utils/spring'

const Wrapper = styled(animated.div)`
  position: relative;
  overflow: hidden;
  background-color: var(--surface-subtle);
  width: calc(100% - 30px);
  will-change: box-shadow, transform;
  border-radius: 4px;
  margin: 0 15px;

  ${up('sm')} {
    width: 100%;
    margin: 0;
  }
`

const BaseImage = styled(animated.div)`
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url("${({ src }) => src}");
  background-position: ${({ objectposition }) => objectposition};
  transform-origin: center center;
  will-change: filter, transform;
  border-radius: 4px;
`

const FullImage = styled(animated.img)`
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ objectposition }) => objectposition};
  transform-origin: center center;
  will-change: filter, transform;
  border-radius: 4px;
`

const Filler = styled.div`
  width: 100%;
  padding-bottom: 100%;
`

const Image = ({
  base64,
  src,
  srcWebp,
  aspectRatio,
  srcSet,
  srcSetWebp,
  sizes,
  alt,
  shape,
  objectPosition,
  isPlaying,
  ...restProps
}) => {
  const [{ scale, blur, opacity }, set] = useSpring(() => ({
    scale: 1.125,
    blur: 20,
    opacity: 0,
    immediate: false,
    config: makeSpringConfig(),
  }))

  const wrapperStyle = useSpring({
    transform: isPlaying ? 'scale(1)' : 'scale(0.85)',
    boxShadow: isPlaying
      ? '0 24px 30px -12px rgba(0, 0, 0, 0.3)'
      : '0 4px 8px -2px rgba(0, 0, 0, 0.3)',
    immediate: false,
    config: makeSpringConfig({ response: 500 }),
  })

  const handleLoad = () =>
    set({
      scale: 1,
      blur: 0,
      opacity: 1,
    })

  const filter = blur.interpolate(val => `blur(${val}px)`)
  const transform = scale.interpolate(val => `scale(${val})`)

  return (
    <Wrapper {...restProps} style={wrapperStyle}>
      <Filler />
      <BaseImage
        src={base64}
        title={alt}
        alt={alt}
        style={{ transform, filter }}
        objectposition={objectPosition}
        aria-hidden
      />
      <picture>
        <source type="image/webp" srcSet={srcSetWebp} sizes={sizes} />
        <source srcSet={srcSet} sizes={sizes} />
        <FullImage
          src={src}
          sizes={sizes}
          srcSet={srcSet}
          alt={alt}
          title={alt}
          loading="lazy"
          onLoad={handleLoad}
          objectposition={objectPosition}
          style={{
            opacity,
            transform,
            filter,
          }}
        />
      </picture>
    </Wrapper>
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  base64: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  srcSetWebp: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['original', 'tall', 'screen', 'wide', 'square']),
  objectPosition: PropTypes.string,
}

Image.defaultProps = {
  shape: 'original',
  objectPosition: '50% 50%',
}

export default Image
