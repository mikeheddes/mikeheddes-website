import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import type { PostType } from "../blog/post";
import { getUrlFromSlug } from "../blog/post";
import { fluidFont, absoluteSize } from "../styles";

const Thumbnail = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 0.6px 0.8px rgba(0, 0, 0, 0.008),
    0px 1.4px 2px rgba(0, 0, 0, 0.012), 0px 2.6px 3.8px rgba(0, 0, 0, 0.015),
    0px 4.7px 6.7px rgba(0, 0, 0, 0.018), 0px 8.8px 12.5px rgba(0, 0, 0, 0.022),
    0px 21px 30px rgba(0, 0, 0, 0.03);

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
`;

const TextBox = styled.div`
  margin-top: 8px;
`;

const Title = styled.h4`
  color: var(--heading);
  font-weight: 600;
  ${fluidFont(17, 18)};
`;

const SubTitle = styled.h5`
  color: var(--text-subtle);
  font-weight: 500;
  ${fluidFont(16, 17)};

  margin-top: 2px;
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
