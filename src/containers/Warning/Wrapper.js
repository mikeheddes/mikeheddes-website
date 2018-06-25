import styled from 'styled-components';

import { media } from 'utils/mixins';
import { space, spaces } from 'utils/sizes';


const Wrapper = styled.div`
  position: fixed;
  font-size: 13px;
  color: ${props => props.theme.heading};
  background-color: ${props => props.theme.surfaceProminent};
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  ${space('padding', 'xs', 'm')};
  text-align     : center;
  border-bottom: 1px solid ${props => props.theme.borderContent};
`;

export default Wrapper;
