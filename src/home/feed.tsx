import styled from "styled-components";

import { contentWrapper } from "../styles";
import {
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

const Section = styled.section`
  ${contentWrapper};
  margin-top: 50px;
`;

const Posts = styled.div`
`;

export default function Feed() {
  return (
    <Section wide>
      <SectionHeading>Projects</SectionHeading>
      <Posts>
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
