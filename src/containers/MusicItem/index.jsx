import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { contentTypes } from 'actions/content';
import Section from 'components/Section';
import Box from 'components/Box';
import Image from 'components/Image';
import LinkList from 'components/LinkList';
import Link from 'components/Link';
import { size } from 'style';

import mapState from './mapState';
import {
  Title,
  Artist,
  GenreDate,
  AlbumInfo,
  Pline,
  LinkListWrapper,
} from './components';
import Description from './Description';
import TrackTable from './TrackTable';

const Main = Section.withComponent('main').extend`
  min-height: calc(100vh - ${size.footerHeight}px);
`;

const extraLinks = [
  {
    service: 'Deezer',
    url: 'https://deezer.com',
  },
  {
    service: 'SoundCloud',
    url: 'https://soundcloud.com/mikeheddes',
  },
  {
    service: 'YouTube',
    url: 'https://youtube.com/mikeheddes',
  },
  {
    service: 'Spotify',
    url: 'https://spotify.com/mikeheddes',
  },
  {
    service: 'Apple Music',
    url: 'https://itunes.com/mikeheddes',
  },
];

class MusicItem extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        contentType: PropTypes.oneOf(contentTypes).isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    item: PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      artist: PropTypes.string,
    }),
  };

  static defaultProps = {
    item: undefined,
  };

  componentDidMount() {
    const { setTheme, item, themeName } = this.props;
    this.prevTheme = themeName;
    setTheme(item.theme);
  }

  componentWillUnmount() {
    const { setTheme } = this.props;
    setTheme(this.prevTheme);
  }

  setTheme = theme => {
    const { item } = this.props;
    const itemColorName = (item && item.themeColor) || 'pink';
    return {
      ...theme,
      link: theme[itemColorName],
      surface: theme.surfaceColors[itemColorName],
    };
  };

  albumTotalMinutes = tracks =>
    Math.round(
      tracks.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.duration / 1000 / 60,
        0
      )
    );

  render() {
    const { item } = this.props;
    return (
      <ThemeProvider theme={theme => this.setTheme(theme)}>
        <Main>
          {item && (
            <Helmet>
              <title>{item.title}</title>
              <meta name="description" content={item.description} />
              <meta property="og:title" content={item.title} />
              <meta property="og:description" content={item.description} />
              <meta
                property="og:image"
                content={WEBSITE_BASE + item.imageCover.toString()}
              />
              <meta
                name="twitter:image"
                content={WEBSITE_BASE + item.imageCover.toString()}
              />
            </Helmet>
          )}
          <Box
            display="flex"
            width="content"
            marginLeft="auto"
            marginRight="auto"
          >
            <Box flex="grow" marginRight="l">
              <Image {...item && item.imageCover} shape="square" rounded />
              {item &&
                item.description && (
                  <Description>{item.description}</Description>
                )}
            </Box>
            <Box flex="none" width="text" marginTop="xr">
              {item && (
                <React.Fragment>
                  <Title>{item.title}</Title>
                  <Artist>{item.artist}</Artist>
                  <GenreDate>
                    {`${item.genre} - ${item.publishedAt.getFullYear()}`}
                  </GenreDate>
                  <LinkListWrapper>
                    <LinkList width="fixed">
                      {extraLinks.map(link => (
                        <Link
                          to={link.url}
                          key={link.service}
                          variation="button"
                          display="block"
                        >
                          {link.service}
                        </Link>
                      ))}
                    </LinkList>
                  </LinkListWrapper>
                  <TrackTable tracks={item.tracks} artist={item.artist} />
                  <AlbumInfo>
                    {`${item.tracks.length} tracks, ${this.albumTotalMinutes(
                      item.tracks
                    )} minutes`}
                  </AlbumInfo>
                  <Pline>{`Ⓟ ${item.license}`}</Pline>
                </React.Fragment>
              )}
            </Box>
          </Box>
        </Main>
      </ThemeProvider>
    );
  }
}

export default mapState(MusicItem);
