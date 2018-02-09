import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

injectGlobal `
  ${normalize()}
  * {
    -webkit-tap-highlight-color: transparent;
    margin                     : 0;
    padding                    : 0;
    position                   : relative;
    box-sizing                 : border-box;

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
    font-synthesis            : none;
    text-rendering            : optimizeLegibility;
    -webkit-font-smoothing    : antialiased;
    -moz-osx-font-smoothing   : grayscale;
    -moz-font-feature-settings: 'liga', 'kern';
    font-family               : -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue','Helvetica','Arial', sans-serif;
    text-align                : left;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
