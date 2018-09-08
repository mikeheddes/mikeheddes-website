import styled, { css } from 'styled-components'
import { transparentize as fade } from 'polished'
import space from 'style/space'
import radius from 'style/radius'
import HScroll from 'components/HorizontalScroll'
import { TabRow as TR, Tab as T } from 'components/Tabs'
import { media, fluidText } from 'utils/mixins'

export const HorizontalScroll = HScroll.extend`
  ${media.tabletLandscape(css`
    position: absolute;
    right: 0;
    bottom: 0;
  `)};
`

export const TabRow = TR.extend`
  ${media.tabletLandscape(css`
    background-color: transparent;
    margin-bottom: ${space.xr}px;
  `)};
`

const bottomLine = css`
  content: '';
  position: absolute;
  bottom: -${space.xr}px;
  left: 0;
  height: 2px;
  border-radius: ${radius.r}px;
  width: 100%;
`

export const Tab = T.extend`
  font-weight: 500;
  ${media.tabletLandscape(css`
    background-color: transparent;
    &:hover {
      background-color: transparent;
    }
    padding: 0;
    margin-right: ${space.xm}px;

    &:last-of-type {
      margin-right: 0;
    }

    &::after {
      ${bottomLine};
      background-color: ${({ theme }) => fade(1, theme.link)};
      transform: scaleX(0.7);
      transition: background-color 300ms cubic-bezier(0.19, 1, 0.22, 1),
        transform 300ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    ${({ active }) =>
      active &&
      css`
        background-color: transparent;

        &:hover {
          background-color: transparent;
        }

        &::after {
          ${bottomLine};
          background-color: ${({ theme }) => theme.link};
          transform: scaleX(1);
        }
      `};

    ${({ onClick, active }) =>
      onClick &&
      !active &&
      css`
        &:hover {
          &::after {
            ${bottomLine};
            background-color: ${({ theme }) => fade(0.5, theme.link)};
            transform: scaleX(1);
          }
        }
      `};
  `)};
`

export const Title = styled.h1`
  ${fluidText(32, 40)};
  border-bottom: 2px solid ${({ theme }) => theme.borderSeparate};
  padding-bottom: ${space.r}px;
  margin-bottom: ${space.m}px;

  ${media.phoneOnly(css`
    margin-top: ${space.xm}px;
  `)};

  ${media.tabletLandscape(css`
    padding-bottom: ${space.xr}px;
    margin-bottom: ${space.xm}px;
  `)};
`
