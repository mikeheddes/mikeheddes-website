import styled from "styled-components";

import { fluidFont } from "../styles";

export const SectionName = styled.h2`
  color: var(--text-subtle);
  ${fluidFont(16, 18)};
  font-weight: 600;
  margin-bottom: 8px;
`;

export const SectionHeading = styled.h3`
  color: var(--heading);
  ${fluidFont(24, 32)};
  font-weight: 600;
  margin-bottom: 30px;
`;
