import styled from 'styled-components'
import { transparentize as fade } from 'polished'

import { marginPropTypes, setMargin } from '../style/margin'
import { radius, space } from '../style'

const Table = styled.table`
  display: block;
  width: 100%;
  font-size: 90%;
  overflow: auto;
  border-spacing: 0;
  border-collapse: collapse;

  th {
    color: ${({ theme }) => theme.heading};
    vertical-align: bottom;
  }

  td {
    color: ${({ theme }) => theme.text};
    vertical-align: baseline;
  }

  tr:nth-child(2n),
  th {
    background-color: ${({ theme }) => fade(0.5, theme.surface)};
  }

  th,
  td {
    padding: ${space.re} ${space.xr};
    border: 1px solid ${({ theme }) => theme.surface};

    &:first-child {
      border-top-left-radius: ${radius.sm};
      border-bottom-left-radius: ${radius.sm};
    }

    &:last-child {
      border-top-right-radius: ${radius.sm};
      border-bottom-right-radius: ${radius.sm};
    }
  }

  ${setMargin};
`

Table.propTypes = {
  ...marginPropTypes,
}

export default Table
