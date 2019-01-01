import styled from 'styled-components'
import { radius } from '../styles'

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 1.6181em;
  height: 1em;
  font-size: 1em;
  position: relative;
  display: inline-block;
  border-radius: ${radius.sm};
  border: 2px solid ${({ theme }) => theme.link};
  background-color: ${({ theme }) => theme.background};
  transition: background-color 125ms ease-out;

  &:after {
    content: '✕';
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    font-size: 0.6em;
    font-weight: 700;
    color: ${({ theme }) => theme.link};
    text-align: center;
    transition: color 250ms ease-in-out;
  }

  &:checked {
    background-color: ${({ theme }) => theme.link};

    &:after {
      content: '✓';
      color: ${({ theme }) => theme.background};
    }
  }
`

export default Checkbox
