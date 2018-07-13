export const MUSIC_CONTENT_TYPE = 'music';

export const ADD_MUSIC = '[music] Add items';
export const UPDATE_MUSIC = 'UPDATE_MUSIC';

export const GET_MUSIC_ITEM = '[music] Get item';
export const FETCH_MUSIC_ITEM = '[music] Fetch item start';
export const FETCH_MUSIC_ITEM_SUCCES = '[music] Fetch item succes';
export const FETCH_MUSIC_ITEM_ERROR = '[music] Fetch item error';

export const GET_ALL_MUSIC = '[music] Get all';
export const FETCH_ALL_MUSIC = '[music] Fetch all start';
export const FETCH_ALL_MUSIC_SUCCES = '[music] Fetch all succes';
export const FETCH_ALL_MUSIC_ERROR = '[music] Fetch all error';

export const GET_LATEST_MUSIC = '[music] Get latest';
export const FETCH_LATEST_MUSIC = '[music] Fetch latest';
export const FETCH_LATEST_MUSIC_SUCCES = '[music] Fetch latest succes';
export const FETCH_LATEST_MUSIC_ERROR = '[music] Fetch latest error';
export const SET_LATEST_MUSIC = '[music] Set latest';

export const ALL_MUSIC_VISIBLE = 'ALL';
export const PODCAST_MUSIC_VISIBLE = 'PODCAST';
export const ALBUM_MUSIC_VISIBLE = 'ALBUM';
export const SINGLE_MUSIC_VISIBLE = 'SINGLE';
export const SET_MUSIC_VISIBILITY = '[music] Set visibility filter';

export const getMusicItem = id => ({
  type: GET_MUSIC_ITEM,
  meta: { id },
});

export const getAllMusic = () => ({
  type: GET_ALL_MUSIC,
});

export const fetchMusicItem = () => ({
  type: FETCH_MUSIC_ITEM,
});

export const fetchAllMusic = () => ({
  type: FETCH_ALL_MUSIC,
});

export const fetchLatestMusic = () => ({
  type: FETCH_LATEST_MUSIC,
});

export const addMusic = items => ({
  type: ADD_MUSIC,
  payload: items,
});

export const getLatestMusic = () => ({
  type: GET_LATEST_MUSIC,
});

export const setLatestMusic = id => ({
  type: SET_LATEST_MUSIC,
  payload: id,
});

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
