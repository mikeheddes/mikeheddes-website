import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Actions from './Actions'
import ItemWrapper from './ItemWrapper'
import TextWrapper from './TextWrapper'

class ItemText extends Component {
  render() {
    const { contentData, contentType, gridOrder } = this.props;
    return(
      <ItemWrapper text {...{gridOrder}}>
        <TextWrapper {...{contentType}} colorName={'red'}>
          <h3>Latest {contentType}</h3>
          {contentData ? <h1>{contentData.title}</h1> : <h1 className="loading"/>}
          {contentData ? <h2>{contentData.artist || contentData.description}</h2> : <h2 className="loading"/>}
          {contentData && <Actions id={contentData.id} actions={contentData.actions} {...{contentType}} colorName={'red'}/>}
        </TextWrapper>
      </ItemWrapper>
    )
  }
}

ItemText.propTypes = {
  contentType: PropTypes.string.isRequired,
  contentData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string,
    description: PropTypes.string,
  }),
  gridOrder: PropTypes.number.isRequired,
}

export default ItemText
