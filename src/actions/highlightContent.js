import axios from 'axios';

import API from 'API';
import { ADD_MUSIC, SET_LATEST_MUSIC } from './music';
import { ADD_ARTICLE, SET_LATEST_ARTICLE } from './article';
import { contentTypes } from './utils';


const receiveTypes = {
  articles: ADD_ARTICLE,
  music: ADD_MUSIC,
}
const setHighlightTypes = {
  latest: {
    articles: SET_LATEST_ARTICLE,
    music: SET_LATEST_MUSIC,
  }
}


export const highlightTypes = ['latest'];

function receiveContent(data, contentType, dispatch) {
  // const payload = cleanData[contentType](data);
  return {
    type: receiveTypes[contentType],
    payload: {
      ...data,
      receivedAt: Date.now()
    },
  }
}

function setHighlightContent(data, contentType, highlightType) {
  return {
    type: setHighlightTypes[highlightType][contentType],
    payload: {id: data.id},
  }
}

function shouldFetchHighlightContent(state, contentType, highlightType) {
  if (contentTypes.indexOf(contentType) == -1) {
    return false
  }
  if (state.entities[contentType][highlightType]) {
    return false
  }
  return true
}

function fetchHighlightContent(contentType, highlightType) {
  return dispatch => {
    return API[contentType][highlightType]()
    .then(json => {
      if (json.status >= 200 && json.status < 300) {
        dispatch(receiveContent(json.data[0], contentType, dispatch));
        dispatch(setHighlightContent(json.data[0], contentType, highlightType));
      } else {
        // ERROR
      }
    })
  }
}

export const fetchHighlightContentIfNeeded = (contentType, highlightType) => (
  (dispatch, getState) => {
    if (shouldFetchHighlightContent(getState(), contentType, highlightType)) {
      return dispatch(fetchHighlightContent(contentType, highlightType));
    }
  }
)
