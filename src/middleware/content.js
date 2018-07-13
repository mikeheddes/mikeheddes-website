export const shouldFetchContentItem = (state, contentType, id) => {
  if (state.entities[contentType][id]) {
    return false;
  }
  return true;
};

export const shouldFetchAllContent = (state, contentType) => {
  if (state.entities[contentType].fetchedAll) {
    return false;
  }
  return true;
};

export const shouldFetchLatestContent = (state, contentType) => {
  if (state.entities[contentType].latest) {
    return false;
  }
  return true;
};

export const enrichDate = item => ({
  receivedAt: Date.now(),
  publishedAt: new Date(item.publishedAt),
});
