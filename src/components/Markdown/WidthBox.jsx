import styled, { css } from 'styled-components';
import { media, mediaWidthQuery } from 'utils/mixins';
import { space, width as W } from 'style';
import { widthProp } from 'utils/position';

const WidthBox = styled.div`
  ${({ width }) => width === 'full'
    && css`
      position: relative;
      width: 100vw;
      left: 50%;
      transform: translateX(-50vw);
    `};
  ${({ width }) => width === 'content'
    && css`
    position: relative;
    width: 100vw;
    left: 50%;
    transform: translateX(-50vw);
    padding: 0 ${space.phone}px;

    ${media.tabletPortrait(css`
      padding: 0 ${space.tabletPortrait}px;
    `)}

    ${media.tabletLandscape(css`
      padding: 0 ${space.tabletLandscape}px;
    `)}

    ${media.desktop(css`
      padding: 0 ${space.desktop}px;
    `)};

    ${mediaWidthQuery(W.content + 2 * space.desktop)(css`
      width: ${W.content}px;
      transform: translateX(-${W.content / 2}px);
      padding: 0;
    `)}

  `};
`;

WidthBox.propTypes = {
  width: widthProp,
};

WidthBox.defaultProps = {
  width: 'text',
};

export default WidthBox;
