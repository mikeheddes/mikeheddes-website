import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { makeSpringConfig } from './spring'
import { absoluteSize } from '../styles'

const RATIOS = {
  poster: 1.333,
  square: 1,
  tall: 0.75,
  screen: 0.618,
  wide: 0.533,
  cinema: 0.418,
}

const Wrapper = styled.div`
  display: block;
  position: relative;
  background-color: var(--surface-subtle);
  width: 100%;
`

const BackgroundColor = styled.div`
  ${absoluteSize};
  background-color: ${(props) => props.color};
`

const FullImage = styled(animated.img)`
  ${absoluteSize};
  object-fit: cover;
  object-position: ${({ objectposition }) => objectposition};
`

const Filler = styled.div`
  width: 100%;
  padding-bottom: ${({ aspectRatio }) => aspectRatio * 100}%;
`

const ProgressiveImage = React.memo(
  ({
    image: imageFile,
    objectPosition,
    sizes,
    alt,
    shape,
    filler: FillerComponent,
    className,
    ...restProps
  }) => {
    const { colors } = imageFile
    const image = imageFile.childImageSharp.fluid

    const wrapperRef = useRef()
    const [isObserved, setIsObserved] = useState(false)

    const [springProps, setSpring] = useSpring(() => ({
      opacity: 0,
      config: makeSpringConfig({ response: 500 }),
    }))

    const desiredAspectRatio =
      shape === 'original' ? 1 / image.aspectRatio : RATIOS[shape]

    useEffect(() => {
      const element = wrapperRef.current

      if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setIsObserved(true)
            lazyImageObserver.unobserve(element)
          }
        })

        lazyImageObserver.observe(element)
        return () => {
          lazyImageObserver.unobserve(element)
        }
      } else {
        setIsObserved(true)
      }
    }, [])

    function handleImageLoad() {
      setSpring({ opacity: 1 })
    }

    return (
      <Wrapper
        {...restProps}
        ref={wrapperRef}
        className={className}
        role="img"
        aria-label={alt}
      >
        <FillerComponent aspectRatio={desiredAspectRatio} />
        <BackgroundColor
          className={className}
          title={alt}
          alt={alt}
          color={colors.lightMuted}
          aria-hidden
        />
        {isObserved && (
          <picture>
            <source type="image/webp" srcSet={image.srcSetWebp} sizes={sizes} />
            <source srcSet={image.srcSet} sizes={sizes} />
            <FullImage
              style={springProps}
              className={className}
              src={image.src}
              sizes={sizes}
              srcSet={image.srcSet}
              alt={alt}
              title={alt}
              objectposition={objectPosition}
              onLoad={handleImageLoad}
            />
          </picture>
        )}
      </Wrapper>
    )
  }
)

ProgressiveImage.defaultProps = {
  shape: 'original',
  objectPosition: '50% 50%',
  filler: Filler,
}

export default ProgressiveImage
