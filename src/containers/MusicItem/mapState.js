import { connect } from 'react-redux';
import { getMusicItem } from 'actions/music';
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
    getItem: id => dispatch(getMusicItem(id)),
    setTheme: theme => dispatch(
      setTheme(theme),
    ),
  };
}


export default Component => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
