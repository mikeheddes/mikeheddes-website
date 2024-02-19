import styled from "styled-components";

import { fluidFont } from "../styles";
import { screen } from "../styles/breakpoints";

export const SectionName = styled.h2`
  color: var(--heading-subtle);
  ${fluidFont(17, 19)};
  font-weight: 600;
  margin-bottom: 8px;
`;

export const SectionHeading = styled.h3`
  color: var(--heading);
  ${fluidFont(24, 31)};
  font-weight: 700;
  margin-bottom: 15px;

  @media ${screen.sm} {
    margin-bottom: 20px;
  }
`;
