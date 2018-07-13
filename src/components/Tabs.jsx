import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from 'utils/mixins';
import { createPadding } from 'utils/createSpace';
import { transparentize as fade, darken } from 'polished';
import space from 'style/space';
import radius from 'style/radius';

const TabRow = styled.ul`
  background-color: ${({ theme }) => theme.surface};
  border-radius: ${radius.m}px;
  padding: ${createPadding(0, 'r')};
  text-align: center;
  margin-bottom: ${space.m}px;
  white-space: nowrap;
  font-size: 17px;
  user-select: none;
  ${({ withScroll }) => withScroll
    && css`
      ${media.phoneOnly(css`
        display: inline-block;
        min-width: calc(100vw - 2 * ${space.phone}px);
        margin-left: ${space.phone}px;
        margin-right: ${space.phone}px;
      `)};
    `}

  ${media.tabletPortrait(css`
    padding: ${createPadding(0, 'xr')};
  `)}

  ${media.tabletLandscape(css``)}

  ${media.desktop(css``)};
`;

TabRow.propTypes = {
  withScroll: PropTypes.bool,
};

TabRow.defaultProps = {
  withScroll: false,
};

const Tab = styled.li`
  display: inline-block;
  position: relative;
  padding: ${createPadding('r', 'xr')};
  margin-right: ${space.s}px;
  border-radius: ${radius.r}px;
  color: ${({ theme }) => theme.link};
  transition: color 150ms cubic-bezier(0.19, 1, 0.22, 1),
    background-color 300ms cubic-bezier(0.19, 1, 0.22, 1);
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  ${({ active }) => active
    && css`
      background-color: ${({ theme }) => darken(0.06, theme.surface)};
      cursor: default;

      &:hover {
        background-color: ${({ theme }) => darken(0.06, theme.surface)};
      }

      &:active {
        color: ${({ theme }) => theme.link};
      }
    `};

  ${({ onClick, active }) => onClick
    && !active
    && css`
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => darken(0.03, theme.surface)};
      }

      &:active {
        color: ${({ theme }) => fade(0.5, theme.link)};
      }
    `};
`;

Tab.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  active: false,
  onClick: undefined,
};

export { TabRow, Tab };
