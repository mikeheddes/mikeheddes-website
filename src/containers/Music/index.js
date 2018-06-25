import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import H1 from 'components/H1';
import Banner from 'components/Banner';
import ContentHighlight from 'containers/ContentHighlight';

export default class Music extends Component {
  static defaultProps = {
    color: 'pink',
    links: [{
      name: 'Spotify',
      href: 'https://spotify.com',
    },{
      name: 'Apple Music',
      href: 'https://www.apple.com/apple-music/',
    },{
      name: 'YouTube',
      href: 'https://youtube.com',
    },{
      name: 'SoundCloud',
      href: 'https://soundcloud.com',
    }]
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
    const { links } = this.props;
    return (
      <ThemeProvider theme={this.setTheme}>
        <React.Fragment>
          <Banner links={links}>
            <h2>Music</h2>
            <h1>Like You Have<br/>Never Heard.</h1>
          </Banner>
          <ContentHighlight
            eyebrow="Latest music"
            highlightType="latest"
            contentType="music"
            actionTitle="More info"
            externalActionTitle="Listen on "
            marginBottom
            marginTop
          />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
