import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 12 12',
})`
  user-select: none;
  width: 12px;
  height: 12px;
  position: absolute;

  ${({ top }) => top && 'top: 4px'};
  ${({ bottom }) => bottom && 'bottom: 4px'};
  ${({ left }) => left && 'left: 4px'};
  ${({ right }) => right && 'right: 4px'};
`

const Path = styled.path`
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  stroke: var(--heading-obvious);
`

const Corner = ({ top, bottom, left, right }) => (
  <Wrapper top={top} bottom={bottom} left={left} right={right}>
    {top && left && <Path d="M 1 11 v -10 h 10" />}
    {top && right && <Path d="M 1 1 h 10 v 10" />}
    {bottom && left && <Path d="M 11 11 h -10 v -10" />}
    {bottom && right && <Path d="M 11 1 v 10 h -10" />}
  </Wrapper>
)

const Frame = () => (
  <>
    <Corner top left />
    <Corner top right />
    <Corner bottom right />
    <Corner bottom left />
  </>
)

export default Frame
