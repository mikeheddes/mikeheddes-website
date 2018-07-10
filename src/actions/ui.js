export const SET_THEME = '[ui] Set Theme';
export const THEME_DAY = 'THEME_DAY';
export const THEME_NIGHT = 'THEME_NIGHT';

export const themes = {
  DAY: THEME_DAY,
  NIGHT: THEME_NIGHT,
};

export const setTheme = theme => ({
  type: SET_THEME,
  payload: theme,
});

export const setThemeDAY = () => setTheme(THEME_DAY);

export const setThemeNIGHT = () => setTheme(THEME_NIGHT);
