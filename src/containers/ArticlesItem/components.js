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
  ${fluidText(32, 68)};
  color: ${({ theme }) => theme.link};
  line-height: 1.08;
  font-weight: 700;
  margin-bottom: ${space.m}px;

  ${media.tabletLandscape(css`
    margin-bottom: ${space.xm}px;
  `)};

  ${({ children }) =>
    !children &&
    css`
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
  margin-bottom: ${space.r}px;
  margin-top: -${space.r}px;

  ${media.tabletLandscape(css`
    margin-bottom: ${space.m}px;
  `)};
`;

export const InfoLine = styled.div`
  ${fluidText(14, 17)};
  font-weight: 400;
  color: ${({ theme }) => theme.textSubtle};
  margin-bottom: ${space.r}px;

  ${media.tabletLandscape(css`
    margin-bottom: ${space.m}px;
  `)};
`;

export const Author = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.link};
`;

export const PhotoCredit = styled.span`
  display: block;
  text-align: center;
  ${fluidText(14, 16)};
  margin-top: ${space.xr}px;
  font-weight: 400;
  color: ${({ theme }) => fade(0.7, theme.title)};
`;

export const SlotTitle = styled.h3`
  font-weight: 500;
  ${fluidText(18, 24)};
  margin-bottom: ${space.xm}px;
  color: ${({ theme }) => theme.link};
`;

export const SlotImage = styled.div`
  width: 256px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: ${space.xr}px;
`;

export const LinkListWrapper = styled.div`
  margin-top: ${space.l}px;

  ${media.phoneOnly(css`
    margin-top: ${space.xm}px;
  `)};
`;
