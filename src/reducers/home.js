import {
  RECEIVE_HOME_CONTENT,
  REQUEST_HOME_CONTENT,
  ERROR_HOME_CONTENT,
  HOME_BANNER_LOADED,
} from 'actions/home';


const initState = {
  articleId: null,
  musicId: null,
  receivedAt: null,
  isFetching: false,
  hasError: false,
  bannerLoaded: false,
  errorMessage: '',
}

export default function (state = initState, action) {
  switch (action.type) {
    case RECEIVE_HOME_CONTENT:
      return {
        ...state,
        articleId: action.article.id,
        musicId: action.music.id,
        receivedAt: action.receivedAt,
        isFetching: false,
        hasError: false,
      }
    case REQUEST_HOME_CONTENT:
      return { ...state, isFetching: true, }
    case ERROR_HOME_CONTENT:
      return { ...state, errorMessage: action.message, hasError: true, }
    case HOME_BANNER_LOADED:
      return { ...state, bannerLoaded: true, }
    default:
      return state
  }
}
