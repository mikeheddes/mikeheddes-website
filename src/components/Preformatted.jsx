import styled from 'styled-components'
import { transparentize as fade } from 'polished'

import { radius, fonts } from '../styles'
import { marginPropTypes, setMargin } from '../styles/space'

const Preformatted = styled.pre`
  background-color: ${({ theme }) => fade(0.25, theme.surface)};
  ${fonts.mono};
  line-height: 1.25;
  border-radius: ${radius.md};
  ${setMargin};
`

Preformatted.propTypes = {
  ...marginPropTypes,
}

export default Preformatted
