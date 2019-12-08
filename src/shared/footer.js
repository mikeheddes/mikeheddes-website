import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'

import { fluidFont } from '../styles'

const Wrapper = styled.footer`
  width: 100%;
  display: block;
  text-align: center;
  color: var(--text-subtle);
  ${fluidFont(9, 10)};
  font-weight: 400;
  padding: 20px;
  margin-top: 50px;
  line-height: 1.8;

  ${up('sm')} {
    font-weight: 500;
  }
`

const Footer = () => (
  <Wrapper>
    Designed and developed by Mike Heddes.
    <br />
    Copyright © {new Date().getFullYear()} Mike Heddes. All rights reserved.
  </Wrapper>
)

export default Footer
