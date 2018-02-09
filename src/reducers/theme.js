import { themes, SET_THEME } from '../actions';

export default (state = themes.DAY, action) => {
  switch (action.type) {
    case SET_THEME:
      if (action.theme in themes) return action.theme
      return state
    default:
      return state
  }
}
