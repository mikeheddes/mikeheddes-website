import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media, mediaSize } from 'utils/mixins';
import { createPadding } from 'utils/createSpace';
import { width, space } from 'style';
import { hiDPI } from 'polished';

const Section = styled.section`
  position: ${({ position }) => position};

  ${({ background }) => background
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

  ${hiDPI(2)} {
    border-width: 0.5px;
  }
  padding: ${({ noPaddingX, noPaddingY }) => createPadding(noPaddingY ? 0 : 'xm', noPaddingX ? 0 : 'm')};

  ${media.tabletPortrait(css`
    padding: ${({ noPaddingX, noPaddingY }) => createPadding(noPaddingY ? 0 : 'xl', noPaddingX ? 0 : 'xl')};
  `)}

  ${media.tabletLandscape(css`
    padding: ${({ noPaddingX, noPaddingY }) => createPadding(noPaddingY ? 0 : 'xl', noPaddingX ? 0 : 'M')};
  `)}

  ${media.desktop(css`
    padding: ${({ noPaddingX, noPaddingY }) => createPadding(noPaddingY ? 0 : 'xl', noPaddingX ? 0 : 'M')};
  `)};

  ${({ marginTop }) => (marginTop
    ? css`
          margin-top: ${space.xr}px;
        `
    : '')};

  ${({ marginBottom }) => (marginBottom
    ? css`
          margin-bottom: ${space.xr}px;

          ${media.desktop(css`
            margin-bottom: ${space.l}px;
          `)};
        `
    : '')};

  ${({ grid }) => grid
    && css`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: [full-start] ${
  space.m
}px [content-start text-start] 1fr [text-end content-end] ${space.m}px [full-end];

  ${media.tabletPortrait(css`
    grid-template-columns:
      [full-start] ${space.xl}px [content-start] 1fr [text-start] minmax(auto, ${width.text}px)
      [text-end] 1fr [content-end] ${space.xl}px [full-end];
  `)}

  ${media.tabletLandscape(css`
    grid-template-columns:
      [full-start] minmax(${space.M}px, 1fr) [content-start] minmax(
        auto,
        ${(width.content - width.text) / 2}px
      )
      [text-start] minmax(
        ${mediaSize.tabletLandscape - space.M * 2}px,
        ${width.text}px
      ) [text-end] minmax(auto, ${(width.content - width.text) / 2}px)
      [content-end] minmax(${space.M}px, 1fr) [full-end];
  `)}

  ${media.desktop(css`
    grid-template-columns:
      [full-start] minmax(${space.M}px, 1fr) [content-start] minmax(
        auto,
        ${(width.content - width.text) / 2}px
      )
      [text-start] ${width.text}px [text-end] minmax(auto, ${(width.content - width.text) / 2}px)
      [content-end] minmax(${space.M}px, 1fr) [full-end];
  `)};
    `}
`;

Section.propTypes = {
  background: PropTypes.bool,
  borderBottom: PropTypes.bool,
  borderTop: PropTypes.bool,
  grid: PropTypes.bool,
  marginBottom: PropTypes.bool,
  marginTop: PropTypes.bool,
  noPaddingX: PropTypes.bool,
  noPaddingY: PropTypes.bool,
  position: PropTypes.oneOf(['static', 'absolute', 'relative', 'fixed']),
};

Section.defaultProps = {
  background: false,
  borderBottom: false,
  borderTop: false,
  grid: false,
  marginBottom: false,
  marginTop: false,
  noPaddingX: false,
  noPaddingY: false,
  position: 'static',
};

export default Section;
