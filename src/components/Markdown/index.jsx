import React from 'react';
import PropTypes from 'prop-types';
import MarkdownJSX from 'markdown-to-jsx';
import styled, { css } from 'styled-components';
// import Image from 'components/Image';
import { fluidText, media, mediaSize } from 'utils/mixins';
import { width, space } from 'style';
import Image from 'components/Image';

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

export default styled(Markdown)`
  ${fluidText(18, 20)};
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: [full-start] ${
  space.m
}px [content-start text-start] 1fr [text-end content-end] ${space.m}px [full-end];

  ${media.tabletPortrait(css`
    grid-template-columns: [full-start] ${space.xl}px [content-start] 1fr [text-start] minmax(
        auto,
        ${width.text}px
      ) [text-end] 1fr [content-end] ${space.xl}px [full-end];
  `)}

  ${media.tabletLandscape(css`
    grid-template-columns: [full-start] minmax(${space.M}px, 1fr) [content-start] minmax(
        auto,
        ${(width.content - width.text) / 2}px
      ) [text-start] minmax(${mediaSize.tabletLandscape - space.M * 2}px, ${width.text}px) [text-end] minmax(
        auto,
        ${(width.content - width.text) / 2}px
      ) [content-end] minmax(${space.M}px, 1fr) [full-end];
  `)}

  ${media.desktop(css`
    grid-template-columns: [full-start] minmax(${space.M}px, 1fr) [content-start] minmax(
        auto,
        ${(width.content - width.text) / 2}px
      ) [text-start] ${width.text}px [text-end] minmax(
        auto,
        ${(width.content - width.text) / 2}px
      ) [content-end] minmax(${space.M}px, 1fr) [full-end];
  `)};
`;
