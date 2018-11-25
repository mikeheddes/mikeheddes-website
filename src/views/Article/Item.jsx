import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet-async'
import { ThemeProvider, withTheme } from 'styled-components'

import Box from '../../components/Box'
import Section from '../../components/Section'
import Button from '../../components/Button'
import Link from '../../components/Link'
import clipboard from '../../utils/clipboard'
import dateFormat from '../../utils/dateFormat'
import Image from '../../components/Image'
import {
  HeaderWrapper,
  Title,
  Author,
  Description,
  InfoLine,
  PhotoCredit,
} from './components'

class Item extends Component {
  static propTypes = {
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
      }).isRequired
    ).isRequired,
    body: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    description: PropTypes.node,
    // genre: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imageCover: PropTypes.string.isRequired,
    imageCredits: PropTypes.node,
    publishedAt: PropTypes.instanceOf(Date).isRequired,
    // subgenre: PropTypes.string,
    // tags: PropTypes.arrayOf(PropTypes.string),
    // theme: PropTypes.oneOf(['DAY', 'NIGHT']).isRequired,
    themeColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    updatedAt: PropTypes.instanceOf(Date),
  }

  static defaultProps = {
    description: null,
    imageCredits: null,
    // subgenre: undefined,
    // tags: [],
    updatedAt: undefined,
  }

  state = {
    copiedUrl: false,
  }

  copyPageUrl = () => {
    // eslint-disable-next-line no-undef
    clipboard(window.location.href)
    this.setState({ copiedUrl: true })
  }

  setTheme = theme => {
    const { themeColor } = this.props
    return {
      ...theme,
      link: theme[themeColor],
      surface: theme.surfaceColors[themeColor],
    }
  }

  render() {
    const {
      authors,
      body: Body,
      description,
      // genre,
      id,
      imageCover,
      imageCredits,
      publishedAt,
      // subgenre,
      // tags,
      // theme,
      // themeColor,
      title,
      updatedAt,
    } = this.props
    const { copiedUrl } = this.state
    return (
      <ThemeProvider theme={this.setTheme}>
        <article>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta
                property="og:image"
                content={WEBSITE_BASE + item.imageCover.toString()}
                />
                <meta
                name="twitter:image"
                content={WEBSITE_BASE + item.imageCover.toString()}
            /> */}
          </Helmet>
          <HeaderWrapper>
            <Section paddingY={0}>
              <Box width="text" marginRight="auto" marginLeft="auto">
                <Title>{title}</Title>
                {description && <Description>{description}</Description>}
                <InfoLine>
                  {'By '}
                  {authors.map(author => (
                    <Fragment key={author.name}>
                      {author.url ? (
                        <Link to={author.url}>{author.name}</Link>
                      ) : (
                        <Author>{author.name}</Author>
                      )}
                      {' | '}
                    </Fragment>
                  ))}
                  <time dateTime={publishedAt}>{dateFormat(publishedAt)}</time>
                  {updatedAt && (
                    <>
                      {' | '}
                      <i>
                        {'updated on '}
                        <time dateTime={updatedAt}>
                          {dateFormat(updatedAt)}
                        </time>
                      </i>
                    </>
                  )}
                </InfoLine>
              </Box>
            </Section>
            <Image
              src={imageCover}
              shape="wide"
              alt={title}
              title={title}
              radius={null}
            />
            {imageCredits && (
              <Section paddingY={0}>
                <Box width="text" marginLeft="auto" marginRight="auto">
                  <PhotoCredit>{imageCredits}</PhotoCredit>
                </Box>
              </Section>
            )}
          </HeaderWrapper>
          <Section>
            <Box width="text" marginLeft="auto" marginRight="auto">
              <Body />
              <Box
                marginTop={{ xs: 'xm', sm: 'lg' }}
                textAlign="center"
                aria-hidden="true"
                display="flex"
                justifyContent="center"
                color="surface"
                paddingX="xm"
                paddingY="lg"
                shape="rounded"
                radius="lg"
              >
                <Button
                  variant="primary"
                  onClick={this.copyPageUrl}
                  marginRight="xr"
                >
                  {`${copiedUrl ? 'Copied' : 'Copy'} article URL`}
                </Button>
                <Link
                  to={`https://github.com/mikeheddes/mikeheddes-website/blob/master/src/components/articles/${id}/article.mdx`}
                  variant="button"
                >
                  Edit on GitHub
                </Link>
              </Box>
            </Box>
          </Section>
        </article>
      </ThemeProvider>
    )
  }
}

export default withTheme(Item)
