import React, { Component } from 'react';

import Wrapper from './Wrapper';
import Copyright from './Copyright'

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Copyright>
          <p>Copyright © {new Date().getFullYear() + " "}
          Mike Heddes. All rights reserved.</p>
        </Copyright>
      </Wrapper>
    );
  }
}
