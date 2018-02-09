import { combineReducers } from 'redux';

import theme from './theme';

export default function createReducer(injectedReducers) {
  return combineReducers({
    theme,
    ...injectedReducers,
  })
}
