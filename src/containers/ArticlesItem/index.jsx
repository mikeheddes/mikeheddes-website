import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { contentTypes } from 'actions/content';
import nearestColor from 'nearest-color';
import Markdown from 'components/Markdown';
import Box from 'components/Box';
import Section from 'components/Section';
import NoMatch from 'components/NoMatch';

import Image from 'components/Image';
import {
  HeaderWrapper, Title, Description, InfoLine, Author,
} from './components';
import mapProps from './mapProps';

class ArticlesItem extends Component {
  static propTypes = {
    getItem: PropTypes.func.isRequired,
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      body: PropTypes.string,
      authors: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string,
        }),
      ),
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        contentType: PropTypes.oneOf(contentTypes).isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {
    item: undefined,
  };

  componentDidMount() {
    const { match, getItem } = this.props;
    const { id } = match.params;
    getItem(id);
  }

  setTheme = (theme) => {
    const { item } = this.props;
    let itemColorName = 'orange';
    if (item && item.heroImage && (item.heroImage.color.vibrant || item.heroImage.color.muted)) {
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

  formatDate = (date) => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${day} ${monthNames[monthIndex]} ${year}`;
  };

  render() {
    const { item } = this.props;
    if (item && item.hasError) {
      return <NoMatch />;
    }
    return (
      <ThemeProvider theme={theme => this.setTheme(theme)}>
        <article>
          <HeaderWrapper>
            <Section noBackground noPaddingY>
              <Box width="text" marginRight="auto" marginLeft="auto">
                <Title>
                  {item && item.title}
                </Title>
                {item && item.description && (
                <Description>
                  {item.description}
                </Description>
                )}
                <InfoLine>
                  {'By '}
                  {item
                    && item.authors.map(author => (
                      <React.Fragment key={author.name}>
                        <Author>
                          {author.name}
                        </Author>
                        {' | '}
                      </React.Fragment>
                    ))}
                  {item && (
                    <time dateTime={item.publishedAt}>
                      {this.formatDate(item.publishedAt)}
                    </time>
                  )}
                </InfoLine>
              </Box>
            </Section>
            <Image {...item && item.heroImage} wide zDepth={0} />
          </HeaderWrapper>
          <Section>
            {item
              && item.body && (
                <Markdown width="text" marginLeft="auto" marginRight="auto">
                  {item.body}
                </Markdown>
            )}
          </Section>
        </article>
      </ThemeProvider>
    );
  }
}

export default mapProps(ArticlesItem);
