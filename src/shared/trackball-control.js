import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useSpring } from 'react-spring/three'
import { useGesture } from 'react-use-gesture'
import { useThree, useFrame } from 'react-three-fiber'

import { makeSpringConfig } from './spring'

const DEFAULT_ROTATION_SENSITIVITY = (4 * Math.PI) / 1440
const DEFAULT_POSITION = new THREE.Vector3(1, 0, 0)
const DEFAULT_ROTATION_SPEED = new THREE.Vector3(0, 0, 0)
const DEFAULT_CAMERA_UP = new THREE.Vector3(0, 0, 1)
const SPEED_SPRING_CONFIG = makeSpringConfig({ respones: 2000 })
const DEFAULT_MIN_DISTANCE = 1
const DEFAULT_MAX_DISTANCE = Number.MAX_SAFE_INTEGER

const toVector3 = arrayOrVector => {
  if (arrayOrVector instanceof THREE.Vector3) {
    return arrayOrVector
  }

  return new THREE.Vector3(...arrayOrVector)
}

const TrackballControl = ({
  // axis to rotate about, magnitude is the angle to rotate per second
  autoRotationSpeed = DEFAULT_ROTATION_SPEED,
  // angle per pixel movement
  rotationSensitivity = DEFAULT_ROTATION_SENSITIVITY,
  initialPosition = DEFAULT_POSITION,
  cameraUp = DEFAULT_CAMERA_UP,
  rotate: isRotateActive,
  scale: isScaleActive,
  minDistance = DEFAULT_MIN_DISTANCE,
  maxDistance = DEFAULT_MAX_DISTANCE,
  ...restProps
}) => {
  const autoRotationSpeedVec3 = toVector3(autoRotationSpeed)
  const initialPositionVec3 = toVector3(initialPosition)
  const cameraUpVec3 = toVector3(cameraUp)

  const cameraDirectionVec3 = initialPositionVec3.clone().normalize()
  const upDirectionVec3 = cameraUpVec3.clone().normalize()
  const sidewaysDirectionVec3 = new THREE.Vector3()
    .crossVectors(upDirectionVec3, cameraDirectionVec3)
    .normalize()

  const minScale = minDistance / initialPositionVec3.length()
  const maxScale = maxDistance / initialPositionVec3.length()

  const { gl, setDefaultCamera } = useThree()
  const cameraRef = useRef()

  // Keep track of [x, y, z] speed to rotate the camera
  // can update without the need for react to re-render.
  const [{ rotationSpeed, scaleSpeed }, setTransformSpeed] = useSpring(() => ({
    from: {
      rotationSpeed: [0, 0, 0],
      scaleSpeed: 0,
    },
    to: { rotationSpeed: autoRotationSpeedVec3.toArray() },
    config: SPEED_SPRING_CONFIG,
  }))

  const resetTransformSpeed = () => {
    setTransformSpeed({
      immediate: false,
      scaleSpeed: 0,
      rotationSpeed: autoRotationSpeedVec3.toArray(),
    })
  }

  const transformRef = useRef({
    rotationQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    scale: 1,
  })

  const applyRotation = delta_t => {
    const rotationAxis = new THREE.Vector3(...rotationSpeed.getValue())
    // rotation per second times delta
    const angle = rotationAxis.length() * delta_t
    if (angle !== 0) {
      rotationAxis.normalize()

      const rotationTransformation = new THREE.Quaternion().setFromAxisAngle(
        rotationAxis,
        angle
      )

      // Apply the new rotation to the history of rotations
      transformRef.current.rotationQuaternion.multiply(rotationTransformation)
    }

    cameraRef.current.position.applyQuaternion(
      transformRef.current.rotationQuaternion
    )

    cameraRef.current.up.applyQuaternion(
      transformRef.current.rotationQuaternion
    )
  }

  const applyScale = delta_t => {
    let scaleUpdate = scaleSpeed.getValue() * delta_t
    scaleUpdate += 1

    transformRef.current.scale *= scaleUpdate

    if (transformRef.current.scale < minScale) {
      transformRef.current.scale = minScale
    } else if (transformRef.current.scale > maxScale) {
      transformRef.current.scale = maxScale
    }

    cameraRef.current.position.multiplyScalar(transformRef.current.scale)
  }

  const onDrag = stats => {
    const { delta, offset, first, last, time, memo, touches } = stats
    const [dx, dy] = delta

    if (!isRotateActive) return time
    if (first) {
      // Stop any rotation as soon as a user interacts
      setTransformSpeed({ rotationSpeed: [0, 0, 0], immediate: true })
      return time
    }

    // delta_t is always 0 on last event so skip it
    if (!last && touches <= 1) {
      const delta_t = (time - memo) / 1000 // from ms to s
      if (delta_t === 0) return time // bail out, undefined behaviour

      const speedScalar = rotationSensitivity / delta_t

      // -dy because screen +y direction is opposite of webgl +y direction
      const up = upDirectionVec3.clone().setLength(-dy)
      const side = sidewaysDirectionVec3.clone().setLength(dx)

      const moveDirection = up.add(side)

      const speed = new THREE.Vector3()
        .crossVectors(moveDirection, cameraDirectionVec3)
        .multiplyScalar(speedScalar)

      setTransformSpeed({ rotationSpeed: speed.toArray(), immediate: true })
    }

    if (last || touches > 1) {
      const speedVec = new THREE.Vector3(...rotationSpeed.getValue())
      const speedMag = speedVec.length()

      if (speedMag > 1.5 || Math.hypot(...offset) < 10) {
        // When the user stopped the movement of the camera
        // with an arbitrary buffer of 1.5
        // Or has not moved at least 10px in any direction
        // animate the rotation to the default rotation
        resetTransformSpeed()
      } else {
        const autoRotationSpeedMag = autoRotationSpeedVec3.length()
        // use the current direction of movement with the default speed
        speedVec.setLength(autoRotationSpeedMag)
        setTransformSpeed({
          rotationSpeed: speedVec.toArray(),
          immediate: false,
        })
      }
    }

    return time
  }

  const onPinch = stats => {
    const {
      delta: [dd, da],
      previous: [pd],
      first,
      last,
      time,
      memo,
      event,
    } = stats

    event && event.preventDefault()

    if (!isRotateActive) return time
    if (first) {
      // Stop any scale as soon as a user interacts
      setTransformSpeed({ scaleSpeed: 0, immediate: true })
      return time
    }

    // delta_t is always 0 on last event so skip it
    if (!last) {
      const delta_t = (time - memo) / 1000 // from ms to s
      if (delta_t === 0) return time // bail out, undefined behaviour

      let scaleSpeed
      let rotationSpeed = new THREE.Vector3(0, 0, 0)
      if (event instanceof window.WheelEvent && event.ctrlKey) {
        scaleSpeed = (event.deltaY / delta_t) * 0.01
      } else {
        scaleSpeed = (dd / pd / delta_t) * -1
        rotationSpeed
          .copy(cameraDirectionVec3)
          .setLength((da * Math.PI) / 180 / delta_t)
      }

      setTransformSpeed({
        scaleSpeed,
        rotationSpeed: rotationSpeed.toArray(),
        immediate: true,
      })
    }

    if (last) {
      resetTransformSpeed()
    }

    return time
  }

  const bind = useGesture(
    { onDrag, onPinch },
    { domTarget: gl.domElement, event: { passive: false } }
  )
  useEffect(bind, [bind])

  useEffect(() => {
    setDefaultCamera(cameraRef.current)
  }, [setDefaultCamera])

  useFrame((state, delta_t) => {
    cameraRef.current.position.copy(initialPositionVec3)
    cameraRef.current.up.copy(cameraUpVec3)

    applyRotation(delta_t)
    applyScale(delta_t)

    cameraRef.current.lookAt(0, 0, 0)
    cameraRef.current.updateMatrixWorld()
  })

  return (
    <perspectiveCamera
      ref={cameraRef}
      fov={75}
      near={0.1}
      far={1000}
      {...restProps}
    />
  )
}

export default TrackballControl
