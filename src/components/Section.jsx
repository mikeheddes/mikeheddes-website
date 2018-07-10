import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from 'utils/mixins';
import { createPadding } from 'utils/createSpace';
import { width } from 'style';
import { hiDPI } from 'polished';

const Section = styled.section`
  ${({ noBackground }) => !noBackground
    && css`
      background-color: ${({ theme }) => theme.surface};
    `}
  color: ${({ theme }) => theme.title};
  overflow: hidden;
  ${({ borderBottom }) => borderBottom
    && css`
      border-bottom: 1px solid ${({ theme }) => theme.borderSeparate};
    `}
  ${({ borderTop }) => borderTop
    && css`
      border-top: 1px solid ${({ theme }) => theme.borderSeparate};
    `}

  padding: ${({ noPaddingX, noPaddingY }) => createPadding(noPaddingY ? 0 : 'xm', noPaddingX ? 0 : 'm')};
  ${hiDPI(2)} {
    border-width: 0.5px;
  }

  ${media.tabletPortrait(css`
    padding: ${({ noPaddingX, noPaddingY }) => createPadding(noPaddingY ? 0 : 'xl', noPaddingX ? 0 : 'xl')};
  `)}

  ${media.tabletLandscape(css`
    padding: ${({ noPaddingX, noPaddingY }) => createPadding(noPaddingY ? 0 : 'xl', noPaddingX ? 0 : 'M')};
  `)}

  ${media.desktop(css`
    padding: ${({ noPaddingX, noPaddingY }) => createPadding(noPaddingY ? 0 : 'xl', noPaddingX ? 0 : 'M')};
  `)};

  ${({ grid }) => grid
    && css`
      display: grid;
      grid-template-rows: [full-start] 1fr [content-start] ${(width.content - width.text) / 2}px [text-start] ${width.text}px [text-end] ${(width.content
          - width.text)
          / 2}px [content-end] 1fr [full-end];
      grid-template-columns: auto;
    `}
`;

Section.propTypes = {
  borderBottom: PropTypes.bool,
  borderTop: PropTypes.bool,
  grid: PropTypes.bool,
  noBackground: PropTypes.bool,
  noPaddingX: PropTypes.bool,
  noPaddingY: PropTypes.bool,
};

Section.defaultProps = {
  borderBottom: false,
  borderTop: false,
  grid: false,
  noBackground: false,
  noPaddingX: false,
  noPaddingY: false,
};

export default Section;
