import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Banner from 'components/Banner';
import { colorNames } from 'style/color';


export default class About extends Component {
  static propTypes = {
    color: PropTypes.oneOf(colorNames),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }),
    ),
  };

  static defaultProps = {
    color: 'purple',
    links: [],
  }

  setTheme = (theme) => {
    const { color } = this.props;
    return {
      ...theme,
      link: theme[color],
      surface: theme.surfaceColors[color],
    };
  }

  render() {
    const { links } = this.props;
    return (
      <ThemeProvider theme={this.setTheme}>
        <React.Fragment>
          <Banner links={links}>
            <h2>
              About
            </h2>
            <h1>
              Answering
              <br />
              The Five Ws.
            </h1>
          </Banner>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
