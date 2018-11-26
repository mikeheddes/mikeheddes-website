import React from 'react'
import ReactDOM from 'react-dom'

import App from './views/App'

export default App

if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render

  const render = () => {
    // eslint-disable-next-line no-undef, react/jsx-filename-extension
    renderMethod(<App />, document.getElementById('root'))
  }

  render()
}
