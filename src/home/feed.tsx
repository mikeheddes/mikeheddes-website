import styled from "styled-components";

import { contentWrapper } from "../styles";
import { screen } from "../styles/breakpoints";
import Post from "./post";
import { SectionHeading, SectionName } from "./section";
import posts from "../blog/posts";

const Section = styled.section`
  ${contentWrapper};
  margin-top: 50px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px 20px;

  @media ${screen.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${screen.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function Feed() {
  return (
    <Section wide>
      <SectionHeading>Projects</SectionHeading>
      <Posts>
        {posts
          .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
          .map((post) => (
            <Post key={post.slug} post={post} />
          ))}
      </Posts>
    </Section>
  );
}
