import styled, { css } from 'styled-components'

import { space } from '../../../styles'

const Accessory = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-weight: 400;

  &:first-of-type {
    justify-content: flex-start;
    text-align: left;
    padding-left: ${space.md};
    padding-right: ${space.re};
    margin-right: ${space.re};
  }

  &:last-of-type {
    justify-content: flex-end;
    text-align: right;
    padding-right: ${space.md};
    padding-left: ${space.re};
    margin-left: ${space.re};
  }

  ${({ onClick }) =>
    onClick &&
    css`
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      transition: opacity 0.12s ease-out;

      &:active {
        opacity: 0.5;
      }
    `}
`

export default Accessory
