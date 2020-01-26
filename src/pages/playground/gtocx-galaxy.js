import React from 'react'
import { graphql } from 'gatsby'

import TrackballControl from '../../shared/trackball-control'
import Canvas from '../../shared/three-canvas'
import { Stars } from '../../posts/settlers-of-the-galaxy/animation'
import { useTheme } from '../../shared/hooks'
import PlaygroundLayout from './_playground-layout'

export default function GtocXGalaxy({ data: { stars }, ...restProps }) {
  const theme = useTheme()
  const isNightTheme = theme.id === 'dark'

  return (
    <PlaygroundLayout blogPost="/post/settlers-of-the-galaxy" {...restProps}>
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
    </PlaygroundLayout>
  )
}

export const query = graphql`
  query galaxyAnimationPlayground {
    stars: file(relativePath: { eq: "settlers-of-the-galaxy/stars.min" }) {
      publicURL
    }
  }
`
