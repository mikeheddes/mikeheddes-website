// /* Fog provides depth to the landscape*/
// import React, { useEffect, useMemo, useRef } from 'react'
// import styled from 'styled-components'
// import { up } from 'styled-breakpoints'
// import * as THREE from 'three'

// scene.fog = new THREE.Fog(0x000, 0, 45);
// ; (function () {
//   var light = new THREE.AmbientLight(0x202020)
//   scene.add(light)
//   var light = new THREE.DirectionalLight('white', 5)
//   light.position.set(0.5, 0.0, 2)
//   scene.add(light)
//   var light = new THREE.DirectionalLight('white', 0.75 * 2)
//   light.position.set(-0.5, -0.5, -2)
//   scene.add(light)
// })()
// var heightMap = THREEx.Terrain.allocateHeightMap(256, 256)
// THREEx.Terrain.simplexHeightMap(heightMap)
// var geometry = THREEx.Terrain.heightMapToPlaneGeometry(heightMap)
// THREEx.Terrain.heightMapToVertexColor(heightMap, geometry)
// /* Wireframe built-in color is white, no need to change that */
// var material = new THREE.MeshBasicMaterial({
//   wireframe: true
// });
// var mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);
// mesh.lookAt(new THREE.Vector3(0, 1, 0));
// /* Play around with the scaling */
// mesh.scale.y = 3.5;
// mesh.scale.x = 3;
// mesh.scale.z = 0.20;
// mesh.scale.multiplyScalar(10);
// /* Play around with the camera */
// onRenderFcts.push(function (delta, now) {
//   mesh.rotation.z += 0.2 * delta;
// })
// onRenderFcts.push(function () {
//   renderer.render(scene, camera);
// })
// var lastTimeMsec = null
// requestAnimationFrame(function animate(nowMsec) {
//   requestAnimationFrame(animate);
//   lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60
//   var deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
//   lastTimeMsec = nowMsec
//   onRenderFcts.forEach(function (onRenderFct) {
//     onRenderFct(deltaMsec / 1000, nowMsec / 1000)
//   })
// })
// import { useSpring, animated } from 'react-spring/three'
// import { Canvas, useThree, useFrame } from 'react-three-fiber'

// import starsAsyncIterator, {
//   NUMBER_OF_STARS,
//   VALUES_PER_STAR,
//   getAngularVelocity,
// } from './stars'
// import { useTheme } from '../../../hooks'
// import { vertexShader, fragmentShader } from './shaders'
// import Frame from '../../../views/Article/Frame'

// const STAR_TIME_OFFSET = -20.0
// const STAR_SPEED = 1 // ms / MYr

// const delay = time => new Promise(resolve => setTimeout(resolve, time))

// const easeInOutCubic = t =>
//   t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

// const Wrapper = styled.div`
//   width: 100%;
//   position: relative;
// `

// const Filler = styled.div`
//   padding-bottom: 125%;

//   ${up('sm')} {
//     padding-bottom: 41.8%;
//   }
// `

// // const Stars = ({ starColor, isNightTheme, starsURL }) => {
// //   const geometry = useRef()

// //   useEffect(() => {
// //     let counter = 0
// //     let stop = false

// //     async function getStars() {
// //       for await (const star of starsAsyncIterator(starsURL)) {
// //         if (stop) return

// //         geometry.current.attributes.star.array.set(
// //           star,
// //           counter * VALUES_PER_STAR
// //         )
// //         geometry.current.attributes.angularVelocity.array[
// //           counter
// //         ] = getAngularVelocity(star[0])

// //         geometry.current.attributes.star.needsUpdate = true
// //         geometry.current.attributes.angularVelocity.needsUpdate = true

// //         counter++
// //       }
// //     }

// //     getStars()

// //     return () => {
// //       stop = true
// //     }
// //   }, [starsURL])

// //   const material = useMemo(() => {
// //     return new THREE.ShaderMaterial({
// //       uniforms: {
// //         starColor: { value: new THREE.Color(starColor) },
// //         time: { value: STAR_TIME_OFFSET },
// //         isNightTheme: { value: isNightTheme },
// //       },
// //       transparent: true,
// //       vertexShader,
// //       fragmentShader,
// //     })
// //   }, [isNightTheme, starColor])

// //   const [position, star, angularVelocity] = useMemo(() => {
// //     const position = new Float32Array(NUMBER_OF_STARS * 3)
// //     const star = new Float32Array(NUMBER_OF_STARS * 4).fill(2.0)
// //     const angularVelocity = new Float32Array(NUMBER_OF_STARS)

// //     return [position, star, angularVelocity]
// //   }, [])

// //   useFrame(({ clock }) => {
// //     material.uniforms.time.value =
// //       clock.elapsedTime / STAR_SPEED + STAR_TIME_OFFSET
// //   })

// //   return (
// //     <points material={material}>
// //       <bufferGeometry attach="geometry" ref={geometry}>
// //         <bufferAttribute
// //           attachObject={['attributes', 'position']}
// //           count={NUMBER_OF_STARS}
// //           array={position}
// //           itemSize={3}
// //         />
// //         <bufferAttribute
// //           attachObject={['attributes', 'star']}
// //           count={NUMBER_OF_STARS}
// //           array={star}
// //           itemSize={4}
// //         />
// //         <bufferAttribute
// //           attachObject={['attributes', 'angularVelocity']}
// //           count={NUMBER_OF_STARS}
// //           array={angularVelocity}
// //           itemSize={1}
// //         />
// //       </bufferGeometry>
// //     </points>
// //   )
// // }

// const Camera = props => {
//   const ref = useRef()
//   const { setDefaultCamera } = useThree()

//   useEffect(() => {
//     setDefaultCamera(ref.current)
//   }, [setDefaultCamera])

//   useFrame(() => {
//     ref.current.lookAt(0, 0, 0)
//     ref.current.updateMatrixWorld()
//   })

//   const { pos } = useSpring({
//     pos: [0, 2, 15],
//   })

//   return (
//     <animated.perspectiveCamera
//       ref={ref}
//       fov={75}
//       near={0.1}
//       far={1000}
//       position={pos}
//       {...props}
//     />
//   )
// }

// const Animation = ({ starsURL }) => {
//   const pixelRatio = typeof window === 'undefined' ? 1 : window.devicePixelRatio

//   return (
//     <Wrapper>
//       <Filler />
//       <Canvas
//         pixelRatio={pixelRatio}
//         style={{
//           height: '100%',
//           width: '100%',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//         }}
//       >
//         <Camera />
//         {/* <Stars
//           starsURL={starsURL}
//           starColor={theme.headingObvious}
//           isNightTheme={isNightTheme}
//         /> */}
//       </Canvas>
//     </Wrapper>
//   )
// }

// export default Animation

export default () => null
