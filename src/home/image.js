import React from 'react'
import styled from 'styled-components'

import { screen } from '../styles/breakpoints'
import ProgressiveImage from '../shared/progressive-image'

const Filler = styled.div`
  width: 100%;
  padding-bottom: 133%;

  @media ${screen.sm} {
    padding-bottom: 61.8%;
  }

  @media ${screen.md} {
    padding-bottom: 53.3%;
  }

  @media ${screen.lg} {
    padding-bottom: 41.8%;
  }
`

const Image = (props) => {
  return <ProgressiveImage {...props} filler={Filler} />
}

export default Image
