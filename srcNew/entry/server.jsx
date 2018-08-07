import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import configureStore from 'reducers/configureStore';
import App from 'containers/App';
import template from 'utils/template';

export default (req, res, { loadableStats, ...props }) => {
  const routerContext = {};
  const helmetContext = {};
  const sheet = new ServerStyleSheet();
  const modules = [];

  const initialState = { name: 'My Name' };
  const store = configureStore(initialState);

  const ServerApp = () => (
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <StaticRouter location={req.url} context={routerContext}>
        <Provider store={store}>
          <StyleSheetManager sheet={sheet.instance}>
            <HelmetProvider context={helmetContext}>
              <App />
            </HelmetProvider>
          </StyleSheetManager>
        </Provider>
      </StaticRouter>
    </Loadable.Capture>
  );

  const body = renderToString(<ServerApp />);
  if (routerContext.url) {
    // console.log('REDIRECT: ', routerContext.url);
    res.redirect(routerContext.status || 301, routerContext.url);
    return;
  }
  const { helmet } = helmetContext;
  const chunkBundles = getBundles(loadableStats, modules);

  const content = {
    ...props,
    body,
    helmet,
    sheet,
    initialState,
    chunkBundles,
  };
  const html = template(content);

  res.send(html);
};

export const loadablePreload = Loadable.preloadAll;
