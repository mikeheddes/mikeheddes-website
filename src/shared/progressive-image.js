import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

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

const BaseImage = styled.div`
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url("${({ src }) => src}");
  background-position: ${({ objectposition }) => objectposition};
`

const FullImage = styled.img`
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ objectposition }) => objectposition};
`

const Filler = styled.div`
  width: 100%;
  padding-bottom: ${({ aspectRatio }) => aspectRatio * 100}%;
`

const ProgressiveImage = React.memo(
  ({
    base64,
    src,
    srcWebp,
    aspectRatio: imageAspectRatio,
    srcSet,
    srcSetWebp,
    sizes,
    alt,
    shape,
    objectPosition,
    filler: FillerComponent,
    className,
    ...restProps
  }) => {
    const wrapperRef = useRef()
    const [isObserved, setIsObserved] = useState(false)

    const desiredAspectRatio =
      shape === 'original' ? 1 / imageAspectRatio : RATIOS[shape]

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

    return (
      <Wrapper
        {...restProps}
        ref={wrapperRef}
        className={className}
        role="img"
        aria-label={alt}
      >
        <FillerComponent aspectRatio={desiredAspectRatio} />
        <BaseImage
          className={className}
          src={base64}
          title={alt}
          alt={alt}
          objectposition={objectPosition}
          aria-hidden
        />
        {isObserved && (
          <picture>
            <source type="image/webp" srcSet={srcSetWebp} sizes={sizes} />
            <source srcSet={srcSet} sizes={sizes} />
            <FullImage
              className={className}
              src={src}
              sizes={sizes}
              srcSet={srcSet}
              alt={alt}
              title={alt}
              objectposition={objectPosition}
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
