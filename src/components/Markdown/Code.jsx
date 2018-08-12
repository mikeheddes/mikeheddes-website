import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { typography, space, radius } from 'style';
import { transparentize as fade } from 'polished';

const Code = styled.code`
  font-size: 82%;
  font-family: ${typography.mono};
  ${({ type }) =>
    type === 'inline' &&
    css`
      background-color: ${({ theme }) => fade(0.5, theme.surface)};
      border-radius: ${radius.r}px;
      padding: ${space.xs}px ${space.s}px;
    `};
  ${({ type }) =>
    type === 'block' &&
    css`
      display: block;
      padding: ${space.m}px;
      overflow-x: auto;
      color: ${({ theme }) => theme.text};

      .hljs-comment,
      .hljs-quote {
        color: ${({ theme }) => fade(0.5, theme.text)};
      }

      .hljs-keyword,
      .hljs-selector-tag,
      .hljs-literal {
        color: #aa0d91;
      }

      .hljs-name {
        color: #008;
      }

      .hljs-variable,
      .hljs-template-variable {
        color: #660;
      }

      .hljs-string {
        color: #c41a16;
      }

      .hljs-regexp,
      .hljs-link {
        color: #080;
      }

      .hljs-title,
      .hljs-tag,
      .hljs-symbol,
      .hljs-bullet,
      .hljs-number,
      .hljs-meta {
        color: #1c00cf;
      }

      .hljs-section,
      .hljs-class .hljs-title,
      .hljs-type,
      .hljs-attr,
      .hljs-built_in,
      .hljs-builtin-name,
      .hljs-params {
        color: #5c2699;
      }

      .hljs-attribute,
      .hljs-subst {
        color: #000;
      }

      .hljs-formula {
        background-color: #eee;
        font-style: italic;
      }

      .hljs-addition {
        background-color: #baeeba;
      }

      .hljs-deletion {
        background-color: #ffc8bd;
      }

      .hljs-selector-id,
      .hljs-selector-class {
        color: #9b703f;
      }

      .hljs-doctag,
      .hljs-strong {
        font-weight: bold;
      }

      .hljs-emphasis {
        font-style: italic;
      }
    `};
`;

Code.propTypes = {
  type: PropTypes.oneOf(['inline', 'block']),
};

Code.defaultProps = {
  type: 'inline',
};

export default Code;
