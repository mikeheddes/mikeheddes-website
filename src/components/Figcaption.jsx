import styled from 'styled-components'
import { transparentize as fade } from 'polished'

import { space } from '../styles'
import { marginPropTypes, setMargin } from '../styles/space'

const Figcaption = styled.figcaption`
  font-size: 0.9em;
  padding: ${space.re} 0;
  color: ${({ theme }) => fade(0.3, theme.title)};
  text-align: center;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => fade(0.3, theme.link)};
  ${setMargin};
`

Figcaption.propTypes = {
  ...marginPropTypes,
}

export default Figcaption
