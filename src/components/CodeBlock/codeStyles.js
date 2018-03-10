import { css } from 'styled-components';

import { media } from 'utils/mixins';
import { space, radius } from 'utils/sizes';

const codeStyles = css`
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.3;
  ${media.tabletLandscape(css`
    font-size: 16px;
  `)}
  ${media.giant(css`
    font-size: 18px;
  `)}
`;

export default codeStyles;
