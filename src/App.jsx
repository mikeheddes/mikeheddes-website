import React, { Component } from 'react'
import styled from 'styled-components'

const P = styled.p`
  color: blue;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <P>
            Edit <code>src/App.js</code> and save to reload.
          </P>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
