import { createSelector } from 'reselect';

const getContent = (state, props) => (
  state.entities[props.contentType].byId
)

const getHighlightId = (state, props) => (
  state.entities[props.contentType][props.highlightType]
)

export const makeGetHighlightedContent = () => {
  return createSelector(
    [getContent, getHighlightId],
    (content, highlightId) => {
      return content[highlightId];
    }
  )
};
