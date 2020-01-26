import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

import { screen } from '../styles/breakpoints'
import { contentWrapper, fluidFont } from '../styles'
import { makeSpringConfig } from '../shared/spring'
import ProgressiveImage from '../shared/progressive-image'

const Name = styled.h1`
  ${fluidFont(36, 61)};
  color: var(--heading-obvious);
  font-weight: 700;
  margin: 0;
  margin-top: 80px;
  margin-bottom: 8px;
`

const SubName = styled.h1.attrs({ role: 'button' })`
  ${fluidFont(21, 24)};
  color: #fff;
  font-weight: 600;
  margin: 0;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  line-height: 1.4;
  cursor: pointer;
  transition: opacity 100ms ease-out;

  :active {
    opacity: 0.5;
  }
`

const SubSubName = styled.span`
  ${fluidFont(18, 18)};
  opacity: 0.8;
`

const Close = styled.div.attrs({ role: 'button' })`
  ${fluidFont(18, 18)};
  color: var(--heading-obvious);
  font-weight: 500;
  padding: 15px 0;
  margin: 15px 0;
  cursor: pointer;
  transition: opacity 100ms ease-out;

  :active {
    opacity: 0.5;
  }
`

const Phrase = styled.h2`
  ${fluidFont(33, 57)};
  color: hsla(0, 0%, var(--foreground-lightness), 0.7);
  font-weight: 700;
  margin: 0;
`

const Description = styled.h3`
  ${fluidFont(21, 26)};
  color: hsla(0, 0%, var(--foreground-lightness), 0.8);
  font-weight: 600;
  margin: 0;
  margin-top: 30px;
  margin-bottom: auto;
  line-height: 1.45;
`

const ColorAnimation = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  background-color: var(--surface);
  will-change: opacity;

  @supports (backdrop-filter: blur(10px)) {
    background-color: var(--surface-backdrop);
    backdrop-filter: blur(20px) saturate(1.1);
  }
`

const TextAnimation = styled(animated.div)`
  ${contentWrapper};
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Filler = styled.div`
  width: 100%;
  height: 500px;

  @media ${screen.lg} {
    height: auto;
    padding-bottom: 34.8%;
  }
`

const AboutScreen = ({ progress, onClose }) => {
  const transform = progress.interpolate(val => `scale(${1.2 - 0.2 * val})`)

  return (
    <ColorAnimation style={{ opacity: progress }}>
      <TextAnimation style={{ transform }}>
        <Name>Mike Heddes</Name>
        <Phrase>Curious. Creative.</Phrase>
        <Description>
          I’m passionate about art, technology, and science. I want to stay
          curious and use my creativity to develop innovative and artistic
          products, constantly seeking perfection.
        </Description>
        <Close onClick={onClose}>Close about</Close>
      </TextAnimation>
    </ColorAnimation>
  )
}

export default function Hero({ image }) {
  const [isAboutVisible, setIsAboutVisible] = useState(false)

  const transitions = useTransition(isAboutVisible, null, {
    from: { progress: 0 },
    enter: { progress: 1 },
    leave: { progress: 0 },
    config: makeSpringConfig({ response: 500 }),
  })

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsAboutVisible(true), 750)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div css="position: relative;">
      <ProgressiveImage
        {...image.childImageSharp.fluid}
        alt="Mike Heddes"
        objectPosition="50% 25%"
        filler={Filler}
        shape="cinema"
      />
      <SubName onClick={() => setIsAboutVisible(true)}>
        <SubSubName>About</SubSubName>
        <br />
        Mike Heddes
      </SubName>
      {transitions.map(({ item, key, props }) => {
        if (!item) return null
        return (
          <AboutScreen
            {...props}
            key={key}
            onClose={() => setIsAboutVisible(false)}
          />
        )
      })}
    </div>
  )
}
