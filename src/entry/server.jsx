import React from 'react';
import through from 'through';
import { renderToNodeStream } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { getDataFromTree } from 'react-apollo';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import createHistory from 'history/createMemoryHistory';

import configureStore from 'reducers/configureStore';
import { ARTICLES_CONTENT_TYPE } from 'actions/articles';
import { MUSIC_CONTENT_TYPE } from 'actions/music';
import { themes } from 'actions/ui';
import articles from 'components/articles';
import music from 'components/music';
import App from 'containers/App';
import template from 'utils/template';

const themeLookUp = {
  [ARTICLES_CONTENT_TYPE]: articles,
  [MUSIC_CONTENT_TYPE]: music,
};

export default (req, res, { loadableStats, ...props }) => {
  const routerContext = {};
  const helmetContext = {};
  const sheet = new ServerStyleSheet();
  const modules = [];

  const regInfo = req.url.split('/').slice(1);
  let themeName = themes.DAY;
  if (regInfo[0] in themeLookUp) {
    if (regInfo[1] in themeLookUp[regInfo[0]]) {
      themeName = themeLookUp[regInfo[0]][regInfo[1]].theme;
    }
  }

  const initialState = { ui: { themeName } };
  const history = createHistory();
  const store = configureStore(history, initialState);

  const ServerApp = () => (
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={routerContext}>
          <StyleSheetManager sheet={sheet.instance}>
            <HelmetProvider context={helmetContext}>
              <App />
            </HelmetProvider>
          </StyleSheetManager>
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  );

  getDataFromTree(ServerApp()).then(() => {
    const stream = sheet.interleaveWithNodeStream(
      renderToNodeStream(<ServerApp />)
    );

    if (routerContext.url) {
      // console.log('REDIRECT: ', routerContext.url);
      res.redirect(routerContext.status || 301, routerContext.url);
      return;
    }
    const chunkBundles = getBundles(loadableStats, modules);

    const content = {
      ...props,
      helmet: helmetContext.helmet,
      initialState,
      chunkBundles,
    };

    const [header, footer] = template(content);

    res.status(200);
    res.write(header);
    stream
      .pipe(
        through(
          function write(data) {
            this.queue(data);
          },
          function end() {
            this.queue(footer);
            this.queue(null);
          }
        )
      )
      .pipe(res);
  });
};

export const loadablePreload = Loadable.preloadAll;
