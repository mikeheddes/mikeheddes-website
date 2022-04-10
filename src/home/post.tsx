import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import type { PostType } from "../blog/post";
import { getURLFromSlug, isExternalURL } from "../blog/post";
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
  clear: right;
`;

const SubTitle = styled.h5`
  color: var(--text-subtle);
  font-weight: 500;
  ${fluidFont(15, 16)};
  margin-top: 4px;
`;

const ExternalIcon = styled.span`
  float: right;
  margin-right: 10px;
  color: var(--primary);
`;

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  const isExternal = isExternalURL(post.slug);
  const postUrl = getURLFromSlug(post.slug);

  const image = (
    <ImageSize>
      <Image
        src={post.image.url}
        alt={post.image.alt}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
      />
    </ImageSize>
  );

  return (
    <div>
      {isExternal ? (
        <Thumbnail href={postUrl} target="_blank" rel="noopener noreferrer">
          {image}
        </Thumbnail>
      ) : (
        <Link href={postUrl} passHref>
          <Thumbnail>{image}</Thumbnail>
        </Link>
      )}

      <TextBox>
        <Title>
          {post.title}
          {isExternal && <ExternalIcon>↗</ExternalIcon>}
        </Title>
        <SubTitle>{post.subtitle}</SubTitle>
      </TextBox>
    </div>
  );
}
