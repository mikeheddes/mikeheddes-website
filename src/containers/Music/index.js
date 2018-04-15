import React, { Component } from 'react';
import PropTypes from 'prop-types';

import H1 from 'components/H1';
import Hero from 'components/Hero';

export default class Music extends Component {
  render() {
    return (
      <Hero music>
        <h2>Music</h2>
        <h1>Like you have.<br/>Never heard.</h1>
      </Hero>
    )
  }
}
