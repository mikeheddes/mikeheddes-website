import React from 'react'
import PropTypes from 'prop-types'
import TeX from '@matejmazur/react-katex'
import styled, { css } from 'styled-components'

import { marginPropTypes, setMargin } from '../styles/space'

const StyledMath = styled.div`
  ${({ inline }) =>
    !inline &&
    css`
      text-align: center;
      font-size: 1.08em;

      .katex-display {
        margin: 0;
      }

      ${setMargin};
    `}
`

const Math = ({ inline, children, ...restProps }) => (
  <StyledMath inline={inline} as={inline ? 'span' : 'div'} {...restProps}>
    <TeX block={!inline}>{children}</TeX>
  </StyledMath>
)

Math.propTypes = {
  inline: PropTypes.bool,
  children: PropTypes.string.isRequired,
  ...marginPropTypes,
}

Math.defaultProps = {
  inline: false,
}

export default Math
