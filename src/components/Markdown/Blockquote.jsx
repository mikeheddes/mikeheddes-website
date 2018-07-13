import styled, { css } from 'styled-components';
import { fluidText, media } from 'utils/mixins';
import { space, radius } from 'style';
import position, { widthProp } from 'utils/position';

const Blockquote = styled.blockquote`
  ${fluidText(22, 30)};
  background-color: ${({ theme }) => theme.surface};
  border-radius: ${radius.l}px;
  padding: ${space.m}px;
  ${position};

  ${media.tabletLandscape(css`
    padding: ${space.l}px;
  `)};

  p {
    color: ${({ theme }) => theme.link};
    font-weight: 600;
    line-height: 1.25;
    margin: 0;
  }
`;

Blockquote.propTypes = {
  width: widthProp,
};

Blockquote.defaultProps = {
  width: 'text',
};

export default Blockquote;
