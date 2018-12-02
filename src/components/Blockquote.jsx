import styled from 'styled-components'
import { transparentize as fade } from 'polished'

import { media } from '../styles/breakpoints'
import { space, radius } from '../styles'
import { marginPropTypes, setMargin } from '../styles/space'

const Blockquote = styled.blockquote`
  font-size: inherit;
  border-left: 5px solid;
  border-color: ${({ theme }) => fade(0.3, theme.link)};
  background-color: ${({ theme }) => theme.surface};
  padding: ${space.md};
  border-radius: ${radius.sm};

  ${media.md`
    padding: ${space.xm};
  `};

  p {
    color: ${({ theme }) => theme.textSubtle};
    line-height: 1.25;
    margin: 0;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${setMargin};
`

Blockquote.propTypes = {
  ...marginPropTypes,
}

export default Blockquote
