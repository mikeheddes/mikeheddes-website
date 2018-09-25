import React from 'react'
import styled from 'styled-components'
import Heading from 'components/Heading'
import { fluidText } from 'utils/mixins'

import { Bold, Italic, Anchor } from './components'
import Paragraph from './Paragraph'
import HorizontalRule from './HorizontalRule'
import Code from './Code'
import Preformatted from './Preformatted'
import List from './List'
import Blockquote from './Blockquote'
import Table from './Table'
import Image from './Image'

export { Heading, Bold, Italic, Code, Anchor }

export const wrapper = styled.div`
  ${fluidText(18, 20)};
`

export default {
  a: Anchor,
  blockquote: Blockquote,
  inlineCode: props => <Code {...props} type="inline" />,
  em: Italic,
  h1: props => <Heading {...props} tag="h1" />,
  h2: props => <Heading {...props} tag="h2" />,
  h3: props => <Heading {...props} tag="h3" />,
  h4: props => <Heading {...props} tag="h4" />,
  h5: props => <Heading {...props} tag="h5" />,
  h6: props => <Heading {...props} tag="h6" />,
  hr: HorizontalRule,
  img: Image,
  ol: props => <List {...props} tag="ol" />,
  p: Paragraph,
  pre: Preformatted,
  code: props => <Code {...props} type="block" />,
  strong: Bold,
  table: Table,
  ul: props => <List {...props} tag="ul" />,
  wrapper,
}
