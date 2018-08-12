import { combineReducers } from 'redux';

import {
  TOGGLE_CURTAIN_VISIBILITY,
  SET_CURTAIN_VISIBILITY,
} from 'actions/curtain';

// function config(state = ...) {
//    determane the curtain transition config
// }

function isVisible(state = false, action) {
  switch (action.type) {
    case TOGGLE_CURTAIN_VISIBILITY:
      return !state;
    case SET_CURTAIN_VISIBILITY:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  isVisible,
});
