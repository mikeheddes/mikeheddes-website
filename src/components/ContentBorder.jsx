import styled from 'styled-components'
import { hiDPI } from 'polished'

const ContentBorder = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-clip: border-box;
  background-origin: border-box;
  box-sizing: border-box;
  border-radius: inherit;
  border-radius: ${({ radius }) => radius || 0}px;
  border: 1px solid ${({ theme }) => theme.borderContent};
  ${hiDPI(2)} {
    border-width: 0.5px;
  }
`

export default ContentBorder
