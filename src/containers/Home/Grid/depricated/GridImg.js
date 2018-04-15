import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { position } from 'polished';

import ItemWrapper from './GridItemWrapper';
import { InternButton, ExternButton } from 'components/Buttons';
import ButtonWrapper from './ButtonWrapper';
import ForwardSVG from 'svg/Forward';
import ExitSVG from 'svg/Exit';

const Img = styled.div`
  padding-bottom: 75%;
  min-height: 100%;
  justify-content: center;
  background-image: url('${props => props.url}');
  background-size: cover;
  background-position: center;
  background-origin: border-box;
`

Img.propTypes = {
}

class GridImg extends Component {
  render() {
    return(
      <ItemWrapper image {...this.props} uImg={this.props}>
        <div>
          <Img {...this.props}/>
          <ButtonWrapper className="img-button-wrapper">
            <div>
              <ExternButton round >
                Listen on YouTube<ExitSVG/>
              </ExternButton><br/>
              <InternButton round to="">
                More info<ForwardSVG/>
              </InternButton>
            </div>
          </ButtonWrapper>
        </div>
      </ItemWrapper>
    )
  }
}

GridImg.propTypes = {
  heroImage: PropTypes.shape({
    placeholder: PropTypes.string,
    srcSet: PropTypes.string,
    src: PropTypes.string.isRequired,
  }),
}

export default GridImg
