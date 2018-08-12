import styled from 'styled-components';
// import is, { isNot, isOr, isSomeNot } from 'styled-is';
import { transparentize as fade } from 'polished';

import { media } from 'utils/mixins';
import { space, spaces, radius } from 'utils/sizes';


const Resolve = styled.button`
  font-size: 10px;
  font-weight: 500;
  color: ${props => props.theme.heading};
  border: none;
  border-radius: ${radius.xs}px;
  background-color: ${props => fade(.9, props.theme.heading)};
  ${space('padding', 'xs', 's')};
  margin-left: ${spaces.r}px;
  cursor: pointer;
  &:active {
    background-color: ${props => fade(.85, props.theme.heading)};
  }
`;

export default Resolve;
