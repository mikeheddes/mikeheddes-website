import { connect } from 'react-redux';

// import { makeGetHighlightedContent } from './selectors';


function makeMapStateToProps() {
  const mapStateToProps = (state, props) => ({
    item: state.entities[props.contentType].byId[props.id],
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
