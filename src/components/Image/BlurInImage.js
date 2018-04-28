import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Content from './Content'

class Animation extends Component {
  static propTypes = {
    src: PropTypes.string,
    srcSet: PropTypes.string,
    onClick: PropTypes.func,
    radius: PropTypes.number.isRequired,
  }
  state = {
    loaded: false,
  }
  setLoaded = () => {
    this.setState(prev => ({...prev, loaded: true}));
  }
  render() {
    const { loaded } = this.state;
    return(
      <Content {...this.props} onLoad={this.setLoaded} loaded={loaded}/>
    )
  }
}


export default Animation
