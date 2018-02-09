import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

// Import CSS reset and Global Styles
import './global-styles';

import App from 'containers/App';

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
      <App />,
    MOUNT_NODE
  );
};

render(App);

if (module.hot) {
  module.hot.accept('containers/App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}
