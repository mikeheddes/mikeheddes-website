import styled from 'styled-components';

import { media } from 'utils/mixins';
import { spaces, space } from 'utils/sizes';
import { DAY } from 'utils/colors';

const Blockquote = styled.blockquote`
  border-left: 5px solid ${props => props.theme.text2};
  padding-left: ${spaces.r}px;
  ${space('margin', 'r', 0)};

  & > p {
    font-weight: 600;
    line-height: 1.2;
    font-size: 24px;
    ${media.tabletPortrait`font-size: 27px;`}
    ${media.tabletLandscape`font-size: 30px;`}
    ${media.desktop`font-size: 32px;`}
    ${media.giant`font-size: 34px;`}
    color: ${props => props.theme.text2};
    font-style: italic;
  }
`

Blockquote.defaultProps = {
  theme: DAY,
}

export default Blockquote;
