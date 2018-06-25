import axios from 'axios'

import API from 'API'

export const HOME_BANNER_LOADED = 'HOME_BANNER_LOADED'
export const REQUEST_HOME_CONTENT = 'REQUEST_HOME_CONTENT'
export const RECEIVE_HOME_CONTENT = 'RECEIVE_HOME_CONTENT'
export const ERROR_HOME_CONTENT = 'ERROR_HOME_CONTENT'

export const bannerLoaded = () => ({
  type: HOME_BANNER_LOADED,
})

function requestContent() {
  return {
    type: REQUEST_HOME_CONTENT,
  }
}

function receiveContent(article, music) {
  return {
    type: RECEIVE_HOME_CONTENT,
    article,
    music,
    receivedAt: Date.now(),
  }
}

function errorContent(error) {
  return {
    type: ERROR_HOME_CONTENT,
    error,
  }
}

function shouldFetchContent(state) {
  const home = state.home;
  if (home.isFetching) {
    return false
  } else if (!home.articleId || !home.musicId) {
    return true
  } else if (home.receivedAt < Date.now() - 8 * 60 * 1000) {
    return true
  }
  return home.hasError;
}

function validateStatus(articleStatus, musicStatus) {
  return (
    (articleStatus >= 200 && articleStatus < 300) &&
    (musicStatus >= 200 && musicStatus < 300)
  )
}

function fetchContent() {
  return dispatch => {
    dispatch(requestContent())
    return axios.all([API.article.latest(), API.music.latest()])
    // Handle API Response
    .then(axios.spread((article, music) => {
      if(validateStatus(article.status, music.status)) {
        dispatch(receiveContent(article.data[0], music.data[0]))
      } else {
        dispatch(errorContent(`ERROR: ${article.data}, ${music.data}\nstatus: ${article.status}, ${music.status}`))
      }
    }))
  }
}


export const fetchContentIfNeeded = () => (
  (dispatch, getState) => {
    if (shouldFetchContent(getState())) {
      return dispatch(fetchContent())
    }
  }
)

// export const fetchMusicIfNeeded = () => (
//   (dispatch, getState) => {
//     if (shouldFetchMusic(getState())) {
//       return dispatch(fetchMusic())
//     }
//   }
// )
