import { combineReducers } from 'redux';

import {
  ADD_ARTICLES,
  // UPDATE_ARTICLE,
  SET_LATEST_ARTICLE,
  FETCH_ALL_ARTICLES_SUCCES,
  ALL_ARTICLES_VISIBLE,
  SET_ARTICLES_VISIBILITY,
} from 'actions/articles';

function addEntries(state, action) {
  const { payload } = action;
  return payload.reduce(
    (accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.id]: currentValue,
    }),
    state
  );
}

function byId(state = {}, action) {
  switch (action.type) {
    case ADD_ARTICLES:
      return addEntries(state, action);
    default:
      return state;
  }
}

function addIds(state, action) {
  const { payload } = action;
  const ids = payload.map(item => item.id);
  return [...state, ...ids];
}

function allIds(state = [], action) {
  switch (action.type) {
    case ADD_ARTICLES:
      return addIds(state, action);
    default:
      return state;
  }
}

function setLatest(state, action) {
  const { payload } = action;
  const { id } = payload;
  return id;
}

function latest(state = null, action) {
  switch (action.type) {
    case SET_LATEST_ARTICLE:
      return setLatest(state, action);
    default:
      return state;
  }
}

function fetchedAll(state = false, action) {
  switch (action.type) {
    case FETCH_ALL_ARTICLES_SUCCES:
      return true;
    default:
      return state;
  }
}

export const articlesEntitie = combineReducers({
  byId,
  allIds,
  latest,
  fetchedAll,
});

function visibilityFilter(state = ALL_ARTICLES_VISIBLE, action) {
  switch (action.type) {
    case SET_ARTICLES_VISIBILITY:
      return action.payload;
    default:
      return state;
  }
}

export const articlesUi = combineReducers({
  visibilityFilter,
});
