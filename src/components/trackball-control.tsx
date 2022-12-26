import * as THREE from "three";
import { useRef, useEffect, useLayoutEffect } from "react";
import { useSpring, animated } from "@react-spring/three";
import { FullGestureState, useGesture } from "@use-gesture/react";
import {
  useThree,
  useFrame,
  PerspectiveCameraProps,
  Vector3,
} from "@react-three/fiber";

const DEFAULT_ROTATION_SENSITIVITY = (4 * Math.PI) / 1440;
const DEFAULT_POSITION = new THREE.Vector3(1, 0, 0);
const DEFAULT_ROTATION_SPEED = new THREE.Vector3(0, 0, 0);
const DEFAULT_CAMERA_UP = new THREE.Vector3(0, 0, 1);
const DEFAULT_MIN_DISTANCE = 1;
const DEFAULT_MAX_DISTANCE = Number.MAX_SAFE_INTEGER;

const toVector3 = (arrayOrVector: Vector3) => {
  if (arrayOrVector instanceof THREE.Vector3) {
    return arrayOrVector;
  }

  if (typeof arrayOrVector == "number") {
    return new THREE.Vector3().setScalar(arrayOrVector);
  }

  return new THREE.Vector3(...arrayOrVector);
};

type Props = PerspectiveCameraProps & {
  autoRotationSpeed?: Vector3;
  rotationSensitivity?: number;
  initialPosition?: Vector3;
  cameraUp?: Vector3;
  rotatable?: boolean;
  scalable?: boolean;
  minDistance?: number;
  maxDistance?: number;
};

function TrackballControl({
  // axis to rotate about, magnitude is the angle to rotate per second
  autoRotationSpeed = DEFAULT_ROTATION_SPEED,
  // angle per pixel movement
  rotationSensitivity = DEFAULT_ROTATION_SENSITIVITY,
  initialPosition = DEFAULT_POSITION,
  cameraUp = DEFAULT_CAMERA_UP,
  rotatable: isRotateActive,
  scalable: isScaleActive,
  minDistance = DEFAULT_MIN_DISTANCE,
  maxDistance = DEFAULT_MAX_DISTANCE,
  ...restProps
}: Props) {
  const autoRotationSpeedVec3 = toVector3(autoRotationSpeed);
  const initialPositionVec3 = toVector3(initialPosition);
  const cameraUpVec3 = toVector3(cameraUp);

  const cameraDirectionVec3 = initialPositionVec3.clone().normalize();
  const upDirectionVec3 = cameraUpVec3.clone().normalize();
  const sidewaysDirectionVec3 = new THREE.Vector3()
    .crossVectors(upDirectionVec3, cameraDirectionVec3)
    .normalize();

  const minScale = minDistance / initialPositionVec3.length();
  const maxScale = maxDistance / initialPositionVec3.length();

  const gl = useThree(({ gl }) => gl);
  const set = useThree(({ set }) => set);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  // Keep track of [x, y, z] speed to rotate the camera
  // can update without the need for react to re-render.
  const [{ rotationSpeed, scaleSpeed }, transformSpeedApi] = useSpring(() => ({
    from: {
      rotationSpeed: [0, 0, 0],
      scaleSpeed: 0,
    },
    to: { rotationSpeed: autoRotationSpeedVec3.toArray() },
    config: { response: 2000, damping: 1 },
  }));

  function resetTransformSpeed() {
    transformSpeedApi.start({
      scaleSpeed: 0,
      rotationSpeed: autoRotationSpeedVec3.toArray(),
    });
  }

  const transformRef = useRef({
    rotationQuaternion: new THREE.Quaternion(0, 0, 0, 1),
    scale: 1,
  });

  function applyRotation(delta_t) {
    const rotationAxis = new THREE.Vector3(...rotationSpeed.get());
    // rotation per second times delta
    const angle = rotationAxis.length() * delta_t;
    if (angle !== 0) {
      rotationAxis.normalize();

      const rotationTransformation = new THREE.Quaternion().setFromAxisAngle(
        rotationAxis,
        angle
      );

      // Apply the new rotation to the history of rotations
      transformRef.current.rotationQuaternion.multiply(rotationTransformation);
    }

    cameraRef.current.position.applyQuaternion(
      transformRef.current.rotationQuaternion
    );

    cameraRef.current.up.applyQuaternion(
      transformRef.current.rotationQuaternion
    );
  }

  function applyScale(delta_t) {
    let scaleUpdate = scaleSpeed.get() * delta_t;
    scaleUpdate += 1;

    transformRef.current.scale *= scaleUpdate;

    if (transformRef.current.scale < minScale) {
      transformRef.current.scale = minScale;
    } else if (transformRef.current.scale > maxScale) {
      transformRef.current.scale = maxScale;
    }

    cameraRef.current.position.multiplyScalar(transformRef.current.scale);
  }

  function onDrag(stats) {
    const { offset, timeStamp, memo: lastTimeStamp, touches } = stats;
    const [dx, dy] = stats.delta;

    if (!isRotateActive) return timeStamp;
    if (stats.first) {
      // Stop any rotation as soon as a user interacts
      transformSpeedApi.set({ rotationSpeed: [0, 0, 0] });
      return timeStamp;
    }

    // delta_t is always 0 on last event so skip it
    if (!stats.last && touches <= 1) {
      const delta_t = (timeStamp - lastTimeStamp) / 1000; // from ms to s
      if (delta_t === 0) return timeStamp; // bail out, undefined behavior

      const speedScalar = rotationSensitivity / delta_t;

      // -dy because screen +y direction is opposite of webgl +y direction
      const up = upDirectionVec3.clone().setLength(-dy);
      const side = sidewaysDirectionVec3.clone().setLength(dx);
      const moveDirection = up.add(side);

      const speed = new THREE.Vector3()
        .crossVectors(moveDirection, cameraDirectionVec3)
        .multiplyScalar(speedScalar);

      transformSpeedApi.set({
        rotationSpeed: speed.toArray(),
      });
    }

    if (stats.last || touches > 1) {
      const speedVec = new THREE.Vector3(...rotationSpeed.get());
      const speedMag = speedVec.length();

      if (speedMag > 1.5 || Math.hypot(...offset) < 10) {
        // When the user stopped the movement of the camera
        // with an arbitrary buffer of 1.5
        // Or has not moved at least 10px in any direction
        // animate the rotation to the default rotation
        resetTransformSpeed();
      } else {
        const autoRotationSpeedMag = autoRotationSpeedVec3.length();
        // use the current direction of movement with the default speed
        // to keep the same rotation speed as the automatic rotation
        speedVec.setLength(autoRotationSpeedMag);
        transformSpeedApi.start({
          rotationSpeed: speedVec.toArray(),
        });
      }
    }

    return timeStamp;
  }

  function onPinch(stats: FullGestureState<"pinch">) {
    const { timeStamp, memo: lastTimeStamp, event } = stats;
    const [dd, da] = stats.delta;
    const [pd] = stats.velocity;

    event?.preventDefault();

    if (!isRotateActive) return timeStamp;
    if (stats.first) {
      // Stop any scale as soon as a user interacts
      transformSpeedApi.set({ scaleSpeed: 0 });
      return timeStamp;
    }

    // delta_t is always 0 on last event so skip it
    if (!stats.last) {
      const delta_t = (timeStamp - lastTimeStamp) / 1000; // from ms to s
      if (delta_t === 0) return timeStamp; // bail out, undefined behavior

      let scaleSpeed;
      let rotationSpeed = new THREE.Vector3(0, 0, 0);
      if (event instanceof window.WheelEvent && event.ctrlKey) {
        // used in Chrome
        scaleSpeed = (event.deltaY / delta_t) * 0.01;
      } else {
        // used in Safari
        scaleSpeed = (dd / delta_t) * -1;
        rotationSpeed
          .copy(cameraDirectionVec3)
          .setLength((da * Math.PI) / 180 / delta_t);
      }

      transformSpeedApi.set({
        scaleSpeed,
        rotationSpeed: rotationSpeed.toArray(),
      });
    }

    if (stats.last) {
      resetTransformSpeed();
    }

    return timeStamp;
  }

  useGesture(
    { onDrag, onPinch },
    { target: gl.domElement, eventOptions: { passive: false } }
  );

  const size = useThree(({ size }) => size);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.aspect = size.width / size.height;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [size]);

  useEffect(() => {
    set({ camera: cameraRef.current });
  }, [set]);

  useFrame((state, delta_t) => {
    cameraRef.current.position.copy(initialPositionVec3);
    cameraRef.current.up.copy(cameraUpVec3);

    applyRotation(delta_t);
    applyScale(delta_t);

    cameraRef.current.lookAt(0, 0, 0);
    cameraRef.current.updateMatrixWorld();
  });

  return (
    <animated.perspectiveCamera
      ref={cameraRef}
      fov={75}
      near={0.1}
      far={1000}
      {...restProps}
    />
  );
}

export default TrackballControl;
