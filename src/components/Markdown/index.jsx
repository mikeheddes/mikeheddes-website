import React from 'react';
import Heading from 'components/Heading';

import {
  Bold, Italic, Code, Anchor,
} from './components';
import Paragraph from './Paragraph';
import HorizontalRule from './HorizontalRule';
import Preformatted from './Preformatted';
import List from './List';
import Blockquote from './Blockquote';
import Table from './Table';
import Image from './Image';

export {
  Heading,
  Bold,
  Italic,
  Code,
  Anchor,
};

export default {
  a: Anchor,
  blockquote: Blockquote,
  inlineCode: Code,
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
  code: Preformatted,
  strong: Bold,
  table: Table,
  ul: props => <List {...props} tag="ul" />,
};
