export const ARTICLES_CONTENT_TYPE = 'articles';

export const ADD_ARTICLES = '[articles] Add items';
export const UPDATE_ARTICLES = 'UPDATE_ARTICLE';

export const GET_ARTICLE_ITEM = '[articles] Get item';
export const FETCH_ARTICLE_ITEM = '[articles] Fetch item start';
export const FETCH_ARTICLE_ITEM_SUCCES = '[articles] Fetch item succes';
export const FETCH_ARTICLE_ITEM_ERROR = '[articles] Fetch item error';

export const GET_ALL_ARTICLES = '[articles] Get all';
export const FETCH_ALL_ARTICLES = '[articles] Fetch all start';
export const FETCH_ALL_ARTICLES_SUCCES = '[articles] Fetch all succes';
export const FETCH_ALL_ARTICLES_ERROR = '[articles] Fetch all error';

export const GET_LATEST_ARTICLE = '[articles] Get latest';
export const FETCH_LATEST_ARTICLE = '[articles] Fetch latest';
export const FETCH_LATEST_ARTICLE_SUCCES = '[articles] Fetch latest succes';
export const FETCH_LATEST_ARTICLE_ERROR = '[articles] Fetch latest error';
export const SET_LATEST_ARTICLE = '[articles] Set latest';

export const ALL_ARTICLES_VISIBLE = 'ALL';
export const DESIGN_ARTICLES_VISIBLE = 'DESIGN';
export const CODE_ARTICLES_VISIBLE = 'CODE';
export const TRAVEL_ARTICLES_VISIBLE = 'TRAVEL';
export const categories = [DESIGN_ARTICLES_VISIBLE, CODE_ARTICLES_VISIBLE, TRAVEL_ARTICLES_VISIBLE];
export const SET_ARTICLES_VISIBILITY = '[articles] Set visibility filter';

export const getArticleItem = id => ({
  type: GET_ARTICLE_ITEM,
  meta: { id },
});

export const getAllArticles = () => ({
  type: GET_ALL_ARTICLES,
});

export const fetchArticleItem = () => ({
  type: FETCH_ARTICLE_ITEM,
});

export const fetchAllArticles = () => ({
  type: FETCH_ALL_ARTICLES,
});

export const fetchLatestArticle = () => ({
  type: FETCH_LATEST_ARTICLE,
});

export const addArticles = items => ({
  type: ADD_ARTICLES,
  payload: items,
});

export const getLatestArticle = () => ({
  type: GET_LATEST_ARTICLE,
});

export const setLatestArticle = id => ({
  type: SET_LATEST_ARTICLE,
  payload: id,
});

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
