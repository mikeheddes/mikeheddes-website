import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TweenLite, CSSPlugin } from 'gsap';

const Svg = styled.svg`
  display       : inline-block;
  height        : 1em;
  vertical-align: sub;
  stroke        : currentColor;
  fill             : none;
  stroke-miterlimit: 10;
  stroke-width     : 8px;
`

const topLineOpen = {
  x1: 0,
  x2: 85,
  y1: 24.5,
  y2: 24.5
};

const topLineClose = {
  x1: 12.5,
  x2: 75.6,
  y1: 20.05,
  y2: 80.1
};

const bottomLineOpen = {
  x1: 0,
  x2: 85,
  y1: 59.5,
  y2: 59.5
};

const bottomLineClose = {
  x1: 12.5,
  x2: 75.6,
  y1: 80.1,
  y2: 20.05
};


export default class MenuSVG extends Component {
  componentDidMount(){
    TweenLite.to(this.topLine, 0, {attr: topLineOpen, ease: Power3.easeOut});
    TweenLite.to(this.bottomLine, 0, {attr: bottomLineOpen, ease: Power3.easeOut});
  }
  componentDidUpdate(){
    TweenLite.to(this.topLine, 0.8, {attr: this.props.checked ? topLineClose : topLineOpen, ease: Power3.easeOut});
    TweenLite.to(this.bottomLine, 0.8, {attr: this.props.checked ? bottomLineClose : bottomLineOpen, ease: Power3.easeOut});
  }
  render() {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">
        <title>{this.props.checked ? 'show menu icon' : 'hide menu icon'}</title>
        <line ref={(node) => {this.topLine = node}}/>
        <line ref={(node) => {this.bottomLine = node}}/>
      </Svg>
    );
  }
}

MenuSVG.propTypes = {
  checked: PropTypes.bool.isRequired
}
