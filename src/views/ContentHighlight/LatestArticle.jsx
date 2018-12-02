import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ContentHighlight from './'

const query = graphql`
  query latestContent {
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
                fluid(maxHeight: 400, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
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
    render={({ allMarkdownRemark: { edges } }) => (
      <ContentHighlight
        {...props}
        eyebrow="Latest article"
        action={{ name: 'Read article', url: edges[0].node.fields.slug }}
        image={edges[0].node.frontmatter.image.childImageSharp.fluid}
        title={edges[0].node.frontmatter.title}
      />
    )}
  />
)
