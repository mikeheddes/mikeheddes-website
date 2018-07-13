export const API_REQUEST = '[app] API request';

export const apiRequest = (
  contentType,
  onSuccess,
  onError,
  meta = {},
  method = 'GET',
  body = undefined,
) => ({
  type: API_REQUEST,
  payload: body,
  meta: {
    ...meta,
    method,
    contentType,
    onSuccess,
    onError,
  },
});

export const requestById = (contentType, id, onSuccess, onError) => apiRequest(
  contentType, onSuccess, onError, { id },
);

export const requestAll = (contentType, onSuccess, onError) => apiRequest(
  contentType, onSuccess, onError,
);

export const requestLatest = (contentType, onSuccess, onError) => apiRequest(
  contentType, onSuccess, onError, { query: { limit: 1 } },
);
