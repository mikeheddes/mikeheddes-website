import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import { fluidFont, contentWrapper } from "../styles";
import Footer from "../components/footer";

const Wrapper = styled.main`
  min-height: 100vh;
  /* prevent margin overflow */
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
`;

const MegaHeader = styled.h1`
  margin: 0.5em 0 0.3em;
  text-align: center;
  font-weight: 700;
  ${fluidFont(120, 300)};
  color: var(--surface-obvious);
  font-feature-settings: "liga" 1, "case" 1, "calt" 1, "ss01" 1;
`;

const Text = styled.p`
  ${fluidFont(21, 24)};
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: var(--text);
`;

const Anchor = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  transition: opacity 100ms ease-out;

  :active {
    opacity: 0.5;
  }
`;

const Content = styled.div`
  ${contentWrapper};
`;

const Filler = styled.div`
  flex-grow: 1;
`;

function NotFound() {
  return (
    <Wrapper>
      <Head>
        <title>Page Not Found</title>
      </Head>

      <MegaHeader>404</MegaHeader>
      <Content>
        <Text>
          Sorry, the page you&apos;re looking for does not exist. <br />
          The <Anchor href="/">homepage</Anchor> is a great place to continue
          your search.
        </Text>
      </Content>
      <Filler />
      <Footer />
    </Wrapper>
  );
}

export default NotFound;
