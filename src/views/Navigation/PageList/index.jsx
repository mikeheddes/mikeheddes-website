/* eslint react/prop-types: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Keyframes, animated } from 'react-spring'

import config from '../config'
import Wrapper from './Wrapper'
import NavLink from './NavLink'
import { space } from '../../../styles'
import { media } from '../../../styles/breakpoints'

const ListAnimation = Keyframes.Trail({
  open: { delay: 100, from: { y: -20, opacity: 0 }, to: { y: 0, opacity: 1 } },
  close: {
    delay: 500,
    form: { y: -20, opacity: 0 },
    to: { y: -20, opacity: 0 },
  },
})

const ListItem = styled(animated.li)`
  display: block;
  width: 100%;
  padding: 0 ${space.lg};
  margin-bottom: ${space.sm};
  text-align: left;

  ${media.sm`
    padding: 0;
    margin-bottom: 0;
    text-align: center;
    opacity: 1 !important;
    transform: none !important;
  `}
`

const PageList = React.forwardRef(({ isOpen, setHeight, onClick }, ref) => (
  <Wrapper ref={ref}>
    <ListAnimation
      native
      keys={item => item.title}
      onStart={setHeight}
      state={isOpen ? 'open' : 'close'}
      items={config.links}
    >
      {({ preload, to, title }) => ({ y, opacity }) => (
        <ListItem
          onMouseEnter={preload}
          onClick={onClick}
          style={{
            transform: y.interpolate(yi => `translateY(${yi}px)`),
            opacity,
          }}
        >
          <NavLink to={to}>{title}</NavLink>
        </ListItem>
      )}
    </ListAnimation>
  </Wrapper>
))

PageList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}

export default PageList
