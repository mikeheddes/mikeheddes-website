import { createGlobalStyle } from 'styled-components'
import font from './fonts'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline: transparent;
    }
  }

  html,
  body {
    height: 100vh;
    width: 100vw;
  }

  body {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga', 'kern';
    ${font.modern};
    text-align: left;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.background};
  }

  #root {
    min-height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
`
