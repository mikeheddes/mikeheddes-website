import React from 'react'
import { graphql } from 'gatsby'

import Article from '../index'
import Caption from '../../shared/caption'
import Body from './README.md'
import Animation from './animation'

const Post = ({ data: { gltf, postYaml } }) => {
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
  query spacexGridFinData($id: String!) {
    postYaml(id: { eq: $id }) {
      title
      description
      date
      genre
    }
    gltf: file(relativePath: { eq: "spacex-grid-fin-design/grid-fin.glb" }) {
      publicURL
    }
  }
`
