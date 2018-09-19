import React from 'react'
import EventListener from 'react-event-listener'
import PropTypes from 'prop-types'
import { Keyframes } from 'react-spring'
import { debounce } from 'lodash'

import config from '../config'
import Wrapper from './Wrapper'
import Item from './Item'

// Creates a keyframed trail
const ListAnimation = Keyframes.Trail({
  open: { delay: 100, from: { y: -20, opacity: 0 }, to: { y: 0, opacity: 1 } },
  close: {
    delay: 500,
    form: { y: -20, opacity: 0 },
    to: { y: -20, opacity: 0 },
  },
})

class PageList extends React.Component {
  constructor(props) {
    super(props)
    this.setListRef = this.setListRef.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.handleResize = debounce(this.handleResize.bind(this), 17)
  }

  componentDidMount() {
    const { setHeight } = this.props
    setHeight(this.listElement.offsetHeight)
  }

  setListRef(node) {
    this.listElement = node
  }

  handleResize() {
    const { setHeight } = this.props
    setHeight(this.listElement.offsetHeight)
  }

  render() {
    const { isVisible, activePath, navigateToLink } = this.props
    return (
      <Wrapper ref={this.setListRef}>
        <EventListener target="window" onResize={this.handleResize} />
        <ListAnimation
          native
          onStart={this.handleResize}
          keys={config.links.map(item => item.title)}
          state={isVisible ? 'open' : 'close'}
        >
          {config.links.map(({ preload, ...link }) => ({ opacity, y }) => (
            <Item
              navigateToLink={navigateToLink}
              current={activePath === link.to}
              onMouseEnter={preload}
              style={{
                opacity,
                transform: y.interpolate(yInt => `translateY(${yInt}px)`),
              }}
              {...link}
            />
          ))}
        </ListAnimation>
      </Wrapper>
    )
  }
}

PageList.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setHeight: PropTypes.func.isRequired,
  activePath: PropTypes.string.isRequired,
  navigateToLink: PropTypes.func.isRequired,
}

export default PageList
