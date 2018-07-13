import { css } from 'styled-components';
import Box from 'components/Box';
import Section from 'components/Section';
import { media } from 'utils/mixins';
import space from 'style/space';

export const ContentWrapper = Box.extend`
  display: block;

  ${media.desktop(css`
    display: flex;
  `)}
`;
