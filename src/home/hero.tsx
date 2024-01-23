import styled from "styled-components";
import Image from "next/image";

import { screen } from "../styles/breakpoints";
import { contentWrapper, fluidFont } from "../styles";
import profilePic from "./banner.jpg";

const Section = styled.section`
  ${contentWrapper};
  position: relative;
  display: grid;

  & > * {
    grid-area: 1 / 1;
  }
`;

const ImageSize = styled.div`
  position: relative;
  z-index: 5;
  background-color: #e0e5e8;
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-bottom: 80%;

  @media ${screen.sm} {
    padding-bottom: 45%;
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

function Headline() {
  return (
    <HeadlineWrapper>
      <Title>Mike Heddes</Title>
    </HeadlineWrapper>
  );
}

export default function Hero() {
  return (
    <Section wide>
      <ImageSize>
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
