import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import H1 from 'components/H1';
import Banner from 'components/Banner';
import Blur from 'containers/Blur';

export default class About extends Component {
  static defaultProps = {
    color: 'purple',
  }
  setTheme = theme => {
    const { color } = this.props;
    return {
      ...theme,
      link: theme[color],
      surface: theme.surfaceColors[color],
    }
  }
  render() {
    const { color, links } = this.props;
    return (
      <ThemeProvider theme={this.setTheme}>
        <React.Fragment>
          <Banner links={links}>
            <h2>About</h2>
            <h1>Answering<br/>The Five Ws.</h1>
          </Banner>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
