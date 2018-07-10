import API from 'API';

import { SET_LATEST_MUSIC } from './music';
import { SET_LATEST_ARTICLE } from './articles';
import { contentTypes } from './utils';
import { receiveContent } from './content';


export const setHighlightTypes = {
  latest: {
    articles: SET_LATEST_ARTICLE,
    music: SET_LATEST_MUSIC,
  },
};

export const highlightTypes = ['latest'];

export function setHighlightContent(data, contentType, highlightType) {
  return {
    type: setHighlightTypes[highlightType][contentType],
    payload: { id: data.id },
  };
}

function shouldFetchHighlightContent(state, contentType, highlightType) {
  if (contentTypes.indexOf(contentType) === -1) {
    return false;
  }
  if (state.entities[contentType][highlightType]) {
    return false;
  }
  return true;
}

function fetchHighlightContent(contentType, highlightType) {
  return dispatch => (
    API[contentType][highlightType]()
      .then((json) => {
        if (json.status >= 200 && json.status < 300) {
          dispatch(receiveContent(json.data, contentType));
          dispatch(setHighlightContent(json.data[0], contentType, highlightType));
        } else {
          // ERROR
        }
      })
  );
}

export const fetchHighlightContentIfNeeded = (contentType, highlightType) => (
  (dispatch, getState) => {
    if (shouldFetchHighlightContent(getState(), contentType, highlightType)) {
      return dispatch(fetchHighlightContent(contentType, highlightType));
    }
    return null;
  }
);
