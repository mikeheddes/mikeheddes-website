import styled from "styled-components";
import Image, { ImageProps } from "next/image";

import { screen } from "../../styles/breakpoints";
import { fluidFont, absoluteSize } from "../../styles";

import censorshipCoverImg from "./censorship/cover.jpg";
import excitedCoverImg from "./excited/cover.jpg";
import fusionCoverImg from "./fusion/cover.jpg";
import losingFocusCoverImg from "./losing-focus/cover.jpg";
import livinCoverImg from "./livin/cover.jpg";

const Wrapper = styled.div`
  background-color: var(--surface);
  padding: 20px 0 15px;
  width: 100%;
  overflow: hidden;

  @media ${screen.sm} {
    padding: 30px 0 20px;
  }

  @media ${screen.md} {
    padding: 50px 0 30px;
  }
`;

const Cover = styled.div`
  display: block;
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 1.5px 1.9px rgba(0, 0, 0, 0.031),
    0px 3.7px 4.7px rgba(0, 0, 0, 0.044), 0px 6.9px 8.8px rgba(0, 0, 0, 0.055),
    0px 12.3px 15.6px rgba(0, 0, 0, 0.066), 0px 23px 29.2px rgba(0, 0, 0, 0.079),
    0px 55px 70px rgba(0, 0, 0, 0.11);

  :after {
    content: "";
    ${absoluteSize};
    border: 1px solid var(--border-content);
    border-radius: 4px;
  }
`;

const ImageSize = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background-color: var(--surface-subtle);
  border-radius: 4px;
  overflow: hidden;
`;

const Title = styled.h3`
  text-align: center;
  margin: 0;
  margin-top: 15px;
  ${fluidFont(16, 19)};
  font-weight: 600;
  color: var(--text-subtle);
`;

type AlbumProps = {
  title: ImageProps["title"];
  alt: ImageProps["alt"];
  priority?: ImageProps["priority"];
  src: ImageProps["src"];
};

function Album({ src, alt, priority, title }: AlbumProps) {
  return (
    <div>
      <Cover>
        <ImageSize>
          <Image
            src={src}
            alt={alt}
            fill
            style={{objectFit: "cover"}}
            placeholder="blur"
            priority={priority}
          />
        </ImageSize>
      </Cover>
      <Title>{title}</Title>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  width: calc(100% + (100% - 4 * 20px) / 2);
  margin-left: calc(-1 * (100% - 4 * 20px) / 2 / 2);

  & > *:first-child,
  & > *:last-child {
    display: none;
  }

  @media ${screen.sm} {
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: calc(100% + (100% - 4 * 30px) / 4);
    margin-left: calc(-1 * (100% - 4 * 30px) / 4 / 2);

    & > *:first-child,
    & > *:last-child {
      display: block;
    }
  }

  @media ${screen.md} {
    grid-gap: 50px;
    width: calc(100% + (100% - 4 * 50px) / 4);
    margin-left: calc(-1 * (100% - 4 * 50px) / 4 / 2);
  }
`;

export type Props = {
  priority?: boolean;
};

export default function Carousel(props: Props) {
  return (
    <Wrapper>
      <Grid>
        <Album
          src={fusionCoverImg}
          alt="Fusion by Mike Heddes album cover"
          title="Fusion"
        />
        <Album
          src={losingFocusCoverImg}
          alt="Losing Focus by Mike Heddes album cover"
          title="Losing Focus"
          priority={props.priority}
        />
        <Album
          src={livinCoverImg}
          alt="Livin' by Mike Heddes album cover"
          title="Livin'"
          priority={props.priority}
        />
        <Album
          src={censorshipCoverImg}
          alt="Censorship by Mike Heddes album cover"
          title="Censorship"
          priority={props.priority}
        />
        <Album
          src={excitedCoverImg}
          alt="Excited by Mike Heddes album cover"
          title="Excited"
        />
      </Grid>
    </Wrapper>
  );
}
