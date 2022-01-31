import TrackballControl from "../../components/trackball-control";
import Canvas from "../../components/three-canvas";
import { GridFin } from "../../blog/spacex-grid-fin-design/animation";
import PlaygroundLayout from "../../components/playground-layout";
import { Suspense } from "react";

export default function GridFinAnimation() {
  return (
    <PlaygroundLayout blogPost="/post/spacex-grid-fin-design">
      <Canvas>
        <Suspense fallback={null}>
          <GridFin dataUrl="/grid-fin.glb" />
        </Suspense>
        <TrackballControl
          rotatable
          scalable
          initialPosition={[2, 0, 0]}
          cameraUp={[0, 1, 0]}
          maxDistance={5}
        />
        <directionalLight intensity={0.1} position={[-4, 0, 0]} />
      </Canvas>
    </PlaygroundLayout>
  );
}
