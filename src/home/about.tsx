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
        I am Mike Heddes, a Computer Science PhD candidate researching machine
        learning at the University of California, Irvine. In my research I
        develop efficient machine learning as well as big data algorithms.
        Before my PhD, I got a bachelor&apos;s degree in mechanical engineering
        from the Amsterdam University of Applied Sciences. I enjoy tackling
        difficult problems and aspire to contribute to the exciting achievements
        of humanity. I&apos;m captivated by everything space related in addition
        to meticulous design and engineering.
      </Text>
    </Section>
  );
}
