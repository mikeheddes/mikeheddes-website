import { css } from 'styled-components'
import { transparentize as fade } from 'polished'

export const grays = {
  '000': '#FFFFFF',
  '050': '#FAFAFA',
  '100': '#F2F2F2',
  '200': '#D8D8D8',
  '250': '#A5A5A5',
  '300': '#8C8C8C',
  '400': '#666666',
  '500': '#4A4A4A',
  '600': '#363636',
  '700': '#262626',
  '750': '#222222',
  '800': '#1A1A1A',
  '900': '#000000',
}

export const dayColors = {
  red: '#FF3B30',
  orange: '#FF9500',
  yellow: '#FFCC00',
  green: '#4CD964',
  blue: '#007AFF',
  purple: '#5856D6',
  pink: '#FF2D55',
}

export const colorNames = Object.keys(dayColors)

export const pastelColors = {
  red: '#FAF3F2',
  orange: '#FAF6F0',
  yellow: '#FAF7ED',
  green: '#F0FAF2',
  blue: '#EDF3FA',
  purple: '#F0F0FA',
  pink: '#FAF2F5',
  gray: grays['200'],
}

export const nightColors = {
  red: '#FF5E5E',
  orange: '#FFAA55',
  yellow: '#FFEE66',
  green: '#68D980',
  blue: '#66BBFF',
  purple: '#837BDB',
  pink: '#FF5577',
}

export const neonColors = {
  red: grays['700'],
  orange: grays['700'],
  yellow: grays['700'],
  green: grays['700'],
  blue: grays['700'],
  purple: grays['700'],
  pink: grays['700'],
  gray: grays['700'],
}

export const codeDay = css`
  .hljs-comment,
  .hljs-quote {
    color: ${({ theme }) => fade(0.5, theme.text)};
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal {
    color: #aa0d91;
  }

  .hljs-name {
    color: #008;
  }

  .hljs-variable,
  .hljs-template-variable {
    color: #660;
  }

  .hljs-string {
    color: #c41a16;
  }

  .hljs-regexp,
  .hljs-link {
    color: #080;
  }

  .hljs-title,
  .hljs-tag,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-number,
  .hljs-meta {
    color: #1c00cf;
  }

  .hljs-section,
  .hljs-class .hljs-title,
  .hljs-type,
  .hljs-attr,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-params {
    color: #5c2699;
  }

  .hljs-attribute,
  .hljs-subst {
    color: #000;
  }

  .hljs-formula {
    background-color: #eee;
    font-style: italic;
  }

  .hljs-addition {
    background-color: #baeeba;
  }

  .hljs-deletion {
    background-color: #ffc8bd;
  }

  .hljs-selector-id,
  .hljs-selector-class {
    color: #9b703f;
  }

  .hljs-doctag,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  }
`
export const codeNight = css`
  .hljs-comment,
  .hljs-quote {
    color: ${({ theme }) => fade(0.5, theme.text)};
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: ${nightColors.purple};
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: ${nightColors.red};
  }

  .hljs-literal {
    color: ${nightColors.blue};
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: ${nightColors.green};
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: ${nightColors.yellow};
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: ${nightColors.orange};
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: ${nightColors.blue};
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }
`

export const DAY = {
  ...dayColors,
  code: codeDay,
  background: grays['000'],
  backgroundNav: grays['000'],
  borderContent: fade(0.9, grays['900']),
  borderDivider: grays['200'],
  borderDividerOpacity: fade(0.85, grays['900']),
  heading: grays['800'],
  headingSubtle: grays['600'],
  link: dayColors.blue,
  primaries: dayColors,
  surfaceColors: pastelColors,
  surface: grays['050'],
  surfaceProminent: grays['100'],
  surfaceSelected: grays['200'],
  text: grays['700'],
  textBold: grays['900'],
  textSubtle: grays['400'],
  title: grays['900'],
}

export const NIGHT = {
  ...nightColors,
  code: codeNight,
  background: grays['800'],
  backgroundNav: grays['800'],
  borderContent: fade(0.9, grays['000']),
  borderDivider: grays['500'],
  borderDividerOpacity: fade(0.85, grays['000']),
  heading: grays['100'],
  link: nightColors.blue,
  primaries: nightColors,
  surfaceColors: neonColors,
  surface: grays['750'],
  surfaceProminent: grays['700'],
  surfaceSelected: grays['500'],
  text: grays['200'],
  textBold: grays['000'],
  textSubtle: grays['300'],
  title: grays['000'],
}
