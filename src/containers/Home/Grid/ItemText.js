import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NearestColor from 'nearest-color'

import Actions from './Actions'
import ItemWrapper from './ItemWrapper'
import TextWrapper from './TextWrapper'

import { dayColors, nightColors } from 'utils/colors'

const colorPicker = {
  DAY: dayColors,
  NIGHT: nightColors,
}

class ItemText extends Component {
  nearestColor = (color) => {
    return NearestColor.from(colorPicker.DAY)(color).value
  }
  render() {
    const { contentData, contentType, gridOrder } = this.props;
    const color = contentData && this.nearestColor(contentData.heroImage.color.vibrant);
    return(
      <ItemWrapper text {...{gridOrder}}>
        <TextWrapper {...{contentType}} color={color}>
          <h3>Latest {contentType}</h3>
          {contentData ? <h1>{contentData.title}</h1> : <h1 className="loading"/>}
          {contentData ? <h2>{contentData.artist || contentData.description}</h2> : <h2 className="loading"/>}
          {contentData && <Actions id={contentData.id} actions={contentData.externalUrls} {...{contentType}} color={color}/>}
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
