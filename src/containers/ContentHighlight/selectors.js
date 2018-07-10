import { createSelector } from 'reselect';

export const getContent = (state, { contentType }) => (
  state.entities[contentType].byId
);

export const getHighlightId = (state, { contentType, highlightType }) => (
  state.entities[contentType][highlightType]
);

export const makeGetHighlightedContent = () => (
  createSelector(
    [getContent, getHighlightId],
    (content, highlightId) => (
      content[highlightId]
    ),
  )
);
