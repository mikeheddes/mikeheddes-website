import React from 'react'
import { graphql } from 'gatsby'

import Article from '../../../views/Article'
import CoverImage from '../../../views/Article/CoverImage'
import Caption from '../../../components/Caption'
import Body from './README.md'

const Post = ({ data: { cover, postYaml } }) => {
  return (
    <Article {...postYaml}>
      {/* <figure>
        <CoverImage {...cover.childImageSharp.fluid} alt="Tree" />
        <Caption>Credit someone</Caption>
      </figure> */}
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
        fluid(maxHeight: 900, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
