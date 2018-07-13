import { connect } from 'react-redux';
import { getAllContent } from 'actions/content';
import { setMusicVisibility } from 'actions/music';
import { setArticlesVisibility } from 'actions/articles';

import { makeGetAllContentByType, getVisibilityFilter } from './selectors';

const setVisibilityFilters = {
  music: setMusicVisibility,
  articles: setArticlesVisibility,
};

function makeMapStateToProps() {
  const getAllContentByType = makeGetAllContentByType();
  const mapStateToProps = (state, props) => ({
    allContent: getAllContentByType(state, props),
    activeFilter: getVisibilityFilter(state, props),
  });
  return mapStateToProps;
}

function mapDispatchToProps(dispatch, props) {
  const { contentType } = props;
  return {
    getContentIfNeeded: () => {
      dispatch(getAllContent(contentType));
    },
    setVisibility: (filter) => {
      // console.log(filter);
      dispatch(setVisibilityFilters[contentType](filter));
    },
  };
}

export default Component => connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(Component);
