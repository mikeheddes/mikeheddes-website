export const ADD_MUSIC = 'ADD_MUSIC';
export const SET_LATEST_MUSIC = 'SET_LATEST_MUSIC';
export const FETCHED_ALL_MUSIC = 'FETCHED_ALL_MUSIC';
export const UPDATE_MUSIC = 'UPDATE_MUSIC';

export const ALL_MUSIC_VISIBLE = 'ALL';
export const PODCAST_MUSIC_VISIBLE = 'PODCAST';
export const ALBUM_MUSIC_VISIBLE = 'ALBUM';
export const SINGLE_MUSIC_VISIBLE = 'SINGLE';
export const SET_MUSIC_VISIBILITY = '[music] Set visibility filter';

export const visibilities = {
  all: ALL_MUSIC_VISIBLE,
  podcasts: PODCAST_MUSIC_VISIBLE,
  albums: ALBUM_MUSIC_VISIBLE,
  singles: SINGLE_MUSIC_VISIBLE,
};

export const setMusicVisibility = filter => ({
  type: SET_MUSIC_VISIBILITY,
  payload: filter,
});
