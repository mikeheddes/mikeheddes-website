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
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  };

  static defaultProps = {
    className: '',
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
    const { children, className, element: Element } = this.props;

    return (
      <Element innerRef={this.setEl}>
        <Code className={className}>
          {children}
        </Code>
      </Element>
    );
  }
}
