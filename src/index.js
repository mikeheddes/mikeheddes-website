/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import Loadable from 'react-loadable'

import App from './views/App'

export default App

if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render

  const render = () => {
    renderMethod(
      <HelmetProvider>
        <App />
      </HelmetProvider>,
      // eslint-disable-next-line no-undef
      document.getElementById('root')
    )
  }

  if (module.hot) {
    render()
  } else {
    Loadable.preloadReady().then(render)
  }
}
