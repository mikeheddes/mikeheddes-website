import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import { debounce } from 'lodash';


import Wrapper from './Wrapper';
import Resolve from './Resolve';

class Warning extends Component {
  componentDidMount(){
    this.props.setHeight(this.wrapper.offsetHeight);
  }
  debouncedSetHeight = debounce(() => this.props.setHeight(this.wrapper.offsetHeight), 17);
  render() {
    return (
    <Wrapper innerRef={node => this.wrapper = node}>{this.props.message}
      <EventListener target="window" onResize={this.debouncedSetHeight}/>
      <Resolve onClick={this.props.resolve}>HIDE</Resolve>
    </Wrapper>)
  }
}

Warning.propTypes = {
  message: PropTypes.string.isRequired,
  setHeight: PropTypes.func.isRequired,
  resolve: PropTypes.func.isRequired,
}


export default Warning
