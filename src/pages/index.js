import { graphql } from 'gatsby'

import Home from '../home'

export const pageQuery = graphql`
  query homePageQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
    wideImage: file(relativePath: { eq: "mike-heddes-wide.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    profileImage: file(relativePath: { eq: "mike-heddes.jpg" }) {
      childImageSharp {
        resize(height: 1080, width: 1080) {
          src
        }
      }
    }
    profileImageTwitter: file(relativePath: { eq: "mike-heddes-wide.jpg" }) {
      childImageSharp {
        resize(height: 1080, width: 2160) {
          src
        }
      }
    }
    allPostYaml {
      edges {
        node {
          title
          date
          genre
          fields {
            slug
          }
          image: cover {
            dark {
              childImageSharp {
                fluid(maxHeight: 475) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            light {
              childImageSharp {
                fluid(maxHeight: 475) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            precedence
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
          album
          genre
          image: wallpaper {
            childImageSharp {
              fluid(maxHeight: 475) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default Home
