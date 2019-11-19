import React from 'react'
import styled from 'styled-components'

import Hero from '../views/Home/Hero'
import { graphql, Link } from 'gatsby'

const unwrapNode = ({ node }) => ({
  title: node.title,
  date: new Date(node.date),
  slug: node.fields.slug,
})

const Home = ({ data }) => {
  const music = data.allMusicYaml.edges.map(unwrapNode)
  const posts = data.allPostYaml.edges.map(unwrapNode)

  const content = [...music, ...posts].sort((a, b) => b.date - a.date)

  return (
    <>
      <Hero />
      <div css="height: 100vh;" />
      <ul>
        {content.map(({ title, date, slug }) => (
          <li key={slug} css="margin-bottom: 15px;">
            <Link to={slug}>
              <strong>{title}</strong>
            </Link>
            <br />
            {date.toString()}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home

export const pageQuery = graphql`
  query homePageQuery {
    allPostYaml {
      edges {
        node {
          title
          date
          fields {
            slug
          }
        }
      }
    }
    allMusicYaml {
      edges {
        node {
          date
          fields {
            slug
          }
          title
        }
      }
    }
  }
`
