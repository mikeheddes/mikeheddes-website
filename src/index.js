import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

// Import CSS reset and Global Styles
import './global-styles';
import { DAY, NIGHT } from 'utils/colors';

import configureStore from './configureStore';
import App from 'containers/App';

const MOUNT_NODE = document.getElementById('root');

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={DAY}>
          <App />
        </ThemeProvider>
        </Router>
    </Provider>,
    MOUNT_NODE
  );
};

render();

if (module.hot) {
  module.hot.accept('containers/App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}
