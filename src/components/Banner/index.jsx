import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Wrapper from './Wrapper';
import Links from './Links';

export default class Banner extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
  }

  static defaultProps = {
    links: [],
  }

  setTheme = theme => ({
    ...theme,
    heading: theme.link,
  })

  render() {
    const { children, links } = this.props;
    return (
      <ThemeProvider theme={this.setTheme}>
        <Wrapper links={!!links}>
          {children}
          {links && <Links links={links} />}
        </Wrapper>
      </ThemeProvider>
    );
  }
}
