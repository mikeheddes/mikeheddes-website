import React from 'react';
import PropTypes from 'prop-types';
import MarkdownJSX from 'markdown-to-jsx';
import { fluidText } from 'utils/mixins';
// import Image from 'components/Image';
import Box from 'components/Box';

import {
  Bold, Italic, Code, Anchor,
} from './components';
import Paragraph from './Paragraph';
import Heading from './Heading';
import HorizontalRule from './HorizontalRule';
import Preformatted from './Preformatted';
import List from './List';
import Blockquote from './Blockquote';
import Table from './Table';
import Image from './Image';

const defaultOverrides = {
  a: Anchor,
  blockquote: Blockquote,
  code: Code,
  em: Italic,
  h1: {
    component: Heading,
    props: {
      tag: 'h1',
    },
  },
  h2: {
    component: Heading,
    props: {
      tag: 'h2',
    },
  },
  h3: {
    component: Heading,
    props: {
      tag: 'h3',
    },
  },
  h4: {
    component: Heading,
    props: {
      tag: 'h4',
    },
  },
  h5: {
    component: Heading,
    props: {
      tag: 'h5',
    },
  },
  h6: {
    component: Heading,
    props: {
      tag: 'h6',
    },
  },
  hr: HorizontalRule,
  img: Image,
  ol: {
    component: List,
    props: {
      tag: 'ol',
    },
  },
  p: Paragraph,
  pre: Preformatted,
  strong: Bold,
  table: Table,
  ul: {
    component: List,
    props: {
      tag: 'ul',
    },
  },
};

const Markdown = (props) => {
  const { children, className, overrides } = props;
  return (
    <MarkdownJSX
      options={{ overrides: { ...defaultOverrides, ...overrides } }}
      className={className}
    >
      {children}
    </MarkdownJSX>
  );
};

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  overrides: PropTypes.object,
};

Markdown.defaultProps = {
  className: '',
  overrides: {},
};

export default Box.withComponent(Markdown).extend`
  ${fluidText(18, 20)};
`;
