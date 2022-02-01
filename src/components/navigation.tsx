import styled from "styled-components";
import Link from "next/link";
import { lighten } from "polished";

import { fluidFont } from "../styles";
import { screen } from "../styles/breakpoints";
import { darkTheme, lightTheme, themeSelector } from "../styles/colors";

const Wrapper = styled.nav`
  text-align: left;
  padding: 15px 20px;

  @media ${screen.sm} {
    padding: 15px 30px;
  }
`;

const Action = styled.a`
  ${fluidFont(17, 18)};
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
  transition: color opacity 100ms ease;

  :hover {
    color: ${lighten(0.1, lightTheme.primary)};
  }

  @media ${themeSelector.dark} {
    :hover {
      color: ${lighten(0.1, darkTheme.primary)};
    }
  }

  :active {
    color: var(--primary);
    opacity: 0.5;
  }
`;

function Navigation() {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <Action>⟵ Go to Homepage</Action>
      </Link>
    </Wrapper>
  );
}

export default Navigation;
