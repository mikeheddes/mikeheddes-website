import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import Wrapper from './indexWrapper';
import Hero from './Hero';
import Description from './Description';
import ContentHighlight from 'containers/ContentHighlight';
import Box from 'components/Box';
import Image from 'components/Image';
import OnWindowSize from 'components/OnWindowSize';

import config from './config'
import homeBanner from 'img/homeBanner.jpg'
import { fetchContentIfNeeded, bannerLoaded, fetchArticleIfNeeded, fetchMusicIfNeeded } from 'actions/home'
import { getArticle, getMusic } from './selectors'

const Grid = Loadable({
  loader: () => import('./Grid'),
  loading() {
    return <div/>
  }
});

class Home extends Component {
  static propTypes = {
    article: PropTypes.object,
    music: PropTypes.object,
    fetchContentIfNeeded: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }
  componentDidMount() {
    // this.props.fetchContentIfNeeded();
  }
  render() {
    const { article, music, onLoadBanner, bannerLoaded } = this.props;
    return(
      <Wrapper>
        <Hero {...config.hero} img={homeBanner} onLoadBanner={onLoadBanner} bannerLoaded={bannerLoaded}/>
        <Box>
          <Description>{config.description}</Description>
        </Box>
        <ContentHighlight
          eyebrow="Latest article"
          highlightType="latest"
          contentType="articles"
          actionTitle="Read more"
          marginBottom
        />
        <ContentHighlight
          eyebrow="Latest music"
          highlightType="latest"
          contentType="music"
          actionTitle="More info"
          externalActionTitle="Listen on "
          marginBottom
        />
        {/* <Grid {...{article, music}}/> */}
        {/* <OnWindowSize
          phoneOnly={article && <Image rounded border {...article.heroImage} />}
          tabletPortrait={music && <Image rounded border {...music.heroImage} />}
          tabletLandscape={article && <Image rounded border {...article.heroImage} />}
          desktop={music && <Image rounded wide border {...music.heroImage} />}
        /> */}
        {/* {article && <Image rounded {...article.heroImage} />} */}
      </Wrapper>
    )
  }
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
