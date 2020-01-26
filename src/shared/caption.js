import styled from 'styled-components'

import { screen } from '../styles/breakpoints'
import { fluidFont } from '../styles'

const Caption = styled.figcaption`
  display: block;
  text-align: center;
  ${fluidFont(14, 15)};
  padding: 8px 0;
  font-weight: 500;
  color: var(--text-subtle);
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;

  @media ${screen.sm} {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media ${screen.md} {
    padding-left: 80px;
    padding-right: 80px;
  }
`

export default Caption
