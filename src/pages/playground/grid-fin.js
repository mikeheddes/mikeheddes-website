import React from 'react'
import { graphql } from 'gatsby'

import TrackballControl from '../../shared/trackball-control'
import Canvas from '../../shared/three-canvas'
import { GridFinMesh } from '../../posts/spacex-grid-fin-design/animation'
import PlaygroundLayout from './_playground-layout'

export default function GridFin({ data: { gltf }, ...restProps }) {
  return (
    <PlaygroundLayout blogPost="/post/spacex-grid-fin-design" {...restProps}>
      <Canvas>
        <GridFinMesh url={gltf.publicURL} />
        <TrackballControl
          rotate
          scale
          initialPosition={[2, 0, 0]}
          cameraUp={[0, 1, 0]}
          maxDistance={5}
        />
        <directionalLight intensity={0.1} position={[-4, 0, 0]} />
      </Canvas>
    </PlaygroundLayout>
  )
}

export const page = graphql`
  query gridFinPlayground {
    gltf: file(relativePath: { eq: "spacex-grid-fin-design/grid-fin.glb" }) {
      publicURL
    }
  }
`
