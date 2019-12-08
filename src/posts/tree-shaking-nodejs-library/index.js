import React from 'react'
import { graphql } from 'gatsby'

import Article from '../index'
import Body from './README.md'

const Post = ({ data: { postYaml } }) => {
  return (
    <Article {...postYaml}>
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
    }
    cover: file(
      relativePath: { eq: "tree-shaking-nodejs-library/tree-shaking.jpg" }
    ) {
      childImageSharp {
        fluid(maxHeight: 900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
