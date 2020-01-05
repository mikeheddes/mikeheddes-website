import React from 'react'
import { graphql } from 'gatsby'

import Article from '../index'
import Body from './README.md'
import ProgressiveImage from '../../shared/progressive-image'
import Caption from '../../shared/caption'

const Post = ({ data: { postYaml, site } }) => {
  return (
    <Article
      {...postYaml}
      siteUrl={site.siteMetadata.siteUrl}
      slug={postYaml.fields.slug}
      imageSquare={postYaml.imageSquare.light.childImageSharp.resize.src}
      imageWide={postYaml.imageWide.light.childImageSharp.resize.src}
    >
      <figure>
        <ProgressiveImage
          {...postYaml.cover.light.childImageSharp.fluid}
          sizes="100vw"
          shape="cinema"
        />
        <Caption>Abstract art, because a post needs an image.</Caption>
      </figure>
      <Body />
    </Article>
  )
}

export default Post

export const pageQuery = graphql`
  query treeShakingNodeJSLibrary($id: String!) {
    postYaml(id: { eq: $id }) {
      title
      description
      date
      genre
      fields {
        slug
      }
      imageSquare: cover {
        light {
          childImageSharp {
            resize(height: 1080, width: 1080) {
              src
            }
          }
        }
      }
      imageWide: cover {
        light {
          childImageSharp {
            resize(height: 1080, width: 2160) {
              src
            }
          }
        }
      }
      cover {
        light {
          childImageSharp {
            fluid(maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
