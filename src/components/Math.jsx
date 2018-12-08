import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import space, { marginPropTypes, setMargin } from '../styles/space'
import { media } from '../styles/breakpoints'

const StyledMath = styled.div`
  && {
    overflow: auto;

    ${({ inline }) =>
      !inline &&
      css`
        font-size: 1.08em;

        ${setMargin};

        & + & {
          margin-top: -${space.xr};
        }
      `};

    ${media.sm`
      overflow: visible;
    `};
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
