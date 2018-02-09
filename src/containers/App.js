import React, { Component } from 'react';
import styled from 'styled-components';

import img from './bg.png';

const Title = styled.h1`
  color: black;
  font-size: 2em;
  padding: 5px 15px;
  border-radius: 6px;
  border: 1px solid hsla(0, 0%, 0%, .08);
  background-color: hsla(0, 0%, 90%, .5);
`

const Wrapper = styled.div`
  padding: 50px;
  background-size: cover;
  background-position: center;
  background-image: url(${img});
`

class App extends Component {
  render() {
    return (<Wrapper>
      <Title>Hello HMR prod!</Title>
    </Wrapper>)
  }
}

export default App;
