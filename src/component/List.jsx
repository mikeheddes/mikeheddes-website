import styled from 'styled-components'

import { marginPropTypes, setMargin } from '../style/margin'

const List = styled.ul`
  line-height: 1.2;
  color: ${({ theme }) => theme.text};
  padding-right: 1.25em;
  transform: translateX(1.25em);

  li {
    margin-bottom: 0.35em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ${setMargin};
`

List.propTypes = {
  ...marginPropTypes,
}

export default List
