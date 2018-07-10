import { combineReducers } from 'redux';

import {
  ADD_ARTICLE,
  // UPDATE_ARTICLE,
  SET_LATEST_ARTICLE,
  FETCHED_ALL_ARTICLES,
  ALL_ARTICLES_VISIBLE,
  SET_ARTICLES_VISIBILITY,
} from 'actions/articles';

function addEntry(state, action) {
  const { payload } = action;
  return payload.reduce(
    (accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.id]: currentValue,
    }),
    state,
  );
}

function byId(state = {}, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return addEntry(state, action);
    default:
      return state;
  }
}

function addId(state, action) {
  const { payload } = action;
  const ids = payload.map(item => item.id);
  return [...state, ...ids];
}

function allIds(state = [], action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return addId(state, action);
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
    case FETCHED_ALL_ARTICLES:
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
