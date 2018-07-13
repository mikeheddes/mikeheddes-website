import styled, { css } from 'styled-components';
import { getLuminance } from 'polished';
import space from 'style/space';
import { media, fluidText } from 'utils/mixins';

export default styled.header`
  position: relative;
  color: ${({ theme }) => theme.title};
  text-align: center;
  padding: ${space.xl}px ${space.m}px ${space.l}px;
  overflow: hidden;
  ${({ theme }) => (getLuminance(theme.background) <= 0.5
  && css`
    background-color: #000;
  `)}

  ${media.desktop(css`
    padding: ${space.xl}px ${space.M}px ${space.l}px;
  `)}

  ${({ uImg }) => (uImg ? css`
    background-image: url(${uImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &::before {
      content: "";
      filter: blur(20px);
      transform-origin: center;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image: url(${uImg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  ` : '')}

  & h2 {
    ${fluidText(28, 42)};
    display: none;
    font-weight: 500;
    opacity: .7;
    margin-bottom: ${space.s}px;
    margin-top: ${space.xm}px;

    ${media.tabletPortrait(css`
      display: block;
      margin-top: ${space.xl}px;
    `)}

    ${media.tabletLandscape(css`
      margin-top: ${space.xm}px;
    `)}
  }

  & h1 {
    ${fluidText(46, 68)};
    font-weight: 700;
    margin-top: ${space.s}px;
    margin-bottom: ${space.xM}px;

    ${media.tabletPortrait(css`
      margin-bottom: ${space.G}px;
    `)}

    ${media.tabletLandscape(css`
      margin-bottom: ${space.xM}px;
    `)}

    ${media.desktop(css`
      margin-bottom: 420px;
    `)}
  }

  & a {
    font-size: 17px;
    font-weight: 500;
  }
`;
