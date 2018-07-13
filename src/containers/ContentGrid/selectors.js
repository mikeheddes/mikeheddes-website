import { createSelector } from 'reselect';

export const getContent = (state, { contentType }) => (
  state.entities[contentType].byId
);

export const getVisibilityFilter = (state, { contentType }) => (
  state.ui[contentType].visibilityFilter
);

export const makeGetAllContentByType = () => createSelector(
  [getContent, getVisibilityFilter],
  (content, filter) => Object.values(content)
    .filter(item => (filter === 'ALL' || item.categorie === filter) && !item.hasError)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
);
