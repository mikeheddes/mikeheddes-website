import * as THREE from "three";
import { useCubeTexture } from "@react-three/drei";

export default function useStudioCubeTexture(): THREE.CubeTexture {
  const cubeTexture = useCubeTexture(
    ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"],
    { path: "/images/studio-hdr" },
  );

  // Results in better colors, see: https://gist.github.com/donmccurdy/fefb35c5ba033e7dcd641f9684e47a82
  cubeTexture.encoding = THREE.sRGBEncoding;
  return cubeTexture;
}
