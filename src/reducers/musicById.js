import {
  RECEIVE_HOME_CONTENT,
} from 'actions/home';

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_HOME_CONTENT:
      return {...state, [action.music.id]: action.music}
    default:
      return state
  }
}
