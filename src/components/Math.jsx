import React from 'react'
import PropTypes from 'prop-types'
import { Node } from 'react-mathjax2'
import styled, { css } from 'styled-components'

import { marginPropTypes, setMargin } from '../styles/space'

const StyledMath = styled.div`
  ${({ inline }) =>
    !inline &&
    css`
      text-align: center;
      font-size: 1.1em;

      .MJXc-display {
        margin: 0;
      }

      ${setMargin};
    `}
`

const Math = ({ inline, children, onRender, ...restProps }) => (
  <StyledMath inline={inline} as={inline ? 'span' : 'div'} {...restProps}>
    <Node onRender={onRender} inline={inline}>
      {children}
    </Node>
  </StyledMath>
)

Math.propTypes = {
  inline: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onRender: PropTypes.func,
  ...marginPropTypes,
}

Math.defaultProps = {
  inline: false,
  onRender: undefined,
}

export default Math
