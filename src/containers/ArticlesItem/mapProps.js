import { connect } from 'react-redux';
import { setTheme } from 'actions/ui';
import articles from 'components/articles';

function mapStateToProps(state, props) {
  const { match } = props;
  const { id } = match.params;
  const { themeName } = state.ui;
  return {
    item: articles[id],
    themeName,
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
