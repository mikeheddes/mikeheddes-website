import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { fluidFont, contentWrapper } from '../styles'
import Footer from '../shared/footer'

const Wrapper = styled.main`
  min-height: 100vh;
  /* prevent margin overflow */
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
`

const MegaHeader = styled.h1`
  margin: 0.5em 0 0.3em;
  text-align: center;
  font-weight: 700;
  ${fluidFont(120, 300)};
  color: var(--surface-obvious);
  font-feature-settings: 'liga' 1, 'case' 1, 'calt' 1, 'ss01' 1;
`

const Body = styled.p`
  ${fluidFont(21, 24)};
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
`

const Anchor = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  transition: opacity 100ms ease-out;

  :active {
    opacity: 0.5;
  }
`

const NotFound = () => (
  <Wrapper>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>

    <MegaHeader>404</MegaHeader>
    <div css={contentWrapper}>
      <Body>
        Sorry, the page that you are looking for does not exist. <br />
        The <Anchor to="/">home page</Anchor> is a great place to continue your
        search.
      </Body>
    </div>
    <div css="flex-grow: 1;" />
    <Footer />
  </Wrapper>
)

export default NotFound
