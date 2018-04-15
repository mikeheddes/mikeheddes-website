import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import GridItem from './GridItem'
import GridImg from './GridImg'

class Grid extends Component {
  render() {
    const { article, music } = this.props;
    return(
      <Wrapper>
        { article ?
          [<GridImg key={1} url={article.heroImageUrl} gridOrder={1}/>,
          <GridItem article key={2}  gridOrder={2}>
            {/* hColor={article.color.value} */}
            <h3>Latest article</h3>
            <h1>{article.title}</h1>
            <h2>{article.description}</h2>
          </GridItem>]
        : null
        }
        { music ?
          [<GridImg key={4} url={music.heroImageUrl} gridOrder={4}/>,
          <GridItem music key={3} gridOrder={3}>
            {/* hColor={music.color.value}  */}
            <h3>Latest music</h3>
            <h1>{music.title}</h1>
            <h2>{music.artist}</h2>
          </GridItem>] : null
        }
      </Wrapper>
    )
  }
}

Grid.propTypes = {
  article: PropTypes.object,
  music: PropTypes.object,
}

export default Grid
