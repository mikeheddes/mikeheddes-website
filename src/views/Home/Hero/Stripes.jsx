import styled, { css } from 'styled-components'

const Stripes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  display: flex;
  align-content: center;
  justify-content: center;
  background: ${({ theme }) => css`
    repeating-linear-gradient(
      -60deg,
      ${theme.surfaceColors.purple},
      ${theme.surfaceColors.purple} 100px,
      ${theme.surfaceColors.yellow} 100px,
      ${theme.surfaceColors.yellow} 200px,
      ${theme.surfaceColors.red} 200px,
      ${theme.surfaceColors.red} 300px,
      ${theme.surfaceColors.blue} 300px,
      ${theme.surfaceColors.blue} 400px,
      ${theme.surfaceColors.orange} 300px,
      ${theme.surfaceColors.orange} 400px,
      ${theme.surfaceColors.green} 400px,
      ${theme.surfaceColors.green} 500px
    )
  `};
`

export default Stripes
