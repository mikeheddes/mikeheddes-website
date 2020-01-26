import styled from 'styled-components'

import { screen } from '../styles/breakpoints'
import { fluidFont } from '../styles'

const Blockquote = styled.blockquote`
  ${fluidFont(20, 22)}
  font-weight: 600;
  padding: 4px 20px;
  line-height: 1.5;

  @media ${screen.md} {
    padding: 4px 30px;
  }

  @media ${screen.lg} {
    padding: 8px 50px;
  }

  p {
    color: var(--text-subtle);
    margin: 0;
    margin-bottom: 20px;
    font-weight: 600;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    font-weight: 600;
  }
`

export default Blockquote
