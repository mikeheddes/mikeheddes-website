import React, { useEffect } from 'react'
import { ResizeObserver as polyfill } from '@juggle/resize-observer'
import * as THREE from 'three'
import { Canvas as DefaultCanvas, useThree } from 'react-three-fiber'

const pixelRatio = typeof window === 'undefined' ? 1 : window.devicePixelRatio

function SetOutputEncoding(props) {
  const { gl } = useThree()

  useEffect(() => {
    gl.outputEncoding = THREE.sRGBEncoding
  }, [gl.outputEncoding])

  return null
}

export default function Canvas(props) {
  return (
    <DefaultCanvas
      // uncomment the next line in order to make a snapshot of the canvas
      // gl={{ preserveDrawingBuffer: true }}
      pixelRatio={pixelRatio}
      {...props}
      resize={{ polyfill, scroll: false, ...props.resize }}
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        ...props.style,
      }}
    >
      <SetOutputEncoding />
      {props.children}
    </DefaultCanvas>
  )
}
