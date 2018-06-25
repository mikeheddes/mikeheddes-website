import { combineReducers } from 'redux';

import { ADD_ARTICLE, UPDATE_ARTICLE, SET_LATEST_ARTICLE } from 'actions';


function addEntry(state, action) {
  const { payload } = action;
  const { id } = payload;
  return {
      ...state,
      [id] : payload
  };
};

function byId(state = {}, action) {
  switch(action.type) {
    case ADD_ARTICLE: return addEntry(state, action);
    default: return state;
  };
};

function addId(state, action) {
  const { payload } = action;
  const { id } = payload;
  return [...state, id]
};

function allIds(state = [], action) {
  switch (action.type) {
    case ADD_ARTICLE: return addId(state, action);
    default: return state;
  };
};

function setLatest(state, action) {
  const { payload } = action;
  const { id } = payload;
  return id;
}

function latest(state = null, action) {
  switch (action.type) {
    case SET_LATEST_ARTICLE: return setLatest(state, action);
    default: return state;
  }
}

export default combineReducers({
  byId,
  allIds,
  latest,
});
