import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import Actions from './Actions'
import ItemWrapper from './ItemWrapper'
import ButtonWrapper from './ButtonWrapper'
import CoverImage from './CoverImage'

import IMAGE from 'img/grafity.jpeg'

class ItemImg extends Component {
  goToItem = () => {
    const { contentData, contentType } = this.props;
    this.props.history.push(`/${contentType}/${contentData.id}`);
  }
  render() {
    const { contentData, contentType, gridOrder } = this.props;
    console.log(contentData);
    const onCoverClick = contentData ? this.goToItem : undefined;
    return(
      <ItemWrapper image {...{gridOrder}}>
        <div>
          <CoverImage {...IMAGE} onClick={onCoverClick} />
          <ButtonWrapper>
            {contentData && <Actions id={contentData.id} actions={contentData.actions} {...{contentType}}/>}
          </ButtonWrapper>
        </div>
      </ItemWrapper>
    )
  }
}

ItemImg.propTypes = {
  contentType: PropTypes.string.isRequired,
  contentData: PropTypes.shape({
    heroImageUrl: PropTypes.string.isRequired,
  }),
  gridOrder: PropTypes.number.isRequired,
}

export default withRouter(ItemImg)
