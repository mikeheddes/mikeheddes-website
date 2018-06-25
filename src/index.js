import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';

// Import CSS reset and Global Styles
import './global-styles';
import { DAY, NIGHT } from 'style/color';

import configureStore, { history } from './configureStore';

import App from 'containers/App';

const MOUNT_NODE = document.getElementById('root');

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={DAY}>
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}
