import React from 'react'
import { graphql } from 'gatsby'

import Article from '../../../views/Article'
import Caption from '../../../components/Caption'
import Body from './README.md'
import Animation from './Animation'

const Post = ({ data: { postYaml, gltf } }) => {
  return (
    <Article {...postYaml}>
      <figure>
        <Animation gridFinGLTF={gltf.publicURL} />
        <Caption>3D model by Jon Ross</Caption>
      </figure>
      <Body />
    </Article>
  )
}

export default Post

export const pageQuery = graphql`
  query spaceXGridFinData($id: String!) {
    postYaml(id: { eq: $id }) {
      title
      description
      date
      genre
    }
    gltf: file(relativePath: { eq: "spacex-grid-fin/grid-fin.glb" }) {
      publicURL
    }
  }
`
