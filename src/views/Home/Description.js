import styled from 'styled-components'

import { fluidFont, fluidValue } from '../../styles/mixins'
import { media } from '../../styles/breakpoints'
import space from '../../styles/space'

export default styled.p`
  color: ${({ theme }) => theme.heading};
  ${fluidFont(22, 29)};
  font-weight: 600;
  ${fluidValue(1.6, 1.42, 'line-height')};

  ${media.lg`
    padding: ${space.xm} 0;
  `};
`
