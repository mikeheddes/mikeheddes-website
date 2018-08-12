import { createSelector } from 'reselect';
import { ARTICLES_CONTENT_TYPE } from 'actions/articles';
import articles from 'components/articles';

export const getContent = (state, { contentType }) => {
  if (contentType === ARTICLES_CONTENT_TYPE) {
    return articles;
  }
  return state.entities[contentType].byId;
};

export const getHighlightId = (state, { contentType, highlightType }) => {
  if (contentType === ARTICLES_CONTENT_TYPE) {
    return articles;
  }
  return state.entities[contentType][highlightType];
};

export const makeGetHighlightedContent = () => (
  createSelector(
    [getContent, getHighlightId],
    (content, highlightId) => Object.values(content)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))[0],
  )
);
