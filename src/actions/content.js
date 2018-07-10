import API from 'API';

import { ADD_MUSIC, FETCHED_ALL_MUSIC } from './music';
import { ADD_ARTICLE, FETCHED_ALL_ARTICLES } from './articles';
import { contentTypes } from './utils';


const receiveTypes = {
  articles: ADD_ARTICLE,
  music: ADD_MUSIC,
};

const setFetchedAllContentOfTypeFlags = {
  articles: FETCHED_ALL_ARTICLES,
  music: FETCHED_ALL_MUSIC,
};

export const receiveContent = (data, contentType) => {
  // const payload = cleanData[contentType](data);
  const receivedAt = Date.now();
  return {
    type: receiveTypes[contentType],
    payload: data.map(item => ({ ...item, receivedAt })),
  };
};

const setFetchedAllContentOfTypeFlag = contentType => ({
  type: setFetchedAllContentOfTypeFlags[contentType],
});

function shouldFetchAllContentOfType(state, contentType) {
  if (contentTypes.indexOf(contentType) === -1) {
    return false;
  }
  if (state.entities[contentType].fetchedAll) {
    return false;
  }
  return true;
}

function fetchAllContentOfType(contentType) {
  return dispatch => (
    API[contentType].all()
      .then((json) => {
        if (json.status >= 200 && json.status < 300) {
          dispatch(receiveContent(json.data, contentType));
          dispatch(setFetchedAllContentOfTypeFlag(contentType));
        } else {
          // ERROR
        }
      })
  );
}

export const fetchAllContentOfTypeIfNeeded = contentType => (
  (dispatch, getState) => {
    if (shouldFetchAllContentOfType(getState(), contentType)) {
      return dispatch(fetchAllContentOfType(contentType));
    }
    return null;
  }
);
