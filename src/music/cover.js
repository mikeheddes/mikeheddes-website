import React, { useEffect, useCallback } from 'react'
import styled, { css } from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { makeSpringConfig } from '../shared/spring'
import ProgressiveImage from '../shared/progressive-image'
import { screen } from '../styles/breakpoints'
import { absoluteSize } from '../styles'

const MAX_TILT = 5

const Wrapper = styled(animated.div)`
  position: relative;
  width: calc(100% - 30px);
  margin: 0 15px;
  border-radius: 4px;

  @media ${screen.sm} {
    width: 100%;
    margin: 0;
  }
`

const SmallShadow = styled(animated.div)`
  ${absoluteSize};
  border-radius: 4px;
  box-shadow: 0 0.2px 0.4px -2px rgba(0, 0, 0, 0.107),
    0 0.5px 1px -2px rgba(0, 0, 0, 0.154),
    0 1.2px 2.4px -2px rgba(0, 0, 0, 0.201), 0 4px 8px -2px rgba(0, 0, 0, 0.3);
`

const BigShadow = styled(animated.div)`
  ${absoluteSize};
  border-radius: 4px;
  box-shadow: 0 1.1px 1.1px -12px rgba(0, 0, 0, 0.057),
    0 2.7px 2.7px -12px rgba(0, 0, 0, 0.083),
    0 5px 5px -12px rgba(0, 0, 0, 0.103),
    0 8.9px 8.9px -12px rgba(0, 0, 0, 0.123),
    0 16.7px 16.7px -12px rgba(0, 0, 0, 0.147),
    0 40px 40px -12px rgba(0, 0, 0, 0.2);
`

const sharedClassName = css`
  border-radius: 4px;
`

const trans = (x, y) =>
  `perspective(500px) rotateX(${-y * MAX_TILT}deg) rotateY(${x * MAX_TILT}deg)`

export default function CoverImage({ isPlaying, ...restProps }) {
  const { transform, opacity } = useSpring({
    transform: isPlaying ? 'scale(1)' : 'scale(0.88)',
    opacity: isPlaying ? 1 : 0,
    immediate: false,
    config: makeSpringConfig({ response: 400 }),
  })

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: makeSpringConfig({ response: 500, damping: 0.5, mass: 1.5 }),
  }))

  const resetTilt = useCallback(() => set({ xy: [0, 0] }), [set])
  const handleMouseOver = useCallback(
    event => {
      const { clientX, clientY } = event
      const box = event.target.getBoundingClientRect()

      const centerX = box.x + box.width / 2
      const centerY = box.y + box.height / 2

      const unitX = (clientX - centerX) / box.width
      const unitY = (clientY - centerY) / box.height

      set({ xy: [unitX, unitY] })
    },
    [set]
  )

  useEffect(() => {
    if (!isPlaying) {
      resetTilt()
    }
  }, [isPlaying, resetTilt])

  return (
    <Wrapper
      style={{ transform }}
      onMouseMove={isPlaying ? handleMouseOver : undefined}
      onMouseLeave={resetTilt}
    >
      <animated.div style={{ transform: props.xy.interpolate(trans) }}>
        <SmallShadow style={{ opacity: opacity.interpolate(v => 1 - v) }} />
        <BigShadow style={{ opacity }} />
        <ProgressiveImage css={sharedClassName} {...restProps} shape="square" />
      </animated.div>
    </Wrapper>
  )
}
