import styled, { css } from 'styled-components'
import { media, center } from 'utils/mixins'
import { space } from 'style'
import config from '../config'

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  list-style: none;
  height: auto;
  min-height: ${config.size.standard}px;
  width: ${config.size.width}px;
  max-width: 100%;
  font-size: 17px;
  font-weight: 500;
  ${center};

  ${media.phoneOnly(css`
    flex-direction: column;
    align-content: stretch;
    padding: ${space.l}px 0 ${space.M}px;
    transition: transform 1s ease-out;
  `)};
`

export default Wrapper
