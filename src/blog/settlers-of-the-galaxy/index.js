import React from "react";
import { graphql } from "gatsby";

import Article from "../index";
import Caption from "../../shared/caption";
import Body from "./README.md";
import Animation from "./animation";

const Post = ({ data: { postYaml, stars, site } }) => {
  return (
    <Article
      {...postYaml}
      siteUrl={site.siteMetadata.siteUrl}
      slug={postYaml.fields.slug}
      imageSquare={postYaml.imageSquare.light.childImageSharp.resize.src}
      imageWide={postYaml.imageWide.light.childImageSharp.resize.src}
    >
      <figure>
        <Animation starsURL={stars.publicURL} />
        <Caption>Data by the Jet Propulsion Laboratory</Caption>
      </figure>
      <Body />
    </Article>
  );
};

export default Post;

export const pageQuery = graphql`
  query galaxyAnimationData($id: String!) {
    postYaml(id: { eq: $id }) {
      title
      description
      date
      genre
      fields {
        slug
      }
      imageSquare: cover {
        light {
          childImageSharp {
            resize(height: 1080, width: 1080) {
              src
            }
          }
        }
      }
      imageWide: cover {
        light {
          childImageSharp {
            resize(height: 1080, width: 2160) {
              src
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    stars: file(relativePath: { eq: "settlers-of-the-galaxy/stars.min" }) {
      publicURL
    }
  }
`;
