import * as THREE from "three";
import { Suspense } from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import { screen } from "../../styles/breakpoints";
import TrackballControl from "../../components/trackball-control";
import useStudioCubeTexture from "../../components/studio-cube-texture";
import Canvas from "../../components/three-canvas";
import ButtonComp from "../../components/button";
import Hand from "../../icons/hand/draw/fill";
import { useGLTF } from "@react-three/drei";

const Wrapper = styled(Link)`
  display: block;
  width: 100%;
  position: relative;
  user-select: none;
`;

const Filler = styled.div`
  padding-bottom: 125%;

  @media ${screen.sm} {
    padding-bottom: 53.3%;
  }
`;

export function GridFin({ dataUrl }: { dataUrl: string }) {
  const gltf = useGLTF(dataUrl);
  const textureCube = useStudioCubeTexture();

  const mesh = gltf.scene.children[0] as THREE.Mesh;
  const material = mesh.material as THREE.MeshStandardMaterial;
  material.envMap = textureCube;
  material.envMapIntensity = 2.75;

  return (
    <primitive
      object={gltf.scene}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
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
    <Wrapper href="/playground/grid-fin">
      <Filler>
        <Head>
          <link rel="prefetch" href="/grid-fin.glb" />
        </Head>
        <Canvas style={{ position: "absolute", top: 0, left: 0 }}>
          <Suspense fallback={null}>
            <GridFin dataUrl="/grid-fin.glb" />
          </Suspense>
          <TrackballControl
            initialPosition={[2, 0, 0]}
            autoRotationSpeed={[0, 0.4, 0]}
            cameraUp={[0, 1, 0]}
          />
          <directionalLight intensity={0.1} position={[-4, 0, 0]} />
        </Canvas>
      </Filler>
      <Button>
        <Hand style={{ marginRight: 15 }} />
        Click to interact
      </Button>
    </Wrapper>
  );
}
