import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import type { PostType } from "../blog/post";
import { getUrlFromSlug } from "../blog/post";

import { fluidFont, absoluteSize } from "../styles";
import { hiDPI } from "polished";

const Thumbnail = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 1px 1.4px rgba(0, 0, 0, 0.005),
    0px 2.3px 3.3px rgba(0, 0, 0, 0.007), 0px 4.4px 6.3px rgba(0, 0, 0, 0.009),
    0px 7.8px 11.2px rgba(0, 0, 0, 0.011),
    0px 14.6px 20.9px rgba(0, 0, 0, 0.014), 0px 35px 50px rgba(0, 0, 0, 0.02);

  :after {
    content: "";
    ${absoluteSize};
    border: 1px solid var(--border-content);
    border-radius: 6px;
  }

  ${hiDPI(2)} {
    :after {
      border-width: 0.5px;
    }
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