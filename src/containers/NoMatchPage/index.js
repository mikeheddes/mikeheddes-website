import React, { Component } from "react";
import styled from 'styled-components';
import { transparentize as fade, timingFunctions as easeF, position, size, hiDPI } from 'polished';

import ForwardSVG from 'svg/Forward';
import defaultBanner from 'img/blue-pink-wallpaper.jpg';
import H1 from 'components/H1';
import Text from './Text';
import Link from 'components/Link';
import Wrapper from './Wrapper';
import Background from './Background';
import { spaces, space } from 'utils/sizes';


export default class NoMatch extends Component {
  render() {
    return(
      <Wrapper id="nomatch">
        <H1>404</H1>
        <Text><i>{`${this.props.location.pathname}`}</i> is not available. Try something else.<br/>
          Or go to the <Link to="/" className="icon-hover">home page<ForwardSVG/></Link></Text>
        {/* <Background img={defaultBanner}/> */}
      </Wrapper>
    )
  }
}
