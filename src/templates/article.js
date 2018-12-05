import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import rehypeReact from 'rehype-react'

import Box from '../components/Box'
import Section from '../components/Section'
import Button from '../components/Button'
import Link from '../components/Link'
import clipboard from '../utils/clipboard'
import MarkdownDefault from '../components/MarkdownDefaults'
import Image from '../components/Image'
import {
  HeaderWrapper,
  Title,
  Author,
  Description,
  InfoLine,
  PhotoCredit,
} from '../views/Article/components'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: MarkdownDefault,
}).Compiler

class Article extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        htmlAst: PropTypes.object.isRequired,
        timeToRead: PropTypes.number.isRequired,
        tableOfContents: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          publishedAt: PropTypes.string.isRequired,
          authors: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              url: PropTypes.string,
            })
          ).isRequired,
          image: PropTypes.shape({
            childImageSharp: PropTypes.object.isRequired,
          }).isRequired,
          imageMeta: PropTypes.shape({
            title: PropTypes.string,
            credits: PropTypes.string,
          }),
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }

  state = {
    copiedUrl: false,
  }

  copyPageUrl = () => {
    clipboard(window.location.href)
    this.setState({ copiedUrl: true })
  }

  setTheme = theme => {
    const {
      data: { markdownRemark: post },
    } = this.props
    const { color } = post.frontmatter

    return {
      ...theme,
      link: theme[color],
      surface: theme.surfaceColors[color],
    }
  }

  render() {
    const {
      data: {
        markdownRemark: post,
        site: {
          siteMetadata: { homepage },
        },
      },
    } = this.props
    const {
      description,
      title,
      publishedAt,
      updatedAt,
      authors,
      image: {
        childImageSharp: { fluid: image },
      },
      imageMeta,
    } = post.frontmatter

    const { copiedUrl } = this.state
    return (
      <ThemeProvider theme={this.setTheme}>
        <article>
          <Helmet>
            <title>{title}</title>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css"
              type="text/css"
              defer
              integrity="sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y"
              crossOrigin="anonymous"
            />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={homepage + image.src} />
            <meta name="twitter:image" content={homepage + image.src} />
          </Helmet>
          <HeaderWrapper>
            <Section paddingY={0}>
              <Box width="text" marginRight="auto" marginLeft="auto">
                <Title>{title}</Title>
                {description && <Description>{description}</Description>}
                <InfoLine>
                  {'By '}
                  {authors.map(author => (
                    <Fragment key={author.id}>
                      {author.url ? (
                        <Link to={author.url}>{author.id}</Link>
                      ) : (
                        <Author>{author.id}</Author>
                      )}
                      {' | '}
                    </Fragment>
                  ))}
                  <time dateTime={new Date(publishedAt)}>{publishedAt}</time>
                  {updatedAt && (
                    <Fragment>
                      {' | '}
                      <i>
                        {'updated on '}
                        <time dateTime={new Date(updatedAt)}>{updatedAt}</time>
                      </i>
                    </Fragment>
                  )}
                  {' | '}
                  <i>~ {post.timeToRead} minutes long</i>
                </InfoLine>
              </Box>
            </Section>
            <div>
              <Image
                fluid={image}
                alt={imageMeta.title}
                title={imageMeta.title}
                shape="wide"
                radius={null}
              />
            </div>
            {imageMeta.credits && (
              <Section paddingY={0}>
                <Box width="text" marginLeft="auto" marginRight="auto">
                  <PhotoCredit>{imageMeta.credits}</PhotoCredit>
                </Box>
              </Section>
            )}
          </HeaderWrapper>
          <Section>
            <Box width="text" marginLeft="auto" marginRight="auto">
              <MarkdownDefault.wrapper>
                {renderAst(post.htmlAst)}
              </MarkdownDefault.wrapper>
              <Box
                marginTop={{ xs: 'xm', sm: 'lg' }}
                textAlign="center"
                justifyContent="center"
                aria-hidden="true"
                display={{ xs: 'none', sm: 'flex' }}
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
                  to={`https://github.com/mikeheddes/mikeheddes-website/blob/master/src/content/articles/`}
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

export default Article

export const pageQuery = graphql`
  query articleData($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      tableOfContents
      frontmatter {
        title
        color
        publishedAt(formatString: "MMM D, YYYY")
        updatedAt(formatString: "MMM D, YYYY")
        authors {
          id
          url
        }
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        imageMeta {
          title
          credits
        }
      }
    }
    site {
      siteMetadata {
        homepage
      }
    }
  }
`
