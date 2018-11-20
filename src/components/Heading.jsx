import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { marginPropTypes, setMargin } from '../styles/space'

const availableTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

const Heading = styled.h1.attrs(props => ({ tag: props.as }))`
  font-weight: 700;
  line-height: 1.13;
  color: ${({ theme }) => theme.heading};

  ${({ tag }) =>
    tag === 'h1' &&
    css`
      font-size: 2.5em;
      line-height: 1.0625;
      font-weight: 700;
    `};

  ${({ tag }) =>
    tag === 'h2' &&
    css`
      font-size: 1.75em;
      font-weight: 700;
    `};

  ${({ tag }) =>
    tag === 'h3' &&
    css`
      font-size: 1.375em;
      font-weight: 700;
    `};

  ${({ tag }) =>
    tag === 'h4' &&
    css`
      font-size: 1.1875em;
      font-weight: 600;
      opacity: 0.9;
    `};

  ${({ tag }) =>
    tag === 'h5' &&
    css`
      font-size: 1.09375em;
      font-weight: 600;
      opacity: 0.8;
    `};

  ${({ tag }) =>
    tag === 'h6' &&
    css`
      font-size: 1em;
      font-weight: 600;
      opacity: 0.7;
    `};

  ${setMargin};
`

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(availableTags),
  ...marginPropTypes,
}

export default Heading
