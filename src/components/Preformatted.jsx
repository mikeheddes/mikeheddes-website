import styled from 'styled-components'
import { transparentize as fade } from 'polished'

import { radius, fonts } from '../styles'
import { marginPropTypes, setMargin } from '../styles/space'

const Preformatted = styled.pre`
  border: 2px solid ${({ theme }) => fade(0.25, theme.surface)};
  ${fonts.mono};
  line-height: 1.25;
  border-radius: ${radius.md};
  hyphens: none;
  tab-size: 2;

  &[class*='language-python'] {
    tab-size: 4;
  }

  ${setMargin};
`

Preformatted.propTypes = {
  ...marginPropTypes,
}

export default Preformatted
