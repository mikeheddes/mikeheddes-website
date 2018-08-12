export const TOGGLE_CURTAIN_VISIBILITY = '[curtain] Toggle visibility';
export const SET_CURTAIN_VISIBILITY = '[curtain] Set visibility';

export function toggleCurtainVisibility() {
  return {
    type: TOGGLE_CURTAIN_VISIBILITY,
  };
}

export function setCurtainVisibility(isVisible) {
  return {
    type: SET_CURTAIN_VISIBILITY,
    payload: isVisible,
  };
}
