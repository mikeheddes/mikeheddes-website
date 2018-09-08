import { injectGlobal } from 'styled-components'
import fontFamilies from 'style/typography'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
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
    font-family: ${fontFamilies.sansSerif};
    text-align: left;
    overflow-x: hidden;
  }

  #root {
    min-height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
`
