import React, { useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import * as THREE from 'three'
import { useSpring, animated } from 'react-spring/three'
import { useThree, useFrame } from 'react-three-fiber'
import { Link } from 'gatsby'

import { useTheme } from '../../shared/hooks'
import Canvas from '../../shared/three-canvas'
import Hand from '../../icons/hand/draw/fill'

import nx from '../../posts/spacex-grid-fin-design/nx.png'
import ny from '../../posts/spacex-grid-fin-design/ny.png'
import nz from '../../posts/spacex-grid-fin-design/nz.png'
import px from '../../posts/spacex-grid-fin-design/px.png'
import py from '../../posts/spacex-grid-fin-design/py.png'
import pz from '../../posts/spacex-grid-fin-design/pz.png'

const CubeTextureUrls = [px, nx, py, ny, pz, nz]

const delay = time => new Promise(resolve => setTimeout(resolve, time))

const easeInOutCubic = t =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

const vertexShader = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`

const fragmentShader = `
//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

  // Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients: 7x7 points over a square, mapped onto an octahedron.
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

mat2 rotate2d(float angle) {
    return mat2( cos(angle), -sin(angle), sin(angle), cos(angle) );
}

float lines(in vec2 pos, float b, float scale) {
    pos *= scale;

    return smoothstep(
      0.0,
      0.5 + b * 0.5,
      abs(( sin( pos.x * 3.1415 ) + b * 2.0 )) * 0.5
    );
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

uniform float time;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  st.x *= u_resolution.x / u_resolution.y;

  // scales the pattern
  vec2 pos = st.yx * vec2(1.5, .5);

  float pattern = pos.x;

  // Add noise
  float noise_val = snoise(vec3(pos, time * 0.05));
  pos = rotate2d(noise_val) * pos;

  float lines_offset = .5;

  // Draw lines
  float highlights = lines(pos, lines_offset, 50.);
  pattern = smoothstep( .0, 1., lines(pos, lines_offset, 5.) + highlights * .5);
  float color_pattern = lines(pos, lines_offset, 1.);

  // Get color from noise
  float hue = snoise(vec3(st * 0.1, time * 0.1));
  vec3 color = hsv2rgb(vec3(hue * color_pattern, .9 * (highlights * .8 + .2), 1.));

  gl_FragColor = vec4( color * (pattern * .95 + .05), 1.0 );
}
`

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

  :active {
    cursor: grabbing;
  }
`

export const Chrome = () => {
  const { size } = useThree()

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(2, 2)
  }, [])

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        // initial size not relevant
        u_resolution: { value: new THREE.Vector2(100, 100) },
      },
    })
  }, [])

  useFrame(({ clock }) => {
    material.uniforms.time.value = clock.elapsedTime
    material.uniforms.u_resolution.value = new THREE.Vector2(
      size.width,
      size.height
    )
  })

  return <mesh geometry={geometry} material={material} />
}

const Camera = props => {
  const ref = useRef()
  const { setDefaultCamera } = useThree()

  useEffect(() => {
    setDefaultCamera(ref.current)
  }, [setDefaultCamera])

  useFrame(() => {
    ref.current.updateMatrixWorld()
  })

  const { pos } = useSpring({
    pos: [0, 0, 50],
  })

  return (
    <animated.perspectiveCamera
      ref={ref}
      fov={75}
      near={0.1}
      far={1000}
      position={pos}
      // rotation={rot}
      {...props}
    />
  )
}

const Button = styled(Link)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--surface);
  border-radius: 14px;
  padding: 12px 22px;
  font-size: 18px;
  font-weight: 500;
  color: var(--heading-obvious);
  display: inline-block;
  cursor: pointer;
  transition: background-color 80ms ease-out;
  text-decoration: none;

  ${up('md')} {
    bottom: 30px;
  }

  :active {
    background-color: var(--surface-obvious);
  }
`

const Animation = () => {
  return (
    <Wrapper>
      <Canvas>
        <Camera />
        <Chrome />
      </Canvas>
    </Wrapper>
  )
}

export default Animation
