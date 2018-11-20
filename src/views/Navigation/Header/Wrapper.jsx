import styled from 'styled-components'

import { media } from '../../../styles/breakpoints'
import config from '../config'

const Wrapper = styled.div`
  font-size: 17px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  height: ${config.size.phone}px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.heading};

  ${media.sm`
    height: ${config.size.tablet}px;
    top: -100%;
    position: absolute;
    visibility: hidden;
    left: 0;
    right: 0;
  `};
`

export default Wrapper
