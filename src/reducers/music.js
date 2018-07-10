import { combineReducers } from 'redux';

import {
  ADD_MUSIC,
  // UPDATE_MUSIC,
  SET_LATEST_MUSIC,
  FETCHED_ALL_MUSIC,
  ALL_MUSIC_VISIBLE,
  SET_MUSIC_VISIBILITY,
} from 'actions/music';

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
    case ADD_MUSIC:
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
    case ADD_MUSIC:
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
    case SET_LATEST_MUSIC:
      return setLatest(state, action);
    default:
      return state;
  }
}

function fetchedAll(state = false, action) {
  switch (action.type) {
    case FETCHED_ALL_MUSIC:
      return true;
    default:
      return state;
  }
}

export const musicEntitie = combineReducers({
  byId,
  allIds,
  latest,
  fetchedAll,
});

function visibilityFilter(state = ALL_MUSIC_VISIBLE, action) {
  switch (action.type) {
    case SET_MUSIC_VISIBILITY:
      return action.payload;
    default:
      return state;
  }
}

export const musicUi = combineReducers({
  visibilityFilter,
});
