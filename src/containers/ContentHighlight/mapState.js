import { connect } from 'react-redux';

import { makeGetHighlightedContent } from './selectors';
import { fetchHighlightContentIfNeeded } from 'actions/highlightContent';


function makeMapStateToProps() {
  const getHighlightedContent = makeGetHighlightedContent();
  const mapStateToProps = (state, props) => {
    return {
      content: getHighlightedContent(state, props)
    }
  }
  return mapStateToProps;
}

function mapDispatchToProps(dispatch) {
  return {
    getContentIfNeeded: (contentType, highlightType) => {
      dispatch(fetchHighlightContentIfNeeded(contentType, highlightType))
    }
  }
}


export default Component => connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(Component)
