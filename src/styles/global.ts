import { Inter } from '@next/font/google'
import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

import { colorVariables } from "./colors";
import { sizeVariables } from "./sizes";

const inter = Inter({
  subsets: ["latin"],
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Helvetica Neue",
    "Helvetica",
    "sans-serif"
  ],
});

export default createGlobalStyle`
  ${normalize()};

  ${colorVariables};
  ${sizeVariables};

  :root {
    --font-modern: ${inter.style.fontFamily};
    --font-mono: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    --font-classic: "Times New Roman", Times, serif;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-overflow-scrolling: touch;
  }

  html,
  body {
    width: 100vw;
    background-color: var(--background);
    font-family: var(--font-modern);
  }

  body {
    box-sizing: border-box;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga' 1, 'case' 1, 'calt' 1;
    text-align: left;
    overflow-x: hidden;
  }

  #root {
    min-height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;
