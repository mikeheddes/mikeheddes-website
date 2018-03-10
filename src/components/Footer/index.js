import React, { Component } from 'react';

import Wrapper from './Wrapper';

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <p>Copyright © {new Date().getFullYear() + " "}
        Mike Heddes. All rights reserved.</p>
      </Wrapper>
    );
  }
}
