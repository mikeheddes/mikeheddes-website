import { createStore, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'

import middlewares from 'middleware'

import rootReducer from 'reducers'
// import { createLogger } from 'redux-logger'
// const loggerMiddleware = createLogger()

export default function configureStore(history, initialState = {}) {
  const store = createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // thunkMiddleware,
        ...middlewares
      )
    )
  )

  if (module.hot) {
    module.hot.accept('reducers', () => {
      store.replaceReducer(connectRouter(history)(rootReducer))
    })
  }

  return store
}
