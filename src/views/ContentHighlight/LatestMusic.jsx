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
              fixed(width: 120, quality: 50) {
                src
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
    render={({
      allMusicYaml: {
        edges: [{ node }],
      },
    }) => (
      <ContentHighlight
        {...props}
        eyebrow="Latest music"
        action={{ name: 'More info', url: node.fields.slug }}
        image={node.image.childImageSharp.fluid}
        blurImage={node.image.childImageSharp.fixed.src}
        title={node.title}
        author={node.artist}
        extraAction={
          node.externalUrls.length > 0
            ? {
                name: `Listen on ${node.externalUrls[0].service}`,
                url: node.externalUrls[0].url,
              }
            : undefined
        }
      />
    )}
  />
)
