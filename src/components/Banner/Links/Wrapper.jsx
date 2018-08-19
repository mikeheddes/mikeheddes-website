import { darken } from 'polished';
import styled, { css } from 'styled-components';
import Anchor from 'components/Link';

import space from 'style/space';
import radius from 'style/radius';
import { media, fluidText } from 'utils/mixins';

const Wrapper = styled.ul`
  color: ${({ theme }) => theme.link};
  text-align: center;
  padding-top: ${space.r}px;
  padding-bottom: ${space.m}px;

  ${media.phoneOnly(css`
    padding: 0;
    margin: 0;
    padding-bottom: ${space.r}px;
    white-space: nowrap;
    display: block;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  `)};

  & li {
    display: inline-block;
    text-decoration: inherit;

    ${media.phoneOnly(css`
      max-width: calc(100% - 1em);
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: normal;
    `)};
  }
`;

export default Wrapper;

export const Link = Anchor.extend`
  ${fluidText(17, 20)};
  font-weight: 500;
  margin: 0 ${space.xr}px;
  display: inline-block;

  ${media.phoneOnly(css`
    padding: 10px 15px;
    width: calc(66.67vw - ${space.m + space.r / 2}px);
    border-radius: ${radius.m}px;
    margin: 0;
    margin-right: ${space.r}px;
    background-color: ${({ theme }) => darken(0.03, theme.surface)};

    &:first-of-type {
      margin-left: ${space.m}px;
    }

    &:last-of-type {
      margin-right: ${space.m}px;
    }
  `)};
`;
