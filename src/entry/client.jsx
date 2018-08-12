/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Loadable from 'react-loadable';
import createHistory from 'history/createBrowserHistory';

import configureStore from 'reducers/configureStore';
import App from 'containers/App';

const MOUNT_NODE = document.getElementById('root');

const initialState = window.INITIAL_STATE;
delete window.INITIAL_STATE;
const history = createHistory();
const store = configureStore(history, initialState);

const ClientApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ConnectedRouter>
  </Provider>
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
