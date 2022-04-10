import styled from "styled-components";

import { contentWrapper, fluidFont } from "../styles";
import { SectionName } from "./section";
import { screen } from "../styles/breakpoints";

const Section = styled.section`
  ${contentWrapper};
  margin-top: 30px;
  margin-bottom: 30px;

  @media ${screen.sm} {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const Text = styled.p`
  color: var(--text);
  ${fluidFont(18, 21)};
  font-weight: 500;
  line-height: 1.45;

  @media ${screen.sm} {
    text-align: justify;
  }
`;

export default function About() {
  return (
    <Section wide>
      <SectionName>Personal statement</SectionName>
      <Text>
        I am Mike Heddes, a Computer Science PhD student at the University
        of California, Irvine with a background in Mechanical Engineering. I
        enjoy tackling hard problems in an interdisciplinary setting. My work
        focuses on the intersection of Machine Learning and Embedded Systems. My
        ambition is to add to the inspiring achievements of humanity and to
        ensure our longevity. I&apos;m captivated by everything space related in
        addition to meticulous design and engineering.
      </Text>
    </Section>
  );
}
