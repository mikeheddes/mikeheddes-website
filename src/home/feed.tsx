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

const Section = styled.section`
  ${contentWrapper};
  margin-top: 50px;
`;

export default function Feed() {
  return (
    <Section wide>
      <SectionHeading>Projects</SectionHeading>
      <div>
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
      </div>
    </Section>
  );
}
