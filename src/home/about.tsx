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
        I am Mike Heddes, a Computer Science PhD candidate at the University
        of California, Irvine. In my research, I develop efficient machine
        learning and data mining algorithms. I obtained my bachelor&apos;s
        degree in mechanical engineering from the Amsterdam University of
        Applied Sciences. I am mesmerized by all meticulous design and
        engineering, enjoy tackling difficult problems, and aspire to
        contribute to the exciting achievements of humanity. In my spare time, I
        enjoy making music and reading about science, business, and technology.
      </Text>
    </Section>
  );
}
