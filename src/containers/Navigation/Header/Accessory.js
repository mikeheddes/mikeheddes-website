import styled, { css } from 'styled-components';

import { space } from 'style';

const Accessory = styled.div`
  display    : flex;
  align-items: center;
  height     : 100%;
  font-weight: 400;

  ${({ right }) =>
    right &&
    css`
      justify-content: flex-end;
      text-align: right;
      padding-right: ${space.m}px;
      padding-left: ${space.r}px;
      margin-left: ${space.r}px;
    `}

  ${({ left }) =>
    left &&
    css`
      justify-content: flex-start;
      text-align: left;
      padding-left: ${space.m}px;
      padding-right: ${space.r}px;
      margin-right: ${space.r}px;
    `}

  ${({ clickable }) =>
    clickable &&
    css`
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      transition: opacity 0.12s ease-out;

      &:active {
        opacity: 0.5;
      }
    `}
`;

export default Accessory;
