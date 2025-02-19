import styled from "styled-components";
import Image from "next/image";

import { screen } from "../styles/breakpoints";
import { contentWrapper, fluidFont } from "../styles";
import profilePic from "./banner.jpg";

const Section = styled.section<{ $wide?: boolean }>`
  ${contentWrapper};
  position: relative;
  display: grid;

  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0px;
  padding-right: 0px;

  @media ${screen.sm} {
    padding-top: 50px;
  }

  & > * {
    grid-area: 1 / 1;
  }
`;

const ImageSize = styled.div`
  position: relative;
  z-index: 5;
  background-color: #e0e5e8;
  width: 100%;
  padding-bottom: 80%;

  @media ${screen.sm} {
    padding-bottom: 45%;
    border-radius: 8px;

    & > img {
      border-radius: 8px;
    }
  }

  @media ${screen.lg} {
    padding-bottom: 43.6%;
  }
`;

const HeadlineWrapper = styled.div`
  z-index: 10;
  text-align: center;
  padding-top: 30px;

  @media ${screen.sm} {
    padding-top: 50px;
  }
`;

const Title = styled.h1`
  color: rgb(36, 42, 56);
  ${fluidFont(34, 56)};
  font-weight: 700;
  margin: 0;
`;

const BlurImage = styled.div<{ src: string }>`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  inset: 0px;
  object-fit: cover;
  object-position: 50% 15%;
  color: transparent;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: 50% 15%;
  filter: blur(60px);
  opacity: 0.35;
`;

function Headline() {
  return (
    <HeadlineWrapper>
      <Title>Mike Heddes</Title>
    </HeadlineWrapper>
  );
}

export default function Hero() {
  return (
    <Section $wide>
      <ImageSize>
        <BlurImage src="data:image/jpg;base64,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" />
        <Image
          src={profilePic}
          placeholder="blur"
          priority
          alt="Mike Heddes in the Hills of Orange County"
          fill
          style={{ objectPosition: "50% 15%", objectFit: "cover" }}
        />
      </ImageSize>
      <Headline />
    </Section>
  );
}
