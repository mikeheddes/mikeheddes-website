import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import Xmark from '../../icons/Xmark'
import Info from '../../icons/info'
import Button from '../../shared/button'
import { screen } from '../../styles/breakpoints'

const Wrapper = styled.div`
  display: block;
  object-fit: contain;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  min-width: 0px;
  max-width: none;
  min-height: 0px;
  max-height: none;
  width: 100%;
  height: 100%;
  transform: none;
  margin: 0px;
  touch-action: none;
  background-color: var(--background);
  cursor: grab;

  :active {
    cursor: grabbing;
  }
`

const buttonPosition = css`
  position: absolute;
  top: 20px;
  left: 20px;

  @media ${screen.md} {
    top: 30px;
    left: 30px;
  }
`

export default function PlaygroundLayout({ children, location, blogPost }) {
  const fromBlogPost = location.state?.fromBlogPost ?? false

  return (
    <Wrapper>
      {children}
      {fromBlogPost ? (
        <Button css={buttonPosition} onClick={() => window.history.back()}>
          <Xmark />
        </Button>
      ) : (
        <Button as={Link} css={buttonPosition} to={blogPost}>
          <Info />
        </Button>
      )}
    </Wrapper>
  )
}
