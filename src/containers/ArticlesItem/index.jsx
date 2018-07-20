/* eslint-env browser */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { contentTypes } from 'actions/content';
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
  HeaderWrapper, Title, Description, InfoLine, Author, PhotoCredit,
} from './components';
import mapProps from './mapProps';

class ArticlesItem extends Component {
  static propTypes = {
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

  state = {
    copiedUrl: false,
  };

  setTheme = (theme) => {
    const { item } = this.props;
    const itemColorName = item.themeColor || 'orange';
    return {
      ...theme,
      link: theme[itemColorName],
      surface: theme.surfaceColors[itemColorName],
    };
  };

  copyPageUrl = () => {
    clipboard(window.location.href);
    this.setState(prev => ({ ...prev, copiedUrl: true }));
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
    if (!item) {
      return <NoMatch />;
    }
    const Body = item.loadablePost;
    const { copiedUrl } = this.state;
    return (
      <ThemeProvider theme={this.setTheme}>
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
            <Image {...item && item.imageCover} shape="wide" zDepth={0} />
            {item.imageCredits && (
              <Section noPaddingY>
                <Box width="text" marginLeft="auto" marginRight="auto">
                  <PhotoCredit>
                    {item.imageCredits}
                  </PhotoCredit>
                </Box>
              </Section>
            )}
          </HeaderWrapper>
          <Section>
            <Box width="text" marginLeft="auto" marginRight="auto" markdown>
              <Body components={components} />
              <LinkList textAlign="center">
                <Button variation="primary" onClick={this.copyPageUrl} key="copy">
                  {`${copiedUrl ? 'Copied' : 'Copy'} article URL`}
                </Button>
                <Link
                  to="https://github.com/mikeheddes"
                  variation="button"
                  key="edit"
                  display="inline-block"
                >
                  Edit on GitHub
                </Link>
              </LinkList>
            </Box>
          </Section>
        </article>
      </ThemeProvider>
    );
  }
}

export default mapProps(ArticlesItem);
