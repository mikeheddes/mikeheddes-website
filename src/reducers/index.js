import { combineReducers } from 'redux';

import theme from './theme';
import home from './home';
import articlesById from './articlesById';
import musicById from './musicById';
import menu from './menu';
import warning from './warning';
import entities from './entities';
import ui from './ui';

export default function createReducer(injectedReducers) {
  return combineReducers({
    entities,
    // ui,
    theme,
    home,
    articlesById,
    musicById,
    menu,
    warning,
    ...injectedReducers,
  })
};
