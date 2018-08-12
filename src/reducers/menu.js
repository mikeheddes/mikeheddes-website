import { combineReducers } from 'redux';
import {
  TOGGLE_MENU_VISIBILITY,
  SET_MENU_VISIBILITY,
  SET_MENU_HEIGHT,
  SET_MENU_ACTION,
  RESET_MENU_ACTION,
  SET_MENU_TITLE,
} from 'actions/menu';

function isVisible(state = false, action) {
  switch (action.type) {
    case TOGGLE_MENU_VISIBILITY:
      return !state;
    case SET_MENU_VISIBILITY:
      return action.payload;
    default:
      return state;
  }
}

function menuHeight(state = 0, action) {
  switch (action.type) {
    case SET_MENU_HEIGHT:
      return action.payload;
    default:
      return state;
  }
}

function actionReducer(state = null, action) {
  switch (action.type) {
    case SET_MENU_ACTION:
      return { ...state, ...action.payload };
    case RESET_MENU_ACTION:
      return null;
    default:
      return state;
  }
}

function title(state = 'Mike Heddes', action) {
  switch (action.type) {
    case SET_MENU_TITLE:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  isVisible,
  menuHeight,
  action: actionReducer,
  title,
});
