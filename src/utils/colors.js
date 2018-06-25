import { transparentize as fade, mix } from 'polished';

export const grays = {
  '000': '#FFFFFF',
  '100': '#FAFAFA',
  '200': '#F2F2F2',
  '300': '#D8D8D8',
  '400': '#8C8C8C',
  '500': '#666666',
  '600': '#333333',
  '700': '#2E2E2E',
  '750': '#222222',
  '800': '#1C1C1C',
  '900': '#000000',
}

const accentMixes = {
  red: .98,
  orange: .96,
  yellow: .98,
  green: .98,
  blue: .98,
  purple: .98,
  pink: .97,
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

export const pastelColors = {
  red: '#FAF3F2',
  orange: '#FAF6F0',
  yellow: '#FAF7ED',
  green: '#F0FAF2',
  blue: '#EDF3FA',
  purple: '#F0F0FA',
  pink: '#FAF2F5',
}

export const nightColors = {
  red: '#EB4C44',
  orange: '#F5A83D',
  yellow: '#F2C51F',
  green: '#4CC760',
  blue: '#54A6FF',
  purple: '#B176EF',
  pink: '#EB3657',
}

export const accents = Object.keys(accentMixes).reduce((acc, key) => {
  acc[key] = Object.keys(grays).reduce((acc2, key2) => {
    acc2[key2] = mix(accentMixes[key], grays[key2], dayColors[key]);
    return acc2;
  }, {})
  return acc;
}, {})

export const DAY = {
  ...dayColors,
  borderSeparate: grays['300'],
  borderContent: fade(.90, grays['900']),
  nav: grays['000'],
  navBorder: fade(.92, grays['900']),
  heading : grays['900'],
  heading1 : grays['750'],
  text: accents.blue['500'],
  text1: grays['800'],
  text2: grays['600'],
  background: grays['000'],
  accent: accents.blue['200'],
  accent1: accents.blue['100'],
  accentGray: grays['100'],
  accentGray2: grays['200'],
  accentGray3: grays['000'],
  accentGray4: grays['300'],
  pastel: {...pastelColors},
}

export const NIGHT = {
  ...nightColors,
  borderSeparate: grays['500'],
  borderContent: fade(.95, grays['200']),
  nav: grays['900'],
  navBorder: fade(.92, grays['000']),
  heading : grays['000'],
  heading1 : grays['100'],
  text: grays['400'],
  text1: grays['200'],
  text2: grays['300'],
  background: grays['800'],
  accent: grays['700'],
  accent1: grays['750'],
  accentGray: grays['800'],
  accentGray2: grays['750'],
  accentGray3: grays['900'],
  accentGray4: grays['700'],

}

// Gradients
export const gradient = {
  article: 'linear-gradient(to bottom right, #FFEB6B, #FF9769)',
  music: 'linear-gradient(to bottom right, #45ABFF, #FF6E8E)',
  about: 'linear-gradient(to bottom right, #82ff91, #61a2ff)',
};


//
// // Background colors
// $day-bg: $gray-000 !default;
// $day-bg-accent: $accent-blue-200 !default;
// $night-bg: $gray-900 !default;
// $night-bg-accent: $gray-700 !default;
//
// // Color defaults
// $white: $gray-000 !default;
// $gray: $gray-400 !default;
// $black: $gray-900 !default;
// $red: $day-red !default;
// $orange: $day-orange !default;
// $yellow: $day-yellow !default;
// $green: $day-green !default;
// $teal_blue: $day-teal_blue !default;
// $blue: $day-blue !default;
// $purple: $day-purple !default;
// $pink: $day-pink !default;
// $nav-color: $gray-400 !default;
//
//
// // Gradients
// $article-gradient: linear-gradient(to bottom right,#FFEB6B, #FF9769);
// $music-gradient: linear-gradient(to bottom right,#45ABFF, #FF6E8E);
// $about-gradient: linear-gradient(to bottom right, #82ff91, #61a2ff);
//
// // theme setup
// $themes: (
//   "day"  : ("red" : $day-red, "orange" : $day-orange, "yellow" : $day-yellow, "green" : $day-green, "teal_blue" : $day-teal_blue, "blue" : $day-blue, "purple" : $day-purple, "pink" : $day-pink, "nav": $gray-000,"header" : $gray-900, "text": $accent-blue-500, "text-1": $gray-800, "text-2":$gray-600, "border-separate": $border-separate-day, "border-content": $border-content-day, "background": $gray-000, "accent-1": $accent-blue-200, "accent-2": $accent-blue-100),
//   "night": ("red" : $night-red, "orange" : $night-orange, "yellow" : $night-yellow, "green" : $night-green, "teal_blue" : $night-teal_blue, "blue" : $night-blue, "purple" : $night-purple, "pink" : $night-pink,"nav": $gray-900, "header" : $gray-000, "text": $gray-400,"text-1":$gray-200, "text-2":$gray-300, "border-separate": $border-separate-night, "border-content": $border-content-night, "background": $gray-800, "accent-1": $gray-700, "accent-2": $gray-750),
// );
//
// @function getDayColor($key) {
//   @return map-get(map-get($themes,day), $key);
// }
//
// @function getNightColor($key) {
//   @return map-get(map-get($themes,night), $key);
// }
//
// @function getColor($key) {
//   @return map-get($theme-map, $key);
// }
//
// @mixin color ($themes: $themes) {
//   // Set global theme-map to day
//   $theme-map: map-get($themes, day) !global;
//   // Extract color
//   @content;
//   // Reset theme-map to null
//   $theme-map: null !global;
//
//   @each $theme, $map in $themes {
//     .#{$theme} & {
//       // Define theme color for each theme
//       $theme-map: $map !global;
//       // Extract color
//       @content;
//       // reset theme color to null
//       $theme-map: null !global;
//     }
//   }
// }
//
// /* Example
// .component {
//     @include theme() {
//         background-color: getColor('color-alpha');
//         color           : getColor('color-beta');
//     }
// }
//
// output:
// .component{
//     background-color: #DAY_COLOR#;
//     color: #DAY_COLOR#;
// }
//
// .day .component {
//     background-color: #DAY_COLOR#;
//     color: #DAY_COLOR#;
// }
// .night .component {
//     background-color: #NIGHT_COLOR#;
//     color: #NIGHT_COLOR#;
// }
//
// */
