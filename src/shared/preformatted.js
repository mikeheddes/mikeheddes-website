import styled from 'styled-components'

const Preformatted = styled.pre`
  font-family: var(--font-mono);
  line-height: 1.35;
  hyphens: none;
  tab-size: 2;

  &[class*='language-python'] {
    tab-size: 4;
  }
`

export default Preformatted
