import styled, { css } from 'styled-components';
import { transparentize as fade } from 'polished';

import { size } from 'style';
import { media } from 'utils/mixins';

const Copyright = styled.div`
  height: ${size.footerHeight / 2}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => fade(0.25, theme.heading)};
    font-size: 7px;
    font-weight: 400;
    ${media.tabletPortrait(css`
      font-size: 9px;
      font-weight: 500;
    `)};
  }
`;

export default Copyright;
