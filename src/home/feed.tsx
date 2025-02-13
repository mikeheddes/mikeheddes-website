import styled from "styled-components";

import { contentWrapper } from "../styles";
import {
  GuidedStochasticExploration,
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
  FastMultiJoinSketch,
  HDCJournal,
  DeepCrossAttention,
} from "./post";
import { SectionHeading } from "./section";
import { screen } from "../styles/breakpoints";

const Section = styled.section<{ $wide?: boolean }>`
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
    <Section $wide>
      <SectionHeading>Projects</SectionHeading>
      <Posts>
        <DeepCrossAttention />
        <HDCJournal />
        <FastMultiJoinSketch />
        <GuidedStochasticExploration />
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
