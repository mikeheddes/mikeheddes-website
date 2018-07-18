import styled, { css } from 'styled-components';
import { media } from 'utils/mixins';
import { space } from 'style';
import position, { widthProp } from 'utils/position';

const Blockquote = styled.blockquote`
  font-size: inherit;
  border-left: 5px solid;
  border-color: ${({ theme }) => theme.borderSeparate};
  padding-left: ${space.m}px;
  margin-top: ${space.xm}px;
  margin-bottom: ${space.xm}px;
  ${position};

  ${media.tabletLandscape(css`
    padding-left: ${space.xm}px;
  `)};

  a {
    font-weight: 500;
  }

  p {
    color: ${({ theme }) => theme.textSubtle};
    line-height: 1.25;
    margin: 0;
    margin-bottom: 10px;
  }
`;

Blockquote.propTypes = {
  width: widthProp,
};

Blockquote.defaultProps = {
  width: 'text',
};

export default Blockquote;
