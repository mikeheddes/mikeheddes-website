import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { transparentize as fade } from 'polished'

import { fonts, space, radius } from '../styles'

const highlighting = css`
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${({ theme }) => fade(0.65, theme.text)};
    font-style: italic;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.builtin {
    color: ${({ theme }) => theme.yellow};
  }

  .token.string,
  .token.attr-value {
    color: ${({ theme }) => theme.green};
  }

  .token.punctuation,
  .token.operator {
    color: ${({ theme }) => theme.text};
  }

  .token.entity,
  .token.symbol,
  .token.boolean,
  .token.constant,
  .token.property,
  .token.inserted,
  .token.atrule,
  .token.attr-name,
  .token.number,
  .language-autohotkey .token.selector {
    color: ${({ theme }) => theme.orange};
  }

  .token.url,
  .token.regex {
    color: ${({ theme }) => theme.blue};
  }

  .token.variable {
    color: ${({ theme }) => theme.yellow};
  }

  .token.keyword {
    color: ${({ theme }) => theme.purple};
  }

  .token.function,
  .token.deleted,
  .language-autohotkey .token.tag {
    color: ${({ theme }) => theme.blue};
  }

  .token.tag,
  .token.selector,
  .language-autohotkey .token.keyword {
    color: ${({ theme }) => theme.red};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }
`

const Code = styled.code`
  font-size: 0.82em;
  ${fonts.mono};

  /* Inline code */
  &[class*='language-'] {
    background-color: ${({ theme }) => fade(0.25, theme.surface)};
    border-radius: ${radius.sm};
    padding: ${space.xs} ${space.sm};
  }

  /* Block code */
  pre > &[class*='language-'] {
    background-color: transparent;
    border-radius: 0;
    display: block;
    padding: ${space.md};
    overflow-x: auto;
    color: ${({ theme }) => theme.text};
    ${highlighting};
  }
`

Code.propTypes = {
  variant: PropTypes.oneOf(['inline', 'block']),
}

Code.defaultProps = {
  variant: 'inline',
}

export default Code
