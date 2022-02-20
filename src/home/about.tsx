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
  ${fluidFont(21, 28)};
  font-weight: 600;
  line-height: 1.28;
  max-width: var(--width-text);
`;

export default function About() {
  return (
    <Section wide>
      <SectionName>Statement of purpose</SectionName>
      <Text>
        I&apos;m passionate about technology and science. I want to stay curious
        and use my creativity to develop innovative and delightful products.
      </Text>
    </Section>
  );
}
