import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { transparentize as fade } from 'polished'

import { marginPropTypes, setMargin } from '../styles/space'
import { fluidValue } from '../styles/mixins'

const availableTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

const Heading = styled.h1.attrs(props => ({ tag: props.as }))`
  line-height: 1.13;
  color: ${({ theme }) => theme.heading};
  position: relative;

  ${({ tag }) =>
    tag === 'h1' &&
    css`
      ${fluidValue(1.75, 2.1, 'font-size', 'em')};
      line-height: 1.0625;
      font-weight: 700;
    `};

  ${({ tag }) =>
    tag === 'h2' &&
    css`
      ${fluidValue(1.323, 1.563, 'font-size', 'em')};
      font-weight: 600;
    `};

  ${({ tag }) =>
    tag === 'h3' &&
    css`
      ${fluidValue(1.15, 1.25, 'font-size', 'em')};
      font-weight: 700;
      font-variation-settings: 'wght' 650;
    `};

  ${({ tag }) =>
    tag === 'h4' &&
    css`
      ${fluidValue(1.05, 1.1875, 'font-size', 'em')};
      font-weight: 600;
      color: ${({ theme }) => fade(0.1, theme.heading)};
      font-variation-settings: 'wght' 625;
    `};

  ${({ tag }) =>
    tag === 'h5' &&
    css`
      ${fluidValue(1, 1.09375, 'font-size', 'em')};
      font-weight: 600;
      color: ${({ theme }) => fade(0.2, theme.heading)};
      font-variation-settings: 'wght' 650;
    `};

  ${({ tag }) =>
    tag === 'h6' &&
    css`
      font-size: 1em;
      font-weight: 700;
      color: ${({ theme }) => fade(0.3, theme.heading)};
    `};

  ${setMargin};
`

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(availableTags),
  ...marginPropTypes,
}

export default Heading
