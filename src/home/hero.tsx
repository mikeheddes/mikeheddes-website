import styled from "styled-components";
import Image from "next/image";

import { screen } from "../styles/breakpoints";
import { contentWrapper, fluidFont } from "../styles";
import profilePic from "./banner.jpg";

const Section = styled.section`
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
    overflow: hidden;
    border-radius: 8px;
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
