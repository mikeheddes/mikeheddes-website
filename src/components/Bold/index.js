import styled, { css } from 'styled-components';
import { transparentize as fade } from 'polished';

import { media } from 'utils/mixins';
import { space, radius } from 'utils/sizes';
import { accents, grays, DAY } from 'utils/colors';

const Bold = styled.b`
  font-weight: 700;
  color: ${props => props.theme.text1};
`

Bold.defaultProps = {
  theme: DAY,
}

export default Bold;
