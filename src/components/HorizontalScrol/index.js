import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { media } from 'utils/mixins';

const HorizontalScrol = styled.div`
  ${props => props.media ? media[props.media](css`
      overflow-x: auto;
  `) : css`
      overflow-x: auto;
  `}
  ${props => !props.bar && css`
      &::-webkit-scrollbar {
        display: none;
      }
  `}
`

export default HorizontalScrol
