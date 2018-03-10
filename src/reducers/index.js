import { combineReducers } from 'redux';

import theme from './theme';
import menu from './menu';

export default function createReducer(injectedReducers) {
  return combineReducers({
    theme,
    menu,
    ...injectedReducers,
  })
}
