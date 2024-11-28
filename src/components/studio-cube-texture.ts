import * as THREE from "three";
import { useCubeTexture } from "@react-three/drei";

export default function useStudioCubeTexture(): THREE.CubeTexture {
  const cubeTexture = useCubeTexture(
    ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"],
    { path: "/images/studio-hdr" },
  );

  return cubeTexture;
}
