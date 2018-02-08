import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  color: black;
`

class App extends Component {
  render() {
    return(
      <Title>Hello HMR prod!</Title>
    )
  }
}

export default App;
