import React from 'react'
import styled from 'styled-components'
import { fluidFont } from '../styles/mixins'

import Math from './Math'
import Divider from './Divider'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Code from './Code'
import Preformatted from './Preformatted'
import List from './List'
import Bold from './Bold'
import Link from './Link'
import Blockquote from './Blockquote'
import Table from './Table'
import Mark from './Mark'
import Image from './Image'

export const wrapper = styled.div`
  ${fluidFont(18, 20)};
  color: ${({ theme }) => theme.heading};
`

const AutoLinkHeader = styled.a`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -24px;
  color: ${({ theme }) => theme.link};

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    opacity: 0;

    ${Heading}:hover & {
      opacity: 1;
    }
  }
`

const span = props => {
  const { className } = props
  if (className === 'katex-display') {
    return <Math {...props} marginBottom="lg" marginTop="lg" />
  }
  if (className === 'gatsby-resp-image-wrapper') {
    return <Image as="span" {...props} />
  }
  return <span {...props} />
}

const handleAutoLinkHeaderClick = e => {
  window.history.pushState({}, e.target.textContent, e.target.parentNode.href)
  e.preventDefault()
}

const a = props => {
  const { className, href, ...restProps } = props
  if (className === 'gatsby-resp-image-link') {
    return <a {...props} />
  }
  if (className === 'autolink-header') {
    return (
      <AutoLinkHeader
        href={href}
        {...restProps}
        onClick={handleAutoLinkHeaderClick}
      />
    )
  }
  return <Link to={href} className={className} {...restProps} />
}

export default {
  span,
  a,
  mark: Mark,
  blockquote: props => (
    <Blockquote marginBottom="md" marginTop="md" {...props} />
  ),
  inlineCode: props => <Code variant="inline" {...props} />,
  h1: props => <Heading as="h1" marginBottom="xr" marginTop="xl" {...props} />,
  h2: props => <Heading as="h2" marginBottom="re" marginTop="lg" {...props} />,
  h3: props => <Heading as="h3" marginBottom="re" marginTop="xm" {...props} />,
  h4: props => <Heading as="h4" marginBottom="sm" marginTop="md" {...props} />,
  h5: props => <Heading as="h5" marginBottom="sm" marginTop="xr" {...props} />,
  h6: props => <Heading as="h6" marginBottom="xs" marginTop="re" {...props} />,
  hr: props => <Divider marginTop="xl" marginBottom="xl" {...props} />,
  // img: props => <Image marginBottom="md" marginTop="md" {...props} />,
  ol: props => <List as="ol" marginBottom="xr" marginTop="xr" {...props} />,
  p: props => <Paragraph marginBottom="xr" {...props} />,
  pre: props => <Preformatted marginBottom="xr" marginTop="xr" {...props} />,
  code: props => <Code {...props} />,
  strong: Bold,
  table: props => <Table marginBottom="xr" marginTop="xr" {...props} />,
  ul: props => <List as="ul" marginBottom="xr" marginTop="xr" {...props} />,
  wrapper,
}
