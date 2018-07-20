import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Banner from 'components/Banner';
import ContentHighlight from 'containers/ContentHighlight/Loadable';
import ContentGrid from 'containers/ContentGrid/Loadable';
import Card from 'components/Card';
import { colorNames } from 'style/color';
import { visibilities } from 'actions/articles';
import { contentTypes } from 'actions/content';

const filters = [
  {
    name: 'All articles',
    action: visibilities.all,
  },
  {
    name: 'Code',
    action: visibilities.code,
  },
  {
    name: 'Design',
    action: visibilities.design,
  },
  {
    name: 'Travel',
    action: visibilities.travel,
  },
];

export default class ArticlesOverview extends Component {
  static propTypes = {
    bannerLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }),
    ),
    color: PropTypes.oneOf(colorNames),
    match: PropTypes.shape({
      params: PropTypes.shape({
        contentType: PropTypes.oneOf(contentTypes).isRequired,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {
    color: 'orange',
    bannerLinks: [
      {
        name: 'Medium',
        href: 'https://medium.com',
      },
      {
        name: 'GitHub',
        href: 'https://github.com/mikeheddes',
      },
      {
        name: 'Behance',
        href: 'https://behance.net',
      },
    ],
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
    const { bannerLinks, match } = this.props;
    const { contentType } = match.params;
    // console.log(article);
    return (
      <ThemeProvider theme={this.setTheme}>
        <React.Fragment>
          <Banner links={bannerLinks}>
            <h2>
              Articles
            </h2>
            <h1>
              Interesting Ideas
              <br />
              Worth Reading.
            </h1>
          </Banner>
          <ContentHighlight
            noFetch
            eyebrow="Latest article"
            highlightType="latest"
            contentType={contentType}
            actionTitle="Read more"
            marginTop
          />
          <ContentGrid
            contentType={contentType}
            title="All articles"
            filters={filters}
            phoneColumns={1}
            tabletPortraitColumns={2}
            tabletLandscapeColumns={2}
            desktopColumns={3}
          >
            {items => items.map(item => (
              <Card
                key={item.id}
                title={item.title}
                maxTitleLines={2}
                maxDescriptionLines={3}
                image={{ ...item.imageCover, width: undefined }}
                size="m"
                preload={item.loadablePost.preload}
                to={`/${contentType}/${item.id}`}
              />
            ))
            }
          </ContentGrid>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
