import { connect } from 'react-redux';
import { fetchHighlightContentIfNeeded } from 'actions/highlightContent';
import { setTheme } from 'actions/ui';

import { makeGetHighlightedContent } from './selectors';


function makeMapStateToProps() {
  const getHighlightedContent = makeGetHighlightedContent();
  const mapStateToProps = (state, props) => ({
    content: getHighlightedContent(state, props),
  });
  return mapStateToProps;
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
  makeMapStateToProps,
  mapDispatchToProps,
)(Component);
