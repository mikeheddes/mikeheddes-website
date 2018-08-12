import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet-async';
import OnPageTransition from 'utils/OnPageTransition';
import Home from 'containers/Home';
import About from 'containers/About/Loadable';
import NoMatch from 'components/NoMatch';
import Footer from 'components/Footer';
import Navigation from 'containers/Navigation';
import Curtain from 'containers/Curtain';
import { DAY, NIGHT } from 'style/color';
import { THEME_DAY, THEME_NIGHT } from 'actions/ui';
import ContentRouter from 'containers/ContentRouter';
import { contentTypes } from 'actions/content';

import mapState from './mapState';

import 'style/global-styles';

const themes = {
  [THEME_DAY]: DAY,
  [THEME_NIGHT]: NIGHT,
};

// {this.props.notification.isVisible ? <Notification/> : null}

const App = ({ themeName }) => (
  <ThemeProvider theme={themes[themeName]}>
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta charSet="utf-8" />
        <noscript>
          If you&#39;re seeing this message, that means JavaScript has been
          disabled on your browser, please enable JS to make this app work.
        </noscript>
        <html lang="en" />
        <body
          onTouchStart=""
          style={`background-color: ${themes[themeName].background};`}
        />
      </Helmet>
      <OnPageTransition />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          path={`/:contentType(${contentTypes.join('|')})`}
          component={ContentRouter}
        />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
      <Curtain />
    </React.Fragment>
  </ThemeProvider>
);

App.propTypes = {
  themeName: PropTypes.string.isRequired,
};

export default withRouter(mapState(App));
