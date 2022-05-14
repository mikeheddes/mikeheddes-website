import styled from "styled-components";

import { contentWrapper } from "../styles";
import {
  Torchhd,
  Hashing,
  GraphHD,
  EdgeAvatar,
  SpOC,
  JetFighterAi,
  SettlersOfTheGalaxy,
  DCGP,
  SpaceXGridFin,
  MusicProduction,
} from "./post";
import { SectionHeading } from "./section";
import { screen } from "../styles/breakpoints";


const Section = styled.section`
  ${contentWrapper};
  margin-top: 50px;
`;

const Posts = styled.div`
  & > *:nth-child(even) {
    background-color: var(--surface-subtle);
    padding: 20px;
    margin-left: -20px;
    margin-right: -20px;

    @media ${screen.sm} {
      border-radius: 6px;
      padding: 30px;
      margin-left: -30px;
      margin-right: -30px;
    }
  }
`;

export default function Feed() {
  return (
    <Section wide>
      <SectionHeading>Projects</SectionHeading>
      <Posts>
        <Torchhd />
        <Hashing />
        <GraphHD />
        <JetFighterAi />
        <EdgeAvatar />
        <SpOC />
        <SettlersOfTheGalaxy/>
        <DCGP />
        <SpaceXGridFin />
        <MusicProduction />
      </Posts>
    </Section>
  );
}
