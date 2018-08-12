export const TOGGLE_MENU_VISIBILITY = '[menu] Toggle visibility';
export const SET_MENU_VISIBILITY = '[menu] Set visibility';
export const SET_MENU_HEIGHT = '[menu] Set height';
export const SET_MENU_ACTION = '[menu] Set action';
export const RESET_MENU_ACTION = '[menu] Reset action';
export const SET_MENU_TITLE = '[menu] Set title';

export function setMenuAction(name, onClick) {
  return {
    type: SET_MENU_ACTION,
    payload: {
      name,
      onClick,
    },
  };
}

export function resetMenuAction() {
  return {
    type: RESET_MENU_ACTION,
  };
}

export function setMenuTitle(title) {
  return {
    type: SET_MENU_TITLE,
    payload: title,
  };
}

export function toggleMenuVisibility() {
  return {
    type: TOGGLE_MENU_VISIBILITY,
  };
}

export function setMenuVisibility(isVisible) {
  return {
    type: SET_MENU_VISIBILITY,
    payload: isVisible,
  };
}

export function setMenuHeight(menuHeight) {
  return {
    type: SET_MENU_HEIGHT,
    payload: menuHeight,
  };
}
