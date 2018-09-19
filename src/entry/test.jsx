import React from 'react'
import styled from 'styled-components'

const Foo = styled.div`
  color: red;
`

const Bar = styled(Foo)`
  background-color: blue;
`

export default () => <Bar>HALLO</Bar>
