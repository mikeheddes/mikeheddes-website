import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media, center, fluidText } from 'utils/mixins';
import { space, spaces } from 'utils/sizes';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  h1, h2, h3 {
    user-select: none;
    cursor: default;
  }

  h1 {
    ${fluidText(30, 48)}
    line-height: 1.1;
    font-weight: 700;
    color: ${props => props.color || props.theme.heading };
    ${media.desktop(css`
    `)}
    &.loading {
      height: 1em;
      background-color: ${props => props.theme.accentGray2};
      border-radius: 1000px;
      width: 80%;
    }
  }

  h2 {
    ${fluidText(18, 27)}
    font-weight: 600;
    margin-top: ${spaces.r}px;
    line-height: 1.4;
    color: ${props => props.theme.heading1};
    ${media.desktop(css`
      margin-top: ${spaces.m}px;
    `)}

    ${props => props.contentType == "music" ? css`
      ${fluidText(21, 34)}
      font-weight: 500;
      margin-top: ${spaces.s}px;
      ${media.desktop(css`
        margin-top: ${spaces.xr}px;
      `)}
    ` : ''}
    &.loading {
      height: 1em;
      background-color: ${props => props.theme.accentGray2};
      border-radius: 1000px;
      width: 50%;
    }
  }

  h3 {
    ${fluidText(16, 20)}
    font-weight: 500;
    margin-bottom: ${spaces.m}px;
    color: ${props => props.theme.heading};
    margin-bottom: ${spaces.xr}px;
    ${media.desktop(css`
      margin-bottom: ${spaces.xr}px;
    `)}
  }

  & .buttons{
    margin-top: ${spaces.xm}px;
    display: block;
    ${media.desktop(css`
      display: none;
    `)}
  }
`

TextWrapper.propTypes = {
  textColor: PropTypes.string,
  contentType: PropTypes.string,
}

export default TextWrapper
