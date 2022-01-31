import styled from "styled-components";

import { screen } from "../styles/breakpoints";
import { fluidFont } from "../styles";

const Wrapper = styled.footer`
  width: 100%;
  display: block;
  text-align: center;
  color: var(--text-subtle);
  ${fluidFont(9, 10)};
  font-weight: 400;
  padding: 20px;
  margin-top: 50px;
  line-height: 1.8;

  @media ${screen.sm} {
    font-weight: 500;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      Designed by Mike Heddes.
      <br />
      Copyright © {new Date().getFullYear()} Mike Heddes. All rights reserved.
    </Wrapper>
  );
}
