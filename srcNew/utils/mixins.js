import { css } from 'styled-components';

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
export const mediaWidthQuery = (size, type = 'min') => styles => css`
    @media only screen and (${type}-width: ${size / 16}em) {
      ${styles}
    }
  `;

export const mediaSize = {
  giant: 1800,
  desktop: 1200,
  tabletLandscape: 900,
  tabletPortrait: 600,
};

export const media = {
  giant: mediaWidthQuery(mediaSize.giant),
  desktop: mediaWidthQuery(mediaSize.desktop),
  tabletLandscape: mediaWidthQuery(mediaSize.tabletLandscape),
  tabletPortrait: mediaWidthQuery(mediaSize.tabletPortrait),
  phoneOnly: mediaWidthQuery(mediaSize.tabletPortrait - 1, 'max'),
};

const cssQuery = query => styles => css`
  ${query} {
    ${styles};
  }
`;

export const has = {
  backdrop: cssQuery('@supports (backdrop-filter: blur(2px))'),
};

export const center = css`
  margin-right: auto;
  margin-left: auto;
`;

export const fluidValue = (min, max, param, unit = '') => css`
  ${param}: ${min} ${unit};

  ${media.tabletPortrait(css`
    ${''}
      ${param}: calc(${max - min} * (100vw - 600px) / ${1200 -
    600} + ${min}${unit});
    `)} ${media.desktop(css`
    ${param}: ${max} ${unit};
  `)};
`;

export const fluidText = (min, max) => fluidValue(min, max, 'font-size', 'px');
