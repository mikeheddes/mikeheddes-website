import { combineReducers } from 'redux'

import { musicEntitie } from './music'
import { articlesEntitie } from './articles'
import imagesReducer from './images'

export default combineReducers({
  music: musicEntitie,
  articles: articlesEntitie,
  images: imagesReducer,
})
