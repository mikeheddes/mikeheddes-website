import * as THREE from "three";
import { useEffect, useMemo, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import Link from "next/link";

import asyncStarIterator, {
  NUMBER_OF_STARS,
  VALUES_PER_STAR,
  getAngularVelocity,
} from "./stars";
import { vertexShader, fragmentShader } from "./shaders";
import Canvas from "../../components/three-canvas";
import Hand from "../../icons/hand/draw/fill";
import ButtonComp from "../../components/button";
import { screen } from "../../styles/breakpoints";
import { grays } from "../../styles/colors";

function delay(t: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, t));
}

const STAR_TIME_OFFSET = -20.0;
const STAR_SPEED = 1; // ms / MYr
const pixelRatio = typeof window === "undefined" ? 1 : window.devicePixelRatio;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
}

const Wrapper = styled.a`
  display: block;
  width: 100%;
  position: relative;
  background-color: ${grays["900"]};
`;

const Filler = styled.div`
  padding-bottom: 125%;

  @media ${screen.sm} {
    padding-bottom: 41.8%;
  }
`;

export function Stars({ dataUrl }: { dataUrl: string }) {
  const geometryRef = useRef<THREE.BufferGeometry>();

  const [positions, stars, angularVelocities, starIndices] = useMemo(() => {
    const position = new Float32Array(NUMBER_OF_STARS * 3);
    const star = new Float32Array(NUMBER_OF_STARS * 4).fill(2.0);
    const angularVelocity = new Float32Array(NUMBER_OF_STARS);
    const starIndex = new Float32Array(
      Array(NUMBER_OF_STARS)
        .fill(0)
        .map((_, index) => index)
    );

    return [position, star, angularVelocity, starIndex];
  }, []);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: STAR_TIME_OFFSET },
        pixelRatio: { value: pixelRatio },
      },
      transparent: true,
      vertexShader,
      fragmentShader,
    });
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function getStars() {
      let starIndex = 0;
      for await (const star of asyncStarIterator(dataUrl)) {
        if (!isMounted) return;

        const { attributes } = geometryRef.current;

        const starBuffer = attributes.star as THREE.BufferAttribute;
        starBuffer.set(star, starIndex * VALUES_PER_STAR);
        attributes.star.needsUpdate = true;

        const angularVelocityBuffer =
          attributes.angularVelocity as THREE.BufferAttribute;
        angularVelocityBuffer.setX(starIndex, getAngularVelocity(star[0]));
        angularVelocityBuffer.needsUpdate = true;

        starIndex++;
      }
    }

    getStars();

    return () => {
      isMounted = false;
    };
  }, [dataUrl, angularVelocities, stars]);

  useFrame(({ clock }) => {
    material.uniforms.time.value =
      clock.elapsedTime / STAR_SPEED + STAR_TIME_OFFSET;
  });

  return (
    <points material={material}>
      <bufferGeometry attach="geometry" ref={geometryRef}>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={NUMBER_OF_STARS}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "star"]}
          count={NUMBER_OF_STARS}
          array={stars}
          itemSize={4}
        />
        <bufferAttribute
          attachObject={["attributes", "angularVelocity"]}
          count={NUMBER_OF_STARS}
          array={angularVelocities}
          itemSize={1}
        />
        <bufferAttribute
          attachObject={["attributes", "starIndex"]}
          count={NUMBER_OF_STARS}
          array={starIndices}
          itemSize={1}
        />
      </bufferGeometry>
    </points>
  );
}

function Camera(props) {
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const set = useThree(({ set }) => set);
  const size = useThree(({ size }) => size);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.aspect = size.width / size.height;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [size]);

  useLayoutEffect(() => {
    set({ camera: cameraRef.current });
  }, [set]);

  useFrame(() => {
    cameraRef.current.updateMatrixWorld();
  });

  const { pos, rot } = useSpring({
    from: { pos: [32, 0, 0], rot: [0, Math.PI / 2, Math.PI / 2] },
    to: async (next) => {
      await delay(2500);
      await next({
        pos: [0, 0, 22],
        rot: [0, 0, 0],
        config: { duration: 7000, easing: easeInOutQuart },
      });
      await next({
        pos: [0, 0, 32],
        config: { duration: 40000, easing: easeInOutCubic },
      });
    },
  });

  return (
    <animated.perspectiveCamera
      ref={cameraRef}
      fov={75}
      near={0.1}
      far={1000}
      position={pos}
      rotation={rot}
      {...props}
    />
  );
}

const Button = styled(ButtonComp)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  @media ${screen.md} {
    bottom: 30px;
  }
`;

export default function Animation() {
  return (
    <Link href="/playground/gtocx-galaxy" passHref>
      <Wrapper>
        <Filler>
          <Canvas style={{ position: "absolute", top: 0, left: 0 }}>
            <Camera />
            <Stars dataUrl="/stars.min" />
          </Canvas>
        </Filler>
        <Button>
          <Hand style={{ marginRight: 15 }} />
          Click to interact
        </Button>
      </Wrapper>
    </Link>
  );
}
