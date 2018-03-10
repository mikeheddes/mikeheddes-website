import {
  TOGGLE_MENU_VISIBILITY,
  SET_MENU_VISIBILITY,
  SET_MENU_HEIGHT,
  SET_MENU_ACTION,
  RESET_MENU_ACTION,
  menuActionStyles
} from '../actions';

const initMenuActionState = {
  style: menuActionStyles.LINK,
  name: null,
  url: null
}

const initMenuState = {
  isVisible: false,
  menuHeight: 0,
  action: initMenuActionState
};

export default function (state = initMenuState, action) {
  switch (action.type) {
    case TOGGLE_MENU_VISIBILITY:
      return {...state, isVisible: !state.isVisible}
    case SET_MENU_VISIBILITY:
      return {...state, isVisible: action.isVisible}
    case SET_MENU_HEIGHT:
      return {...state, menuHeight: action.menuHeight}
    case SET_MENU_ACTION:
      const { style, name, url } = action;
      return {...state, action: {style, name, url}}
    case RESET_MENU_ACTION:
      return {...state, action: initMenuActionState}
    default:
      return state
  }
}
