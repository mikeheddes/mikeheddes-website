import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as curtainActionCreators from 'actions/curtain';
import * as menuActionCreators from 'actions/menu';
import { push } from 'connected-react-router';

function mapStateToProps(state) {
  return {
    activePath: state.router.location.pathname,
    ...state.ui.menu,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { ...menuActionCreators, ...curtainActionCreators, push },
    dispatch
  );
}

export default Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
