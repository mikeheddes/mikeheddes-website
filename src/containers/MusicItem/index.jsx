import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { contentTypes } from 'actions/content';
import nearestColor from 'nearest-color';
import Section from 'components/Section';
import Box from 'components/Box';
import Image from 'components/Image';
import LinkList from 'components/LinkList';

import mapState from './mapState';
import {
  Title, Artist, GenreDate, AlbumInfo, Pline,
} from './components';
import Description from './Description';
import TrackTable from './TrackTable';

const Main = Section.withComponent('main').extend`
  min-height: calc(100vh - 100px);
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
];

class MusicItem extends Component {
  static propTypes = {
    getItem: PropTypes.func.isRequired,
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
    const {
      getItem,
      match: {
        params: { id },
      },
    } = this.props;
    getItem(id);
  }

  setTheme = (theme) => {
    const { item } = this.props;
    let itemColorName = 'pink';
    if (
      item
      && item.heroImage
      && (item.heroImage.color.vibrant || item.heroImage.color.darkMuted)
    ) {
      const { vibrant, muted } = item.heroImage.color;
      const nearestColorFinder = nearestColor.from(theme.primaries);
      const nearestColorResult = nearestColorFinder(vibrant || muted);
      itemColorName = nearestColorResult.name;
    }
    return {
      ...theme,
      link: theme[itemColorName],
      surface: theme.surfaceColors[itemColorName],
    };
  };

  albumTotalMinutes = tracks => Math.round(
    tracks.reduce(
      (accumulator, currentValue) => accumulator + currentValue.duration / 1000 / 60,
      0,
    ),
  );

  render() {
    const { item } = this.props;
    // console.log(item);
    return (
      <ThemeProvider theme={theme => this.setTheme(theme)}>
        <Main>
          <Box display="flex" width="content" marginLeft="auto" marginRight="auto">
            <Box flex="grow" marginRight="l">
              <Image {...item && item.coverImage} square rounded />
              {item && item.description && (
                <Description>
                  {item.description}
                </Description>
              )}
            </Box>
            <Box flex="none" width="text" marginTop="xr">
              {item && (
                <React.Fragment>
                  <Title>
                    {item.title}
                  </Title>
                  <Artist>
                    {item.artist}
                  </Artist>
                  <GenreDate>
                    {`${item.genre} - ${item.publishedAt.getFullYear()}`}
                  </GenreDate>
                  <LinkList
                    links={[...item.externalUrls, ...extraLinks].map(link => ({
                      ...link,
                      name: link.service,
                    }))}
                  />
                  <TrackTable tracks={item.tracks} artist={item.artist} />
                  <AlbumInfo>
                    {`${item.tracks.length} tracks, ${this.albumTotalMinutes(item.tracks)} minutes`}
                  </AlbumInfo>
                  <Pline>
                    {`Ⓟ ${item.license}`}
                  </Pline>
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
