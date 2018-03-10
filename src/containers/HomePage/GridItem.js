import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'utils/mixins';
import GridItemWrapper from './GridItemWrapper';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 80px 130px 130px;
  justify-content: center;

  h1 {
    font-size: 34px;
    line-height: 1.1;
    font-weight: 700;
    color: ${props => props.hColor ? props.hColor : props.theme.heading };
    ${media.desktop(css`
      font-size: 48px;
    `)}
  }

  h2 {
    font-size: 26px;
    font-weight: 600;
    margin-top: 20px;
    line-height: 1.4;
    color: ${props => props.theme.heading1};
  }

`

class GridItem extends Component {
  render() {
    const { to, exact, title } = this.props;
    return(
      <GridItemWrapper {...this.props}>
        <Item {...this.props}>{this.props.children}</Item>
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
