import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { setTheme, themes } from '../../actions';
import OnPageTransition from 'utils/OnPageTransition';
import Home from 'containers/HomePage';
import Article from 'containers/ArticlePage';
import Music from 'containers/MusicPage';
import About from 'containers/AboutPage';
import NoMatch from 'containers/NoMatchPage';
import Footer from 'components/Footer';

import Nav from 'containers/Nav';

class App extends Component {
  render() {
    return(
      <div>
        <OnPageTransition>
          {/* {this.props.notification.isVisible ? <Notification/> : null} */}
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/article" component={Article}/>
            <Route path="/music" component={Music}/>
            <Route path="/about" component={About}/>
            <Route component={NoMatch}/>
          </Switch>
          <Footer/>
        </OnPageTransition>
      </div>
    )
  }
}

export default App;
