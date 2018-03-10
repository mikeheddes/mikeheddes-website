import styled from 'styled-components';

import { media } from 'utils/mixins';

export default styled.h2`
  font-weight: 600;
  font-size: 20px;
  ${media.tabletPortrait`font-size: 24px;`}
  ${media.tabletLandscape`font-size: 29px;`}
  ${media.desktop`font-size: 34px;`}
  ${media.giant`font-size: 40px;`}
`
