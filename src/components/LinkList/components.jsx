import styled, { css } from 'styled-components'

import space from '../../styles/space'
import { media } from '../../styles/breakpoints'

const Wrapper = styled.ul`
  color: ${({ theme }) => theme.link};
  font-size: 17px;
  min-width: 100%;
  font-weight: 500;
  white-space: nowrap;
  display: block;
  overflow-x: scroll;
  text-align: ${({ textAlign }) => textAlign};

  &::-webkit-scrollbar {
    opacity: 0;
    display: none;
  }
`

export default Wrapper

const Item = styled.li`
  display: inline-block;
  margin-right: ${space.re};

  ${({ width }) =>
    width === 'fixed' &&
    css`
      width: calc(${2 * 33.33333334}% - ${space.re});

      ${media.sm`
        width: calc(${2 * 20}% - ${space.re});
      `};

      ${media.lg`
        width: calc(${2 * 14.2857142}% - ${space.re});
      `};
    `};

  &:last-of-type {
    margin-right: 0;
  }
`

export { Item }
