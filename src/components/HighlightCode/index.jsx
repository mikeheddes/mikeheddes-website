import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';

import Pre from './Pre';
import Code from './Code';

hljs.configure({
  classPrefix: '', // don't append class prefix
});

export default class HighlightCode extends Component {
  static propTypes = {
    language: PropTypes.string,
    children: PropTypes.node.isRequired,
    element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  };

  static defaultProps = {
    language: '',
    element: Pre,
  };

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  setEl = (el) => {
    this.el = el;
  };

  highlightCode = () => {
    const nodes = this.el.querySelectorAll('pre code');
    nodes.forEach(node => hljs.highlightBlock(node));
  };

  render() {
    const { children, language, element: Element } = this.props;
    return (
      <Element innerRef={this.setEl}>
        <Code className={language}>
          {children}
        </Code>
      </Element>
    );
  }
}
