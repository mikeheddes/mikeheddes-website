import { css } from "styled-components";
import { between, rem } from "polished";

import { breakpoints, screen } from "./breakpoints";

const contentOrTextWidth = ({ $wide = false }: { $wide?: boolean }) =>
  $wide ? "--width-content" : "--width-text";

export const contentWrapper = css<{ $wide?: boolean }>`
  width: 100%;
  max-width: calc(var(${contentOrTextWidth}) + 2 * 20px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media ${screen.sm} {
    padding-left: 50px;
    padding-right: 50px;
    max-width: calc(var(${contentOrTextWidth}) + 2 * 50px);
  }

  @media ${screen.md} {
    padding-left: 130px;
    padding-right: 130px;
    max-width: calc(var(${contentOrTextWidth}) + 2 * 130px);
  }
`;

export const absoluteSize = css`
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
`;

export const ellipsis = css<{ maxlines: number; lineHeight: number }>`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${({ maxlines }) => maxlines};
  -webkit-box-orient: vertical;
  max-height: ${({ lineHeight, maxlines }) => (lineHeight || 1.2) * maxlines}em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/**
 *
 * @param {Number} min font-size in pixels
 * @param {Number} max font-size in pixels
 */
export function fluidFont(min: number, max: number) {
  return css`
    font-size: ${rem(min)};

    @media ${screen.sm} {
      font-size: ${between(
        rem(min),
        rem(max),
        rem(breakpoints.sm),
        rem(breakpoints.lg),
      )};
    }

    @media ${screen.lg} {
      font-size: ${rem(max)};
    }
  `;
}
