import styled from 'styled-components'
import { transparentize as fade } from 'polished'

import { radius, fonts } from '../style'

const Preformatted = styled.pre`
  background-color: ${({ theme }) => fade(0.5, theme.surface)};
  ${fonts.mono};
  line-height: 1.25;
  border-radius: ${radius.md};
`

export default Preformatted
