import styled from "styled-components";
import Image, { ImageProps } from "next/image";
import { hiDPI } from "polished";

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
  overflow: hidden;
  border-radius: 4px;

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
  padding-bottom: 100%;
  background-color: var(--surface-subtle);
  border-radius: 4px;
`;

const Title = styled.h3`
  text-align: center;
  margin: 0;
  margin-top: 10px;
  ${fluidFont(16, 19)};
  font-weight: 600;
  color: var(--text-subtle);
`

type AlbumProps = ImageProps & {
  title: string;
};

function Album({ src, alt, priority, title }: AlbumProps) {
  return (
    <div>
      <Cover>
        <ImageSize>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: calc(100% + (100% - 4 * 20px) / 4);
  margin-left: calc(-1 * (100% - 4 * 20px) / 4 / 2);

  @media ${screen.sm} {
    grid-gap: 30px;
    width: calc(100% + (100% - 4 * 30px) / 4);
    margin-left: calc(-1 * (100% - 4 * 30px) / 4 / 2);
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
          priority={props.priority}
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
          priority={props.priority}
        />
      </Grid>
    </Wrapper>
  );
}
