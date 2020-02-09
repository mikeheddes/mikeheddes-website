import React, { useEffect, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'
import * as THREE from 'three'
import { useSpring, animated } from 'react-spring/three'
import { useThree, useFrame } from 'react-three-fiber'
import { Link } from 'gatsby'

import starsAsyncIterator, {
  NUMBER_OF_STARS,
  VALUES_PER_STAR,
  getAngularVelocity,
} from './stars'
import { useTheme } from '../../shared/hooks'
import { vertexShader, fragmentShader } from './shaders'
import Canvas from '../../shared/three-canvas'
import Hand from '../../icons/hand/draw/fill'
import Button from '../../shared/button'
import { delay } from '../../shared/spring'
import { screen } from '../../styles/breakpoints'

const STAR_TIME_OFFSET = -20.0
const STAR_SPEED = 1 // ms / MYr
const pixelRatio = typeof window === 'undefined' ? 1 : window.devicePixelRatio

const easeInOutCubic = t =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

const easeInOutQuart = t =>
  t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

const Filler = styled.div`
  padding-bottom: 125%;

  @media ${screen.sm} {
    padding-bottom: 41.8%;
  }
`

export const Stars = ({ starColor, isNightTheme, starsURL }) => {
  const geometryRef = useRef()

  useEffect(() => {
    let counter = 0
    let isMounted = true

    async function getStars() {
      for await (const star of starsAsyncIterator(starsURL)) {
        if (!isMounted) return

        const { attributes } = geometryRef.current

        attributes.star.array.set(star, counter * VALUES_PER_STAR)
        attributes.angularVelocity.array[counter] = getAngularVelocity(star[0])

        attributes.star.needsUpdate = true
        attributes.angularVelocity.needsUpdate = true

        counter++
      }
    }

    getStars()

    return () => {
      isMounted = false
    }
  }, [starsURL])

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        starColor: { value: new THREE.Color(starColor) },
        time: { value: STAR_TIME_OFFSET },
        isNightTheme: { value: isNightTheme },
        pixelRatio: { value: pixelRatio },
      },
      transparent: true,
      vertexShader,
      fragmentShader,
    })
  }, [isNightTheme, starColor])

  const [position, star, angularVelocity] = useMemo(() => {
    const position = new Float32Array(NUMBER_OF_STARS * 3)
    const star = new Float32Array(NUMBER_OF_STARS * 4).fill(2.0)
    const angularVelocity = new Float32Array(NUMBER_OF_STARS)

    return [position, star, angularVelocity]
  }, [])

  useFrame(({ clock }) => {
    material.uniforms.time.value =
      clock.elapsedTime / STAR_SPEED + STAR_TIME_OFFSET
  })

  return (
    <points material={material}>
      <bufferGeometry attach="geometry" ref={geometryRef}>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={NUMBER_OF_STARS}
          array={position}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'star']}
          count={NUMBER_OF_STARS}
          array={star}
          itemSize={4}
        />
        <bufferAttribute
          attachObject={['attributes', 'angularVelocity']}
          count={NUMBER_OF_STARS}
          array={angularVelocity}
          itemSize={1}
        />
      </bufferGeometry>
    </points>
  )
}

const Camera = props => {
  const ref = useRef()
  const { setDefaultCamera } = useThree()

  useEffect(() => {
    setDefaultCamera(ref.current)
  }, [setDefaultCamera])

  useFrame(() => {
    ref.current.updateMatrixWorld()
  })

  const { pos, rot } = useSpring({
    from: { pos: [32, 0, 0], rot: [0, Math.PI / 2, Math.PI / 2] },
    to: async next => {
      await delay(2500)
      await next({
        pos: [0, 0, 22],
        rot: [0, 0, 0],
        config: { duration: 7000, easing: easeInOutQuart },
      })
      await next({
        pos: [0, 0, 32],
        config: { duration: 40000, easing: easeInOutCubic },
      })
    },
  })

  return (
    <animated.perspectiveCamera
      ref={ref}
      fov={75}
      near={0.1}
      far={1000}
      position={pos}
      rotation={rot}
      {...props}
    />
  )
}

const buttonPosition = css`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  @media ${screen.md} {
    bottom: 30px;
  }
`

const Animation = ({ starsURL }) => {
  const theme = useTheme()
  const isNightTheme = theme.id === 'dark'

  return (
    <Wrapper>
      <Filler />
      <Canvas>
        <Camera />
        <Stars
          starsURL={starsURL}
          starColor={theme.headingObvious}
          isNightTheme={isNightTheme}
        />
      </Canvas>
      <Button
        css={buttonPosition}
        as={Link}
        to="/playground/gtocx-galaxy"
        state={{ fromBlogPost: true }}
      >
        <Hand css="margin-right: 15px;" />
        Interact
      </Button>
    </Wrapper>
  )
}

export default Animation
