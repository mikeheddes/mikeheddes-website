import styled from 'styled-components'
import { transparentize as fade } from 'polished'

import { radius, fonts } from '../style'
import { marginPropTypes, setMargin } from '../style/margin'

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
