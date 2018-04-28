import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { mediaSize, media } from 'utils/mixins'

class OnWindowSize extends Component {
  static propTypes = Object.keys(media).reduce((acc, cur) => ({...acc, [cur]: PropTypes.node}), {});

  timeout = false; // holder for timeout id
  delay = 100; // delay after event is "complete" to run callback
  state = {width: 0, height: 0};

  getDimensions = () => {
    const width = window.innerWidth || window.body.clientWidth;
    const height = window.innerHeight || window.body.clientHeight;
    this.setState(prev => ({...prev, width, height }))
  }

  debounce = () => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.getDimensions, this.delay);
  }

  componentWillMount() {
    this.getDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.debounce);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounce);
  }

  render() {
    const fallback = this.children || null;
    const width = this.state.width;
    const props = this.props;
    if (width < mediaSize.tabletPortrait) {
      return props.phoneOnly || fallback
    }
    if (width >= mediaSize.tabletPortrait && width < mediaSize.tabletLandscape) {
      return props.tabletPortrait || fallback
    }
    if (width >= mediaSize.tabletLandscape && width < mediaSize.desktop) {
      return props.tabletLandscape || props.tabletPortrait || fallback
    }
    if (width >= mediaSize.desktop && width < mediaSize.giant) {
      return props.desktop || props.tabletLandscape || props.tabletPortrait || fallback
    }
    if (width >= mediaSize.giant) {
      return props.giant || props.desktop || props.tabletLandscape || props.tabletPortrait || fallback
    }
  }
}



export default OnWindowSize
