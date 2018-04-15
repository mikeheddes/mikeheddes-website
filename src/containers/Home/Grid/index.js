import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import ItemImg from './ItemImg'
import ItemText from './ItemText'

class Grid extends Component {
  render() {
    const { article, music } = this.props;
    return(
      <Wrapper>
        <ItemImg contentData={article} contentType="article" gridOrder={1}/>
        <ItemText contentData={article} contentType="article" gridOrder={2}/>
        <ItemImg contentData={music} contentType="music" gridOrder={4}/>
        <ItemText contentData={music} contentType="music" gridOrder={3}/>
      </Wrapper>
    )
  }
}

Grid.propTypes = {
  article: PropTypes.object,
  music: PropTypes.object,
}

export default Grid
