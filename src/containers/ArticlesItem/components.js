import styled, { css } from 'styled-components';
import { transparentize as fade } from 'polished';
import { media, fluidText } from 'utils/mixins';
import { space, radius } from 'style';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.surface};
  padding-top: ${space.xl}px;
  padding-bottom: ${space.xr}px;
`;

export const Title = styled.h1`
  ${fluidText(34, 68)};
  color: ${({ theme }) => theme.link};
  line-height: 1.12;
  font-weight: 700;
  margin-bottom: ${space.xm}px;

  ${({ children }) => !children
    && css`
      height: 1.12em;
      width: 75%;
      border-radius: ${radius.r}px;
      background-color: ${({ theme }) => fade(0.8, theme.link)};
      ${media.desktop(css`
        width: 100%;
      `)};
    `};
`;

export const Description = styled.p`
  ${fluidText(20, 28)};
  color: ${({ theme }) => fade(0.4, theme.title)};
  font-weight: 500;
  margin-bottom: ${space.m}px;
  margin-top: -${space.r}px;
`;

export const InfoLine = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSubtle};
  margin-bottom: ${space.m}px;
`;

export const Author = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.link};
`;

export const Paragraph = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  margin-bottom: ${space.xm}px;
  line-height: 1.48;
`;

export const Bold = styled.strong`
  font-weight: 700;
  color: ${({ theme }) => theme.title};
`;
