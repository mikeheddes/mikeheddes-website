import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { radius as rad, depth as DEPTH } from '../styles'
import { depthPropType } from '../styles/depth'
import { radiusPropType } from '../styles/radius'
import { marginPropTypes, setMargin } from '../styles/space'

const Video = styled.video`
  overflow: hidden;
  display: block;
  max-width: 100%;
  position: relative;

  ${({ depth }) => depth && `box-shadow: ${DEPTH[depth]};`};

  ${setMargin};

  ${({ radius }) =>
    radius &&
    css`
      border-top-left-radius: ${rad[radius]};
      border-top-right-radius: ${rad[radius]};
      border-bottom-left-radius: ${rad[radius]};
      border-bottom-right-radius: ${rad[radius]};
    `}

  ${({ border, theme }) =>
    border &&
    css`
      border: 1px solid ${theme.borderContent};
    `};
`

Video.propTypes = {
  className: PropTypes.string,
  radius: radiusPropType,
  border: PropTypes.bool,
  depth: depthPropType,
  ...marginPropTypes,
}

Video.defaultProps = {
  depth: 0,
  radius: 'sm',
  border: true,
}

export default Video
