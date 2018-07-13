/* eslint-env browser */
import { API_REQUEST } from 'actions/api';

const baseURL = process.env.API_URL || '/api/v2/';

export default ({ dispatch }) => next => (action) => {
  if (action.type === API_REQUEST) {
    const {
      contentType, method, id, query, onSuccess, onError, ...settings
    } = action.meta;
    const body = action.payload;

    let url = `${baseURL}${contentType}/`;
    url += id ? `${id}?` : '?';
    if (query && typeof query === 'object') {
      Object.keys(query).forEach((key) => {
        url += `${key}=${query[key]}&`;
      });
    }

    fetch(url, { ...settings, method, body })
      .then(response => response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      }))
      .then(data => dispatch({ type: onSuccess, payload: data }))
      .catch(error => dispatch({ type: onError, payload: { ...error, id } }));
  }
  return next(action);
};
