import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { imageDataRGB } from 'stackblur-canvas/dist/stackblur-es'
import { useSpring, animated } from 'react-spring'

import { useMeasure } from './hooks'
import { makeSpringConfig } from './spring'
import { absoluteSize } from '../styles'

const Canvas = styled(animated.canvas)`
  ${absoluteSize};
`

/**
 * By Ken Fyrstenberg Nilsen
 *
 * drawImageProp(context, image [, x, y, width, height [,offsetX, offsetY]])
 *
 * If image and context are only arguments rectangle will equal canvas
 */
const drawImageCover = (ctx, img) => {
  const w = ctx.canvas.width
  const h = ctx.canvas.height

  // default offset is center
  const offsetX = 0.5
  const offsetY = 0.5

  var iw = img.width,
    ih = img.height,
    r = Math.min(w / iw, h / ih),
    nw = iw * r, // new prop. width
    nh = ih * r, // new prop. height
    ar = 1

  // decide which gap to fill
  if (nw < w) ar = w / nw
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh // updated
  nw *= ar
  nh *= ar

  // calc source rectangle
  let cw = iw / (nw / w)
  let ch = ih / (nh / h)

  let cx = (iw - cw) * offsetX
  let cy = (ih - ch) * offsetY

  // make sure source rectangle is valid
  if (cx < 0) cx = 0
  if (cy < 0) cy = 0
  if (cw > iw) cw = iw
  if (ch > ih) ch = ih

  // fill image in dest. rectangle
  ctx.drawImage(img, cx, cy, cw, ch, 0, 0, w, h)
}

const useImage = src => {
  const [image, setImage] = useState()

  useEffect(() => {
    if (!src) return
    let isMounted = true

    const image = new Image()

    image.onload = () => {
      if (!isMounted) return
      setImage(image)
    }

    image.src = src

    return () => {
      isMounted = false
    }
  }, [src])

  return image
}

const Blur = ({ src, blur, ...restProps }) => {
  const [{ ref: canvasRef }, canvasSize] = useMeasure()
  const image = useImage(src)

  const spring = useSpring({
    opacity: image ? 1 : 0,
    config: makeSpringConfig({ response: 500 }),
  })

  useEffect(() => {
    if (!image) return

    const context = canvasRef.current.getContext('2d')
    const { width, height } = canvasSize

    context.clearRect(0, 0, width, height)
    drawImageCover(context, image)
    const imageData = context.getImageData(0, 0, width, height)
    const blurredImageData = imageDataRGB(imageData, 0, 0, width, height, blur)
    context.putImageData(blurredImageData, 0, 0)
  }, [blur, canvasRef, canvasSize, image])

  return (
    <Canvas
      {...restProps}
      ref={canvasRef}
      style={spring}
      width={canvasSize.width}
      height={canvasSize.height}
    />
  )
}

Blur.defaultProps = {
  blur: 50,
}

export default Blur
