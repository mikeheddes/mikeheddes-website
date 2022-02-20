import React from "react";
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
  padding-bottom: 65%;

  @media ${screen.sm} {
    padding-bottom: 53.3%;
  }

  @media ${screen.lg} {
    padding-bottom: 45%;
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
  color: #000000;
  ${fluidFont(30, 58)};
  font-weight: 700;
  margin: 0;
`;

const SubTitle = styled.h2`
  color: #000000;
  ${fluidFont(18, 36)};
  font-weight: 600;
  opacity: 0.7;
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
          alt="Mike Heddes"
          layout="fill"
          objectPosition="50% 70%"
          objectFit="cover"
        />
      </ImageSize>
      <Headline />
    </Section>
  );
}
