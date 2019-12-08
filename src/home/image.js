import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'

import ProgressiveImage from '../shared/progressive-image'

const Filler = styled.div`
  width: 100%;
  padding-bottom: 133%;

  ${up('sm')} {
    padding-bottom: 61.8%;
  }

  ${up('md')} {
    padding-bottom: 53.3%;
  }

  ${up('lg')} {
    padding-bottom: 41.8%;
  }
`

const Image = props => {
  return <ProgressiveImage {...props} filler={Filler} />
}

export default Image
