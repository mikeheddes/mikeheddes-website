import { useMemo } from 'react'
import * as THREE from 'three'

import nx from '../assets/studio-hdr/nx.png'
import ny from '../assets/studio-hdr/ny.png'
import nz from '../assets/studio-hdr/nz.png'
import px from '../assets/studio-hdr/px.png'
import py from '../assets/studio-hdr/py.png'
import pz from '../assets/studio-hdr/pz.png'

const CubeTextureUrls = [px, nx, py, ny, pz, nz]

export default function useStudioCubeTexture() {
  return useMemo(() => {
    let cubeTexture = new THREE.CubeTextureLoader().load(CubeTextureUrls)
    // Results in better colors, see: https://gist.github.com/donmccurdy/fefb35c5ba033e7dcd641f9684e47a82
    cubeTexture.encoding = THREE.sRGBEncoding
    return cubeTexture
  }, [])
}
