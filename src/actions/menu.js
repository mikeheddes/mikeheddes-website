export const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';
export const SET_MENU_VISIBILITY = 'SET_MENU_VISIBILITY';
export const SET_MENU_HEIGHT = 'SET_MENU_HEIGHT';
export const SET_MENU_ACTION = 'SET_MENU_ACTION';
export const RESET_MENU_ACTION = 'RESET_MENU_ACTION';

export const menuActionStyles = {
  LINK: 'LINK',
  BUTTON: 'BUTTON'
}

export function setMenuAction(name, url, style=menuActionStyles.LINK) {
  return {
    type: SET_MENU_ACTION,
    style,
    name,
    url
  }
}

export function resetMenuAction() {
    return {
      type: RESET_MENU_ACTION
    }
}

export function toggleMenuVisibility() {
  return {
    type: TOGGLE_MENU_VISIBILITY
  }
}

export function setMenuVisibility(isVisible) {
  return {
    type: SET_MENU_VISIBILITY, isVisible
  }
}

export function setMenuHeight(menuHeight) {
  return {
    type: SET_MENU_HEIGHT, menuHeight
  }
}
