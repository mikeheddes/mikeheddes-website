import { combineReducers } from 'redux';

import { ADD_MUSIC, UPDATE_MUSIC, SET_LATEST_MUSIC } from 'actions';


function addMusicEntry(state, action) {
  const { payload } = action;
  const { id } = payload;
  return {
      ...state,
      [id] : payload
  };
};

function musicById(state = {}, action) {
  switch(action.type) {
    case ADD_MUSIC: return addMusicEntry(state, action);
    default: return state;
  };
};

function addMusicId(state, action) {
  const { payload } = action;
  const { id } = payload;
  return [...state, id]
};

function allMusic (state = [], action) {
  switch (action.type) {
    case ADD_MUSIC: return addMusicId(state, action);
    default: return state;
  };
};

function setLatestMusic(state, action) {
  const { payload } = action;
  const { id } = payload;
  return id;
}

function latestMusic(state = null, action) {
  switch (action.type) {
    case SET_LATEST_MUSIC: return setLatestMusic(state, action);
    default: return state;
  }
}

export default combineReducers({
  byId: musicById,
  allIds: allMusic,
  latest: latestMusic,
});
