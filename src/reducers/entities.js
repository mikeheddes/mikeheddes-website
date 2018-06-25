import { combineReducers } from 'redux';

import musicReducer from './music';
import articlesReducer from './articles';
import imagesReducer from './images';

export default combineReducers({
  music: musicReducer,
  articles: articlesReducer,
  images: imagesReducer,
});
