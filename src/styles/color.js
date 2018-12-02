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
  gray: grays['100'],
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

export const DAY = {
  ...dayColors,
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
