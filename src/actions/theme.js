export const SET_THEME = 'SET_THEME';
export const ADD_THEME = 'ADD_THEME';

export const themes = {
  DAY: 'DAY',
  NIGHT: 'NIGHT'
}

export const setTheme = theme => {
  return {
    type: SET_THEME,
    theme
  }
}
