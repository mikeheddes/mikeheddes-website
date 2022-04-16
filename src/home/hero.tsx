import styled from "styled-components";
import Image from "next/image";

import { screen } from "../styles/breakpoints";
import { contentWrapper, fluidFont, absoluteSize } from "../styles";
import profilePic from "./banner.jpg";

const Section = styled.section`
  position: relative;
  display: grid;

  & > * {
    grid-area: 1 / 1;
  }
`;

const ImageSize = styled.div`
  position: relative;
  background-color: #e0e5e8;
  width: 100%;
  padding-bottom: 50%;

  @media ${screen.sm} {
    padding-bottom: 42%;
  }

  @media ${screen.lg} {
    padding-bottom: 35%;
  }
`;

const HeadlineWrapper = styled.div`
  ${absoluteSize};
  ${contentWrapper};
  text-align: center;
  margin-top: 30px;

  @media ${screen.sm} {
    margin-top: 50px;
  }
`;

const Title = styled.h1`
  color: rgb(39, 45, 59);
  ${fluidFont(30, 58)};
  font-weight: 700;
  margin: 0;
`;

const SubTitle = styled.h2`
  color: rgba(13, 22, 42, 0.7);
  ${fluidFont(18, 36)};
  font-weight: 600;
  margin: 0;
  margin-top: 2px;
`;

function Headline() {
  return (
    <HeadlineWrapper>
      <Title>Mike Heddes</Title>
      <SubTitle>Machine Learning Researcher</SubTitle>
    </HeadlineWrapper>
  );
}

export default function Hero() {
  return (
    <Section>
      <ImageSize>
        <Image
          src={profilePic}
          placeholder="blur"
          priority
          alt="Mike Heddes in the Hills of Orange County"
          layout="fill"
          objectPosition="50% 15%"
          objectFit="cover"
        />
      </ImageSize>
      <Headline />
    </Section>
  );
}
