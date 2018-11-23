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
// import Image from './Image'

export const wrapper = styled.div`
  ${fluidFont(18, 20)};
  color: ${({ theme }) => theme.heading};
`

const span = props => {
  const { className } = props
  if (className === 'inlineMath') {
    return <Math inline {...props} />
  }
  return <span {...props} />
}

const div = props => {
  const { className } = props
  if (className === 'math') {
    return <Math marginBottom="lg" marginTop="lg" {...props} />
  }
  return <div {...props} />
}

export default {
  div,
  span,
  a: ({ href, ...restProps }) => <Link to={href} {...restProps} />,
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
  hr: props => (
    <Divider
      marginTop="xl"
      marginBottom="xl"
      marginRight="lg"
      marginLeft="lg"
      {...props}
    />
  ),
  // img: Image,
  ol: props => <List as="ol" marginBottom="xr" marginTop="xr" {...props} />,
  p: props => <Paragraph marginBottom="xr" {...props} />,
  pre: props => <Preformatted marginBottom="xr" marginTop="xr" {...props} />,
  code: props => <Code variant="block" {...props} />,
  strong: Bold,
  table: props => <Table marginBottom="xr" marginTop="xr" {...props} />,
  ul: props => <List as="ul" marginBottom="xr" marginTop="xr" {...props} />,
  wrapper,
}
