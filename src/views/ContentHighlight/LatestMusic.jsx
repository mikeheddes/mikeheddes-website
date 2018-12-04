import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ContentHighlight from './'

const query = graphql`
  query latestMusic {
    allMusicYaml(limit: 1, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          artist
          title
          image {
            childImageSharp {
              fluid(maxHeight: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          fields {
            slug
          }
          externalUrls {
            service
            url
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={({ allMusicYaml: { edges } }) => (
      <ContentHighlight
        {...props}
        eyebrow="Latest music"
        action={{ name: 'More info', url: edges[0].node.fields.slug }}
        image={edges[0].node.image.childImageSharp.fluid}
        title={edges[0].node.title}
        author={edges[0].node.artist}
        extraAction={
          edges[0].node.externalUrls.length > 0
            ? {
                name: `Listen on ${edges[0].node.externalUrls[0].service}`,
                url: edges[0].node.externalUrls[0].url,
              }
            : undefined
        }
      />
    )}
  />
)
