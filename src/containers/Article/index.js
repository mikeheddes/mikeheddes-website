import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import H1 from 'components/H1';
import Banner from 'components/Banner';
import ContentHighlight from 'containers/ContentHighlight';

export default class Article extends Component {
  static defaultProps = {
    color: 'orange',
    links: [{
      name: 'Medium',
      href: 'https://medium.com',
    },{
      name: 'GitHub',
      href: 'https://github.com/mikeheddes',
    },{
      name: 'Behance',
      href: 'https://behance.net',
    },]
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
            <h2>Articles</h2>
            <h1>Interesting Ideas<br/>Worth Reading.</h1>
          </Banner>
          <ContentHighlight
            eyebrow="Latest article"
            highlightType="latest"
            contentType="articles"
            actionTitle="Read more"
            marginBottom
            marginTop
          />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
