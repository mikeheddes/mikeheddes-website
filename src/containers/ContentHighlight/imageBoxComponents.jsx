import styled, { css } from 'styled-components';
import { media } from 'utils/mixins';
import space from 'style/space';

export const Wrapper = styled.div`
  ${media.desktop(css`
    flex: 0 0 63%;
  `)};
`;

export const EyebrowRow = styled.div`
  margin-bottom: ${space.xr}px;
  ${media.desktop(css`
    display: none;
  `)};

  & > a {
    float: right;
  }
`;
