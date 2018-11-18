import styled from 'styled-components'

import { space } from '../style'

const List = styled.ul`
  list-style-position: inside;
  line-height: 1.2;
  color: ${({ theme }) => theme.text};
  margin-bottom: ${space.xr};

  ol,
  ul {
    padding-left: 1.25em;
    margin-bottom: 0.5em;
  }

  li {
    margin-bottom: 0.5em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export default List
