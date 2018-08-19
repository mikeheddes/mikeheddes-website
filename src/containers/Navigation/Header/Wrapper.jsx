import styled, { css } from 'styled-components';

import { media } from 'utils/mixins';
import config from '../config';

const Wrapper = styled.div`
  font-size: 17px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  height: ${config.size.tablet}px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.heading};

  ${media.phoneOnly(css`
    height: ${config.size.phone}px;
  `)};

  ${media.tabletPortrait(css`
    top: -100%;
    position: absolute;
    visibility: hidden;
    left: 0;
    right: 0;
  `)};
`;

export default Wrapper;
