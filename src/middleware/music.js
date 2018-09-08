import {
  MUSIC_CONTENT_TYPE,
  FETCH_MUSIC_ITEM_SUCCES,
  FETCH_MUSIC_ITEM_ERROR,
  FETCH_ALL_MUSIC_SUCCES,
  FETCH_ALL_MUSIC_ERROR,
  FETCH_LATEST_MUSIC_SUCCES,
  FETCH_LATEST_MUSIC_ERROR,
  GET_MUSIC_ITEM,
  GET_ALL_MUSIC,
  GET_LATEST_MUSIC,
  fetchMusicItem,
  fetchAllMusic,
  fetchLatestMusic,
  addMusic,
  setLatestMusic,
} from 'actions/music'
import { requestById, requestAll, requestLatest } from 'actions/api'

import {
  shouldFetchContentItem,
  shouldFetchAllContent,
  shouldFetchLatestContent,
  enrichDate,
} from './content'

export const getItemFlow = ({ dispatch, getState }) => next => action => {
  if (action.type === GET_MUSIC_ITEM) {
    const { id } = action.meta
    if (shouldFetchContentItem(getState(), MUSIC_CONTENT_TYPE, id)) {
      next(action)
      dispatch(
        requestById(
          MUSIC_CONTENT_TYPE,
          id,
          FETCH_MUSIC_ITEM_SUCCES,
          FETCH_MUSIC_ITEM_ERROR
        )
      )
      dispatch(fetchMusicItem(id))
    }
  } else {
    next(action)
  }
}

export const getLatestFlow = ({ dispatch, getState }) => next => action => {
  if (action.type === GET_LATEST_MUSIC) {
    if (shouldFetchLatestContent(getState(), MUSIC_CONTENT_TYPE)) {
      next(action)
      dispatch(
        requestLatest(
          MUSIC_CONTENT_TYPE,
          FETCH_LATEST_MUSIC_SUCCES,
          FETCH_LATEST_MUSIC_ERROR
        )
      )
      dispatch(fetchLatestMusic())
    }
  } else {
    next(action)
  }
}

export const getAllFlow = ({ dispatch, getState }) => next => action => {
  if (action.type === GET_ALL_MUSIC) {
    if (shouldFetchAllContent(getState(), MUSIC_CONTENT_TYPE)) {
      next(action)
      dispatch(
        requestAll(
          MUSIC_CONTENT_TYPE,
          FETCH_ALL_MUSIC_SUCCES,
          FETCH_ALL_MUSIC_ERROR
        )
      )
      dispatch(fetchAllMusic())
    }
  } else {
    next(action)
  }
}

const enrichNewItem = item => ({
  ...item,
  ...enrichDate(item),
})

export const gotItemFlow = ({ dispatch }) => next => action => {
  next(action)

  if (action.type === FETCH_MUSIC_ITEM_SUCCES) {
    const newItems = [enrichNewItem(action.payload)]
    dispatch(addMusic(newItems))
  }

  if (
    action.type === FETCH_ALL_MUSIC_SUCCES ||
    action.type === FETCH_LATEST_MUSIC_SUCCES
  ) {
    const newItems = Object.values(action.payload).map(enrichNewItem)
    dispatch(addMusic(newItems))
    dispatch(setLatestMusic(newItems[0]))
  }
}

export default [getItemFlow, getLatestFlow, getAllFlow, gotItemFlow]
