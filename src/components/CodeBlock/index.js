import styled, { css } from 'styled-components';
import { transparentize as fade } from 'polished';

import { media } from 'utils/mixins';
import { space, radius } from 'utils/sizes';
import { accents, grays, DAY } from 'utils/colors';
import codeStyles from './codeStyles';

const CodeBlock = styled.pre`
  ${codeStyles}
  ${space('padding', 'm')};
  border-radius: ${radius.m}px;
  ${space('margin', 'r', 0, 'xm')};
  background: ${props => props.theme.accent1};
  color     : ${props => props.theme.text2};
  overflow-x   : auto;
  ${media.tabletLandscape`
    ${space('padding', 'xm')};
  `}

  & .hljs {
    display   : block;
    overflow-x: auto;
    padding   : 0.5em;
  }


  ${props => (props.theme.key != 'NIGHT' ?
    css`
    & {
      .hljs-comment,
      .hljs-quote {
        color     : ${fade(.4, accents.blue['400'])};
        font-style: italic;
      }

      .hljs-keyword,
      .hljs-literal,
      .hljs-selector-tag {
        color: #aa0d91;
      }

      .hljs-name {
        color: #008;
      }

      .hljs-template-variable,
      .hljs-variable {
        color: #660;
      }

      .hljs-string {
        color: #c41a16;
      }

      .hljs-link,
      .hljs-regexp {
        color: #080;
      }

      .hljs-bullet,
      .hljs-meta,
      .hljs-number,
      .hljs-symbol,
      .hljs-tag,
      .hljs-title {
        color: #1c00cf;
      }

      .hljs-attr,
      .hljs-built_in,
      .hljs-builtin-name,
      .hljs-class .hljs-title,
      .hljs-params,
      .hljs-section,
      .hljs-type {
        color: #5c2699;
      }

      .hljs-attribute,
      .hljs-subst {
        color: #000;
      }

      .hljs-formula {
        background-color: #eee;
        font-style      : italic;
      }

      .hljs-addition {
        background-color: #baeeba;
      }

      .hljs-deletion {
        background-color: #ffc8bd;
      }

      .hljs-selector-class,
      .hljs-selector-id {
        color: #9b703f;
      }

      .hljs-doctag,
      .hljs-strong {
        font-weight: bold;
      }

      .hljs-emphasis {
        font-style: italic;
      }
    }
    `
  : css`
    & {
      .hljs-params,
      .hljs-tag {
        color: inherit;
      }

      .hljs-comment,
      .hljs-quote {
        color     : ${fade(.3, grays['400'])};
        font-style: italic;
      }

      .hljs-doctag,
      .hljs-formula,
      .hljs-keyword {
        color: ${NIGHT.purple};
      }

      .hljs-deletion,
      .hljs-name,
      .hljs-section,
      .hljs-selector-tag,
      .hljs-subst {
        color:${NIGHT.red};
      }

      .hljs-literal {
        color: ${NIGHT.teal_blue};
      }

      .hljs-addition,
      .hljs-attribute,
      .hljs-meta-string,
      .hljs-regexp,
      .hljs-string {
        color: ${NIGHT.green};
      }

      .hljs-built_in,
      .hljs-class .hljs-title {
        color: ${NIGHT.yellow};
      }

      .hljs-attr,
      .hljs-number,
      .hljs-selector-attr,
      .hljs-selector-class,
      .hljs-selector-pseudo,
      .hljs-template-variable,
      .hljs-type,
      .hljs-variable {
        color: ${NIGHT.orange};
      }

      .hljs-bullet,
      .hljs-link,
      .hljs-meta,
      .hljs-selector-id,
      .hljs-symbol,
      .hljs-title {
        color: ${NIGHT.blue};
      }

      .hljs-emphasis {
        font-style: italic;
      }

      .hljs-strong {
        font-weight: bold;
      }

      .hljs-link {
        text-decoration: underline;
      }
    }
  `)};
`

CodeBlock.defaultProps = {
  theme: DAY,
}

export default CodeBlock;
