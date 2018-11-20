import React from 'react'
import styled from 'styled-components'
import { transparentize as fade } from 'polished'

import Box from '../components/Box'
import { media } from '../styles/breakpoints'
import { sizeNumbers } from '../styles/size'

const Copyright = styled.p`
  color: ${({ theme }) => fade(0.25, theme.heading)};
  text-align: center;
  font-size: 7px;
  font-weight: 400;

  ${media.sm`
    font-size: 9px;
    font-weight: 500;
  `};
`

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.surface};
  padding-top: ${sizeNumbers.footerHeight / 2}px;
  width: 100vw;
`

export default () => (
  <Footer>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={sizeNumbers.footerHeight / 2}
    >
      <Copyright>
        Copyright © {new Date().getFullYear()} Mike Heddes. All rights reserved.
      </Copyright>
    </Box>
  </Footer>
)
