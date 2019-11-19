import React, { useEffect, useMemo, useRef, Suspense } from 'react'
import { Canvas, useFrame, useThree, useLoader } from 'react-three-fiber'
import { animated } from 'react-spring/three'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useTrackballControl } from '../../../utils/trackballControls'

import Frame from '../../../views/Article/Frame'

import nx from './nx.png'
import ny from './ny.png'
import nz from './nz.png'
import px from './px.png'
import py from './py.png'
import pz from './pz.png'

const CubeTextureUrls = [px, nx, py, ny, pz, nz]

const Wrapper = styled.div`
  width: 100%;
  cursor: grab;
  position: relative;
  touch-action: none;
  user-select: none;

  :active {
    cursor: grabbing;
  }
`

const Filler = styled.div`
  padding-bottom: 125%;

  ${up('sm')} {
    padding-bottom: 53.3%;
  }
`

const GridFin = ({ url }) => {
  const textureCube = useMemo(() => {
    return new THREE.CubeTextureLoader().load(CubeTextureUrls)
  }, [])

  const gltf = useLoader(GLTFLoader, url)

  const mesh = gltf.scene.children[0]

  useMemo(() => {
    if (!mesh) return
    mesh.material.envMap = textureCube
    mesh.material.envMapIntensity = 2.75
  }, [mesh, textureCube])

  return (
    <primitive
      object={gltf.scene}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
    />
  )
}

const Camera = ({ onFrame, ...restProps }) => {
  const ref = useRef()
  const { setDefaultCamera } = useThree()

  useEffect(() => {
    setDefaultCamera(ref.current)
  }, [setDefaultCamera])

  useFrame(() => {
    onFrame()
    ref.current.lookAt(0, 0, 0)
    ref.current.updateMatrixWorld()
  })

  return (
    <animated.perspectiveCamera
      ref={ref}
      fov={75}
      near={0.1}
      far={1000}
      {...restProps}
    />
  )
}

const Animation = ({ gridFinGLTF }) => {
  const [bind, cameraControls] = useTrackballControl()

  const pixelRatio = typeof window === 'undefined' ? 1 : window.devicePixelRatio

  return (
    <Wrapper {...bind()}>
      <Filler />
      <Canvas
        pixelRatio={pixelRatio}
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <Suspense fallback={null}>
          <GridFin url={gridFinGLTF} />
        </Suspense>
        <Camera {...cameraControls} />
        <directionalLight intensity={0.1} position={[-4, 0, 0]} />
      </Canvas>
      <Frame />
    </Wrapper>
  )
}

export default Animation
