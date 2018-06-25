import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { injectGlobal } from 'styled-components';

// import { setTheme, themes } from '../../actions'
import OnPageTransition from 'utils/OnPageTransition';
import Home from 'containers/Home';
import Article from 'containers/Article';
import Music from 'containers/Music';
import About from 'containers/About';
import NoMatch from 'containers/NoMatch';
import Footer from 'components/Footer';

import Nav from 'containers/Nav';

const LoadableHome = Loadable({
  loader: () => import('containers/Home'),
  loading() {
    return <div/>
  }
});

// {this.props.notification.isVisible ? <Notification/> : null}

class App extends Component {
  static contextTypes = {
    '__styled-components__next__': PropTypes.shape({
      getTheme: PropTypes.func.isRequired,
    }).isRequired
  };


  componentDidMount() {
    const backgroundColor = this.context['__styled-components__next__'].getTheme().background;
    injectGlobal`
      body {
        background-color: ${backgroundColor};
      }
    `
  }

  render() {
    return(
      <React.Fragment>
        <OnPageTransition/>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/article" component={Article} />
          <Route path="/music" component={Music} />
          <Route path="/about" component={About} />
          <Route component={NoMatch}/>
        </Switch>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
