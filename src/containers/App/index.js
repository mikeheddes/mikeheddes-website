import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import img from '../bg.png';
// import { setTheme, themes } from '../../actions';

// import OnPageTransition from '../../OnPageTransition'

import Home from '../Home';
import Article from '../Article';
import Music from '../Music';
import About from '../About';
import NoMatch from '../NoMatch';

class App extends Component {
  render() {
    return(
      <div>
        {/* <OnPageTransition> */}
        {/* {this.props.notification.isVisible ? <Notification/> : null} */}
        {/* <Nav/> */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/article" component={Article}/>
          <Route path="/music" component={Music}/>
          <Route path="/about" component={About}/>
          <Route component={NoMatch}/>
        </Switch>
        <Link to={'/'}>Home</Link>
        <Link to={'/article'}>Article</Link>
        <Link to={'/music'}>Music</Link>
        <Link to={'/about'}>About</Link>
        {/* <Footer/> */}
        {/* </OnPageTransition> */}
      </div>
    )
  }
}

export default App;
