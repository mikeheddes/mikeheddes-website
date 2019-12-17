import React from 'react'
import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'
import { useSpring, animated } from 'react-spring'

import { makeSpringConfig } from '../shared/spring'
import ProgressiveImage from '../shared/progressive-image'

const Wrapper = styled(animated.div)`
  position: relative;
  width: calc(100% - 30px);
  margin: 0 15px;
  border-radius: 4px;

  ${up('sm')} {
    width: 100%;
    margin: 0;
  }
`

const SmallShadow = styled(animated.div)`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  border-radius: 4px;
  box-shadow: 0 0.2px 0.4px -2px rgba(0, 0, 0, 0.107),
    0 0.5px 1px -2px rgba(0, 0, 0, 0.154),
    0 1.2px 2.4px -2px rgba(0, 0, 0, 0.201), 0 4px 8px -2px rgba(0, 0, 0, 0.3);
`

const BigShadow = styled(animated.div)`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
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

const CoverImage = ({ isPlaying, ...restProps }) => {
  const { transform, opacity } = useSpring({
    transform: isPlaying ? 'scale(1)' : 'scale(0.85)',
    opacity: isPlaying ? 1 : 0,
    immediate: false,
    config: makeSpringConfig({ response: 500 }),
  })

  return (
    <Wrapper style={{ transform }}>
      <SmallShadow style={{ opacity: opacity.interpolate(v => 1 - v) }} />
      <BigShadow style={{ opacity }} />
      <ProgressiveImage css={sharedClassName} {...restProps} shape="square" />
    </Wrapper>
  )
}

export default CoverImage
