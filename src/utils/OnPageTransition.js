/* eslint-env browser */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setMenuVisibility } from 'actions/menu';
import { setCurtainVisibility } from 'actions/curtain';

class OnPageTransition extends Component {
  static propTypes = {
    children: PropTypes.node,
    dispatch: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    location: PropTypes.object.isRequired,
  };

  static defaultProps = {
    children: null,
  };

  componentDidUpdate(prevProps) {
    const { dispatch, location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
      dispatch(setMenuVisibility(false));
      dispatch(setCurtainVisibility(false));
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(connect()(OnPageTransition));
