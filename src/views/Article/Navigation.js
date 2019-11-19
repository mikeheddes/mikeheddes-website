import React from 'react'
import styled from 'styled-components'
import { fluidFont } from '../../styles/mixins'
import { Link } from 'gatsby'
import { contentWrapper } from '../../styles'

const Wrapper = styled.nav`
  ${contentWrapper};
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`

const Home = styled.h2`
  ${fluidFont(18, 23)};
  color: var(--primary);
  font-weight: 600;
`

const Navigation = () => (
  <Wrapper>
    <Link to="/" css="text-decoration: none;">
      <Home>More by Mike Heddes</Home>
    </Link>
  </Wrapper>
)

export default React.memo(Navigation)
