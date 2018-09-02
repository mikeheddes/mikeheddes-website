import { combineReducers } from 'redux';
import { DEFAULT, SET_THEME } from 'actions/ui';
import { musicUi } from './music';
import { articlesUi } from './articles';
import curtain from './curtain';
import menu from './menu';

function themeName(state = DEFAULT, action) {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  themeName,
  menu,
  music: musicUi,
  articles: articlesUi,
  curtain,
});
