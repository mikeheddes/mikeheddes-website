import styled from 'styled-components'

import { fluidFont } from '../styles'

const Button = styled.div.attrs({ role: 'button' })`
  display: inline-block;
  ${fluidFont(18, 18)};
  font-weight: 500;
  text-decoration: none;
  background-color: var(--surface);
  color: var(--heading-obvious);
  border-radius: 14px;
  padding: 12px 22px;
  cursor: pointer;
  transition: background-color 80ms ease-out;
  white-space: nowrap;
  text-align: center;

  :active {
    background-color: var(--surface-obvious);
  }

  @supports (backdrop-filter: blur(10px)) {
    background-color: var(--surface-backdrop);
    backdrop-filter: blur(20px) saturate(1.1);

    :active {
      background-color: var(--surface-obvious-backdrop);
    }
  }
`

export default Button
