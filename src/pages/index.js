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
      colors {
        ...GatsbyImageColors
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
          themedImages: cover {
            dark {
              childImageSharp {
                fluid(maxHeight: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              colors {
                ...GatsbyImageColors
              }
            }
            light {
              childImageSharp {
                fluid(maxHeight: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              colors {
                ...GatsbyImageColors
              }
            }
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
              fluid(maxHeight: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            colors {
              ...GatsbyImageColors
            }
          }
        }
      }
    }
  }
`

export default Home
