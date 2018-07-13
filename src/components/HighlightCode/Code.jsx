import styled from 'styled-components';
import { typography, space } from 'style';
import { transparentize as fade } from 'polished';

export default styled.code`
  font-size: 82%;
  font-family: ${typography.mono};
  display: block;
  padding: ${space.m}px;
  overflow-x: auto;
  color: ${({ theme }) => theme.text};

  .comment,
  .quote {
    color: ${({ theme }) => fade(0.5, theme.text)};
  }

  .keyword,
  .selector-tag,
  .literal {
    color: #aa0d91;
  }

  .name {
    color: #008;
  }

  .variable,
  .template-variable {
    color: #660;
  }

  .string {
    color: #c41a16;
  }

  .regexp,
  .link {
    color: #080;
  }

  .title,
  .tag,
  .symbol,
  .bullet,
  .number,
  .meta {
    color: #1c00cf;
  }

  .section,
  .class .title,
  .type,
  .attr,
  .built_in,
  .builtin-name,
  .params {
    color: #5c2699;
  }

  .attribute,
  .subst {
    color: #000;
  }

  .formula {
    background-color: #eee;
    font-style: italic;
  }

  .addition {
    background-color: #baeeba;
  }

  .deletion {
    background-color: #ffc8bd;
  }

  .selector-id,
  .selector-class {
    color: #9b703f;
  }

  .doctag,
  .strong {
    font-weight: bold;
  }

  .emphasis {
    font-style: italic;
  }
`;
