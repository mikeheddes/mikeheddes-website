import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { up } from 'styled-breakpoints'

const highlighting = css`
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: var(--text-subtle);
    font-style: italic;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.builtin {
    color: var(--yellow);
  }

  .token.string,
  .token.inserted,
  .token.attr-value {
    color: var(--green);
  }

  .token.punctuation,
  .token.operator {
    color: var(--text);
  }

  .token.entity,
  .token.symbol,
  .token.boolean,
  .token.constant,
  .token.property,
  .token.atrule,
  .token.attr-name,
  .token.number,
  .language-autohotkey .token.selector {
    color: var(--orange);
  }

  .token.url,
  .token.regex {
    color: var(--blue);
  }

  .token.variable {
    color: var(--yellow);
  }

  .token.keyword {
    color: var(--purple);
  }

  .token.function,
  .language-autohotkey .token.tag {
    color: var(--blue);
  }

  .token.tag,
  .token.selector,
  .token.deleted,
  .language-autohotkey .token.keyword {
    color: var(--red);
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
  font-size: 0.9em;
  font-family: var(--font-mono);

  /* Inline code */
  &[class*='language-'] {
    background-color: var(--surface);
    border-radius: 4px;
    padding: 2px 4px;
  }

  /* Block code */
  pre > &[class*='language-'] {
    ${highlighting};
    background-color: transparent;
    border-radius: 0;
    display: block;
    overflow-x: auto;
    color: var(--text);
    padding: 0px 20px;

    ${up('md')} {
      padding: 0px 30px;
    }

    ${up('lg')} {
      padding: 0px 50px;
    }
  }
`

Code.propTypes = {
  variant: PropTypes.oneOf(['inline', 'block']),
}

Code.defaultProps = {
  variant: 'inline',
}

export default Code
