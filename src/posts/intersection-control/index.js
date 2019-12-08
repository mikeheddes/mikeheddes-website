// import React from 'react'
// import { graphql } from 'gatsby'

// import Article from '../../../views/Article'
// import CoverImage from '../../../views/Article/CoverImage'
// import Caption from '../../../components/Caption'
// import Body from './README.md'

// const Post = ({ data: { cover, postYaml } }) => {
//   return (
//     <Article {...postYaml}>
//       <figure>
//         <CoverImage
//           {...cover.childImageSharp.fluid}
//           alt="Aerial view of a crossroad in Shah Alam, Malaysia"
//           shape="wide"
//         />
//         <Caption>Photo by Firdouss Ross on Unsplash</Caption>
//       </figure>
//       <Body />
//     </Article>
//   )
// }

// export default Post

// export const pageQuery = graphql`
//   query intersectionControlData($id: String!) {
//     postYaml(id: { eq: $id }) {
//       title
//       description
//       date
//       genre
//     }
//     cover: file(relativePath: { eq: "intersection-control/ica.jpg" }) {
//       childImageSharp {
//         fluid(maxHeight: 900) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `
