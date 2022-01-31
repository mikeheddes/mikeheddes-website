import TrackballControl from "../../components/trackball-control";
import Canvas from "../../components/three-canvas";
import { Stars } from "../../blog/settlers-of-the-galaxy/animation";
import PlaygroundLayout from "../../components/playground-layout";
import { grays } from "../../styles/colors";

export default function GtocXGalaxy() {
  return (
    <PlaygroundLayout
      blogPost="/post/settlers-of-the-galaxy"
      backgroundColor={grays["900"]}
    >
      <Canvas>
        <Stars dataUrl="/stars.min" />
        <TrackballControl
          rotatable
          scalable
          initialPosition={[0, 0, 32]}
          rotationSensitivity={(2 * Math.PI) / 1440}
          cameraUp={[1, 0, 0]}
          minDistance={0.5}
          maxDistance={50}
        />
        <directionalLight intensity={0.1} position={[-4, 0, 0]} />
      </Canvas>
    </PlaygroundLayout>
  );
}
