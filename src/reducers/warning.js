import { SET_WARNING_HEIGHT, SET_WARNING, RESOLVE_WARNING } from 'actions';

const initWarningState = {
  message: 'The site is still under development, not all pages are available yet.',
  height: 0,
}

export default (state = initWarningState, action) => {
  switch (action.type) {
    case SET_WARNING:
      return {...state, message: action.message}
    case SET_WARNING_HEIGHT:
      return {...state, height: action.height}
    case RESOLVE_WARNING:
      return {...state, height: 0, message: null}
    default:
      return state
  }
}
