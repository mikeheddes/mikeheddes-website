import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import space, { marginPropTypes, setMargin } from '../styles/space'

const StyledMath = styled.div`
  && {
    ${({ inline }) =>
      !inline &&
      css`
        font-size: 1.08em;

        ${setMargin};

        & + & {
          margin-top: -${space.xr};
        }
      `}
  }
`

const Math = ({ inline, children, ...restProps }) => (
  <StyledMath inline={inline} as={inline ? 'span' : 'p'} {...restProps}>
    {children}
  </StyledMath>
)

Math.propTypes = {
  inline: PropTypes.bool,
  children: PropTypes.node.isRequired,
  ...marginPropTypes,
}

Math.defaultProps = {
  inline: false,
}

export default Math
