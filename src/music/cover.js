import React from 'react'
import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'
import { useSpring, animated } from 'react-spring'

import { makeSpringConfig } from '../shared/spring'
import ProgressiveImage from '../shared/progressive-image'

const Wrapper = styled(animated.div)`
  width: calc(100% - 30px);
  will-change: box-shadow, transform;
  margin: 0 15px;

  ${up('sm')} {
    width: 100%;
    margin: 0;
  }
`

const sharedClassName = css`
  border-radius: 4px;
`

const CoverImage = ({ isPlaying, ...restProps }) => {
  const style = useSpring({
    transform: isPlaying ? 'scale(1)' : 'scale(0.85)',
    boxShadow: isPlaying
      ? '0 24px 30px -12px rgba(0, 0, 0, 0.3)'
      : '0 4px 8px -2px rgba(0, 0, 0, 0.3)',
    immediate: false,
    config: makeSpringConfig({ response: 500 }),
  })

  return (
    <Wrapper style={style}>
      <ProgressiveImage css={sharedClassName} {...restProps} shape="square" />
    </Wrapper>
  )
}

export default CoverImage
