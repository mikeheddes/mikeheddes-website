import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import BlurInImage from './BlurInImage';
import { radius } from 'utils/sizes';
import { zDepthPropType } from 'utils/PropTypes';

export default class Image extends Component {
  static propTypes = {
    src: PropTypes.string,
    placeholder: PropTypes.string,
    alt: PropTypes.string,
    srcSet: PropTypes.string,
    ratio: PropTypes.number,
    square: PropTypes.bool,
    tall: PropTypes.bool,
    wide: PropTypes.bool,
    rounded: PropTypes.bool,
    noBorder: PropTypes.bool,
    zDepth: zDepthPropType.isRequired,
    onClick: PropTypes.func
  }
  static defaultProps = {
    ratio: 0.618,
    zDepth: 0,
  }
  determineRatio = () => {
    const { square, tall, wide } = this.props;
    if(process.env.NODE_ENV !== 'production') {
      if((Number(square) || 0) + (Number(tall) || 0) + (Number(wide) || 0) > 1) {
        console.warn(`Multiple ratio settings have been passed as props. Falling back to the default ratio of ${this.props.ratio}`);
        this.ratio = this.props.ratio;
      } else {
        this.ratio = this.props.ratio;
        if(square) this.ratio = 1;
        if(tall) this.ratio = .75;
        if(wide) this.ratio = .533;
      }
    } else {
      this.ratio = this.props.ratio;
      if(square) this.ratio = 1;
      if(tall) this.ratio = .75;
      if(wide) this.ratio = .533;
    }
  }
  determineRadius = () => {
    this.radius = this.props.rounded ? radius.s : 0;
  }
  componentWillMount() {
    this.determineRatio();
    this.determineRadius();
  }
  render() {
    const { placeholder, src, srcSet, color, noBorder, zDepth, onClick } = this.props;
    return(
      <Wrapper
        zDepth={zDepth}
        ratio={this.ratio}
        micro={placeholder}
        color={color && color.vibrant}
        radius={this.radius}
        border={!noBorder}
        onClick={onClick}
      >
        <BlurInImage src={src} srcSet={srcSet} radius={this.radius} />
        {this.props.children}
      </Wrapper>
    )
  }
}
