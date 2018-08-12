import { connect } from 'react-redux';

const mapStateToProps = state => ({
  themeName: state.ui.themeName,
});

export default Component => connect(mapStateToProps)(Component);
