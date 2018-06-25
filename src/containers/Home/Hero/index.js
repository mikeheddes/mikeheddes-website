import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import Wrapper from './Wrapper'
import BackgroundImg from './BackgroundImg'
import Loading from './Loading'
import CallToAction from './CallToAction'
import Video from './Video'
import blobVid from 'video/blobs.mp4'
import blobThumb from 'img/blobs-thumbnail.png'
import { grays } from 'utils/colors'

class Hero extends Component {
  setThemeColors = theme => {
    return {
      ...theme,
      link: grays['900'],
      title: grays['000'],
    }
  }
  render() {
    const { eyebrow, title, img, action, loadText, onLoadBanner, bannerLoaded } = this.props;
    return (
      <ThemeProvider theme={this.setThemeColors}>
        <Wrapper >
          <Video src={blobVid} poster={blobThumb} loop muted />
          {/* uImg={img.placeholder} isLoaded={bannerLoaded} */}
          {/* <BackgroundImg srcSet={img.srcSet} src={img.src} onLoad={onLoadBanner} isLoaded={bannerLoaded} /> */}
          <h2>{eyebrow}</h2>
          <h1>{title}</h1>
          {action && <CallToAction {...action} />}
        </Wrapper>
      </ThemeProvider>
    )
  }
}

Hero.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  loadText: PropTypes.string,
  bannerLoaded: PropTypes.bool.isRequired,
  action: PropTypes.object,
  img: PropTypes.shape({
    placeholder: PropTypes.string,
    src: PropTypes.string.isRequired,
    srcset: PropTypes.string,
  }),
  onLoadBanner: PropTypes.func,
}

export default Hero
