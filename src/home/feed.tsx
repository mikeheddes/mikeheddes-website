import styled from "styled-components";

import { contentWrapper } from "../styles";
import {
  Torchhd,
  Hashing,
  CircularHV,
  GraphHD,
  EdgeAvatar,
  SpOC,
  JetFighterAi,
  SettlersOfTheGalaxy,
  DCGP,
  SpaceXGridFin,
  MusicProduction,
  DotHash,
} from "./post";
import { SectionHeading } from "./section";
import { screen } from "../styles/breakpoints";

const Section = styled.section`
  ${contentWrapper};
  margin-top: 50px;
  margin-bottom: 80px;

  @media ${screen.md} {
    margin-bottom: 130px;
  }
`;

const Posts = styled.div``;

export default function Feed() {
  return (
    <Section wide>
      <SectionHeading>Projects</SectionHeading>
      <Posts>
        <DotHash />
        <Torchhd />
        <CircularHV />
        <Hashing />
        <GraphHD />
        <JetFighterAi />
        <EdgeAvatar />
        <SpOC />
        <SettlersOfTheGalaxy />
        <DCGP />
        <SpaceXGridFin />
        <MusicProduction />
      </Posts>
    </Section>
  );
}
