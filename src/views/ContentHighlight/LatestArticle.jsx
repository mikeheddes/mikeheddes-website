import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ContentHighlight from './'

const query = graphql`
  query latestArticle {
    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___publishedAt], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxHeight: 400, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                fixed(width: 120, quality: 50) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={({
      allMarkdownRemark: {
        edges: [{ node }],
      },
    }) => (
      <ContentHighlight
        {...props}
        eyebrow="Latest article"
        action={{ name: 'Read article', url: node.fields.slug }}
        image={node.frontmatter.image.childImageSharp.fluid}
        blurImage={node.frontmatter.image.childImageSharp.fixed.src}
        title={node.frontmatter.title}
      />
    )}
  />
)
