import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'

import createReducer from './reducers';
// import { createLogger } from 'redux-logger'
// const loggerMiddleware = createLogger()

export default function configureStore(initialState = {}) {

  const middlewares = [
    thunkMiddleware,
  ];

  const store = createStore(
    createReducer(),
    initialState,
    applyMiddleware(...middlewares),
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
