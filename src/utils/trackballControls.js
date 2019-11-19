import * as THREE from 'three'
import { useRef, useMemo, useCallback } from 'react'
import { useSpring } from 'react-spring/three'
import { useDrag } from 'react-use-gesture'

import { makeSpringConfig } from './spring'

const ROTATION_SPEED = (4 * Math.PI) / 1440
const CAMERA_POSITION = new THREE.Vector3(2, 0, 0)
const CAMERA_UP = new THREE.Vector3(0, 1, 0)

const getRotationQuaternionFromDelta = ([dx, dy]) => {
  // Why -dx in y and dy in z?
  // Cause maths... that's why...
  // The THREE js coordinate system is not aligned
  // with the dom coordinates.
  const delta = new THREE.Vector3(0, -dx, dy)

  const angle = delta.length() * ROTATION_SPEED

  delta.normalize()

  return new THREE.Quaternion().setFromAxisAngle(delta, angle)
}

const SPEED_SPRING_CONFIG = makeSpringConfig({ respones: 2000 })
const DEFAULT_SPEED = 0.8

export const useTrackballControl = () => {
  // Keep track of whether the user is interacting with the camera
  const isActive = useRef(false)

  // Keep track of x and y speed to rotate the camera
  // can update without the need for react to re-render.
  const [{ speed }, setSpeed] = useSpring(() => ({
    speed: [-DEFAULT_SPEED, 0],
    config: SPEED_SPRING_CONFIG,
  }))

  // The rotation of the camera with respect to the starting position
  // can update without the need for react to re-render.
  const [{ rotationQuaternion }, set] = useSpring(() => ({
    rotationQuaternion: [0, 0, 0, 1],
    immediate: true,
  }))

  // Apply the combined camera rotation to the starting position
  const position = useMemo(() => {
    return rotationQuaternion.interpolate((...rotation) =>
      CAMERA_POSITION.clone()
        .applyQuaternion(new THREE.Quaternion().set(...rotation))
        .toArray()
    )
  }, [rotationQuaternion])

  // Apply the combined camera rotation to the starting up vector
  const up = useMemo(() => {
    return rotationQuaternion.interpolate((...rotation) =>
      CAMERA_UP.clone()
        .applyQuaternion(new THREE.Quaternion().set(...rotation))
        .toArray()
    )
  }, [rotationQuaternion])

  const moveCamera = useCallback(
    delta => {
      const userRotationQuaternion = getRotationQuaternionFromDelta(delta)

      // Apply the new rotation to the history of rotations
      const updatedRotationQuaternion = new THREE.Quaternion(
        ...rotationQuaternion.getValue()
      ).multiply(userRotationQuaternion)

      // Transform to plain array because react-spring
      // doesn't understand THREE data types
      set({ rotationQuaternion: updatedRotationQuaternion.toArray() })
    },
    [rotationQuaternion, set]
  )

  // Applies the auto-rotation when user is not interacting
  const onFrame = useCallback(() => {
    if (isActive.current) return

    moveCamera(speed.getValue())
  }, [moveCamera, speed])

  const bind = useDrag(({ delta, vxvy, velocity, first, last }) => {
    if (last) {
      // User interaction stops
      isActive.current = false

      // Set current velocity [x, y] immediately as start of animation
      // The velocity will animate from the user interaction
      // to the default speed.
      setSpeed({ speed: vxvy, immediate: true })

      if (!velocity) {
        // When the user stopped the movement of the camera
        // animated the auto-rotate to the default rotation
        setSpeed({ speed: [-DEFAULT_SPEED, 0], immediate: false })
      } else {
        // Use the user's movement direction with the default speed.
        // normalize the velocity vector then scale to default speed
        setSpeed({
          speed: vxvy.map(v => (v / velocity) * DEFAULT_SPEED),
          immediate: false,
        })
      }

      // Do not update camera rotation on last events
      return
    } else if (first) {
      // User interaction starts
      isActive.current = true
    }

    // Apply the rotation by the user's interacting
    moveCamera(delta)
  })

  return [bind, { position, up, onFrame }]
}
