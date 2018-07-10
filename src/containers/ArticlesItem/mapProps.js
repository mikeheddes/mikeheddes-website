import { connect } from 'react-redux';
import { fetchHighlightContentIfNeeded } from 'actions/highlightContent';
import { setTheme } from 'actions/ui';


function mapStateToProps(state, props) {
  const { match } = props;
  const { contentType, id } = match.params;
  return {
    item: state.entities[contentType].byId[id],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContentIfNeeded: (contentType, highlightType) => dispatch(
      fetchHighlightContentIfNeeded(contentType, highlightType),
    ),
    setTheme: theme => dispatch(
      setTheme(theme),
    ),
  };
}


export default Component => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
