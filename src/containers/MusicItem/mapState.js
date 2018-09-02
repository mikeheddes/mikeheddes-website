import { connect } from 'react-redux';
import { setTheme } from 'actions/ui';
import music from 'components/music';

function mapStateToProps(state, props) {
  const { match } = props;
  const { id } = match.params;
  return {
    item: music[id],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTheme: theme => dispatch(setTheme(theme)),
  };
}

export default Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
