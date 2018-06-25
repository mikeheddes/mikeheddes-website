import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import createReducer from './reducers';
// import { createLogger } from 'redux-logger'
// const loggerMiddleware = createLogger()

export const history = createBrowserHistory()

export default function configureStore(initialState = {}) {

  // const store = createStore(
  //   createReducer(),
  //   initialState,
  //   applyMiddleware(...middlewares),
  // );

  const store = createStore(
    connectRouter(history)(createReducer()), // new root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunkMiddleware
      ),
    ),
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // store.replaceReducer(createReducer(store.injectedReducers));
      store.replaceReducer(connectRouter(history)(createReducer()));
    });
  }

  return store;
}
