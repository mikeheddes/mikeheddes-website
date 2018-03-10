import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { position } from 'polished';

import GridItemWrapper from './GridItemWrapper';
import GridButton from './GridButton';
import GridButtonWrapper from './GridButtonWrapper';
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
  constructor(props) {
    super(props);
    this.state = { showButton: false }
  }
  showButton = () => {
    this.setState(prevState => ({...prevState, showButton: true}));
  }
  hideButton = () => {
    this.setState(prevState => ({...prevState, showButton: false}));
  }
  render() {
    return(
      <GridItemWrapper {...this.props} onMouseOver={this.showButton} onMouseOut={this.hideButton}>
        <Img {...this.props}/>
        <GridButtonWrapper>
          <div>
            <GridButton isVisible={this.state.showButton}>
              Listen on YouTube<ExitSVG/>
            </GridButton>
            <GridButton isVisible={this.state.showButton}>
              More info<ForwardSVG/>
            </GridButton>
          </div>
        </GridButtonWrapper>
      </GridItemWrapper>
    )
  }
}

GridImg.propTypes = {
}

export default GridImg
