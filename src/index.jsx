import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router'
// import createHistory from 'history/createBrowserHistory'

import App from './views/App'
import * as serviceWorker from './serviceWorker'
// import configureStore from './reducers/configureStore'

const APP_ROOT = document.getElementById('app-root')

// const history = createHistory()
// const store = configureStore(history)

ReactDOM.render(<App />, APP_ROOT)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
