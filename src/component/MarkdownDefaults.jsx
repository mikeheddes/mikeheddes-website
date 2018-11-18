import React from 'react'
import styled from 'styled-components'
import { fluidFont } from '../style/mixins'

import Math from './Math'
import Divider from './Divider'
// import Heading from 'components/Heading'
// import Paragraph from './Paragraph'
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
`

const span = props => {
  if (props.className === 'inlineMath') {
    return <Math inline {...props} />
  }
  return <span {...props} />
}

const div = props => {
  if (props.className === 'math') {
    return <Math {...props} />
  }
  return <div {...props} />
}

export default {
  div,
  span,
  a: ({ href, ...restProps }) => <Link to={href} {...restProps} />,
  blockquote: Blockquote,
  inlineCode: props => <Code variant="inline" {...props} />,
  // h1: props => <Heading {...props} tag="h1" />,
  // h2: props => <Heading {...props} tag="h2" />,
  // h3: props => <Heading {...props} tag="h3" />,
  // h4: props => <Heading {...props} tag="h4" />,
  // h5: props => <Heading {...props} tag="h5" />,
  // h6: props => <Heading {...props} tag="h6" />,
  hr: Divider,
  // img: Image,
  ol: props => <List {...props} as="ol" />,
  // p: Paragraph,
  pre: Preformatted,
  code: props => <Code variant="block" {...props} />,
  strong: Bold,
  table: Table,
  ul: props => <List {...props} as="ul" />,
  wrapper,
}
