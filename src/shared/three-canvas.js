import polyfill from '@juggle/resize-observer'
import React from 'react'
import { Canvas as DefaultCanvas } from 'react-three-fiber'

const pixelRatio = typeof window === 'undefined' ? 1 : window.devicePixelRatio

const Canvas = props => (
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
  />
)

export default Canvas
