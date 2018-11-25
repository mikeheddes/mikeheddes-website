import styled from 'styled-components'
import { transparentize as fade } from 'polished'

import { radius, space } from '../styles'

export default styled.mark`
  background-color: ${({ theme }) => fade(0.8, theme.link)};
  padding: 0 ${space.xs};
  border-radius: ${radius.xs};
`
