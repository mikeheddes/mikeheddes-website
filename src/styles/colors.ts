import { css, DefaultTheme } from "styled-components";

export enum ThemeId {
  dark,
  light,
}

declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    orange: string;
    yellow: string;
    green: string;
    blue: string;
    purple: string;
    pink: string;
    tintRed: string;
    tintOrange: string;
    tintYellow: string;
    tintGreen: string;
    tintBlue: string;
    tintPurple: string;
    tintPink: string;
    background: string;
    borderContent: string;
    borderDividerSolid: string;
    borderDividerFaded: string;
    heading: string;
    headingSubtle: string;
    headingObvious: string;
    text: string;
    textSubtle: string;
    textObvious: string;
    primary: string;
    surface: string;
    surfaceTint: string;
    surfaceSubtle: string;
    surfaceObvious: string;
    id: ThemeId;
  }
}

export const colorVariables = css`
  :root {
    /* Grays */
    --gray-000: #ffffff;
    --gray-050: #f8f9fa;
    --gray-100: #f0f1f2;
    --gray-200: #d4d6d8;
    --gray-300: #898b8c;
    --gray-400: #646566;
    --gray-500: #48484a;
    --gray-600: #333436;
    --gray-700: #232526;
    --gray-750: #16171a;
    --gray-800: #0a0c0d;
    --gray-900: #000000;

    /* Full colors */
    --red: #e63225;
    --orange: #eb9215;
    --yellow: #f5c816;
    --green: #50c75b;
    --blue: #216bdb;
    --purple: #534ccd;
    --pink: #e82e57;

    /* Tint colors */
    --tint-red: #faf3f2;
    --tint-orange: #faf6f0;
    --tint-yellow: #faf7ed;
    --tint-green: #f0faf2;
    --tint-blue: #edf3fa;
    --tint-purple: #f0f0fa;
    --tint-pink: #faf2f5;

    /* Functional colors */
    --primary: var(--blue);
    --secondary: var(--purple);
    --background: var(--gray-000);
    --background-lightness: 100%;
    --foreground: var(--gray-900);
    --foreground-lightness: 0%;
    --surface: var(--gray-100);
    --surface-faded: rgba(0, 0, 0, 0.05);
    --surface-backdrop: rgba(242, 242, 242, 0.6);
    --surface-tint: var(--tint-blue);
    --surface-subtle: var(--gray-050);
    --surface-obvious: var(--gray-200);
    --surface-obvious-backdrop: rgba(216, 216, 216, 0.6);
    --border-content: rgba(0, 0, 0, 0.1);
    --border-divider-solid: var(--gray-200);
    --border-divider-faded: rgba(0, 0, 0, 0.25);
    --heading: var(--gray-800);
    --heading-subtle: var(--gray-600);
    --heading-obvious: var(--gray-900);
    --text: var(--gray-700);
    --text-subtle: var(--gray-400);
    --text-obvious: var(--gray-800);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      /* Full colors */
      --red: #ff5e5e;
      --orange: #ffaa55;
      --yellow: #ffee66;
      --green: #68d980;
      --blue: #66bbff;
      --purple: #837bdb;
      --pink: #ff5577;

      /* Tint colors */
      --tint-red: #231d1d;
      --tint-orange: #23201c;
      --tint-yellow: #23231d;
      --tint-green: #1d221e;
      --tint-blue: #1d2123;
      --tint-purple: #1e1e22;
      --tint-pink: #231c1e;

      /* Functional colors */
      --primary: var(--blue);
      --secondary: var(--purple);
      --background: var(--gray-800);
      --background-lightness: 7%;
      --foreground: var(--gray-000);
      --foreground-lightness: 100%;
      --surface: var(--gray-700);
      --surface-faded: rgba(255, 255, 255, 0.05);
      --surface-backdrop: rgba(38, 38, 38, 0.6);
      --surface-tint: var(--tint-blue);
      --surface-subtle: var(--gray-750);
      --surface-obvious: var(--gray-600);
      --surface-obvious-backdrop: rgba(54, 54, 54, 0.6);
      --border-content: rgba(255, 255, 255, 0.1);
      --border-divider-solid: var(--gray-500);
      --border-divider-faded: rgba(255, 255, 255, 0.25);
      --heading: var(--gray-100);
      --heading-subtle: var(--gray-300);
      --heading-obvious: var(--gray-000);
      --text: var(--gray-200);
      --text-subtle: var(--gray-300);
      --text-obvious: var(--gray-100);
    }
  }
`;

export const grays = {
  "000": "#FFFFFF",
  "050": "#FAFAFA",
  "100": "#F2F2F2",
  "200": "#D8D8D8",
  "300": "#8C8C8C",
  "400": "#666666",
  "500": "#4A4A4A",
  "600": "#363636",
  "700": "#262626",
  "750": "#222222",
  "800": "#0d0d0d",
  "900": "#000000",
};

export const lightColors = {
  red: "#e63225",
  orange: "#eb9215",
  yellow: "#f5c816",
  green: "#50c75b",
  blue: "#216bdb",
  purple: "#534ccd",
  pink: "#e82e57",
};

export const pastelColors = {
  tintRed: "#FAF3F2",
  tintOrange: "#FAF6F0",
  tintYellow: "#FAF7ED",
  tintGreen: "#F0FAF2",
  tintBlue: "#EDF3FA",
  tintPurple: "#F0F0FA",
  tintPink: "#FAF2F5",
};

export const darkColors = {
  red: "#FF5E5E",
  orange: "#FFAA55",
  yellow: "#FFEE66",
  green: "#68D980",
  blue: "#66BBFF",
  purple: "#837BDB",
  pink: "#FF5577",
};

export const neonColors = {
  tintRed: "#231D1D",
  tintOrange: "#23201C",
  tintYellow: "#23231D",
  tintGreen: "#1D221E",
  tintBlue: "#1D2123",
  tintPurple: "#1E1E22",
  tintPink: "#231C1E",
};

export const lightTheme: DefaultTheme = {
  ...lightColors,
  ...pastelColors,
  background: grays["000"],
  borderContent: "rgba(0, 0, 0, 0.1)",
  borderDividerSolid: grays["200"],
  borderDividerFaded: "rgba(0, 0, 0, 0.25)",
  heading: grays["800"],
  headingSubtle: grays["600"],
  headingObvious: grays["900"],
  text: grays["700"],
  textSubtle: grays["400"],
  textObvious: grays["800"],
  primary: lightColors.blue,
  surface: grays["100"],
  surfaceTint: pastelColors.tintBlue,
  surfaceSubtle: grays["050"],
  surfaceObvious: grays["200"],
  id: ThemeId.light,
};

export const darkTheme: DefaultTheme = {
  ...darkColors,
  ...neonColors,
  background: grays["800"],
  borderContent: "rgba(255, 255, 255, 0.1)",
  borderDividerSolid: grays["500"],
  borderDividerFaded: "rgba(255, 255, 255, 0.25)",
  heading: grays["100"],
  headingSubtle: grays["300"],
  headingObvious: grays["000"],
  text: grays["200"],
  textSubtle: grays["300"],
  textObvious: grays["100"],
  primary: darkColors.blue,
  surface: grays["700"],
  surfaceTint: neonColors.tintBlue,
  surfaceSubtle: grays["750"],
  surfaceObvious: grays["600"],
  id: ThemeId.dark,
};

export const themeSelector = {
  dark: "(prefers-color-scheme: dark)",
  light: "(prefers-color-scheme: light)",
};
