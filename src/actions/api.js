export const MUSIC_API_REQUEST = '[music] API Request';
export const ARTICLES_API_REQUEST = '[articles] API Request';
export const API_REQUEST = '[app] API Request';

const receiveTypes = {
  articles: ADD_ARTICLES,
  music: ADD_MUSIC,
};

const errorTypes = {
  articles: ADD_ARTICLES,
  music: ADD_MUSIC,
}


export const apiRequest = (method, contentType, body, onSuccess, onError, meta = {}) => ({
  type: API_REQUEST,
  payload: body,
  meta: {
    ...meta, method, contentType, onSuccess, onError,
  },
});

export const RequestById = (contentType, Id) => apiRequest(
  'GET',
  contentType,
  undefined,
  receiveTypes[contentType],
  errorTypes[contentType],
  { Id },
);

export const requestAll = contentType => apiRequest(
  'GET',
  contentType,
  undefined,
  receiveTypes[contentType],
  errorTypes[contentType],
);
