import styled from 'styled-components'
import { up } from 'styled-breakpoints'

import { fluidFont } from '../styles/mixins'

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

  ${up('sm')} {
    padding-left: 30px;
    padding-right: 30px;
  }

  ${up('md')} {
    padding-left: 80px;
    padding-right: 80px;
  }
`

export default Caption
