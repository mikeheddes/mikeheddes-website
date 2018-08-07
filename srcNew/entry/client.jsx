/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

import configureStore from 'reducers/configureStore';
import App from 'containers/App';

const MOUNT_NODE = document.getElementById('root');

const initialState = window.INITIAL_STATE;
delete window.INITIAL_STATE;
const store = configureStore(initialState);

const ClientApp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </BrowserRouter>
);

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(<ClientApp />, MOUNT_NODE);
});

if (module.hot) {
  module.hot.accept('containers/App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    ReactDOM.render(<ClientApp />, MOUNT_NODE);
  });
}
