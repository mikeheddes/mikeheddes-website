import styled, { css } from 'styled-components';
import { transparentize as fade } from 'polished';

import { media } from 'utils/mixins';
import { space, radius } from 'utils/sizes';
import { accents, grays, DAY } from 'utils/colors';
import codeStyles from '../CodeBlock/codeStyles';

const CodeInline = styled.code`
  ${codeStyles}
  background: ${props => props.theme.accent1};
  color     : ${props => props.theme.text2};
  ${space('padding', 's', 'r')};
  border-radius: ${radius.s}px;
`

CodeInline.defaultProps = {
  theme: DAY,
}

export default CodeInline;
