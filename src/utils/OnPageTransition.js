import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setMenuVisibility } from 'actions';

class OnPageTransition extends Component {
  componentDidUpdate(prevProps) {
    const { dispatch, location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
      dispatch(setMenuVisibility(false));
    }
  }
  render() {
    return this.props.children
  }
}

export default withRouter(connect()(OnPageTransition));
