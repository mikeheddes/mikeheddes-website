import React from 'react'
import styled from 'styled-components'
import Image from 'components/Image'

const Wrapper = styled.div`
  margin-bottom: 30px;
`

export default props => (
  <Wrapper>
    <Image {...props} />
  </Wrapper>
)
