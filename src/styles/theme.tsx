import { ReactNode, ComponentType } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { darkTheme, lightTheme, ThemeId } from "./colors";
import { useMediaQuery } from "../components/hooks";

export { ThemeId };

function shouldUseDarkTheme(
  themeId: ThemeId,
  userPrefersDark: boolean,
): boolean {
  if (themeId === ThemeId.dark) return true;
  else if (themeId === ThemeId.light) return false;
  else if (userPrefersDark) return true;
  return false;
}

type Props = {
  themeId?: ThemeId;
  children: ReactNode;
};

function Theme({ themeId, children }: Props) {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const isDark = shouldUseDarkTheme(themeId, prefersDark);

  const theme: DefaultTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  );
}

export function withTheme<P extends object>(
  themeId: ThemeId,
  Element: ComponentType<P>,
) {
  return function ElementWithTheme(props: P) {
    return (
      <Theme themeId={themeId}>
        <Element {...props} />
      </Theme>
    );
  };
}

export default Theme;
