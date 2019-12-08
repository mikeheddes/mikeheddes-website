import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'

const StyledMath = styled.div`
  && {
    overflow: auto;

    ${({ inline }) =>
      !inline &&
      css`
        font-size: 1.08em;

        & + & {
          margin-top: -15px;
        }
      `};

    ${up('sm')} {
      overflow: visible;
    }
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
}

Math.defaultProps = {
  inline: false,
}

export default Math
