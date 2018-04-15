import { createSelector } from 'reselect'

const articleIdSelector = state => state.home.articleId
const articlesByIdSelector = state => state.articlesById
export const getArticle = createSelector(
  [articleIdSelector, articlesByIdSelector],
  (articleId, articles) => articles[articleId]
)

const musicIdSelector = state => state.home.musicId
const musicByIdSelector = state => state.musicById
export const getMusic = createSelector(
  [musicIdSelector, musicByIdSelector],
  (musicId, music) => music[musicId]
)
