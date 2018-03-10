import styled from 'styled-components';

import { media } from 'utils/mixins';

export default styled.h2`
  font-weight: 700;
  font-size: 18px;
  ${media.tabletPortrait`font-size: 19px;`}
  ${media.tabletLandscape`font-size: 23px;`}
  ${media.desktop`font-size: 27px;`}
  ${media.giant`font-size: 32px;`}

  ${props => props.uppercase ? css`
    text-transform: uppercase;
    font-size: 16px;
    ${media.tabletPortrait`font-size: 17px;`}
    ${media.tabletLandscape`font-size: 20px;`}
    ${media.desktop`font-size: 24px;`}
    ${media.giant`font-size: 28px;`}
  ` : ''}
`
