import { useMemo } from 'react'
import * as THREE from 'three'

import nx from '../assets/nx.png'
import ny from '../assets/ny.png'
import nz from '../assets/nz.png'
import px from '../assets/px.png'
import py from '../assets/py.png'
import pz from '../assets/pz.png'

const CubeTextureUrls = [px, nx, py, ny, pz, nz]

const useStudioCubeTexture = () =>
  useMemo(() => {
    return new THREE.CubeTextureLoader().load(CubeTextureUrls)
  }, [])

export default useStudioCubeTexture
