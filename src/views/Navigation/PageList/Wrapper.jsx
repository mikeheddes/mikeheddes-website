import styled from 'styled-components'

import { media } from '../../../styles/breakpoints'
import { center } from '../../../styles/mixins'
import { space, width } from '../../../styles'
import config from '../config'

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  list-style: none;
  height: auto;
  width: ${config.size.width}px;
  max-width: 100%;
  font-size: 17px;
  font-weight: 500;
  align-content: stretch;
  padding: ${space.lg} 0 ${space.gi};
  transition: transform 1s ease-out;
  ${center};

  ${media.sm`
    flex-direction: row;
    padding: 0;
    transition: none;
    width: ${width.text};
  `};
`

export default Wrapper
