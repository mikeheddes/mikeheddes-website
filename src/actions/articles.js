export const ADD_ARTICLE = 'ADD_ARTICLE';
export const SET_LATEST_ARTICLE = 'SET_LATEST_ARTICLE';
export const FETCHED_ALL_ARTICLES = 'FETCHED_ALL_ARTICLES';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';

export const ALL_ARTICLES_VISIBLE = 'ALL';
export const DESIGN_ARTICLES_VISIBLE = 'DESIGN';
export const CODE_ARTICLES_VISIBLE = 'CODE';
export const TRAVEL_ARTICLES_VISIBLE = 'TRAVEL';
export const SET_ARTICLES_VISIBILITY = '[articles] Set visibility filter';

export const visibilities = {
  all: ALL_ARTICLES_VISIBLE,
  code: CODE_ARTICLES_VISIBLE,
  design: DESIGN_ARTICLES_VISIBLE,
  travel: TRAVEL_ARTICLES_VISIBLE,
};

export const setArticlesVisibility = filter => ({
  type: SET_ARTICLES_VISIBILITY,
  payload: filter,
});
