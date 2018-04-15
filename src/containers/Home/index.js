import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'

import Wrapper from './indexWrapper'
import Hero from './Hero'
import Description from './Description'

import config from './config'
import homeBanner from 'img/homeBanner.jpg'
import { NIGHT } from 'utils/colors'
import { fetchContentIfNeeded, bannerLoaded, fetchArticleIfNeeded, fetchMusicIfNeeded } from 'actions/home'
import { getArticle, getMusic } from './selectors'

const LoadableGrid = Loadable({
  loader: () => import('./Grid'),
  loading() {
    return <div/>
  }
});

class Home extends Component {
  componentDidMount() {
    this.props.fetchContentIfNeeded();
  }
  render() {
    const { article, music, onLoadBanner, bannerLoaded } = this.props;
    return(
      <Wrapper>
        <Hero {...config.hero} img={homeBanner} theme={NIGHT} onLoadBanner={onLoadBanner} bannerLoaded={bannerLoaded}/>
        <Description>{config.description}</Description>
        <LoadableGrid {...{article, music}}/>
      </Wrapper>
    )
  }
}

Home.propTypes = {
  article: PropTypes.object,
  music: PropTypes.object,
  fetchHomeContentIfNeeded: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
  return {
    article: getArticle(state),
    music: getMusic(state),
    bannerLoaded: state.home.bannerLoaded,
    isFetching: state.home.isFetching,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContentIfNeeded: () => dispatch(fetchContentIfNeeded()),
  // fetchArticleIfNeeded: () => dispatch(fetchArticleIfNeeded()),
  // fetchMusicIfNeeded: () => dispatch(fetchMusicIfNeeded()),
  onLoadBanner: () => dispatch(bannerLoaded()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
