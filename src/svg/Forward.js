import React, { Component } from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display       : inline-block;
  height        : 1em;
  vertical-align: sub;
  stroke        : currentColor;
  fill             : none;
  stroke-miterlimit: 10;
  stroke-width     : 8px;
  margin-left: 0.13em;
`

export default class ForwardSVG extends Component {
  render() {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.58 100">
        <title>forward</title>
        <polyline className="cls-1" points="14.48 75 37.5 48.5 14.48 25"/>
      </Svg>
    );
  }
}
