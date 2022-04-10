import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import type { PostType } from "../blog/post";
import { getUrlFromSlug } from "../blog/post";
import { fluidFont, absoluteSize } from "../styles";

const Thumbnail = styled.a`
  display: block;
  position: relative;
  border-radius: 6px;

  :after {
    content: "";
    ${absoluteSize};
    border: 1px solid var(--border-content);
    border-radius: 6px;
  }
`;

const ImageSize = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 70%;
  background-color: var(--surface-subtle);
  border-radius: 6px;
  overflow: hidden;
`;

const TextBox = styled.div`
  margin-top: 10px;
`;

const Title = styled.h4`
  color: var(--heading);
  font-weight: 600;
  ${fluidFont(17, 18)};
`;

const SubTitle = styled.h5`
  color: var(--text-subtle);
  font-weight: 500;
  ${fluidFont(15, 16)};
  margin-top: 4px;
`;

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  const postUrl = getUrlFromSlug(post.slug);

  return (
    <div>
      <Link href={postUrl} passHref>
        <Thumbnail>
          <ImageSize>
            <Image
              src={post.image.url}
              alt={post.image.alt}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </ImageSize>
        </Thumbnail>
      </Link>
      <TextBox>
        <Title>{post.title}</Title>
        <SubTitle>{post.subtitle}</SubTitle>
      </TextBox>
    </div>
  );
}
