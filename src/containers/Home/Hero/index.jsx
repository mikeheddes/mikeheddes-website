import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import blobVid from 'video/blobs.mp4';
import blobThumb from 'img/blobs-thumbnail.png';
import Link from 'components/Link';
import Box from 'components/Box';

import Video from './Video';
import Wrapper from './Wrapper';

export default class Hero extends Component {
  static propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    action: PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }

  static defaultProps = {
    title: 'Curious. Creative.',
    eyebrow: 'Mike Heddes',
    action: {
      url: '/about',
      name: 'More about me',
    },
  }

  setThemeColors = theme => ({
    ...theme,
    link: theme.title,
  })

  render() {
    const {
      eyebrow, title, action,
    } = this.props;
    return (
      <ThemeProvider theme={this.setThemeColors}>
        <Wrapper>
          <Video src={blobVid} poster={blobThumb} autoPlay loop muted />
          <Box
            width="text"
            position="relative"
            marginLeft="auto"
            marginRight="auto"
            textAlign="center"
          >
            <h2>
              {eyebrow}
            </h2>
            <h1>
              {title}
            </h1>
            {action && (
              <Link to={action.url}>
                {action.name}
              </Link>)
            }
          </Box>
        </Wrapper>
      </ThemeProvider>
    );
  }
}
