import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import Actions from './Actions'
import ItemWrapper from './ItemWrapper'
import ButtonWrapper from './ButtonWrapper'
import CoverImage from './CoverImage'

class ItemImg extends Component {
  goToItem = () => {
    const { contentData, contentType } = this.props;
    this.props.history.push(`/${contentType}/${contentData.id}`);
  }
  render() {
    const { contentData, contentType, gridOrder } = this.props;
    const onCoverClick = contentData ? this.goToItem : undefined;
    return(
      <ItemWrapper image {...{gridOrder}}>
        <div>
          {contentData && <CoverImage {...contentData.heroImage} onClick={onCoverClick} />}
          <ButtonWrapper>
            {contentData && <Actions id={contentData.id} actions={contentData.externalUrls} {...{contentType}}/>}
          </ButtonWrapper>
        </div>
      </ItemWrapper>
    )
  }
}

ItemImg.propTypes = {
  contentType: PropTypes.string.isRequired,
  contentData: PropTypes.shape({
    heroImage: PropTypes.object,
  }),
  gridOrder: PropTypes.number.isRequired,
}

export default withRouter(ItemImg)
