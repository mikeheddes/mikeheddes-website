import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'utils/mixins';
import { spaces } from 'utils/sizes';
import { InternButton, ExternButton } from 'components/Buttons';
import ForwardSVG from 'svg/Forward';
import ExitSVG from 'svg/Exit';

import GridItemWrapper from './GridItemWrapper';



// const InternButton = InternButton.extend`
//   display: inline-block;
//   margin-right: auto;
//   &:first-of-type{
//     margin-top: 30px;
//   }
//   ${media.desktop(css`
//     display: none;
//   `)}
// `

const Item = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  h1 {
    font-size: 30px;
    line-height: 1.1;
    font-weight: 700;
    color: ${props => props.hColor ? props.hColor : props.theme.heading };
    ${media.desktop(css`
      font-size: 48px;
    `)}
  }

  h2 {
    font-size: ${props => props.type == "music" ? 21 : 18}px;
    font-weight: ${props => props.type == "music" ? 500 : 600};
    margin-top: ${props => props.type == "music" ? spaces.s : spaces.r}px;
    line-height: 1.4;
    color: ${props => props.theme.heading1};
    ${media.desktop(css`
      font-size: ${props => props.type == "music" ? 33 : 24}px;
      margin-top: ${props => props.type == "music" ? spaces.xr : spaces.m}px;
    `)}
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: ${spaces.m}px;
    color: ${props => props.theme.heading};
    margin-bottom: ${spaces.xr}px;
    ${media.desktop(css`
      font-size: 19px;
      margin-bottom: ${spaces.xr}px;
    `)}
  }
`

class GridItem extends Component {
  render() {
    const { hColor, children } = this.props;
    return(
      <GridItemWrapper item {...this.props}>
        <Item {...this.props}>
          {children}
          <div>
            <ExternButton round bgCol={hColor}>
              Listen on YouTube<ExitSVG/>
            </ExternButton><br/>
            <InternButton round bgCol={hColor} to="#">
              More info<ForwardSVG/>
            </InternButton>
          </div>
        </Item>
      </GridItemWrapper>
    )
  }
}

GridItem.propTypes = {
  theme: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    heading1: PropTypes.string.isRequired,
  })
}

export default GridItem
