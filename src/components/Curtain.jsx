/* eslint-env browser */
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'

const CURTAIN_ROOT = document.getElementById('curtain-root')

const StyledCurtain = styled(animated.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
`

export default class Curtain extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    opacity: PropTypes.number,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    opacity: 0.3,
    onClick: undefined,
  }

  render() {
    const { isOpen, opacity, onClick } = this.props
    return ReactDOM.createPortal(
      <Transition
        items={isOpen}
        from={{ opacity: 0 }}
        enter={{ opacity }}
        leave={{ opacity: 0 }}
      >
        {show =>
          show && (style => <StyledCurtain style={style} onClick={onClick} />)
        }
      </Transition>,
      CURTAIN_ROOT
    )
  }
}
