import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet-async';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

const Heading = Loadable({
  loader: () => import('./Heading'),
  loading: () => <div />,
});

const onClick = () => {
  console.log('JS is working!');
};

const App = props => {
  const { name } = props;
  return (
    <React.Fragment>
      <h1 style={{ color: 'black' }}>Hello {name}, how are you?</h1>
      <Helmet>
        <title>{name}</title>
        <noscript>Please turn on JavaScript</noscript>
      </Helmet>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Heading onClick={onClick}>Home</Heading>}
        />
        <Route
          exact
          path="/re"
          render={() => <Redirect to="https://google.com" />}
        />
        <Route
          exact
          path="/:page"
          render={({ match: { params } }) => <Heading>{params.page}</Heading>}
        />
      </Switch>
    </React.Fragment>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

export default connect(mapStateToProps)(App);
