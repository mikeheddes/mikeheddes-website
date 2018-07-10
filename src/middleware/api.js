/* eslint-env browser */
import { API_REQUEST } from 'actions/api';

const baseURL = process.env.API_URL || '/api/v2/';

export default ({ dispatch }) => next => (action) => {
  if (action.type === API_REQUEST) {
    const {
      method, url, onSuccess, onError,
    } = action.meta;

    fetch(`${baseURL}${url}`, { method })
      .then(response => response.json())
      .then(data => dispatch({ type: onSuccess, payload: data }))
      .catch(error => dispatch({ type: onError, payload: error }));
  }
  return next(action);
};
