/* eslint-env browser */
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import OnPageTransition from 'utils/OnPageTransition';
import Home from 'containers/Home';
import About from 'containers/About';
import NoMatch from 'containers/NoMatch';
import Footer from 'components/Footer';
import Nav from 'containers/Nav';
import { DAY, NIGHT } from 'style/color';
import { THEME_DAY, THEME_NIGHT } from 'actions/ui';
import ContentRouter from 'containers/ContentRouter';
import { contentTypes } from 'actions/utils';

import mapState from './mapState';


const themes = {
  [THEME_DAY]: DAY,
  [THEME_NIGHT]: NIGHT,
};

// {this.props.notification.isVisible ? <Notification/> : null}

class App extends Component {
  static propTypes = {
    themeName: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { themeName } = this.props;
    const backgroundColor = themes[themeName].background;
    this.setBodyBackgroundColor(backgroundColor);
  }

  componentWillReceiveProps(nextProps) {
    const { themeName } = this.props;
    if (nextProps.themeName !== themeName) {
      const backgroundColor = themes[nextProps.themeName].background;
      this.setBodyBackgroundColor(backgroundColor);
    }
  }

  setBodyBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  }

  render() {
    const { themeName } = this.props;
    return (
      <ThemeProvider theme={themes[themeName]}>
        <React.Fragment>
          <OnPageTransition />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path={`/:contentType(${contentTypes.join('|')})`} component={ContentRouter} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default withRouter(mapState(App));
