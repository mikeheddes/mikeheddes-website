import styled, { css } from 'styled-components'
import { getLuminance } from 'polished'

import space from '../../../styles/space'
import { fluidFont } from '../../../styles/mixins'
import { media } from '../../../styles/breakpoints'

export default styled.header`
  position: relative;
  color: ${({ theme }) => theme.title};
  text-align: center;
  padding: ${space.xl} ${space.md} ${space.lg};
  overflow: hidden;
  ${({ theme }) =>
    getLuminance(theme.background) <= 0.5 &&
    css`
      background-color: #000;
    `};

  ${media.lg`
    padding: ${space.xl} ${space.gi} ${space.lg};
  `};

  ${({ uImg }) =>
    uImg &&
    css`
      background-image: url(${uImg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      &::before {
        content: '';
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
    `};

  & h2 {
    ${fluidFont(28, 42)};
    display: none;
    font-weight: 500;
    opacity: 0.7;
    margin-bottom: ${space.sm};
    margin-top: ${space.xm};

    ${media.sm`
      display: block;
      margin-top: ${space.xl};
    `};

    ${media.md`
      margin-top: ${space.xm};
    `};
  }

  & h1 {
    ${fluidFont(46, 68)};
    font-weight: 700;
    margin-top: ${space.sm};
  }
`

export const TitleBox = styled.div`
  margin-bottom: ${space.xg};
  margin-top: ${space.xm};

  ${media.sm`
    margin-bottom: ${space.co};
    margin-top: ${space.xl};
  `};

  ${media.md`
    margin-bottom: ${space.xc};
    margin-top: ${space.xm};
  `};

  ${media.lg`
    margin-bottom: 420px;
  `};
`
