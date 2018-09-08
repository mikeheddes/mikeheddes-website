import styled, { css } from 'styled-components'
import { transparentize as fade } from 'polished'
import { media } from 'utils/mixins'
import { space, radius } from 'style'

const Blockquote = styled.blockquote`
  font-size: inherit;
  border-left: 5px solid;
  border-color: ${({ theme }) => fade(0.5, theme.link)};
  background-color: ${({ theme }) => theme.surface};
  padding: ${space.m}px;
  margin-top: ${space.xm}px;
  margin-bottom: ${space.xm}px;
  border-radius: ${radius.s}px;

  ${media.tabletLandscape(css`
    padding: ${space.xm}px;
  `)};

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
