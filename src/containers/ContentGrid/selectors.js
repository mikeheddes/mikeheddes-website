import { createSelector } from 'reselect';
import { ARTICLES_CONTENT_TYPE } from 'actions/articles';
import { MUSIC_CONTENT_TYPE } from 'actions/music';
import articles from 'components/articles';
import music from 'components/music';

export const getContent = (state, { contentType }) => {
  if (contentType === ARTICLES_CONTENT_TYPE) {
    return articles;
  }
  if (contentType === MUSIC_CONTENT_TYPE) {
    return music;
  }
  return state.entities[contentType].byId;
};

export const getVisibilityFilter = (state, { contentType }) =>
  state.ui[contentType].visibilityFilter;

export const makeGetAllContentByType = () =>
  createSelector([getContent, getVisibilityFilter], (content, filter) =>
    Object.values(content)
      .filter(
        item =>
          (filter === 'ALL' || item.categorie === filter) && !item.hasError
      )
      .sort((a, b) => b.publishedAt - a.publishedAt)
  );
