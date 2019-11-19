import React from 'react'
import { graphql } from 'gatsby'

import Article from '../../../views/Article'
import Caption from '../../../components/Caption'
import Body from './README.md'
import Animation from './Animation'

const Post = ({ data: { postYaml, stars } }) => {
  return (
    <Article {...postYaml}>
      <figure>
        <Animation starsURL={stars.publicURL} />
        <Caption>Stars data by the Jet Propulsion Laboratory (JPL)</Caption>
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
    stars: file(relativePath: { eq: "galaxy-animation/stars.min" }) {
      publicURL
    }
  }
`
