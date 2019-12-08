import React from 'react'
import { graphql } from 'gatsby'

import Article from '../index'
import Caption from '../../shared/caption'
import Body from './README.md'
import Animation from './animation'

const Post = ({ data: { postYaml, stars } }) => {
  return (
    <Article {...postYaml}>
      <figure>
        <Animation starsURL={stars.publicURL} />
        <Caption>Data by the Jet Propulsion Laboratory</Caption>
      </figure>
      <Body />
    </Article>
  )
}

export default Post

export const pageQuery = graphql`
  query galaxyAnimationData($id: String!) {
    postYaml(id: { eq: $id }) {
      title
      description
      date
      genre
    }
    stars: file(relativePath: { eq: "settlers-of-the-galaxy/stars.min" }) {
      publicURL
    }
  }
`
