import { css } from 'styled-components'
import { up } from 'styled-breakpoints'

const contentOrTextWidth = ({ wide }) =>
  wide ? '--width-content' : '--width-text'

export const contentWrapper = css`
  width: 100%;
  max-width: calc(var(${contentOrTextWidth}) + 2 * 20px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  ${up('sm')} {
    padding-left: 50px;
    padding-right: 50px;
    max-width: calc(var(${contentOrTextWidth}) + 2 * 50px);
  }

  ${up('md')} {
    padding-left: 130px;
    padding-right: 130px;
    max-width: calc(var(${contentOrTextWidth}) + 2 * 130px);
  }
`
