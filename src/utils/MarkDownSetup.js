import React, { createElement } from 'react';
import { highlightAuto } from 'highlight.js';
import marksy from 'marksy/components';

import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import H4 from 'components/H4';
import P from 'components/P';
import Ul from 'components/Ul';
import Blockquote from 'components/Blockquote';
import CodeBlock from 'components/CodeBlock';
import CodeInline from 'components/CodeInline';
import Link from 'components/Link';
import Bold from 'components/Bold';
import Img from 'components/Img';

const img = ({src, alt}) =>
<div className={`image-container ${alt}`}>
  <Img src={src} wide={alt == 'wide' ? true : undefined}/>
</div>;

const p = ({children}) => {
  for (let i = 0; i < children.length; i++) {
    // If child is img don't wrap in p element
    if (children[i] != null && children[i].type == img) {
      return children
    }
  }
  // Default
  return <P>{children}</P>
}

const Abstract = ({children}) => <P abstract>{children}</P>

const compile = marksy({
  createElement,
  highlight: (language, code) => highlightAuto(code, [language]).value,
  elements: {
    p,
    img,
    h1: ({id, children}) => <H1 id={id}>{children}</H1>,
    h2: ({id, children}) => <H2 id={id}>{children}</H2>,
    h3: ({id, children}) => <H3 id={id}>{children}</H3>,
    h4: ({id, children}) => <H4 id={id}>{children}</H4>,
    blockquote: ({children}) => <Blockquote>{children}</Blockquote>,
    // hr () {},
    // ol ({children}) {},
    ul: ({children}) => <Ul>{children}</Ul>,
    // table ({children}) {},
    // thead ({children}) {},
    // tbody ({children}) {},
    // tr ({children}) {},
    // th ({children}) {},
    // td ({children}) {},
    a:  ({href, title, target, children}) => <Link to={href} target={target}>{children}</Link>,
    strong: ({children}) => <Bold>{children}</Bold>,
    // em ({children}) {},
    // br () {},
    // del ({children}) {},
    code: ({language, code}) => <CodeBlock className={`language-${language}`} dangerouslySetInnerHTML={{__html: highlightAuto(code, [language]).value}}></CodeBlock>,
    codespan: ({children}) => <CodeInline>{children}</CodeInline>
  },
  components: {
    Abstract,
    H4,
  }
})

export default compile
