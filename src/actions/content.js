import { MUSIC_CONTENT_TYPE, GET_ALL_MUSIC, GET_LATEST_MUSIC } from './music'
import {
  ARTICLES_CONTENT_TYPE,
  GET_ALL_ARTICLES,
  GET_LATEST_ARTICLE,
} from './articles'

export const contentTypes = [MUSIC_CONTENT_TYPE, ARTICLES_CONTENT_TYPE]

const getAllContentByType = {
  [MUSIC_CONTENT_TYPE]: GET_ALL_MUSIC,
  [ARTICLES_CONTENT_TYPE]: GET_ALL_ARTICLES,
}

export const getAllContent = contentType => ({
  type: getAllContentByType[contentType],
})

const getLatestContentByType = {
  [MUSIC_CONTENT_TYPE]: GET_LATEST_MUSIC,
  [ARTICLES_CONTENT_TYPE]: GET_LATEST_ARTICLE,
}

export const getLatestContent = contentType => ({
  type: getLatestContentByType[contentType],
})

export const LATEST_HIGHTLIGHT_TYPE = 'latest'

export const highlightTypes = [LATEST_HIGHTLIGHT_TYPE]

const HighlightTypesByTypes = {
  [LATEST_HIGHTLIGHT_TYPE]: {
    [ARTICLES_CONTENT_TYPE]: GET_LATEST_ARTICLE,
    [MUSIC_CONTENT_TYPE]: GET_LATEST_MUSIC,
  },
}

export const getHighlightContent = (contentType, highlightType) => ({
  type: HighlightTypesByTypes[highlightType][contentType],
})
