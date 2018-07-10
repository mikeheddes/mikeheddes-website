import { css } from 'styled-components';
import Box from 'components/Box';
import Section from 'components/Section';
import { media } from 'utils/mixins';
import space from 'style/space';

export const ComponentWrapper = Section.extend`
  ${({ marginTop }) => (marginTop ? css`
    margin-top: ${space.xr}px;
  ` : '')};

  ${({ marginBottom }) => (marginBottom ? css`
    margin-bottom: ${space.xr}px;

    ${media.desktop(css`
      margin-bottom: ${space.l}px;
    `)}
  ` : '')};
`;

export const ContentWrapper = Box.extend`
  display: block;

  ${media.desktop(css`
    display: flex;
  `)}
`;
