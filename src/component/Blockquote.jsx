import styled from 'styled-components'
import { transparentize as fade } from 'polished'

import { media } from '../style/breakpoints'
import { space, radius } from '../style'

const Blockquote = styled.blockquote`
  font-size: inherit;
  border-left: 5px solid;
  border-color: ${({ theme }) => fade(0.5, theme.link)};
  background-color: ${({ theme }) => theme.surface};
  padding: ${space.md};
  margin-top: ${space.xm};
  margin-bottom: ${space.xm};
  border-radius: ${radius.sm};

  ${media.md`
    padding: ${space.xm}px;
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
`

export default Blockquote
