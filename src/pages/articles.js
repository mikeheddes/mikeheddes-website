import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'

import Banner from '../views/Banner'
import LatestArticle from '../views/ContentHighlight/LatestArticle'
import ContentGrid from '../views/ContentGrid'
import Card from '../components/Card'

const bannerLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/mikeheddes',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@mikeheddes',
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/mikeheddesb203',
  },
]

const color = 'orange'

const setTheme = theme => ({
  ...theme,
  link: theme[color],
  surface: theme.surfaceColors[color],
})

const ArticleOverview = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <ThemeProvider theme={setTheme}>
    <React.Fragment>
      <Helmet>
        <title>Articles</title>
      </Helmet>
      <Banner actions={bannerLinks} eyebrow="Articles">
        Interesting Ideas
        <br />
        Worth Reading.
      </Banner>
      <LatestArticle marginTop={{ xs: 'xr', md: 'md' }} />
      <ContentGrid
        content={edges}
        title="All articles"
        columns={{ xs: 1, sm: 2, lg: 3 }}
      >
        {item => (
          <Card
            key={item.node.fields.slug}
            title={item.node.frontmatter.title}
            maxTitleLines={2}
            maxDescriptionLines={3}
            image={item.node.frontmatter.image.childImageSharp.fluid}
            size="md"
            url={item.node.fields.slug}
          />
        )}
      </ContentGrid>
    </React.Fragment>
  </ThemeProvider>
)

export default ArticleOverview

export const pageQuery = graphql`
  query articleOverview {
    allMarkdownRemark(
      sort: { fields: [frontmatter___publishedAt], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxHeight: 350, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
