import React from 'react'
import { graphql, Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'

import TrackballControl from '../../shared/trackball-control'
import Canvas from '../../shared/three-canvas'
import { Stars } from '../../posts/settlers-of-the-galaxy/animation'
import Xmark from '../../icons/Xmark'
import { useTheme } from '../../shared/hooks'
import Button from '../../shared/button'
import Play from '../../icons/Play/fill'

const Wrapper = styled.div`
  display: block;
  object-fit: contain;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  min-width: 0px;
  max-width: none;
  min-height: 0px;
  max-height: none;
  width: 100%;
  height: 100%;
  transform: none;
  margin: 0px;
  touch-action: none;
  background-color: var(--background);
  cursor: grab;

  :active {
    cursor: grabbing;
  }
`

const buttonPosition = css`
  position: absolute;
  top: 20px;
  left: 20px;

  ${up('md')} {
    top: 30px;
    left: 30px;
  }
`

const GtocXGalaxy = ({ data: { stars } }) => {
  const theme = useTheme()

  const isNightTheme = theme.id === 'dark'

  return (
    <Wrapper>
      <Canvas>
        <Stars
          starsURL={stars.publicURL}
          starColor={theme.headingObvious}
          isNightTheme={isNightTheme}
        />
        <TrackballControl
          rotate
          scale
          initialPosition={[0, 0, 32]}
          rotationSensitivity={(2 * Math.PI) / 1440}
          cameraUp={[1, 0, 0]}
          minDistance={0.5}
          maxDistance={50}
        />
        <directionalLight intensity={0.1} position={[-4, 0, 0]} />
      </Canvas>
      <Button as={Link} css={buttonPosition} to="/post/settlers-of-the-galaxy">
        <Xmark />
      </Button>
    </Wrapper>
  )
}

export default GtocXGalaxy

export const pageQuery = graphql`
  query galaxyAnimationPlayground {
    stars: file(relativePath: { eq: "settlers-of-the-galaxy/stars.min" }) {
      publicURL
    }
  }
`
