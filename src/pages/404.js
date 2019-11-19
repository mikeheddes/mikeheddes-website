import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { fluidFont } from '../styles/mixins'

const MegaHeader = styled.h1`
  text-align: center;
  font-weight: 700;
  ${fluidFont(120, 300)};
  color: ${({ theme }) => theme.surface};
`

const NotFound = () => (
  <>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <main display="flex" justifyContent="center" direction="column">
      <MegaHeader>404</MegaHeader>
      <div
        width="text"
        marginLeft="auto"
        marginRight="auto"
        marginTop="xm"
        marginBottom="xm"
        textAlign="center"
      >
        <p size="md">
          Sorry the page you are looking for does not exist. You could start at{' '}
          <Link to="/">the home page</Link>.
        </p>
      </div>
    </main>
  </>
)

export default NotFound
