import { createSelector } from 'reselect';
import { ARTICLES_CONTENT_TYPE } from 'actions/articles';
import articles from 'components/articles';

export const getContent = (state, { contentType }) => {
  if (contentType === ARTICLES_CONTENT_TYPE) {
    return articles;
  }
  return state.entities[contentType].byId;
};

export const getVisibilityFilter = (state, { contentType }) => (
  state.ui[contentType].visibilityFilter
);

export const makeGetAllContentByType = () => createSelector(
  [getContent, getVisibilityFilter],
  (content, filter) => Object.values(content)
    .filter(item => (filter === 'ALL' || item.categorie === filter) && !item.hasError)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
);
