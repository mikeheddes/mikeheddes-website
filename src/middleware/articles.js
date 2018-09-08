import {
  ARTICLES_CONTENT_TYPE,
  FETCH_ARTICLE_ITEM_SUCCES,
  FETCH_ARTICLE_ITEM_ERROR,
  FETCH_ALL_ARTICLES_SUCCES,
  FETCH_ALL_ARTICLES_ERROR,
  FETCH_LATEST_ARTICLE_SUCCES,
  FETCH_LATEST_ARTICLE_ERROR,
  GET_ARTICLE_ITEM,
  GET_ALL_ARTICLES,
  GET_LATEST_ARTICLE,
  fetchArticleItem,
  fetchAllArticles,
  fetchLatestArticle,
  addArticles,
  setLatestArticle,
} from 'actions/articles'
import { requestById, requestAll, requestLatest } from 'actions/api'

import {
  shouldFetchContentItem,
  shouldFetchAllContent,
  shouldFetchLatestContent,
  enrichDate,
} from './content'

export const getItemFlow = ({ dispatch, getState }) => next => action => {
  if (action.type === GET_ARTICLE_ITEM) {
    const { id } = action.meta
    if (shouldFetchContentItem(getState(), ARTICLES_CONTENT_TYPE, id)) {
      next(action)
      dispatch(
        requestById(
          ARTICLES_CONTENT_TYPE,
          id,
          FETCH_ARTICLE_ITEM_SUCCES,
          FETCH_ARTICLE_ITEM_ERROR
        )
      )
      dispatch(fetchArticleItem(id))
    }
  } else {
    next(action)
  }
}

export const getLatestFlow = ({ dispatch, getState }) => next => action => {
  if (action.type === GET_LATEST_ARTICLE) {
    if (shouldFetchLatestContent(getState(), ARTICLES_CONTENT_TYPE)) {
      next(action)
      dispatch(
        requestLatest(
          ARTICLES_CONTENT_TYPE,
          FETCH_LATEST_ARTICLE_SUCCES,
          FETCH_LATEST_ARTICLE_ERROR
        )
      )
      dispatch(fetchLatestArticle())
    }
  } else {
    next(action)
  }
}

export const getAllFlow = ({ dispatch, getState }) => next => action => {
  if (action.type === GET_ALL_ARTICLES) {
    if (shouldFetchAllContent(getState(), ARTICLES_CONTENT_TYPE)) {
      next(action)
      dispatch(
        requestAll(
          ARTICLES_CONTENT_TYPE,
          FETCH_ALL_ARTICLES_SUCCES,
          FETCH_ALL_ARTICLES_ERROR
        )
      )
      dispatch(fetchAllArticles())
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

  if (action.type === FETCH_ARTICLE_ITEM_SUCCES) {
    const newItems = [enrichNewItem(action.payload)]
    dispatch(addArticles(newItems))
  }

  if (action.type === FETCH_ARTICLE_ITEM_ERROR) {
    const newItems = [{ ...action.payload, hasError: true }]
    dispatch(addArticles(newItems))
  }

  if (
    action.type === FETCH_ALL_ARTICLES_SUCCES ||
    action.type === FETCH_LATEST_ARTICLE_SUCCES
  ) {
    const newItems = action.payload.map(enrichNewItem)
    dispatch(addArticles(newItems))
    dispatch(setLatestArticle(newItems[0]))
  }
}

export default [getItemFlow, getLatestFlow, getAllFlow, gotItemFlow]
