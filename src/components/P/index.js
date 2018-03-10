import styled from 'styled-components';

import { DAY } from 'utils/colors';
import pStyles from './pStyles';

const P = styled.p`
  ${pStyles}
`

P.defaultProps = {
  theme: DAY,
}

export default P;
