// import React, { useEffect, useRef, useMemo } from 'react'
// import SimplexNoise from 'simplex-noise'

// /* accepts parameters
//  * h  Object = {h:x, s:y, v:z}
//  * OR
//  * h, s, v
//  */
// function HSVtoRGB(h, s, v) {
//   var r, g, b, i, f, p, q, t
//   i = Math.floor(h * 6)
//   f = h * 6 - i
//   p = v * (1 - s)
//   q = v * (1 - f * s)
//   t = v * (1 - (1 - f) * s)

//   switch (i % 6) {
//     case 0:
//       r = v
//       g = t
//       b = p
//       break
//     case 1:
//       r = q
//       g = v
//       b = p
//       break
//     case 2:
//       r = p
//       g = v
//       b = t
//       break
//     case 3:
//       r = p
//       g = q
//       b = v
//       break
//     case 4:
//       r = t
//       g = p
//       b = v
//       break
//     case 5:
//     default:
//       r = v
//       g = p
//       b = q
//       break
//   }

//   return {
//     r: Math.round(r * 255),
//     g: Math.round(g * 255),
//     b: Math.round(b * 255),
//   }
// }

// const Test = () => {
//   const canvasRef = useRef()

//   const simplex = useMemo(() => new SimplexNoise(), [])
//   const { width, height } = useMemo(
//     () => ({
//       width: window.innerWidth * window.devicePixelRatio,
//       height: window.innerHeight * window.devicePixelRatio,
//     }),
//     []
//   )

//   useEffect(() => {
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     const imageData = ctx.createImageData(width, height)
//     let stopped = false

//     const animate = time => {
//       for (let x = 0; x < width; x++) {
//         for (let y = 0; y < height; y++) {
//           const i = (x + y * width) * 4
//           const hue =
//             ((simplex.noise3D(x / 500, y / 500, time / 10000) + 1) * 2) % 1
//           const { r, g, b } = HSVtoRGB(hue, 1, 0.9)
//           imageData.data[i] = r
//           imageData.data[i + 1] = g
//           imageData.data[i + 2] = b
//           imageData.data[i + 3] = 255
//         }
//       }

//       ctx.putImageData(imageData, 0, 0)

//       if (!stopped) requestAnimationFrame(animate)
//     }

//     requestAnimationFrame(animate)

//     return () => {
//       stopped = true
//       cancelAnimationFrame(animate)
//     }
//   }, [height, simplex, width])

//   return (
//     <canvas
//       width={width}
//       height={height}
//       css="width: 100vw; height: 100vh;"
//       ref={canvasRef}
//     />
//   )
// }

// export default Test

export default () => null
