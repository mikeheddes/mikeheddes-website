import React from 'react'
import { graphql, Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'

import TrackballControl from '../../shared/trackball-control'
import Canvas from '../../shared/three-canvas'
import { GridFinMesh } from '../../posts/spacex-grid-fin-design/animation'
import Xmark from '../../icons/Xmark'
import Button from '../../shared/button'

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

const GridFin = ({ data: { gltf } }) => {
  return (
    <Wrapper>
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
      <Button as={Link} css={buttonPosition} to="/post/spacex-grid-fin-design">
        <Xmark />
      </Button>
    </Wrapper>
  )
}

export default GridFin

export const pageQuery = graphql`
  query gridFinPlayground {
    gltf: file(relativePath: { eq: "spacex-grid-fin-design/grid-fin.glb" }) {
      publicURL
    }
  }
`
