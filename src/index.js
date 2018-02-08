import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/App';

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
      <App />,
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
