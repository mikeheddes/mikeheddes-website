import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { categories } from 'actions/articles';
import { themes } from 'actions/ui';
import components from 'components/Markdown';
import Box from 'components/Box';
import Section from 'components/Section';
import NoMatch from 'components/NoMatch';
import Button from 'components/Button';
import Link from 'components/Link';
import LinkList from 'components/LinkList';
import clipboard from 'utils/clipboard';

import Image from 'components/Image';
import {
  HeaderWrapper,
  Title,
  Description,
  InfoLine,
  Author,
  PhotoCredit,
  LinkListWrapper,
} from './components';
import mapProps from './mapProps';

class ArticlesItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      authors: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string,
        }).isRequired
      ).isRequired,
      categorie: PropTypes.oneOf(categories).isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      imageCover: PropTypes.shape({
        src: PropTypes.string.isRequired,
      }).isRequired,
      imageCredits: PropTypes.string.isRequired,
      loadablePost: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
      publishedAt: PropTypes.instanceOf(Date).isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      theme: PropTypes.oneOf(Object.values(themes)).isRequired,
      themeColor: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      updatedAt: PropTypes.instanceOf(Date),
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {
    item: null,
  };

  state = {
    copiedUrl: false,
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

  formatDate = date => {
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

  copyPageUrl = () => {
    // eslint-disable-next-line no-undef
    clipboard(window.location.href);
    this.setState(prev => ({ ...prev, copiedUrl: true }));
  };

  setTheme = theme => {
    const { item } = this.props;
    const itemColorName = item.themeColor || 'orange';
    return {
      ...theme,
      link: theme[itemColorName],
      surface: theme.surfaceColors[itemColorName],
    };
  };

  render() {
    const { item } = this.props;
    if (item && item.hasError) {
      return <NoMatch />;
    }
    if (!item) {
      return <NoMatch />;
    }
    const Body = item.loadablePost;
    const { copiedUrl } = this.state;
    return (
      <ThemeProvider theme={this.setTheme}>
        <article>
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
          <HeaderWrapper>
            <Section noBackground noPaddingY>
              <Box width="text" marginRight="auto" marginLeft="auto">
                <Title>{item && item.title}</Title>
                {item &&
                  item.description && (
                    <Description>{item.description}</Description>
                  )}
                <InfoLine>
                  {'By '}
                  {item &&
                    item.authors.map(author => (
                      <React.Fragment key={author.name}>
                        {author.url ? (
                          <Link noIcon to={author.url}>
                            {author.name}
                          </Link>
                        ) : (
                          <Author>{author.name}</Author>
                        )}
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
            <Image {...item && item.imageCover} shape="wide" zDepth={0} />
            {item.imageCredits && (
              <Section noPaddingY>
                <Box width="text" marginLeft="auto" marginRight="auto">
                  <PhotoCredit>{item.imageCredits}</PhotoCredit>
                </Box>
              </Section>
            )}
          </HeaderWrapper>
          <Section>
            <Box width="text" marginLeft="auto" marginRight="auto" markdown>
              <Body components={components} />
              <LinkListWrapper>
                <LinkList textAlign="center" aria-hidden="true">
                  <Button
                    variation="primary"
                    onClick={this.copyPageUrl}
                    key="copy"
                  >
                    {`${copiedUrl ? 'Copied' : 'Copy'} article URL`}
                  </Button>
                  <Link
                    to={`https://github.com/mikeheddes/mikeheddes-website/blob/master/src/components/articles/${
                      item.id
                    }/article.mdx`}
                    variation="button"
                    key="edit"
                    display="inline-block"
                  >
                    Edit on GitHub
                  </Link>
                </LinkList>
              </LinkListWrapper>
            </Box>
          </Section>
        </article>
      </ThemeProvider>
    );
  }
}

export default mapProps(ArticlesItem);
