import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Section from 'components/Section';
import Banner from 'components/Banner';
import { colorNames } from 'style/color';
import Box from 'components/Box';
import Paragraph from 'components/Markdown/Paragraph';
import { fluidText } from 'utils/mixins';

import Txt from './text.md';

const MDBox = Box.extend`
  ${fluidText(18, 20)};
`;

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
  };

  setTheme = (theme) => {
    const { color } = this.props;
    return {
      ...theme,
      link: theme[color],
      surface: theme.surfaceColors[color],
    };
  };

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
              Artist. Designer.
              <br />
              Engineer.
            </h1>
          </Banner>
          <Section>
            <MDBox width="text" marginLeft="auto" marginRight="auto">
              <Txt components={{ p: Paragraph }} />
            </MDBox>
          </Section>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
