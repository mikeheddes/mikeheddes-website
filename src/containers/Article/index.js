import React, { Component } from 'react';
import PropTypes from 'prop-types';

import H1 from 'components/H1';
import Hero from 'components/Hero';

export default class Article extends Component {
  render() {
    return (
      <Hero article>
        <h2>Articles</h2>
        <h1>Interesting. Ideas.<br/>Worth reading.</h1>
      </Hero>
    )
  }
}
