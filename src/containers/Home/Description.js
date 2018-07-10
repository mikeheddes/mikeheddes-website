import styled, { css } from 'styled-components';
import { hiDPI, transparentize as fade } from 'polished';

import { createPadding } from 'utils/createSpace';
import { media, fluidText, fluidValue } from 'utils/mixins';


export default styled.p`
  color: ${({ theme }) => theme.heading};
  ${fluidText(22, 29)};
  font-weight: 600;
  ${fluidValue(1.6, 1.42, 'line-height')};

  ${media.desktop(css`
    padding: ${createPadding('xm', 0)};
  `)}

`;
