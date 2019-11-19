import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { contentWrapper } from '../../styles'
import { fluidFont } from '../../styles/mixins'
import { makeSpringConfig } from '../../utils/spring'

const { min, max } = Math

const Name = styled(animated.h1)`
  ${fluidFont(38, 71)};
  color: var(--heading-obvious);
  font-weight: 700;
  margin: 0;
  margin-bottom: 8px;
`

const Phrase = styled(animated.h2)`
  ${fluidFont(35, 65)};
  color: var(--text-subtle);
  font-weight: 700;
  margin: 0;
`

const Wrapper = styled.header`
  ${contentWrapper};
  text-align: center;
  margin-top: 210px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const useWindowScroll = onScroll => {
  const handler = useRef()
  handler.current = onScroll

  useEffect(() => {
    let animationFrameId

    const onFrame = () => {
      handler.current()
      animationFrameId = undefined
    }

    const onEvent = () => {
      if (animationFrameId) return
      animationFrameId = requestAnimationFrame(onFrame)
    }

    window.addEventListener('scroll', onEvent, { passive: true })

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      window.removeEventListener('scroll', onEvent)
    }
  }, [])
}

const opacityFromScrollPosition = (scrollPosition, fadeRegion, offset = 0) => {
  const lowerBound = max(fadeRegion + offset - scrollPosition, 0)
  const upperBound = min(fadeRegion, lowerBound)

  return upperBound / fadeRegion
}

const Hero = () => {
  const [{ phraseOpacity, nameOpacity }, set] = useSpring(() => ({
    phraseOpacity: 1,
    nameOpacity: 1,
    config: makeSpringConfig({ response: 200 }),
  }))

  useWindowScroll(() => {
    const y = window.pageYOffset

    const nameOpacity = opacityFromScrollPosition(y, 250, 130)
    const phraseOpacity = opacityFromScrollPosition(y, 250)

    set({ phraseOpacity, nameOpacity, immediate: true })
  })

  return (
    <Wrapper>
      <Name style={{ opacity: nameOpacity }}>Mike Heddes</Name>
      <Phrase style={{ opacity: phraseOpacity }}>Curious. Creative.</Phrase>
    </Wrapper>
  )
}

export default Hero
